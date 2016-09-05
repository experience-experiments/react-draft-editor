import React from 'react'

import {
  EditorState,
  convertFromRaw,
  convertToRaw
} from 'draft-js'

import {
  Bold,
  Italic,
  Code,
  Underline
} from 'react-draft-editor/lib/toggle/inline-style'

import {
  DraftEditor
} from 'react-draft-editor'

export class InlineEditor extends React.Component {
  state = (() => {
    const { content } = this.props
    return {
      editorState: EditorState.createWithContent(convertFromRaw(content))
    }
  })()

  onChange = (editorState) => this.setState({ editorState })

  render () {
    const { editorState } = this.state
    return (
      <div className='container'>
        <div className='draft-editor-container'>
          <div className='draft-editor-toggle'>
            <div className='inline-style'>
              <Bold
                onChange={this.onChange}
                editorState={editorState}>
                  Bold
              </Bold>
              <Italic
                onChange={this.onChange}
                editorState={editorState}>
                  Italic
              </Italic>
              <Code
                onChange={this.onChange}
                editorState={editorState}>
                  Code
              </Code>
              <Underline
                onChange={this.onChange}
                editorState={editorState}>
                  Underline
              </Underline>
            </div>
          </div>
          <DraftEditor
            onChange={this.onChange}
            editorState={editorState}
          />
        </div>
      </div>
    )
  }
}

InlineEditor.propTypes = {
  content: React.PropTypes.object.isRequired
}

InlineEditor.defaultProps = (() => {
  const editorState = EditorState.createEmpty()
  return {
    content: convertToRaw(editorState.getCurrentContent())
  }
})()
