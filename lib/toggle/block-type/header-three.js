import {
  ToggleBlockType
} from './block-type'

export class HeaderThree extends ToggleBlockType {
  getBlockType = () => 'header-three'

  getButtonText = () => 'H3'
}
