import {
  ToggleBlockType
} from './block-type'

export class BlockQuote extends ToggleBlockType {
  getBlockType = () => 'blockquote'

  getButtonText = () => 'BQ'
}
