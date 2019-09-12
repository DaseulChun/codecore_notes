class Rectangle

  def initialize(width, height)
    if width < 0 || height < 0
      raise ArgumentError.new("You can't have a negative rectangle")
    end

    @width = width
    @height = height
  end

  def area
    @width * @height
  end

  def perimeter
    (@width + @height) * 2
  end

end