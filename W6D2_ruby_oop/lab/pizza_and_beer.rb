class Food
  attr_accessor :sugar, :protein, :fat

  def initialize(sugar, protein, fat)
    @sugar = sugar
    @protein = protein
    @fat = fat
  end

end

class Pizza < Food
  attr_accessor :weight

  def test
    puts "sugar is #{sugar}, weight is #{weight}"
  end

end

class Beer < Food
  attr_accessor :volume

  def test
    puts "sugar is #{sugar}, volume is #{volume}"
  end

end




