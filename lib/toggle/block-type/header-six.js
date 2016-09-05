import {
  ToggleBlockType
} from './block-type'

export class HeaderSix extends ToggleBlockType {
  getBlockType = () => 'header-six'

  getButtonText = () => 'H6'
}
