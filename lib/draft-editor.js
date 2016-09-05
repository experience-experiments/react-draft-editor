import React from 'react'

import {
  Editor,
  EditorState,
  RichUtils
} from 'draft-js'

export class DraftEditor extends React.Component {
  handleKeyCommand = (keyCommand) => {
    const {
      editorState,
      onChange
    } = this.props

    const keyCommandState = RichUtils.handleKeyCommand(editorState, keyCommand)

    if (keyCommandState) onChange(keyCommandState)
  }

  focus = () => this.refs.editor.focus()

  render () {
    return (
      <div className='draft-editor' onClick={this.focus}>
        <Editor
          handleKeyCommand={this.handleKeyCommand}
          spellCheck
          {...this.props}
          ref='editor'
        />
      </div>
    )
  }
}

DraftEditor.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  editorState: React.PropTypes.object.isRequired
}

DraftEditor.defaultProps = {
  onChange: () => false,
  editorState: EditorState.createEmpty()
}
