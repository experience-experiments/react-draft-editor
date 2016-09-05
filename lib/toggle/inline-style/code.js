import {
  ToggleInlineStyle
} from './inline-style'

export class Code extends ToggleInlineStyle {
  getInlineStyle = () => 'CODE'

  getButtonText = () => 'C'
}
