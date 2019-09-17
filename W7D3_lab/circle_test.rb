require "minitest/autorun"
require "./circle.rb"

class CircleTest < MiniTest::Test
  def test_diameter
    # Given
    circle = Circle.new(3)
    # When
    diameter = circle.diameter
    # Then
    assert_equal(6, diameter)
  end

  def test_area
    # Given
    circle = Circle.new(3)
    # When
    area = circle.area
    # Then
    assert_equal(Math::PI * (3 ** 2), area)
  end

  def test_perimeter
    # Given
    circle = Circle.new(3)
    # When
    perimeter = circle.perimeter
    # Then
    assert_equal(2 * Math::PI * 3, perimeter)
  end
end