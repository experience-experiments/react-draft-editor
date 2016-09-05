import {
  ToggleBlockType
} from './block-type'

export class OrderedList extends ToggleBlockType {
  getBlockType = () => 'ordered-list-item'

  getButtonText = () => 'OL'
}
