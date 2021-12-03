import { Button } from "antd";
import { useLocation, useNavigate } from "react-router";

export default function SecondGrandson() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  function toDetails() {
    navigate('/routerShow/secondChild/secondGrandson/details');
  }
  return (
    <div>
      这是第二个孙子
      <Button onClick={toDetails}>第二个孙子详情</Button>
    </div>
  )
}

console.log('这是第二个孙子打印的')