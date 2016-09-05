import {
  ToggleInlineStyle
} from './inline-style'

export class Bold extends ToggleInlineStyle {
  getInlineStyle = () => 'BOLD'

  getButtonText = () => 'B'
}
