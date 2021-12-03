import { Input } from 'antd';
import { useSearchContext } from '../../searchBox';

const { Search } = Input;

export default function SearchInput() {
  const { dispatch } = useSearchContext();

  const onChange = (e) => {
    dispatch({ type: 'setKeyword', payload: e.target.value });
  }

  const onSearch = (e) => {
    dispatch({ type: 'setKeyword', payload: e });
  };
  return (
    <Search
      placeholder={'请输入关键字'}
      allowClear
      onChange={onChange}
      onSearch={onSearch}
      style={{ width: 360, marginBottom: '1em' }}
    />
  );
};
