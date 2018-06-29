# frozen_string_literal: true

require 'axe/rspec'
require 'capybara'
require 'capybara/rspec'
require 'selenium/webdriver'
require 'acceptance/support/login_helper'

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, browser: :chrome)
end

Capybara.javascript_driver = :chrome_headless

Capybara.configure do |config|
  include LoginHelper
  config.default_max_wait_time = 10
  config.default_driver = :selenium
  config.app_host = ENV.fetch('CANS_WEB_BASE_URL', 'http://localhost:3000')
end
