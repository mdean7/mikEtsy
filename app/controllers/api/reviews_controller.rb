class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @reviews = Review.all
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update    
    @review = Review.find_by(id: params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render :show
  end
  
  private
  
  def review_params
   
    params.require(:review).permit(
      :body,
      :rating,
      :title,
      :user_id,
      :product_id,
    )
  end
end
