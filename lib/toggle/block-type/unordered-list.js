import {
  ToggleBlockType
} from './block-type'

export class UnorderedList extends ToggleBlockType {
  getBlockType = () => 'unordered-list-item'

  getButtonText = () => 'UL'
}
