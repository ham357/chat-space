Rails.application.routes.draw do
  devise_for :users
  root    'groups#index'
  resources :users, only: [:edit, :update]
  resources :groups, only: [:create, :new, :edit, :update] do
<<<<<<< HEAD
    resources :messages, only: [:index,:create]
=======
    resources :messages, only: [:index,:  create]
>>>>>>> parent of 21aac9c... Revert "Merge pull request #9 from ham357/Create-Message-Model"
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
