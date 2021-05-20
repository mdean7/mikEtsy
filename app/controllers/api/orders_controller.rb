class Api::OrdersController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @orders = current_user.orders
    render :index
  end

  def create
    ## find associated product
    @order = current_user.orders.find_by(product_id: order_params[:product_id])

    ## If cart already has this product, update total
    if @order
      @order.update_attribute(:total, @order.total += order_params[:total].to_i)
    else
      @order = current_user.orders.new(order_params)
    end
    if @order.save
      render :show
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  def update
    @order = current_user.orders.find_by(product_id: order_params[:product_id])
    if @order
      @order.update(order_params)
      render :show
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  def destroy
    @order = current_user.orders.find_by(id: params[:id])
    if @order
      @order.destroy
      render :show
    else
      render json: @order.errors.full_message, status: 422
    end
  end

  private
    def order_params
      params.require(:order).permit(:product_id, :total, :user_id)
    end
end
