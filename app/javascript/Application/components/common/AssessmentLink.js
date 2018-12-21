import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { isoToLocalDate } from '../../util/dateHelper'
import { historyRecordUrlSwitcher } from '../../util/historyRecordUrlSwitcher'

class AssessmentLink extends PureComponent {
  render() {
    const { linkText } = this.props
    const { id, event_date: eventDate, person } = this.props.assessment
    const formattedDate = isoToLocalDate(eventDate)
    const clientId = person.identifier
    const assessmentId = id
    const linkUrl = historyRecordUrlSwitcher(this.props.navFrom, this.props.userId, clientId, assessmentId)

    return (
      <Link to={linkUrl} className={'underlined'}>
        {`${formattedDate}${linkText === '' ? '' : ` ${linkText}`}`}
      </Link>
    )
  }
}

AssessmentLink.propTypes = {
  assessment: PropTypes.object.isRequired,
  linkText: PropTypes.string.isRequired,
  navFrom: PropTypes.string.isRequired,
  userId: PropTypes.string,
}
AssessmentLink.defaultProps = {
  userId: null,
}
export default AssessmentLink
