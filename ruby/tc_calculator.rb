require 'test/unit'
require 'caluclator.rb'


class TC_AlarmClock < Test::Unit::TestCase

  def setup
    @calculator = Calculator.new
  end

  def test_add
  	assert_equal(@calculator.add("1,2"), 3, 'not adding correctly')
  end

end