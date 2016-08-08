Rails.application.routes.draw do
  resources :votes
  resources :proposals
  resources :users
  resources :sessions
  resources :rounds
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: redirect("http://cssconf.com.au")
end
