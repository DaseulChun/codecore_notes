class Animal
  attr_accessor :name, :color

  def initialize(name, color)
    @name = name
    @color = color
  end

  def eat
    puts "I'm eating"
  end

  def walk
    puts "I'm walking"
  end
end

class Dog < Animal

  def bark
    "woof"
  end

  def eat
    puts super
    "Bones are yummy!"
  end
  
end

class Cat < Animal
  def eat
  "Fish is yummy!"
  end
end