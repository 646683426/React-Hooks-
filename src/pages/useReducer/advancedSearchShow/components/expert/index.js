import SearchBox from '../searchBox';
import { config } from './config';

export default function Expert() {
  function req(data) {
    console.log('发请求的数据---', data)
  }
  return (
    <div style={{ marginTop: '0.5em' }}>
      <h2>
        专家库搜索组件
      </h2>
      <div>
        <SearchBox
          config={config}
          req={req}
        />
      </div>
    </div>
  )
}