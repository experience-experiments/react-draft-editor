import {
  ToggleBlockType
} from './block-type'

export class HeaderOne extends ToggleBlockType {
  getBlockType = () => 'header-one'

  getButtonText = () => 'H1'
}
