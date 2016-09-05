import React from 'react'
import {
  Link
} from 'react-router'

export default () => (
  <nav>
    <ul>
      <li>
        <Link to='simple-editor'>Simple Editor</Link>
      </li>
      <li>
        <Link to='simple-editor-as-html'>Simple Editor (preview as HTML)</Link>
      </li>
      <li>
        <Link to='simple-editor-as-markdown'>Simple Editor (preview as Markdown)</Link>
      </li>
      <li>
        <Link to='simple-editor-to-react'>Simple Editor (render to React)</Link>
      </li>
      <li>
        <Link to='simple-editor-to-inner-html'>Simple Editor (render to React with Inner HTML)</Link>
      </li>
      <li>
        <Link to='inline-editor'>Inline Editor</Link>
      </li>
      <li>
        <Link to='inline-editor-with-labels'>Inline Editor (with labels)</Link>
      </li>
      <li>
        <Link to='block-editor'>Block Editor</Link>
      </li>
      <li>
        <Link to='block-editor-with-labels'>Block Editor (with labels)</Link>
      </li>
    </ul>
  </nav>
)
