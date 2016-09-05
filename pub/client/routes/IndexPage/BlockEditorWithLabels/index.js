import React from 'react'

import {
  BlockEditor
} from '../../../components/block-editor-with-labels'

import Navigation from '../../../components/navigation'

export default () => (
  <section>
    <header>
      <h1>Block Editor (with toggle labels)</h1>
    </header>
    <BlockEditor />
    <Navigation />
  </section>
)
