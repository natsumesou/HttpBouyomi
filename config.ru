require 'rubygems' unless defined?(Gem)
require 'bundler/setup'

class Bouyomi
  def call env
    params = Rack::Utils.parse_query(env['QUERY_STRING'])
    text = params['text']
    if text
      text = text.gsub("'", "")
      `say '#{text}'`
    end
    [200, {"Content-Type" => "text/html", "Access-Control-Allow-Origin" => "*"}, ["called"]] 
  end
end

map '/' do
    run Bouyomi.new
end
