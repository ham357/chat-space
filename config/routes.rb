Rails.application.routes.draw do
  devise_for :users
  root    'messages#index'
  resources :users, only: [:edit, :update]
  resources :groups, only: [:create, :new, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
