import React from 'react'
import { Select } from '@cwds/components'
import ConductedByRole from './ConductedByRole'
import { ConductedByRoleOptions } from '../AssessmentHelper'
import { findSelectOptionByValue } from '../../../util/common'
import { shallow } from 'enzyme'

describe('<ConductedByRole/>', () => {
  const props = {
    value: 'UNKNOWN',
    onChange: jest.fn(),
    disabled: false,
  }

  it('renders Select', () => {
    const wrapper = shallow(<ConductedByRole {...props} />)
    const select = wrapper.find(Select)
    expect(select.props().id).toBe('conducted-by-role')
    expect(select.props().className).toBe('assessment-form-header-input-role')
    expect(select.props().isDisabled).toBe(props.disabled)
    expect(select.props().onChange).toBe(props.onChange)
    expect(
      wrapper
        .find('Label')
        .render()
        .text()
    ).toBe('Select Role *')
    expect(select.props().classNamePrefix).toBe('list')
    expect(select.props().isSearchable).toBeTruthy()
    expect(select.props().options).toBe(ConductedByRoleOptions)
    expect(select.props().value).toBe(findSelectOptionByValue(props.value, ConductedByRoleOptions))
  })
})
