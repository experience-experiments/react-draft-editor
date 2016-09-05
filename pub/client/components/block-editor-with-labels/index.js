import React from 'react'

import {
  EditorState,
  convertFromRaw,
  convertToRaw
} from 'draft-js'

import {
  BlockQuote,
  CodeBlock,
  HeaderOne,
  HeaderTwo,
  HeaderThree,
  HeaderFour,
  HeaderFive,
  HeaderSix,
  OrderedList,
  UnorderedList
} from 'react-draft-editor/lib/toggle/block-type'

import {
  DraftEditor
} from 'react-draft-editor'

export class BlockEditor extends React.Component {
  state = (() => {
    const { content } = this.props
    return {
      editorState: EditorState.createWithContent(convertFromRaw(content))
    }
  })()

  onChange = (editorState) => this.setState({ editorState })

  render () {
    const { editorState } = this.state
    return (
      <div className='container'>
        <div className='draft-editor-container'>
          <div className='draft-editor-toggle'>
            <div className='block-type'>
              <BlockQuote
                onChange={this.onChange}
                editorState={editorState}>
                  Blockquote
              </BlockQuote>
              <CodeBlock
                onChange={this.onChange}
                editorState={editorState}>
                  Code
              </CodeBlock>
              <HeaderOne
                onChange={this.onChange}
                editorState={editorState}>
                  Header One
              </HeaderOne>
              <HeaderTwo
                onChange={this.onChange}
                editorState={editorState}>
                  Header Two
              </HeaderTwo>
              <HeaderThree
                onChange={this.onChange}
                editorState={editorState}>
                  Header Three
              </HeaderThree>
              <HeaderFour
                onChange={this.onChange}
                editorState={editorState}>
                  Header Four
              </HeaderFour>
              <HeaderFive
                onChange={this.onChange}
                editorState={editorState}>
                  Header Five
              </HeaderFive>
              <HeaderSix
                onChange={this.onChange}
                editorState={editorState}>
                  Header Six
              </HeaderSix>
              <OrderedList
                onChange={this.onChange}
                editorState={editorState}>
                  Number List
              </OrderedList>
              <UnorderedList
                onChange={this.onChange}
                editorState={editorState}>
                  Bullet List
              </UnorderedList>
            </div>
          </div>
          <DraftEditor
            onChange={this.onChange}
            editorState={editorState}
          />
        </div>
      </div>
    )
  }
}

BlockEditor.propTypes = {
  content: React.PropTypes.object.isRequired
}

BlockEditor.defaultProps = (() => {
  const editorState = EditorState.createEmpty()
  return {
    content: convertToRaw(editorState.getCurrentContent())
  }
})()
