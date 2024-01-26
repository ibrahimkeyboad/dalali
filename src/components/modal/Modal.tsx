'use client';

import { ReactElement, useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

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
    onSubmit();
    console.log('hello');
    onClose();
  }, [onClose, onSubmit]);

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
      <Card
        onClick={(e) => e.stopPropagation()}
        className='
          relative 
          max-h-[85vh]
          overflow-x-hidden 
          overflow-y-auto 
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
            <CardHeader
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
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            {/* Body */}
            <CardContent
              className='relative p-6 flex-auto  overflow-x-hidden 
                overflow-y-auto '>
              {body}
            </CardContent>
            {/* footer */}
            <CardFooter>
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

                <Button onClick={handleSubmint} type='button'>
                  {actionLabel}
                </Button>
              </div>
              {footer}
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Modal;
