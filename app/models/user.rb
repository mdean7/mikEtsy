class User < ApplicationRecord

  
  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  attr_reader :password
  after_initialize :ensure_session_token
  


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64(64)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.base64(64)
  end

end
  # def new_session_token
  #   SecureRandom.urlsafe_base64
  # end

  # def generate_unique_session_token
  #   self.session_token = new_session_token
  #   while User.find_by(session_token: self.session_token)
  #     self.session_token = new_session_token
  #   end
  #   self.session_token
  # end

