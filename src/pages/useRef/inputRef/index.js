import { Button } from "antd";
import { useRef, useState } from "react";

export default function InputRef() {
  const [value, setValue] = useState('');
  /**
   * 将ref挂载到dom元素上，就可以使用对应元素的方法
   */
  const inputRef = useRef();
  // 聚焦
  function inputFocus() {
    inputRef.current.focus();
  }
  // 写入数据
  function setData() {
    inputRef.current.value = '通过current.value写入';
  }
  // 删除数据
  function delData() {
    inputRef.current.value = '';
  }
  // 获取数据
  function getData() {
    setValue(inputRef.current.value);
  }
  return (
    <div style={{ marginTop: '0.5em' }}>
      <div>
        <input ref={inputRef} />
      </div>
      <div style={{ marginTop: '0.5em' }}>
        <Button
          onClick={inputFocus}
        >
          输入框聚焦
        </Button>
        <Button
          onClick={setData}
          style={{ marginLeft: 20 }}
        >
          写入数据
        </Button>
        <Button
          onClick={delData}
          style={{ marginLeft: 20 }}
        >
          删除数据
        </Button>
        <Button
          onClick={getData}
          style={{ marginLeft: 20 }}
        >
          获取数据
        </Button>
      </div>
      {value && <h2>获取到的数据为：{value}</h2>}
    </div>
  )
}