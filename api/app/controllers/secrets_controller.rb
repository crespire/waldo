class SecretsController < ApplicationController
  before_action :set_picture, only: :check

  def check
    puts params[:name]
    puts @pic_id
    puts params[:x]
    puts params[:y]
    checker = CoordinateChecker.new(@pic_id)
    @result = checker.get_result([params[:x].to_i, params[:y].to_i])
    render json: @result
  end

  protected

  def set_picture
    @pic_id = Picture.where(name: params[:name]).pick(:id)
  end
end
