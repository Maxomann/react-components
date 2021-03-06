import BaseField from './BaseField'
import React, {PropTypes} from 'react'

export default class InputField extends React.Component {
  static contextTypes = {
    ...BaseField.contextTypes
  }

  static propTypes = {
    ...BaseField.propTypes,
    type: PropTypes.string
  }

  static defaultProps = {
    ...BaseField.defaultProps,
    type: 'text'
  }

  get value () {
    return this.context.formValueScope.getValue(this.props.name)
  }

  set value (newValue) {
    this.context.formValueScope.setValue(this.props.name, newValue)
  }

  render () {
    const {name, type, ...other} = this.props
    return <input
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      {...other}
      name={`${this.context.formValueScope.name}.${name}`}
      type={type}
      value={this.value}
      onChange={this.onChange}
      ref={this.setRef}/>
  }

  setRef = (input) => { this.input = input }

  focus = () => this.input && this.input.focus()

  onChange = (event) => { this.value = event.target.value }
}
