class CookieJar

  def initialize(capacity = 10)
    @capacity = capacity
    @cookies = []
  end

  def add(cookie)
    unless cookie.is_a? Cookie #checking if the cookie is a instance of Cookie class?
      raise ArgumentError.new("Cookies only")
    end

    if @cookies.length <= @capacity
      @cookies << cookie
    else 
      puts "You have too many cookies!"
    end
  end

  def take
    if @cookies.length > 0
      @cookies.pop
    else
      puts "You're out of cookies :("
    end
  end

  def details
    puts "The jar has #{@cookies.length} cookies"
    puts @cookies.map { |cookie| "Cookie with #{cookie.sugar} sugar and #{cookie.flour} flour"}.join("\n")
  end
  
end