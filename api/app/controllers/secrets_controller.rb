class SecretsController < ApplicationController
  before_action :secrets_params
  before_action :set_picture, only: :check

  def check
    checker = CoordinateChecker.new(@pic_id)
    @result = checker.get_result([@permitted[:x].to_i, @permitted[:y].to_i])
    render json: @result
  end

  protected

  def secrets_params
    @permitted = params.permit(:name, :x, :y)
  end

  def set_picture
    @pic_id = Picture.where(name: @permitted[:name]).pick(:id)
  end
end
