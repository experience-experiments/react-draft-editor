import React from 'react'

import {
  RichUtils
} from 'draft-js'

export class ToggleBlockType extends React.Component {
  getBlockType () { return 'unstyled' }

  isSelected () {
    const { editorState } = this.props
    const selection = editorState.getSelection()
    return (editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType() === this.getBlockType())
  }

  handleMouseDown (e) { e.preventDefault() }

  handleMouseUp = () => this.toggleBlockType()

  toggleBlockType () {
    const {
      editorState,
      onChange
    } = this.props

    const toggleState = RichUtils.toggleBlockType(editorState, this.getBlockType())

    if (toggleState) onChange(toggleState)
  }

  getButtonText = () => 'Toggle Block Type'
  getClassNames = () => {
    const blockType = this.getBlockType()
    return (this.isSelected())
      ? `${blockType} is-selected`
      : blockType
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

ToggleBlockType.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  editorState: React.PropTypes.object.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
}

ToggleBlockType.defaultProps = {
  onChange: () => false
}
