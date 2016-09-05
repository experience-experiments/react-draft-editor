import {
  ToggleBlockType
} from './block-type'

export class HeaderTwo extends ToggleBlockType {
  getBlockType = () => 'header-two'

  getButtonText = () => 'H2'
}
