import React from 'react'

import {
  EditorState
} from 'draft-js'

import { stateToHTML } from 'draft-js-export-html'

export function ToReact ({ editorState }) {
  const contentState = editorState.getCurrentContent()
  const innerHtml = { __html: stateToHTML(contentState) }
  return (
    <div className='render-to-react' dangerouslySetInnerHTML={innerHtml} />
  )
}

ToReact.propTypes = {
  editorState: React.PropTypes.object.isRequired
}

ToReact.defaultProps = {
  editorState: EditorState.createEmpty()
}
