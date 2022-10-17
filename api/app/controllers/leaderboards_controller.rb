class LeaderboardsController < ApplicationController
  def show
    @picture = Picture.find_by(name: params[:name])
    if @picture
      @picture.leaderboard.scores.limit(10)
    else
      render json: { error: 'Leaderboard not found' }.to_json, status: 404
    end
  end
end
