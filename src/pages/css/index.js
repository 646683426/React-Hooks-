import Nav from '../../components/nav/index';

const navList = [
  {
    url: '/css/img',
    title: '图片',
  },
  {
    url: '/css/animation',
    title: '动画',
  },
  {
    url: '/css/pseudoClass',
    title: '伪元素',
  },
]

export default function ImgRotate(props) {
  return (
    <div className='css-home'>
      <Nav
        children={props.children}
        navList={navList}
      />
    </div>
  )
}