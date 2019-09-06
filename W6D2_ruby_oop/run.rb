# require "./cookie.rb"
# require "./oreo.rb"
# require "./cookie_jar.rb"
require_relative "cookie"
require_relative "oreo"
require_relative "cookie_jar"

cj = CookieJar.new(5)
c = Cookie.new(2, 4)

cj.add(c)
cj.details
cj.take
cj.details