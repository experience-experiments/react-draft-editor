/* eslint react/no-danger: 0 */

import React from 'react'

import {
  EditorState
} from 'draft-js'

import {
  stateToHTML
} from 'draft-js-export-html'

import HtmlToReact from 'html-to-react'

const htmlToReactParser = new HtmlToReact.Parser(React)
const toReact = (html) => ( // NOTE: 'class' NOT 'className'
  htmlToReactParser.parse((`
    <div class='render-to-react'>
      ${html}
    </div>
  `.trim())) // trimming because the parser barfs over leading whitespace
)

export function ToReact ({ editorState }) {
  const contentState = editorState.getCurrentContent()
  const html = (contentState.hasText())
    ? stateToHTML(contentState)
    : contentState.getPlainText()
  return toReact(html)
}

ToReact.propTypes = {
  editorState: React.PropTypes.object.isRequired
}

ToReact.defaultProps = {
  editorState: EditorState.createEmpty()
}
