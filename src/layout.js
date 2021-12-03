import { Button } from 'antd';
import { useNavigate, Outlet } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();
  function toHome() {
    navigate('/');
  }

  return (
    <div>
      <Button
        onClick={toHome}
        style={{ marginTop: 20 }}
      >
        首页
      </Button>
      <Outlet />
    </div>
  )
}