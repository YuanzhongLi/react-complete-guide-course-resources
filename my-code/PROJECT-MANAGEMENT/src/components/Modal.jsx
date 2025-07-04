import { useRef, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

import Button from './Button';

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md m-auto"
    >
      {children}
      <form
        method="dialog"
        className="mt-4 text-right"
      >
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root'),
  );
});

export default Modal;
