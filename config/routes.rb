Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :products, only:[:create, :index, :show, :destroy, :update]
    resources :reviews, only:[:create, :index, :show, :destroy, :update]
  end

  root "static_pages#root"
end
