# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Picture.create(name: 'track', difficulty: 'easy')
Picture.first.secrets.build(name: 'waldo', coords: [844, 640]).save
Picture.first.secrets.build(name: 'wilma', coords: [750, 1380]).save
Picture.first.secrets.build(name: 'wizard', coords: [1840, 1640]).save
Picture.first.secrets.build(name: 'oddlaw', coords: [1800, 1230]).save
