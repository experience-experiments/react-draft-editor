import React from 'react'

import {
  SimpleEditor
} from '../../../components/simple-editor-to-inner-html'

import Navigation from '../../../components/navigation'

function handleSaveContent (content) { console.log(content) }

export default () => (
  <section>
    <header>
      <h1>Simple Editor (render to React with Inner HTML)</h1>
    </header>
    <SimpleEditor onSaveContent={handleSaveContent} />
    <Navigation />
  </section>
)
