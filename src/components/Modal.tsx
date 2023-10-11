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
    if (disable) {
      return;
    }

    onSubmit();
    onClose();
  }, [disable, onSubmit, onClose]);

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
      className='
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none 
        bg-neutral-800/70'>
      <div
        className='
          relative 
          w-full 
          md:w-4/6 
          lg:w-3/6 
          xl:/2/5 
          my-6 
          mx-auto 
          h-full
          md:h-auto'>
        <div
          className={`
            translate 
            duration-300
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
            `}>
          <div
            className='
                translate 
                h-full 
                md:h-auto
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
            <div
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
            </div>
            {/* Body */}
            <div className='relative p-6 flex-auto'>{body}</div>
            {/* footer */}
            <div className='flex flex-col gap-2 p-6'>
              <div className='flex items-center gap-4 w-full'>
                {secondaryAction && secondaryLabel && (
                  <Button
                    type='button'
                    variant='outline'
                    // outline
                    // disabled={disable}
                    title='cancel'
                    // label={secondaryLabel}
                    onClick={handleSecondaryAction}
                  />
                )}

                <Button
                  onClick={handleSubmint}
                  // disabled={disable}
                  title='ok'
                  // label={actionLabel}
                />
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
