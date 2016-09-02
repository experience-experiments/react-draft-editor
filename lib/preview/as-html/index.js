import React from 'react'

import {
  EditorState
} from 'draft-js'

import { stateToHTML } from 'draft-js-export-html'

export class AsHtml extends React.Component {
  render () {
    const { editorState } = this.props
    const contentState = editorState.getCurrentContent()
    return (
      <code className='preview-as-html'>
        <pre>{stateToHTML(contentState)}</pre>
      </code>
    )
  }
}

AsHtml.propTypes = {
  editorState: React.PropTypes.object.isRequired
}

AsHtml.defaultProps = {
  editorState: EditorState.createEmpty()
}
