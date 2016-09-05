import React from 'react'

import {
  EditorState,
  convertFromRaw,
  convertToRaw
} from 'draft-js'

import {
  Bold,
  Italic,
  Code,
  Underline,
  BlockQuote,
  CodeBlock,
  HeaderOne,
  HeaderTwo,
  HeaderThree,
  HeaderFour,
  HeaderFive,
  HeaderSix,
  OrderedList,
  UnorderedList,
  DraftEditor,
  AsMarkdown
} from 'react-draft-editor'

export class SimpleEditor extends React.Component {
  state = (() => {
    const { onSaveContent, content } = this.props
    return {
      onSaveContent: onSaveContent,
      editorState: EditorState.createWithContent(convertFromRaw(content))
    }
  })()

  onChange = (editorState) => this.setState({ editorState })

  handleSaveClick = () => {
    const { onSaveContent, editorState } = this.state
    onSaveContent(convertToRaw(editorState.getCurrentContent()))
  }

  render () {
    const { editorState } = this.state
    return (
      <div className='container'>
        <div className='draft-editor-container'>
          <div className='draft-editor-toggle'>
            <div className='inline-style'>
              <Bold
                onChange={this.onChange}
                editorState={editorState}
              />
              <Italic
                onChange={this.onChange}
                editorState={editorState}
              />
              <Code
                onChange={this.onChange}
                editorState={editorState}
              />
              <Underline
                onChange={this.onChange}
                editorState={editorState}
              />
            </div>
            <div className='block-type'>
              <BlockQuote
                onChange={this.onChange}
                editorState={editorState}
              />
              <CodeBlock
                onChange={this.onChange}
                editorState={editorState}
              />
              <HeaderOne
                onChange={this.onChange}
                editorState={editorState}
              />
              <HeaderTwo
                onChange={this.onChange}
                editorState={editorState}
              />
              <HeaderThree
                onChange={this.onChange}
                editorState={editorState}
              />
              <HeaderFour
                onChange={this.onChange}
                editorState={editorState}
              />
              <HeaderFive
                onChange={this.onChange}
                editorState={editorState}
              />
              <HeaderSix
                onChange={this.onChange}
                editorState={editorState}
              />
              <OrderedList
                onChange={this.onChange}
                editorState={editorState}
              />
              <UnorderedList
                onChange={this.onChange}
                editorState={editorState}
              />
            </div>
            <button
              className='button-save'
              onMouseDown={this.handleSaveClick}>
                Save
            </button>
          </div>
          <DraftEditor
            onChange={this.onChange}
            editorState={editorState}
          />
        </div>
        <div className='preview-container'>
          <AsMarkdown
            editorState={editorState}
          />
        </div>
      </div>
    )
  }
}

SimpleEditor.propTypes = {
  onSaveContent: React.PropTypes.func.isRequired,
  content: React.PropTypes.object.isRequired
}

SimpleEditor.defaultProps = (() => {
  const editorState = EditorState.createEmpty()
  return {
    onSaveContent: () => false,
    content: convertToRaw(editorState.getCurrentContent())
  }
})()
