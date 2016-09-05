import {
  ToggleInlineStyle
} from './inline-style'

export class Underline extends ToggleInlineStyle {
  getInlineStyle = () => 'UNDERLINE'

  getButtonText = () => 'U'
}
