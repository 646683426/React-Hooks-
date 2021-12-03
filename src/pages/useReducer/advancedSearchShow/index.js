import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useState } from 'react/cjs/react.development';

export default function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const [pathName, setPathName] = useState(location.pathname);
  function routeTo(e) {
    navigate(e.key);
    setPathName(e.key);
  }
  return (
    <div style={{ marginTop: '0.5em' }}>
      <div>
        <h2>假装这是健康智库(打开控制台查看效果)</h2>
        <Menu onClick={routeTo} selectedKeys={[pathName]} mode="horizontal">
          <Menu.Item key="/useReducer/advancedSearch/expert" icon={<MailOutlined />}>
            专家库
          </Menu.Item>
          <Menu.Item key="/useReducer/advancedSearch/talent" icon={<AppstoreOutlined />}>
            人才库
          </Menu.Item>
        </Menu>
      </div>
      <Outlet />
    </div>
  )
}