require "minitest/autorun"
# require the file that we are going to test
require "./vector.rb"

class VectorTest < MiniTest::Test

  def test_length
    # Given - the initial state of the program
    # A vector of (3, 4)
    vector = Vector.new(3, 4)
   
    # When - An action is triggered
    # The 'length' method is called
    length = vector.length

    # Then - we verify the final state
    # The length should == 5
    assert_equal(5, length)
    # when using assert_equal, the arguments are as follows:
    # - the first argument is the value we expect or want
    # - the second argument is the actual value, our code returned

    # A line that begins with an 'assert*' method
    # is called an assertion. There can be multiple assertions
    # per test, but it is recommended to keep it to a minimum.
    assert_equal(13, Vector.new(5, 12).length)
  end

  def test_to_s
    # Given
    vector = Vector.new(0, 0)
    # When
    to_s = vector.to_s
    # Then
    assert_equal("Vector (0, 0)", to_s)
  end

end

# To run this file, execute with ruby:
# ruby vector_test.rb

# To display the name of all tests that run add the option:
# ruby vector_test.rb --verbose

# Unit Testing
# Testing a minimal amount of code. Often a method or a function 
# It means testing a minimum piece of code isolated from the rest of your application.

# Integration Testing
# It means testing a section of the application as a whole.
# This helps identify issues between the related parts of our app.
# In Rails, we'll test our controllers as integration tests.

# Functional Testing
# This involves testing the applicatoin as a whole against its requirements
# For a web application, this might mean simulating a browser with a headless Chrome browser or Selenium. 