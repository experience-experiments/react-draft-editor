import {
  ToggleBlockType
} from './block-type'

export class HeaderFour extends ToggleBlockType {
  getBlockType = () => 'header-four'

  getButtonText = () => 'H4'
}
