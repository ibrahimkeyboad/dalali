'use client';
import { useCallback, useState } from 'react';
import StepOne from './steps/step-01';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import StepTwo from './steps/step-02';
import StepThree from './steps/step-03';
import StepFour from './steps/step-04';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';

export enum Steps {
  step1 = 1,
  step2 = 2,
  step3 = 3,
  step4 = 4,
}

type ID = 'bedrooms' | 'bathrooms' | 'beds' | 'sofa' | 'imageCover' | 'images';

const FormSchema = z.object({
  bedrooms: z.number().max(5, 'Bed rooms should be less than 6'),
  bathrooms: z
    .number()

    .max(3, 'bathrooms should be less than 4'),
  city: z.string(),
  street: z.string(),
});
type MakeOfferFormValues = z.infer<typeof FormSchema>;

function StepContainer() {
  const [step, setStep] = useState(Steps.step1);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<MakeOfferFormValues>({
    defaultValues: {
      bedrooms: 1,
      bathrooms: 1,
      beds: 1,
      sofa: 1,
      imageCover: {
        label: '',
        uri: null,
      },
      images: [],
    },
    // resolver: yupResolver(schema),
  });

  const bedrooms = watch('bedrooms');
  const bathrooms = watch('bathrooms');
  const beds = watch('beds');
  const sofa = watch('sofa');
  const imageCover = watch('imageCover');

  const onBack = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const onNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = () => {
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

  function setImageValue(
    id: ID,
    { uri, label }: { uri: File | null; label: string }
  ) {
    setValue(
      id,
      { label, uri },
      {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      }
    );
  }
  function setImagesValue(
    id: ID,
    { uri, label }: { uri: File | null; label: string }
  ) {
    setValue(
      id,
      { label, uri },
      {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      }
    );
  }

  let bodyContent = (
    <StepOne
      onHandlerBathRoom={(value) => setCustomValue('bathrooms', value)}
      onHandlerBeedRoom={(value) => setCustomValue('bedrooms', value)}
      onHandlerSofa={(value) => setCustomValue('sofa', value)}
      bathrooms={bathrooms}
      bedrooms={bedrooms}
      beds={beds}
      sofa={sofa}
    />
  );

  if (step === Steps.step2) {
    bodyContent = <StepTwo errors={errors} register={register} />;
  }

  if (step === Steps.step3) {
    bodyContent = <StepThree register={register} errors={errors} disabled />;
  }

  if (step === Steps.step4) {
    bodyContent = (
      <StepFour
        handelerImageCover={(uri, label) =>
          setImageValue('imageCover', { uri, label })
        }
        handelerImages={(uri, label) => setImageValue('images', { uri, label })}
        imageCover={imageCover}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='
      p-8
      dark:bg-[#112240] 
      bg-white 
        translate 
        h-full 
        md:h-auto
        border-0
        rounded-lg
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
