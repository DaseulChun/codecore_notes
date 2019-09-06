class Dog
  attr_accessor :colour, :type, :bones

  def initialize(colour, type)
    @colour = colour
    @type = type
    @bones = []
  end

  MAX_BONES = 3
  def give(bone_object)
    return p 'This is not a bone' unless bone_object.is_a?(Bones)

    if bones.length > MAX_BONES - 1
      puts "I have too many bones"
    else bones.push(bone_object)
    end
  end

  def eat_bone
    bone_instance = bones.pop
    puts "yummy! I ate #{bone_instance.size} bone"
  end
end

class Bones
  attr_accessor :size 

  def initialize(size)
    @size = size
  end
end


