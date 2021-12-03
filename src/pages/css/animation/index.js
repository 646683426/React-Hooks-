import style from './index.module.css';

export default function Animation() {
  return (
    <div>
      {/* 第一个动画 */}
      <div className={style['spinner']}>
        <div className={style['bounce1']}></div>
        <div className={style['bounce2']}></div>
        <div className={style['bounce3']}></div>
      </div>
      {/* 第二个动画 */}
      <div className={style['box']}>
        <div className={style['container1']}>
          <div className={style['circle1']}></div>
          <div className={style['circle2']}></div>
          <div className={style['circle3']}></div>
          <div className={style['circle4']}></div>
        </div>
        <div className={style['container2']}>
          <div className={style['circle1']}></div>
          <div className={style['circle2']}></div>
          <div className={style['circle3']}></div>
          <div className={style['circle4']}></div>
        </div>
      </div>
      {/* 第三个动画 */}
      <div className={style['thirdBox']}>
        <div className={style['circle1']}></div>
        <div className={style['circle2']}></div>
      </div>
      {/* 第四个动画 */}
      <div className={style['fourthBox']}></div>
      {/* 第五个动画 */}
      <div className={style['fifthBox']}>
        <div className={style['square1']}></div>
        <div className={style['square2']}></div>
      </div>
      {/* 第六个动画 */}
      <div className={style['sixthBox']}>
        <div className={style['block']}></div>
      </div>
    </div>
  )
}