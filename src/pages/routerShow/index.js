import Nav from '../../components/nav/index';

const navList = [
  {
    url: '/routerShow/firstChild',
    title: '第一个孩子',
  },
  {
    url: '/routerShow/secondChild',
    title: '第二个孩子',
  }
]

export default function RouterShow() {
  return (
    <div>
      <div>这是爷爷</div>
      <div style={{ marginBottom: '1em' }}>
        <Nav
          navList={navList}
        />
      </div>
    </div>
  )
}