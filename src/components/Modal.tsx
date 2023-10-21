'use client';

import { ReactElement, useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Button } from './ui/button';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: ReactElement;
  footer?: ReactElement;
  actionLabel: string;
  disable?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

function Modal({
  actionLabel,
  onClose,
  onSubmit,
  body,
  disable,
  footer,
  isOpen,
  secondaryAction,
  secondaryLabel,
  title,
}: ModalProps) {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = useCallback(() => {
    if (disable) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disable, onClose]);

  const handleSubmint = useCallback(() => {
    console.log('modal');
    onSubmit();
    onClose();
  }, [onSubmit, onClose]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleSecondaryAction = useCallback(() => {
    if (disable || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disable, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={handleClose}
      className='
          justify-center 
          items-center 
          flex 
        
          fixed 
          inset-0 
          z-30 
          outline-none 
          focus:outline-none 
        bg-neutral-800/70'>
      <div
        onClick={(e) => e.stopPropagation()}
        className='
          relative 
          w-full 
          md:w-4/6 
          lg:w-3/6 
          xl:/2/5 
          max-h-[60vh]
          overflow-x-hidden 
          overflow-y-auto 
          my-6 
          bg-red
          mx-auto 
          md:h-auto'>
        <div
          className={`
            translate 
            duration-300
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
            `}>
          <div
            className='
                translate 
                z-50
                border-0
                rounded-lg
                shadow-lg
                relative
                flex
                flex-col
                w-full
                bg-background
                outline-none
                focus:outline-none'>
            {/* Header */}
            <header
              className='
                  flex
                  items-center
                  justify-center
                  p-6
                  rounded-t
                  relative
                  border-b-[1px]
              '>
              <button
                onClick={handleClose}
                className='
                    p-1
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                    '>
                <IoMdClose size={18} />
              </button>
              <h2 className='text-lg text-primary  font-semibold'>{title}</h2>
            </header>
            {/* Body */}
            <main
              className='relative p-6 flex-auto  overflow-x-hidden 
                overflow-y-auto '>
              {body}
            </main>
            {/* footer */}
            <footer className='flex flex-col gap-2 p-6'>
              <div className='flex items-center justify-between w-full'>
                {secondaryAction && secondaryLabel && (
                  <Button
                    type='button'
                    variant='outline'
                    disabled={disable}
                    onClick={handleSecondaryAction}>
                    {secondaryLabel}
                  </Button>
                )}

                <Button onClick={handleSubmint}>{actionLabel}</Button>
              </div>
              {footer}
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
