import { Button } from 'antd';
import { useNavigate } from 'react-router';
import { config } from './config';

export default function Home() {
  const navigate = useNavigate();

  function to(path) {
    navigate(path)
  }
  return (
    <div>
      {
        config.map((item) => {
          return (
            <div key={item.title}>
              <h1 style={{ marginTop: '0.5em' }}>---{item.title}---</h1>
              {item.routes?.map((route) => {
                return (
                  <Button
                    onClick={() => to(route.path)}
                    key={route.title}
                    style={{ marginLeft: 20 }}
                  >
                    {route.title}
                  </Button>
                )
              })}
            </div>
          )
        })
      }
    </div>
  )
}