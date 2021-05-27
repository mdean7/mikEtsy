# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord
  has_many :products,
  foreign_key: :user_id,
  class_name: :Product
  
  has_many :orders,
  foreign_key: :user_id,
  class_name: :Order
  
  has_many :items_in_cart,
   through: :orders, 
   source: :product

  has_many :reviews,
  foreign_key: :user_id,
  class_name: :Review



  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :email, :email_format => { :message => ' must contain an @ and .com or equivalent' }
  
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

