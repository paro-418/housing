import AboutEachEmployee from '@/components/About/AboutEachEmployee/page';
import { AboutEachEmployeeInterface } from '@/types/types';
import React from 'react';

const employeeArray: AboutEachEmployeeInterface[] = [
  {
    description:
      '  has a Bachelor Degree in Civil Engineering. He has 8+ years of experience in property management. For the past three years, he has been running his own startup called AK technocrats. The startup focuses on meeting all the housing needs such as rentals, resales, property maintenance, and interior designing.',
    designation: 'founder',
    imageUrl: '/images/furniture4.jpg',
    name: 'abc',
    facebookUrl: 's',
    instagramUrl: 's',
    linkedUrl: 's',
    twitterUrl: 's',
    paragraph1:
      'property management. For the past three years, he has been running his own startup called AK technocrats. The startup focuses on meeting all the housing needs such as s',
    paragraph2:
      's an entrepreneur focused on simplifying property management decisions. He actively supports his team and business at all levels. He provides training to the entire team and individual memberss',
  },
  {
    description:
      '  has a Bachelor Degree in Civil Engineering. He has 8+ years of experience in property management. For the past three years, he has been running his own startup called AK technocrats. The startup focuses on meeting all the housing needs such as rentals, resales, property maintenance, and interior designing.',
    designation: 'founder',
    imageUrl: '/images/furniture4.jpg',
    name: 'abc',
    facebookUrl: 's',
    instagramUrl: 's',
    linkedUrl: 's',
    twitterUrl: 's',
    paragraph1:
      'property management. For the past three years, he has been running his own startup called AK technocrats. The startup focuses on meeting all the housing needs such as s',
    paragraph2:
      's an entrepreneur focused on simplifying property management decisions. He actively supports his team and business at all levels. He provides training to the entire team and individual memberss',
  },
  {
    description:
      '  has a Bachelor Degree in Civil Engineering. He has 8+ years of experience in property management. For the past three years, he has been running his own startup called AK technocrats. The startup focuses on meeting all the housing needs such as rentals, resales, property maintenance, and interior designing.',
    designation: 'founder',
    imageUrl: '/images/furniture4.jpg',
    name: 'abc',
    facebookUrl: 's',
    instagramUrl: 's',
    linkedUrl: 's',
    twitterUrl: 's',
    paragraph1:
      'property management. For the past three years, he has been running his own startup called AK technocrats. The startup focuses on meeting all the housing needs such as s',
    paragraph2:
      's an entrepreneur focused on simplifying property management decisions. He actively supports his team and business at all levels. He provides training to the entire team and individual memberss',
  },
];

const AboutUsPage = () => {
  return (
    <main className='mb-24'>
      <section className='bg-[url("/images/furniture.jpg")] bg-contain  '>
        <h1 className=' px-40 py-32 bg-black/60 text-4xl font-bold text-white'>
          About Us
        </h1>
      </section>
      <section className='w-full  px-40 py-32 flex flex-col gap-4'>
        <h2 className='text-3xl font-light'>
          We Find The Best Property For Your Needs
        </h2>
        <div className='w-full flex gap-8 items-center justify-between'>
          <div className='flex flex-col gap-4 text-gray-500'>
            <h3 className=' font-bold text-gray-600'>
              company works quickly, decisively and proactively from day one so
              we can give you the best service possible.
            </h3>
            <p>
              Initially our property review covers a range of topics from
              supplier contracts to potential building works. Once we&apos;ve
              got to know your building inside out, we create a management
              strategy which is straightforward and cost-effective. If
              you&apos;ve used another property management company before this
              will come as a very pleasant surprise.
            </p>
            <p>
              When it comes to negotiating tenancies and navigating leases we
              work through all issues with a creative and can-do attitude
            </p>
            <p>
              As you&apos;d expect, all our associates are as professional,
              reliable and customer focused as we are.
            </p>
          </div>
          <div className='flex flex-col gap-4 text-gray-500'>
            <p>
              We strive to provide peace of mind and convenience for all, no
              matter which side of the lease you are on. Our trustworthy, hard
              working and diligent attitude allows you to have the utmost
              confidence that your properties are in safe hands with us.
            </p>
            <p>
              AngelSpace endeavour to cater to all needs and work proactively
              with both landlords and leaseholders to achieve the best results
              for the property.
            </p>
            <p>
              We look forward to assisting you with your complete property
              management needs. Please contact us at any time with questions you
              have about our services
            </p>
          </div>
        </div>
      </section>
      <section className=' px-40 flex flex-col gap-8'>
        <h2 className='text-3xl font-light'>About Founders</h2>

        <div className='flex flex-col gap-6  '>
          {employeeArray.map((employee) => (
            <AboutEachEmployee key={employee.name} {...employee} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
