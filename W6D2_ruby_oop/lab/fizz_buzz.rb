class FizzBuzz
  attr_accessor :num1, :num2
  
  def initialize(num1, num2)
    @num1 = num1
    @num2 = num2
  end

  def run
    result = []
    for number in 1..100 do
      if number % num1 == 0 && number % num2 == 0
        result.push('fizzbuzz')
      elsif number % num1 == 0
        result.push('fizz')
      elsif number % num2 == 0
        result.push('buzz')
      else 
        result.push(number)
      end
    end
    result
  end
  
end