class PicturesController < ApplicationController
  def index
    @pictures = Picture.all.pluck(:name, :difficulty).map { |name, difficulty| { name: name, difficulty: difficulty } }
    render json: @pictures
  end
end
