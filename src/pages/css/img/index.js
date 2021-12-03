import { Button } from "antd";
import { useRef, useState } from "react";
import style from './index.module.css';

export default function ImgRotate() {
  const imgRef = useRef();
  // 控制图片预览弹窗
  const [isPreview, setIsPreview] = useState(false);
  // 旋转角度
  const [rotate, setRotate] = useState(0);
  // 缩放大小
  const [scaleWidth, setScaleWidth] = useState(1);
  const [scaleHeight, setScaleHeight] = useState(1);

  // 图片预览
  function setPreview(control) {
    setIsPreview(control);
    setRotate(0);
  }
  // 图片缩放
  function imgScale(e) {
    if (e.deltaY > 0) {
      // 往下
      if (((scaleWidth && scaleHeight) !== 1)) {
        setScaleWidth(scaleWidth => scaleWidth - 1);
        setScaleHeight(scaleHeight => scaleHeight - 1);
      }
    } else {
      // 往上
      setScaleWidth(scaleWidth => scaleWidth + 1);
      setScaleHeight(scaleHeight => scaleHeight + 1);
    }
  }
  // 图片左旋转
  function imgLeftRotate() {
    setRotate(rotate => rotate - 90);
  }
  // 图片右旋转
  function imgRightRotate() {
    setRotate(rotate => rotate + 90);
  }
  // 关闭图片预览
  function close() {
    setPreview(false);
    setRotate(0);
    setScaleWidth(1);
    setScaleHeight(1);
  }
  return (
    <div>
      <div className={style['img-box']}>
        <img
          src="https://img0.baidu.com/it/u=2420744160,4087949052&fm=26&fmt=auto"
          alt='111' />
        <div className={style['preview-button']} onClick={() => setPreview(true)}>
          <span>
            预览
          </span>
        </div>
      </div>
      {/* 预览图片 */}
      {isPreview && <div className={style['preview-box']} onWheel={(e) => imgScale(e)}>
        <div className={style['button-box']}>
          <Button onClick={imgLeftRotate}>向左旋转</Button>
          <Button onClick={imgRightRotate}>向右旋转</Button>
          <Button onClick={close}>关闭</Button>
        </div>
        <img
          style={{ transform: `scale3d(${scaleWidth},${scaleHeight},1) rotate(${(rotate)}deg)` }}
          src="https://img0.baidu.com/it/u=2420744160,4087949052&fm=26&fmt=auto"
          alt='111' ref={imgRef} />
      </div>}
    </div>
  )
}