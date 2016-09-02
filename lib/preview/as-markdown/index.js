import React from 'react'

import {
  EditorState
} from 'draft-js'

import { stateToMarkdown } from 'draft-js-export-markdown'

export function AsMarkdown ({ editorState }) {
  const contentState = editorState.getCurrentContent()
  const asMarkdown = stateToMarkdown(contentState)
  return (
    <code className='preview-as-html'>
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
