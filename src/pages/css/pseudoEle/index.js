import style from './index.module.css';

export default function pseudoEle() {
  return (
    <div>
      <div className={style['triangle']}>
        三角形
      </div>
      <div className={style['time-line']}>
        <div className={style['time-stamp']}>
          第一个时间
          <p>
            123
          </p>
        </div>
        <div className={style['time-stamp']}>
          第二个时间
        </div>
        <div className={style['time-stamp']}>
          第三个时间
        </div>
      </div>
    </div>
  )
}