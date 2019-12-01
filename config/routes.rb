Rails.application.routes.draw do
  devise_for :users, :controllers => {
    omniauth_callbacks: 'users/omniauth_callbacks'
  }
  resources :pages

  root to: 'home#index'


  resources :boards, only: %i[index create show update destroy] do
    resources :lists, only: %i[create index update destroy] do
      resources :cards, only: %i[create index update destroy]
    end
  end
end