#!/usr/bin/env bash
# exit on error
cd api
set -o errexit

gem install bundler
bundle update -- bundler
bundle install
bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:migrate
bundle exec rake db:seed