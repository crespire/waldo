class CoordinateChecker
  def initialize(picture_id)
    @pic_id = picture_id
    @coords = nil
  end

  def get_result(input)
    valid_coordinates
    @coords.each do |pair|
      p pair[:coords]
      return { found: true, coords: pair[:coords], name: pair[:name] } if inside?(*input, *pair[:coords])
    end

    return { found: false }
  end

  private

  def valid_coordinates
    @coords ||= Picture.find(@pic_id).secrets.pluck(:name, :coords).map { |name, coords| { name: name, coords: coords} }
  end

  def inside?(user_x, user_y, circle_x, circle_y, radius = 25)
    ((user_x - circle_x) * (user_x - circle_x) + (user_y - circle_y) * (user_y - circle_y) <= radius * radius)
  end
end