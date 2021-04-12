class Api::ProductsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def update    
    @product = Product.find_by(id: params[:id])
    if @product.update(product_params)
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    render :show
  end
  
  private
  
  def product_params
   
    params.require(:product).permit(
      :description,
      :price,
      :title,
      :user_id,
      :order_id,
      :photo
    )
  end

end
