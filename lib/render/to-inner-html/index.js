/* eslint react/no-danger: 0 */

import React from 'react'

import {
  EditorState
} from 'draft-js'

import {
  stateToHTML
} from 'draft-js-export-html'

export function ToInnerHtml ({ editorState }) {
  const contentState = editorState.getCurrentContent()
  const innerHtml = { __html: (contentState.hasText())
    ? stateToHTML(contentState)
    : contentState.getPlainText() } // chuckle
  return (
    <div className='render-to-react' dangerouslySetInnerHTML={innerHtml} />
  )
}

ToInnerHtml.propTypes = {
  editorState: React.PropTypes.object.isRequired
}

ToInnerHtml.defaultProps = {
  editorState: EditorState.createEmpty()
}
