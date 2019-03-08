Rails.application.routes.draw do
  devise_for :users
  root    'groups#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:create, :new, :edit, :update] do
<<<<<<< HEAD
    resources :messages, only: [:index,:create]
=======
    resources :messages, only: [:index]
>>>>>>> master
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
