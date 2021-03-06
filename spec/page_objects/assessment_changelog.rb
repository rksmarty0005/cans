# frozen_string_literal: true

class AssessmentChangeLog < SitePrism::Page
  elements :titles, 'div.change-log-title span'
  element :change_log_delete_status, 'div', text: 'Deleted'
  element :change_log_entered_in_error_comment, 'div', text: 'Entered in error'

  def is_client_name?(client_name)
    client = titles.find { |span| span.text == 'CANS Change Log: ' + client_name }
    client ? true : false
  end

  def is_assessment?(assessment_date)
    assessment_date_title = titles.find do |title|
      title.text == 'Assessment Date: ' + assessment_date
    end
    assessment_date_title ? true : false
  end
end
