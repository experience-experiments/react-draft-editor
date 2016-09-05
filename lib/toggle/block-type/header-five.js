import {
  ToggleBlockType
} from './block-type'

export class HeaderFive extends ToggleBlockType {
  getBlockType = () => 'header-five'

  getButtonText = () => 'H5'
}
