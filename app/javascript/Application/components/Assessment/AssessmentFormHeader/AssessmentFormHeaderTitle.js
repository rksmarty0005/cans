import React from 'react'
import PropTypes from 'prop-types'
import { CardHeader, CardTitle } from '@cwds/components'
import ClientNameTitle from './ClientNameTitle'
import CountyAndCase from './CountyAndCase'

class AssessmentFormHeaderTitle extends React.PureComponent {
  renderCountyAndCaseInfo() {
    const { countyName, isAssessmentReady, serviceSource, serviceSourceUIId } = this.props

    return (
      <CountyAndCase
        countyName={countyName}
        isAssessmentReady={isAssessmentReady}
        serviceSource={serviceSource}
        serviceSourceUIId={serviceSourceUIId}
      />
    )
  }

  renderClientName() {
    const { dob, isEstimatedDob, firstName, lastName, middleName, suffix } = this.props
    return (
      <ClientNameTitle
        firstName={firstName}
        lastName={lastName}
        middleName={middleName}
        suffix={suffix}
        dob={dob}
        isEstimatedDob={isEstimatedDob}
      />
    )
  }

  render() {
    return (
      <CardHeader>
        <CardTitle className={'assessment-header-title'}>
          {this.renderClientName()}
          {this.renderCountyAndCaseInfo()}
        </CardTitle>
      </CardHeader>
    )
  }
}
AssessmentFormHeaderTitle.propTypes = {
  countyName: PropTypes.string,
  dob: PropTypes.string,
  firstName: PropTypes.string,
  isAssessmentReady: PropTypes.bool.isRequired,
  isEstimatedDob: PropTypes.bool,
  lastName: PropTypes.string,
  middleName: PropTypes.string,
  serviceSource: PropTypes.string,
  serviceSourceUIId: PropTypes.string,
  suffix: PropTypes.string,
}

AssessmentFormHeaderTitle.defaultProps = {
  countyName: undefined,
  dob: undefined,
  firstName: undefined,
  isEstimatedDob: undefined,
  lastName: undefined,
  middleName: undefined,
  serviceSource: undefined,
  serviceSourceUIId: undefined,
  suffix: undefined,
}

export default AssessmentFormHeaderTitle
