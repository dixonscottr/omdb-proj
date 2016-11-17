class StaticController < ApplicationController
  def index
  end

  def search
    movie_title = params[:title]
    byebug
  end
end
