import React from 'react'

import {
  EditorState
} from 'draft-js'

import { stateToHTML } from 'draft-js-export-html'

export function AsHtml ({ editorState }) {
  const contentState = editorState.getCurrentContent()
  const asPlainText = contentState.getPlainText()
  const asHtml = (asPlainText.length)
    ? stateToHTML(contentState)
    : asPlainText
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
