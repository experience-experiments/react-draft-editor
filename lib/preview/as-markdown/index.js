import React from 'react'

import {
  EditorState
} from 'draft-js'

import {
  stateToMarkdown
} from 'draft-js-export-markdown'

export function AsMarkdown ({ editorState }) {
  const contentState = editorState.getCurrentContent()
  const asMarkdown = (contentState.hasText())
    ? stateToMarkdown(contentState)
    : contentState.getPlainText()
  return (
    <code className='preview-as-markdown'>
      <pre>{asMarkdown}</pre>
    </code>
  )
}

AsMarkdown.propTypes = {
  editorState: React.PropTypes.object.isRequired
}

AsMarkdown.defaultProps = {
  editorState: EditorState.createEmpty()
}
