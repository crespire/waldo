class LeaderboardsController < ApplicationController
  def show
    @picture = Picture.find_by(name: params[:name])
    @scores = @picture.leaderboard.scores.limit(10).pluck(:name, :seconds)
    if @scores
      render json: @scores, status: 200
    else
      render json: { error: 'Leaderboard not found' }, status: 404
    end
  end
end
