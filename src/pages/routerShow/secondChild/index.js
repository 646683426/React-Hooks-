import Nav from '../../../components/nav/index';

const navList = [
  {
    url: '/routerShow/secondChild/firstGrandson',
    title: '第一个孙子',
  },
  {
    url: '/routerShow/secondChild/secondGrandson',
    title: '第二个孙子',
  }
]

export default function SecondChild() {
  return (
    <div>
      <div>这是第二个孩子</div>
      <Nav
        navList={navList}
      />
    </div>
  )
}