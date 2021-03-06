# frozen_string_literal: true

module People
  class PeopleRepository
    def initialize(token = nil, http_service = Infrastructure::HttpService.new)
      @token = token
      @http_service = http_service
    end

    def show(id)
      @http_service.call("/people/#{id}", :get, @token)
    end

    def create(payload)
      @http_service.call('/people', :post, @token, payload)
    end

    def update(id, payload)
      @http_service.call("/people/#{id}", :put, @token, payload)
    end

    def search(payload)
      @http_service.call('/people/_search', :post, @token, payload)
    end
  end
end
