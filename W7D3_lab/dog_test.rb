# require "minitest/autorun"
# require "./dog.rb"

# class DogTest < MiniTest::Test
#   def test_give_bone
#     # Given
#     dog = Dog.new("black", "poodle")
#     # When
#     result = dog.give_bone("small")
#     # Then
#     assert_equal("I have so far 1", result)
#   end

#   def test_give_bone_maximum
#     # Given
#     dog = Dog.new()
#     # When
#     # Then
#   end

# end

require "minitest/autorun"
require_relative "dog"
​
class DogTest < MiniTest::Test
​
    def test_give_bone
        dog = Dog.new
​
        dog.give_bone("extra large")
        dog.give_bone("medium")
        current_bone_count = dog.give_bone("small")
​
        assert_equal(3, current_bone_count)
        assert_raises(SystemStackError) {
            dog.give_bone("void bone")
        }
​
    end
​
    def test_eat_bone
        dog = Dog.new
​
        dog.give_bone("tiny bone")
​
        eaten_bone = dog.eat_bone
​
        assert_equal("tiny bone", eaten_bone)
​
        assert_equal(0, dog.bones.count)
​
    end
​
    def test_bone_count
        dog = Dog.new
​
        dog.give_bone("bone")
        dog.give_bone("another bone, but smaller")
​
        assert_equal(2, dog.bone_count)
​
    end
​
end



