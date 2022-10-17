# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_17_185120) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "leaderboards", force: :cascade do |t|
    t.string "name"
    t.decimal "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "score_id"
    t.bigint "picture_id"
    t.index ["picture_id"], name: "index_leaderboards_on_picture_id"
    t.index ["score_id"], name: "index_leaderboards_on_score_id"
  end

  create_table "pictures", force: :cascade do |t|
    t.string "name"
    t.string "difficulty"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "leaderboard_id"
    t.index ["leaderboard_id"], name: "index_pictures_on_leaderboard_id"
  end

  create_table "scores", force: :cascade do |t|
    t.datetime "start_time"
    t.datetime "end_time"
    t.decimal "seconds"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "leaderboard_id"
    t.string "name", null: false
    t.index ["leaderboard_id"], name: "index_scores_on_leaderboard_id"
  end

  create_table "secrets", force: :cascade do |t|
    t.integer "coords", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.bigint "picture_id"
    t.index ["picture_id"], name: "index_secrets_on_picture_id"
  end

  add_foreign_key "secrets", "pictures"
end
