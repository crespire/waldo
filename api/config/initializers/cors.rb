# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    #origins 'http://localhost:3001', '127.0.0.1:3001'

    origins 'crespire-waldo.vercel.app'
    resource '*', headers: :any, methods: %i[get post]
  end
end

Rails.application.config.hosts << 'crespire-waldo.vercel.app'
Rails.application.config.hosts << 'waldo-backend.onrender.com'
