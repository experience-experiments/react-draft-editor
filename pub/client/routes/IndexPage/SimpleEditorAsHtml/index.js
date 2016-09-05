import React from 'react'

import {
  SimpleEditor
} from '../../../components/simple-editor-as-html'

import Navigation from '../../../components/navigation'

function handleSaveContent (content) { console.log(content) }

export default () => (
  <section>
    <header>
      <h1>Simple Editor (preview as HTML)</h1>
    </header>
    <SimpleEditor onSaveContent={handleSaveContent} />
    <Navigation />
  </section>
)
