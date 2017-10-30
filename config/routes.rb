Rails.application.routes.draw do
  resources :votes
  resources :proposals
  resources :users
  resources :sessions
  resources :rounds
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get '/round1-rejections', to: 'rounds#round1_rejects'
  # get '/round2/:conf', to: 'rounds#round2_candidates'
  # get '/rejections/:conference', to: 'rounds#final_rejections'

  root to: redirect("https://2018.cssconf.com.au")
end
