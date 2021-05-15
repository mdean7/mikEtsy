class Api::OrdersController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @orders = Order.all
  end

  def show
    @order = Order.find(params[:id])
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      render :show
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  def update    
    @order = Order.find_by(id: params[:id])
    if @order.update(order_params)
      render :show
    else
      render json: @order.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @order = Order.find(params[:id])
    @order.destroy
    render :show
  end
  
  private
  
  def order_params
   
    params.require(:order).permit(
      :total,      
      :user_id,
      :product_id,
    )
  end
end
