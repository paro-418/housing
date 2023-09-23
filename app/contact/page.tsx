'use client';
import React from 'react';
import ContactForm from '@/components/Forms/ContactForm/page';
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import Link from 'next/link';
import MapPage from '@/components/MapPage/page';
import Head from 'next/head';
import Script from 'next/script';

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
          integrity='sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
          crossOrigin=''
        />
      </Head>
      <Script
        src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        integrity='sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='
        crossOrigin=''
      ></Script>
      <main className=''>
        <section className='bg-[url("/images/furniture6.jpg")] bg-contain  '>
          <h1 className='capitalize px-40 py-32 bg-black/60 text-4xl font-bold text-white'>
            Contact Us
          </h1>
        </section>
        <section className='bg-gray-100 py-20 px-44 flex gap-4'>
          <ContactForm />
          <div className='basis-[30%] flex flex-col gap-8'>
            <div className='flex flex-col gap-4 bg-white p-4'>
              <h4 className='font-semibold'>For enquiries contact:</h4>
              <span className='flex flex-col gap-2'>
                <h5>name</h5>
                <p className='font-light text-sm'>
                  CEO & Managing Director BHIVE Workspace, No.467/468 Situated
                  on, Shri Krishna Temple Rd, Indira Nagar 1st Stage, Bengaluru,
                  Karnataka-560038
                </p>
                <p>abc@gmail.com</p>
              </span>
            </div>
            <div className='flex flex-col gap-2 bg-white p-4'>
              <h4 className='font-semibold'>Corporate headquarters</h4>
              <p className='font-light'>address</p>
            </div>
            <div className='flex items-center gap-2 mt-auto justify-center'>
              <Link
                className={`cursor-pointer text-4xl hover:scale-110 duration-150 text-[#00acee] `}
                href='#'
              >
                <AiOutlineTwitter />
              </Link>
              <Link
                className={`cursor-pointer text-4xl hover:scale-110 duration-150 text-[#d62976] `}
                href='#'
              >
                <AiOutlineInstagram />
              </Link>
              <Link
                className={`cursor-pointer text-4xl hover:scale-110 duration-150 text-[#0072b1] `}
                href='#'
              >
                <BiLogoLinkedin />{' '}
              </Link>
              <Link
                className={`cursor-pointer text-4xl hover:scale-110 duration-150 text-[#c4302b] `}
                href='#'
              >
                <AiFillYoutube />
              </Link>
              <Link
                className={`cursor-pointer text-4xl hover:scale-110 duration-150 text-[#3b5998] `}
                href='#'
              >
                <AiFillFacebook />
              </Link>
            </div>
          </div>
        </section>
        <section className='bg-gray-100 py-10 px-44 flex gap-4'>
          <MapPage />
        </section>
      </main>
    </>
  );
};

export default ContactUsPage;
