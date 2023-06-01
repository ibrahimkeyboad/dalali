import { Steps } from '@/app/profile/post/create/components/StepContainer';

interface ButtonProps {
  title: React.ReactNode;
  onClick?: () => void;
  step?: number;
}

function Button({ onClick, title, step }: ButtonProps) {
  function handlerClick() {
    if (step === Steps.step4) {
      return;
    }
    return onClick?.();
  }

  return (
    <button
      onClick={handlerClick}
      type={step === Steps.step4 ? 'submit' : 'button'}
      className='
      py-2
      px-3
      rounded-lg
      hover:opacity-80
      transition'>
      {title}
    </button>
  );
}

export default Button;
