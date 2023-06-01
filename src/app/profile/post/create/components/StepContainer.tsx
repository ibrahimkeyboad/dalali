'use client';
import Button from '@/components/Button';
import { useCallback, useState } from 'react';
import StepOne from './steps/step-01';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import StepTwo from './steps/step-02';
import StepThree from './steps/step-03';
import StepFour from './steps/step-04';

export enum Steps {
  step1 = 1,
  step2 = 2,
  step3 = 3,
  step4 = 4,
}

type ID = 'bedrooms' | 'bathrooms' | 'beds' | 'sofa';

function StepContainer() {
  const [step, setStep] = useState(Steps.step1);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      bedrooms: 1,
      bathrooms: 1,
      beds: 1,
      sofa: 1,
    },
  });

  const bedrooms = watch('bedrooms');
  const bathrooms = watch('bathrooms');
  const beds = watch('beds');
  const sofa = watch('sofa');

  const onBack = useCallback(() => {
    setStep((value) => value - 1);
    console.log('runn');
  }, []);

  const onNext = useCallback(() => {
    console.log('runn');
    setStep((value) => value + 1);
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = () => {
    console.log('ruu');
    if (step !== Steps.step4) {
      return onNext();
    }
  };

  function setCustomValue(id: ID, value: any) {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  }

  let bodyContent = (
    <StepOne
      onHandlerChange={(value) => setCustomValue('bedrooms', value)}
      bathrooms={bathrooms}
      bedrooms={bedrooms}
      beds={beds}
      sofa={sofa}
    />
  );

  console.log(step);

  if (step === Steps.step2) {
    bodyContent = <StepTwo errors={errors} register={register} />;
  }

  if (step === Steps.step3) {
    bodyContent = <StepThree register={register} errors={errors} disabled />;
  }

  if (step === Steps.step4) {
    bodyContent = <StepFour register={register} />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='
        translate 
        h-full 
        md:h-auto
        border-0
        rounded-lg
        relative
        flex
        flex-col
        w-full
        outline-none
        focus:outline-none'>
      {bodyContent}
      <nav
        className={`flex ${
          step !== Steps.step1 ? 'justify-between' : 'justify-end'
        } mt-4 text-white`}>
        {step !== Steps.step1 ? <Button title='Back' onClick={onBack} /> : null}
        <Button title='Next' onClick={onNext} step={step} />
      </nav>
    </form>
  );
}
export default StepContainer;
