import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'reactstrap'
import { DataGrid } from '@cwds/components'
import ClientAssessmentHistoryTableLink from './ClientAssessmentHistoryTableLink'
import ClientAssessmentHistoryTableCaseNumber from './ClientAssessmentHistoryTableCaseNumber'
import ClientAssessmentHistoryTableCountyName from './ClientAssessmentHistoryTableCountyName'
import ClientAssessmentHistoryTableDate from './ClientAssessmentHistoryTableDate'
import ClientAssessmentHistoryTableUpdatedBy from './ClientAssessmentHistoryTableUpdatedBy'
import ClientAssessmentHistoryTableEllipsis from './ClientAssessmentHistoryTableEllipsis'

const columnWidths = [190, 250, 140, 170, 260, 35]
const columnConfig = [
  {
    Header: 'Assessment Date',
    id: 'assessmentTableDate',
    Cell: ClientAssessmentHistoryTableLink,
    width: columnWidths[0],
    className: 'text-center',
    headerClassName: 'text-center',
    accessor: 'event_date',
  },
  {
    Header: 'Case/Referral Number',
    Cell: ClientAssessmentHistoryTableCaseNumber,
    width: columnWidths[1],
    className: 'text-center',
    headerClassName: 'text-center',
    accessor: 'service_source_ui_id',
  },
  {
    Header: 'County',
    id: 'assessmentTableCounty',
    Cell: ClientAssessmentHistoryTableCountyName,
    width: columnWidths[2],
    className: 'text-center',
    headerClassName: 'text-center',
    accessor: assessment => `${assessment.county.name}`,
  },
  {
    Header: 'Last Updated',
    id: 'assessmentTableLastUpdated',
    Cell: ClientAssessmentHistoryTableDate,
    width: columnWidths[3],
    className: 'text-center',
    headerClassName: 'text-center',
    accessor: assessment => {
      const { updated_timestamp: updatedTimestamp, created_timestamp: createdTimestamp } = assessment
      const timestamp = updatedTimestamp || createdTimestamp
      return timestamp
    },
  },
  {
    Header: 'Updated By',
    id: 'assessmentTableUpdatedBy',
    Cell: ClientAssessmentHistoryTableUpdatedBy,
    width: columnWidths[4],
    className: 'text-center',
    headerClassName: 'text-center',
    accessor: assessment => {
      const { updated_by: updatedBy, created_by: createdBy } = assessment
      const user = updatedBy || createdBy
      return `${user.first_name} ${user.last_name}`
    },
  },
  {
    Header: '',
    Cell: ClientAssessmentHistoryTableEllipsis,
    width: columnWidths[5],
    className: 'text-center',
    headerClassName: 'text-center',
    sortable: false,
  },
]

const ClientAssessmentHistoryTable = props => {
  const { assessments, navFrom, inheritUrl, userId } = props
  const assessmentsLength = assessments.length
  const minRows = 0
  const defaultPageSize = 10
  const displayDataGridAfterNumAssessments = 3
  const numAssessmentsToRenderInDataGrid = assessmentsLength - displayDataGridAfterNumAssessments
  const showPagination = numAssessmentsToRenderInDataGrid > defaultPageSize
  const showDataGrid = assessmentsLength > displayDataGridAfterNumAssessments
  const assessmentsSubset = assessments.slice(displayDataGridAfterNumAssessments)
  const assessmentsSubsetWithNavFrom = assessmentsSubset.map(assessment => {
    return { navFrom, inheritUrl, userId, ...assessment }
  })

  return showDataGrid ? (
    <Row>
      <DataGrid
        data={assessmentsSubsetWithNavFrom}
        showPagination={showPagination}
        minRows={minRows}
        defaultPageSize={defaultPageSize}
        columns={columnConfig}
        className={'data-grid-client-assessment-history'}
        defaultSorted={[{ id: 'assessmentTableDate', desc: true }]}
      />
    </Row>
  ) : null
}

ClientAssessmentHistoryTable.propTypes = {
  assessments: PropTypes.array.isRequired,
  inheritUrl: PropTypes.string.isRequired,
  navFrom: PropTypes.string.isRequired,
  userId: PropTypes.string,
}

ClientAssessmentHistoryTable.defaultProps = {
  userId: null,
}

export default ClientAssessmentHistoryTable
