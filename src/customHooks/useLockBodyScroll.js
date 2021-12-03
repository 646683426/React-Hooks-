import { useState, useEffect, useLayoutEffect } from "react";

// 用法
export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Show Modal</button>
      {count}
      <div style={{ height: 900 }} />
      {modalOpen && (
        <Modal
          title="Try scrolling"
          content="I bet you you can't! Muahahaha 😈"
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

function Modal({ title, content, onClose }) {
  // 调用钩子以锁定主体滚动
  useLockBodyScroll();
  return (
    <div className="modal-overlay" onClick={onClose} style={{ backgroundColor: 'red', position: 'absolute', top: 300 }}>
      <div className="modal">
        <h2>{title}666</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

// 钩子
function useLockBodyScroll() {
  useLayoutEffect(() => {
    // 拿到原始body overflow的值
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // 防止body在模态显示的情况下滚动
    document.body.style.overflow = "hidden";
    // 模态组件卸载时重置overflow
    return () => (document.body.style.overflow = originalStyle);
  }, []);
}