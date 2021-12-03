import { Button } from "antd"
import { useSearchContext } from '../../searchBox';

export default function SearchLine({ data }) {
  const { state, dispatch } = useSearchContext();//调用之后获取到对应context的provider中的value值
  return (
    <div>
      <span style={{ fontSize: 18 }}>
        {data.title}：
      </span>
      {data.options.map(item => (
        <Button
          onClick={() => dispatch({ type: 'setValue', stateName: data.title, payload: item })}
          key={item}
          style={{
            fontSize: 16,
            marginRight: '1em',
            marginBottom: '1em',
            color: state[data.title] && (state[data.title] === item) ? '#fff' : '#000',
            backgroundColor: state[data.title] && (state[data.title] === item) ? '#578FF8' : 'transparent'
          }}>
          {item}
        </Button>
      ))}
    </div>
  )
}