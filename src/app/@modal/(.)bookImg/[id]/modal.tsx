'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    return null; // or some fallback UI
  }

  return createPortal(
    <div className="modal-backdrop">
      <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} className="close-button">Close</button>
      </dialog>
    </div>,
    modalRoot
  );
}
