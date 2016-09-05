import React from 'react'
import {
  Route,
  IndexRoute
} from 'react-router'

import IndexPage from './IndexPage'

import SimpleEditor from './IndexPage/SimpleEditor'
import SimpleEditorAsHtml from './IndexPage/SimpleEditorAsHtml'
import SimpleEditorAsMarkdown from './IndexPage/SimpleEditorAsMarkdown'
import SimpleEditorToReact from './IndexPage/SimpleEditorToReact'
import SimpleEditorToInnerHtml from './IndexPage/SimpleEditorToInnerHtml'
import InlineEditor from './IndexPage/InlineEditor'
import InlineEditorWithLabels from './IndexPage/InlineEditorWithLabels'

import BlockEditor from './IndexPage/BlockEditor'
import BlockEditorWithLabels from './IndexPage/BlockEditorWithLabels'

export default (
  <Route path='/'>
    <IndexRoute component={IndexPage} />
    <Route path='simple-editor' component={SimpleEditor} />
    <Route path='simple-editor-as-html' component={SimpleEditorAsHtml} />
    <Route path='simple-editor-as-markdown' component={SimpleEditorAsMarkdown} />
    <Route path='simple-editor-to-react' component={SimpleEditorToReact} />
    <Route path='simple-editor-to-inner-html' component={SimpleEditorToInnerHtml} />
    <Route path='inline-editor' component={InlineEditor} />
    <Route path='inline-editor-with-labels' component={InlineEditorWithLabels} />
    <Route path='block-editor' component={BlockEditor} />
    <Route path='block-editor-with-labels' component={BlockEditorWithLabels} />
  </Route>
)
