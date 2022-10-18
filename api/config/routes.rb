Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "pictures#index"

  get '/leaderboards/:name', to: 'leaderboards#show'
  post '/scores/create', to: 'scores#create'
  get '/secrets/check', to: 'secrets#check'
end
