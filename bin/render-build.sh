#!/usr/bin/env bash
# exit on error
cd api && set -o errexit

cd api && bundle update -- bundler
cd api && bundle install
cd api && bundle exec rake assets:precompile
cd api && bundle exec rake assets:clean
cd api && bundle exec rake db:migrate
cd api && bundle exec rake db:seed