import {
  ToggleInlineStyle
} from './inline-style'

export class Italic extends ToggleInlineStyle {
  getInlineStyle = () => 'ITALIC'

  getButtonText = () => 'I'
}
