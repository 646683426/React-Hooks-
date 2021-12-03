import { useNavigate, useLocation, Outlet } from "react-router";
import { createContext, useContext, useReducer } from "react";
import { reducer, init } from '../../components/nav/reducer';
import './index.css';

export const navContext = createContext();

export const useNavContext = () => useContext(navContext);

export default function Nav({ navList, exact }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [state, dispatch] = useReducer(reducer, navList[0].title, init);

  function linkTo(url) {
    navigate(url, {
      state: {
        data:11111111111111
      },
      replace:true,// 用新的路由替换当前路由
    })
  }

  return (
    <div className='css-home'>
      <div className='css-nav'>
        {navList && navList.map(item => (
          <span
            className={
              exact
                ? location.pathname === item.url
                  ? 'cur'
                  : ''
                : location.pathname.indexOf(item.url) !== -1
                  ? 'cur'
                  : ''}
            key={item.url}
            onClick={() => linkTo(item.url)}
          >
            {item.title}
          </span>
        ))}
      </div>
      <navContext.Provider value={{ state, dispatch }}>
        <Outlet />
      </navContext.Provider>
    </div>
  )
}