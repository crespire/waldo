class ScoresController < ApplicationController
  before_action :set_picture, only: %i[create]

  def create
    # JSON: '{ image: image, name: values['name'], startTime: startTime, endTime: endTime, seconds: secondsToComplete }'
    @score = @picture.leaderboard.scores.build(
      name: params[:name],
      start_time: DateTime.strptime(params[:start].to_s, '%Q'),
      end_time: DateTime.strptime(params[:end].to_s, '%Q'),
      seconds: params[:seconds]
    )

    if @score.save
      render json: { saved: @score }, status: 200
    else
      render json: { error: 'Unprocessable entity.' }, status: 422
    end
  end

  protected

  def set_picture
    @picture = Picture.find_by(name: params[:image])
  end
end
