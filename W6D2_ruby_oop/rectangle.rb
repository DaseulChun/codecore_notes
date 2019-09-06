class Rectangle
  # attribute accessors (getters and setters)
  attr_accessor :width, :height

  def initialize(width, height)
    @width = width
    @height = height
  end

  def area
    width * height
    # you don't need to, @width * @height
    # coz in attribute accessors, we have method getters
    # def sugar
    # @sugar
    # end
    # so we can get the value of instance, by just mentioning 'width'
  end

  def is_square?
    # if width > 0 && height > 0
    #   width == height
    # else 
    #   false
    # end

    # instead of above ugly looking code,
    # because the Ruby returs the last line's result
    # the line below will give true/false value
    width == height
  end

end