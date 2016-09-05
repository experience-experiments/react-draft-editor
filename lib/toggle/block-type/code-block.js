import {
  ToggleBlockType
} from './block-type'

export class CodeBlock extends ToggleBlockType {
  getBlockType = () => 'code-block'

  getButtonText = () => 'CB'
}
