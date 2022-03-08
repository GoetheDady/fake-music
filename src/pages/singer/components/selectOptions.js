import {
  SelectOptionsStyle, SelectOption, SelectOptionLabel, SelectOptionContent, SelectOptionItem,
} from './style';
import { TYPE_ENUM, AREA_ENUM, INITIAL_ENUM } from '../constants';

function SelectOptions({
  type, area, initial, onChange,
}) {
  return (
    <SelectOptionsStyle>
      <SelectOption>
        <SelectOptionLabel>语种：</SelectOptionLabel>
        <SelectOptionContent>
          {
          AREA_ENUM.map((item) => (
            <SelectOptionItem
              className={area === item.value && 'active'}
              key={item.value}
              onClick={() => { onChange('area', item.value); }}
            >
              {item.label}
            </SelectOptionItem>
          ))
        }
        </SelectOptionContent>
      </SelectOption>
      <SelectOption>
        <SelectOptionLabel>分类：</SelectOptionLabel>
        <SelectOptionContent>
          {
          TYPE_ENUM.map((item) => (
            <SelectOptionItem
              className={type === item.value && 'active'}
              key={item.value}
              onClick={() => { onChange('type', item.value); }}
            >
              {item.label}
            </SelectOptionItem>
          ))
        }
        </SelectOptionContent>
      </SelectOption>
      <SelectOption>
        <SelectOptionLabel>筛选：</SelectOptionLabel>
        <SelectOptionContent>
          {
          INITIAL_ENUM.map((item) => {
            let value = '';
            if (item !== '热门' && item !== '#') {
              value = item.toLowerCase();
            } else if (item === '热门') {
              value = -1;
            } else if (item === '#') {
              value = 0;
            } else {
              value = -1;
            }
            return (
              <SelectOptionItem
                className={initial === value && 'active'}
                key={value}
                onClick={() => { onChange('initial', value); }}
              >
                {item}
              </SelectOptionItem>
            );
          })
        }
        </SelectOptionContent>
      </SelectOption>
    </SelectOptionsStyle>
  );
}

export default SelectOptions;
