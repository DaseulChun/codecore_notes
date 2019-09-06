# require "./cookie.rb"
require_relative "cookie"

# Require in Ruby does what include does in most other languages: run another file.
# It also tracks what you've required in the past 
# and won't require the same file twice. 

# To inherit from a class, use '<' when declaring the class
# as shown below.

# By default, all classes will inherit from the object class
# unless another superclass is provided. 
class Oreo < Cookie
  def initialize(sugar, flour, filling_type = "Pure White Sugar")
    # @sugar = sugar
    # @flour = flour
    # instead of writing above 2 lines, can substitute with below line! 
    super(sugar, flour)

    @filling_type = filling_type
  end

  # This eat method will replace the one from the superclass
  # for instances of Oreo. This is often called method overloading
  # or overriding.
  def eat
    puts "split into two parts and lick the center"
    # This will call the eat method from the superclass
    super
  end

end
