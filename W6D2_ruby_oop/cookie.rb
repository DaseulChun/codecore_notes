# Creating a Class
# Use the keyword `class` to create a class.
# We name classes following PascalCase style.

class Cookie
# Define an instance method for a class by
# Writing the method within the class body


  # This is called a getter method
  # It reads the value of an instance variable.
  # def sugar
  #   @sugar
  # end
  # The folowing method will create the method above to read
  # the @sugar instance variable (and the @flour variable)
  attr_reader(:sugar, :flour)

  # This is a setter method
  # it sets the value of an instance variable
  # i.e. c.sugar = 10
  # def sugar=(qty)
  #   @sugar = qty
  # end
  # The folowing method will create the method above
  attr_writer(:sugar, :flour)

  # To create the getter and setter at once for an instance variable use:
  attr_accessor :sugar, :flour

  def initialize(sugar, flour)
    # Create an instance variable by prefixing the name
    # of the variable with the '@'

    # An instance variabe is scoped to the body class
    # and an instance. It is useable by all instance methods
    # (incluyding private methods) of the class/

    # Every instance of the class, gets its own set of instance variables. 
    @sugar = sugar
    @flour = flour
    # vs. Javascript

    # this.sugar = sugar
    # this.flour = flour 

    # Declare a class variable by prefixing a word with `@@`.
    # A class variable is accessible by all class methods
    # It is ahred across all instances, meaning that changing in one instance
    # will change for all other instances also. Class variables are also
    # shared across the inheritence chain. 

    @@colour = "Brown"
  end

  def eat # also an instance method
    # Calling bake here is allowed because we are inside
    # the body of the  Cookie class.
    self.bake
    "Nom. Nom. Nom"
  end

  # to create a class method, prefix the method name with
  # `self`. A class method can only be called on
  # the class itself, not instances of the class
  def self.info
    puts "I'm in the Cookie class!"
  end

  # Any method declared after the keyword
  # 'private' becomes a private method. Private methods can
  # only be used within the body of the class. They can't be called
  # as instance methods of the class' instance.
  private

  def bake
    puts "baking the cookie"
  end

end

# To instantiate a new instance of a class, we can call .new()
# c = Cookie.new
# c2 = Cookie.new 
#c and c2 is different Cookie! but having same method of Cookie class

# c.bake # baking the cookie
# c.eat # Nom. Nom. Nom.

# Global Vairables
# Prefix a word with $ to create a global variable.
# 98% of the time, don't use a global variable.

# Variables should always use the minimum scope that is needed.
# $domain = "http://raise.hell"