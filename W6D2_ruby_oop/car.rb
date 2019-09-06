# Exercise: Car blueprints

class Car
  attr_accessor :model, :type, :capacity
  # Mthods can have default values for its argyments
  # by using assignment syntax in the argument
  # declaration position.
  
  # This makes the argument optional. If not provided,
  # the default value will be used.
  def initialize(model, type = "sedan", capacity = 4)
    unless model.is_a? String
      raise ArgumentError.new("model must be a string")
      # vs Javascript
      # throw new Error("Model must be a string")
    end
    @model = model
    @type = type
    @capacity = capacity
  end

  def drive
    ignite_engine
    puts "Driving the car"
  end

  def stop
    puts "Screeeeechhh"
  end

  def park
    puts "the car is sitting on top of a snowbank"
  end

  def self.max_speed
    200
  end

  private

  def ignite_engine
    puts "🚗 🔥🔥🔥"
  end

  def pump_gas
    puts "Glug glug glug"
  end
  
end

# c = Car.new(10, 'hatchback', 5)
# => ArgumentError: model must be a string from car.rb:12:in `initialize'
# c = Car.new('subaru', 'hatchback', 5)
# => #<Car:0x00007fb467a49c28 @capacity=5, @model="subaru", @type="hatchback">