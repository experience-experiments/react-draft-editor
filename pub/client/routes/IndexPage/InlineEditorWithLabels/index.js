import React from 'react'

import {
  InlineEditor
} from '../../../components/inline-editor-with-labels'

import Navigation from '../../../components/navigation'

export default () => (
  <section>
    <header>
      <h1>Inline Editor (with toggle labels)</h1>
    </header>
    <InlineEditor />
    <Navigation />
  </section>
)
