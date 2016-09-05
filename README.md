#React Draft Editor

An implementation of [Draft.js](https://facebook.github.io/draft-js/) which is simple to adapt and extend.

```
npm install react-draft-editor --save
```

##What's in the box?

A component for editing text, several components for styling that text, and components for previewing the text being edited as well as rendering it as a React component in your application.

###Prerequisites

Create a parent component.

Import the `EditorState` class from `draft-js`.

Import the `<DraftEditor />` component from `react-draft-editor`.

Create an `editorState` instance.

Create a handler method for `onChange` events.

```
import React from 'react'

import {
  EditorState
} from 'draft-js'

import {
  DraftEditor
} from 'react-draft-editor'

export class ParentEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
  }

  handleChange(editorState) {
    this.setState({ editorState })
  }

  render() {
    return (
      <DraftEditor
        onChange={this.handleChange.bind(this)}
        editorState={this.state.editorState}
      />
    )
  }
}
```

With that, we can begin *editing text*, and we can *change the style of that text* with keyboard controls. But we can also create visual elements for styling the text by importing some more components.

###Styling Text

For styling text as bold, import the `<Bold />` component from `react-draft-editor`.

```
import {
  Bold
} from 'react-draft-editor'
```

Then modify the render function of `<ParentEditor />`:

```
  render() {
    const handleChange = this.handleChange.bind(this)
    const { editorState } = this.state
    return (
      <div className='container'>
        <Bold
          onChange={handleChange}
          editorState={editorState}>
            Bold
        </Bold>
        <DraftEditor
          onChange={handleChange}
          editorState={editorState}
        />
      </div>
    )
  }
```
The `<Bold />` component will render as a `button` in `HTML`. If you don't want a `button` you can always extend the component and override the render function. Let's change `button` to `span`:

```
class MyBold extends Bold {
  render() {
  	return (
      <span
        className={this.getClassNames()}
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseUp={this.handleMouseUp.bind(this)}>
          Bold
      </span>
  	)
  }
}

```
Then use `<MyBold />` in place of `<Bold />`.


For styling text as italic, import the `<Italic />` component. For styling text as underline, import the `<Underline />` component.

For everything, import everything:

```
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
  DraftEditor
} from 'react-draft-editor'
```

Or, pick and choose. Like a buffet.

###Saving Text

The parent component we have created doesn't do anything with the text you can edit and style. It doesn't import text from anywhere and it doesn't export it, either. That's intentional. The `react-draft-editor` package doesn't mind where the the text comes from or where it goes to: it only minds about `onChange` and `editorState`.

That said, you probably mind a great deal.

[Draft.js](https://facebook.github.io/draft-js/) converts back and forth from `JSON` using two methods:

* `convertFromRaw`
* `convertToRaw`

You can import these along with the `EditorState` class:

```
import {
  EditorState,
  convertFromRaw,
  convertToRaw
} from 'draft-js'
```

Modify the parent component to consume two `props`:

* `onSaveContent`
* `content`

Here, `onSaveContent` is handler method, and `content` is `JSON`.

```
export class ParentEditor extends React.Component {
  constructor (props) {
    super(props)
    const { onSaveContent, content } = this.props
    this.state = {
      onSaveContent,
      editorState: EditorState.createWithContent(convertFromRaw(content))
    }
  }

  handleSaveClick() {
  	const { onSaveContent, editorState } = this.state
  	onSaveContent(convertToRaw(editorState.getCurrentContent()))
  }

  render() {
  	return (
  	  <button onClick={this.handleSaveClick.bind(this)}>
  	    Save
  	  </button>
  	)
  }
}
```
What happens with the `JSON`? What does `onSaveContent` do with it?

That's up to you.

###Examples

There are some example implementations included in the package. On the file system, `cd` to the `react-draft-editor` package and the directory named `pub`. In there, you'll find `client`, `server` and `public`. Look in `client` for the React app, `server` for the Express app, and `public` for the `HTML` and `CSS`.

To launch the application in your browswer, install all of the `dependencies` and the `devDependencies` described in `package.json`, then at the command line type `npm start`. Once the start process has completed, printed in your terminal you should see:

```
[React Draft Editor] 8080
```

Browse `http://localhost:8080`.

###One Last Thing

The `react-draft-editor` package contains React components, but it does not have any opinion on the styling that you apply to those components, or to the [Draft.js](https://facebook.github.io/draft-js/) components it implements, but it does define some class names which change according to user behaviour.

The `<Bold />` component will render as a `<button />` in `HTML`, with the class attribute populated as `bold`:

```
<button class="bold">B</bold>
```

When text in the editor is selected and the button is clicked, that class attribute becomes:

```
<button class="bold is-selected">B</bold>
```

And that's it. Hover states, focus states, and exactly what styling is applied by the `bold` and `is-selected` declarations? Again, that's up to you.

###One Very Last Thing

You may want to include two declarations in your CSS:

```
  .public-DraftStyleDefault-block { margin: 1rem 0; }
  li .public-DraftStyleDefault-block { margin: 0; }
```
Users will be tempted to hit their carriage return key with abandon if they don't see some separation between blocks of text in the editor. You won't want that.


And ... you may recall, I mentioned "components for previewing the text" and "rendering it as a React component". Implementations are included in the examples.