import React from 'react'

import {
  EditorState,
  RichUtils
} from 'draft-js'

export class ToggleInlineStyle extends React.Component {
  getInlineStyle () { return 'unstyled' }

  isSelected () {
    const { editorState } = this.props
    return editorState
      .getCurrentInlineStyle()
      .has(this.getInlineStyle())
  }

  handleMouseDown (e) { e.preventDefault() }

  handleMouseUp = () => this.toggleInlineStyle()

  toggleInlineStyle () {
    const {
      editorState,
      onChange
    } = this.props

    const toggleState = RichUtils.toggleInlineStyle(editorState, this.getInlineStyle())

    if (toggleState) onChange(toggleState)
  }

  getButtonText = () => 'Toggle Inline Style'
  getClassNames = () => {
    const inlineStyle = this.getInlineStyle().toLowerCase()
    return (this.isSelected())
      ? `${inlineStyle} is-selected`
      : inlineStyle
  }

  render () {
    const { children } = this.props

    return (
      <button
        className={this.getClassNames()}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}>
          {children || this.getButtonText()}
      </button>
    )
  }
}

ToggleInlineStyle.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  editorState: React.PropTypes.object.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
}

ToggleInlineStyle.defaultProps = {
  onChange: () => false,
  editorState: EditorState.createEmpty()
}
