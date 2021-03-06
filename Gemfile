source 'https://rubygems.org'
ruby "2.3.0"

gem 'rails', github: 'rails/rails'
gem 'pg'

# Use Puma as the app server - a threaded server is necessary for ActionCable
gem 'puma'

## ASSETS
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5.x'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

## React integration
gem "react_on_rails", "~> 4"

## CSS
gem 'bourbon'
gem 'neat'
gem "autoprefixer-rails" # TODO: does this need configuring?

# Thread-safe concurrency primitives
gem 'concurrent-ruby', require: 'concurrent'

group :development, :test do
  # Favour pry over byebug
  gem 'pry-rails'

  # Use rspec, fixtures and factories for testing
  gem 'factory_girl'
  gem 'rspec-rails'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 3.0'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  # Bitters doesn't include anything, we just get an installation helper with it
  gem 'bitters', require: false

  # require: false is necessary for the linters as we only want them loaded
  # when used by the linting rake tasks.
  gem("rubocop", require: false)
  gem("ruby-lint", require: false)
  gem("scss_lint", require: false)
end

group :test do
  gem 'shoulda-matchers', '~> 3.1'
end

group :development do
  gem 'rails_12factor'
end
