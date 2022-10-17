# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Seeing database with track, beach & fruitland data'
track = Picture.create(name: 'track', difficulty: 'easy')
track.secrets.build(name: 'waldo', coords: [844, 640]).save
track.secrets.build(name: 'wilma', coords: [750, 1380]).save
track.secrets.build(name: 'wizard', coords: [1840, 1640]).save
track.secrets.build(name: 'oddlaw', coords: [1800, 1230]).save

beach = Picture.create(name: 'beach', difficulty: 'medium')
beach.secrets.build(name: 'oddlaw', coords: [323, 695]).save
beach.secrets.build(name: 'wizard', coords: [810, 690]).save
beach.secrets.build(name: 'waldo', coords: [1855, 735]).save
beach.secrets.build(name: 'wilma', coords: [2320, 800]).save

fruitland = Picture.create(name: 'fruitland', difficulty: 'hard')
fruitland.secrets.build(name: 'wizard', coords: [755, 950]).save
fruitland.secrets.build(name: 'waldo', coords: [2675, 1285]).save
fruitland.secrets.build(name: 'oddlaw', coords: [1982, 1090]).save
fruitland.secrets.build(name: 'wilma', coords: [400, 1645]).save

puts 'Done!'
