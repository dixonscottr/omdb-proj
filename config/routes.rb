Rails.application.routes.draw do
  root 'static#index'
  get '/search/:title' => "static#search"
end
