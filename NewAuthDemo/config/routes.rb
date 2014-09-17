NewAuthDemo::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]
  
  get "/home/", to: "static_pages#home"
  get "/about/", to: "static_pages#about"
  get "/contact/", to: "static_pages#contact"
  
  root :to => "static_pages#home"
                      
end
