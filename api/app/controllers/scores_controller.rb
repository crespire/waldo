class ScoresController < ApplicationController
  before_action :score_params
  before_action :set_picture, only: %i[create]

  def create
    # JSON: '{ image: image, name: values['name'], start: startTime, end: endTime, seconds: secondsToComplete }'
    @score = @picture.leaderboard.scores.build(
      name: @permitted[:name],
      start_time: DateTime.strptime(@permitted[:start].to_s, '%Q'),
      end_time: DateTime.strptime(@permitted[:end].to_s, '%Q'),
      seconds: @permitted[:seconds]
    )

    if @score.save
      render json: { saved: @score }, status: 200
    else
      render json: { error: 'Unprocessable entity.' }, status: 422
    end
  end

  protected

  def score_params
    @permitted = params.permit(:image, :name, :start, :end, :seconds)
  end

  def set_picture
    @picture = Picture.find_by(name: @permitted[:image])
  end
end
