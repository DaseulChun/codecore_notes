# class Dog
#   attr_accessor :colour, :type, :bones, :MAX_BONES

#   def initialize(colour, type)
#     @colour = colour
#     @type = type
#     @bones = []
#     @MAX_BONES = 3
#   end

#   def give_bone(bone_size)
#     # returns the number of bones it currently owns.
#     if bones.length > @MAX_BONES - 1
#       puts "I have too many bones"
#     else
#       bones.push(bone_size)
#     end

#     "I have so far #{bones.length}"
#   end

# end
class Dog
  ​
      attr_reader :bones
  ​
      def initialize
          @bones = []
      end
  ​
      def give_bone(bone)
          return @bones.push(bone).count unless bone_count >= 3
          raise SystemStackError.new "I can't hold more than 3 bones!"
      end
  ​
      def eat_bone
          @bones.pop
      end
  ​
      def bone_count
          @bones.count
      end
  ​
  end
  
  
  
  
  