require "minitest/autorun"
require "./rectangle.rb"

class RectangleTest < MiniTest::Test
  def test_area
    # Given
    rectangle = Rectangle.new(2, 3)
    # When
    area = rectangle.area
    # Then
    assert_equal(6, area)
  end

  def test_perimeter
    # Given
    rectangle = Rectangle.new(2, 3)
    # When
    perimeter = rectangle.perimeter
    # Then
    assert_equal(10, perimeter)

    # Same as:
    # asser_equal(10, Rectangle.new(2, 3), perimeter)
  end

  def test_initialize_raises_error_with_neg_args
    # when the block is run, we expect 'ArgumentError'
    assert_raises ArgumentError do
      Rectangle.new(-1,2)
    end

    # when the block is run, we expect Any kind of errors
    assert_raises do
      Rectangle.new(1,-2)
    end
  end
  
end