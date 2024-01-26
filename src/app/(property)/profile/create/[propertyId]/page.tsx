import React from 'react';
import TitleForm from '../_components/TitleForm';

function EditProperyPage({ params }: { params: { propertyId: string } }) {
  // console.log(params.propertyId);

  const data = {
    title: params.propertyId,
  };

  return (
    <div className='p-6'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-y-2'>
          <h1 className='text-2xl font-medium'>Property Create</h1>
          <span>(1/8)</span>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-16'>
        <TitleForm initialData={data} properyId={params.propertyId} />
      </div>
    </div>
  );
}

export default EditProperyPage;
