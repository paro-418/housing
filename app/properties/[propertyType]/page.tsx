import NavForms from '@/components/Forms/NavForms/page';
import PropertyContainer from '@/components/Property/PropertyContainer/page';
import React from 'react';

const PropertiesPage = () => {
  return (
    <section className='bg-slate-200'>
      <NavForms className='  bg-primaryColor' />
      <PropertyContainer />
    </section>
  );
};

export default PropertiesPage;
