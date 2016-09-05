import React from 'react'

import {
  EditorState
} from 'draft-js'

import {
  stateToHTML
} from 'draft-js-export-html'

export function AsHtml ({ editorState }) {
  const contentState = editorState.getCurrentContent()
  const asHtml = (contentState.hasText())
    ? stateToHTML(contentState)
    : contentState.getPlainText()
  return (
    <code className='preview-as-html'>
      <pre>{asHtml}</pre>
    </code>
  )
}

AsHtml.propTypes = {
  editorState: React.PropTypes.object.isRequired
}

AsHtml.defaultProps = {
  editorState: EditorState.createEmpty()
}
