Rails.application.routes.draw do
  resources :votes
  resources :proposals
  resources :users
  resources :sessions
  resources :rounds
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/round1-rejections', to: 'rounds#round1_rejects'

  root to: redirect("http://cssconf.com.au")
end
