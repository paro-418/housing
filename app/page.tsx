import Button from '@/components/Button/page';
import EnquiryForm from '@/components/Forms/EnquiryForm/page';
import HomeForm from '@/components/Forms/HomeForm/page';
import PropertySliderPreviewer from '@/components/PropertySliderPreviewer/page';
import { SlidesInterface } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { CiPlay1 } from 'react-icons/ci';
import { GiReceiveMoney } from 'react-icons/gi';
import { FaRegHandshake } from 'react-icons/fa';
import { LiaFileContractSolid } from 'react-icons/lia';
import { BsKey, BsBarChartLine, BsCheckLg } from 'react-icons/bs';

const slides: SlidesInterface[] = [
  {
    date: 'now',
    description:
      'I am a tenant of AngelSpace and whenever I had called for any maintenance issue or other queries,they have responded quickly and have resolved the problem',
    name: 'abc',
    avatarUrl: 'kdwkdwe',
  },
  {
    date: 'now',
    description:
      'I am a tenant of AngelSpace and whenever I had called for any maintenance issue or other queries,they have responded quickly and have resolved the problem',
    name: 'def',
    avatarUrl: 'kdwkdwe',
  },
  {
    date: 'now',
    description:
      'I am a tenant of AngelSpace and whenever I had called for any maintenance issue or other queries,they have responded quickly and have resolved the problem',
    name: 'ghi',
    avatarUrl: 'kdwkdwe',
  },
  {
    date: 'now',
    description:
      'I am a tenant of AngelSpace and whenever I had called for any maintenance issue or other queries,they have responded quickly and have resolved the problem',
    name: 'abc',
    avatarUrl: 'kdwkdwe',
  },
  {
    date: 'now',
    description:
      'I am a tenant of AngelSpace and whenever I had called for any maintenance issue or other queries,they have responded quickly and have resolved the problem',
    name: 'def',
    avatarUrl: 'kdwkdwe',
  },
  {
    date: 'now',
    description:
      'I am a tenant of AngelSpace and whenever I had called for any maintenance issue or other queries,they have responded quickly and have resolved the problem',
    name: 'ghi',
    avatarUrl: 'kdwkdwe',
  },
];

export default function Home() {
  return (
    <main className='relative w-screen min-h-screen border-4  border-yellow-500  '>
      <section className='sticky top-0 left-0 right-0 h-screen bg-[url("/images/furniture.jpg")] bg-cover -z-50'></section>
      {/* hero section */}
      <section className=' relative border-4 border-green-600 -mt-[100vh] z-0  h-[80vh] bg-[url("/images/building2.jpg")]  bg-cover '>
        <div className='flex justify-center items-center w-full h-full bg-[rgb(0,0,0,0.2)]'>
          <div className='w-1/2 text-center -mt-[3rem] text-white flex flex-col gap-8'>
            <h1 className='text-5xl'>Welcome To Company</h1>
            <p className='font-light text-lg'>
              Company is a property management company which provides services
              ranging from property maintenance, repairs, tenant move-in,tenant
              move-out, renewal and renovations.
            </p>
          </div>
        </div>
        <HomeForm />
      </section>
      <section className=' w-full bg-slate-200  '>
        <div className='py-36 bg-secondaryLightColor w-full flex flex-col justify-center items-center'>
          <h2 className='text-4xl font-light'>
            Discover Our Featured Listings
          </h2>
          <p className='text-tertiaryColor '>
            Find the latest featured properties here
          </p>
        </div>
        <div className='py-36 px-56 gap-8 grid grid-cols-3'>
          <div className='relative  flex flex-col justify-center gap-2 '>
            <h3 className='text-4xl font-light'>Residential</h3>
            <p className='text-tertiaryColor'>
              Find all the apartments of high quality here
            </p>
            <span className='absolute bottom-0 left-0 w-1/2 border-[1px] border-secondaryColor'></span>
          </div>
          <div className='row-span-2  relative group/item'>
            <Image
              src='/images/furniture2.jpg'
              alt='furniture'
              width={800}
              height={400}
            />

            <span className='absolute w-full h-full left-0 right-0 top-0 bottom-0 bg-white- opacity-0 text-white bg-black/20 hover:opacity-100 flex flex-col justify-between p-8'>
              <div>
                <p>0 property</p>
                <p className='text-2xl capitalize'>residential</p>
              </div>

              <Link href='#' className='flex justify-between items-center'>
                More Details
                <CiPlay1 />
              </Link>
            </span>
          </div>
          <div className=' relative'>
            <Image
              src='/images/furniture4.jpg'
              alt='furniture'
              width={400}
              height={400}
            />
            <span className='absolute w-full h-full left-0 right-0 top-0 bottom-0 bg-white- opacity-0 text-white bg-black/20 hover:opacity-100 flex flex-col justify-between p-8'>
              <div>
                <p>0 property</p>
                <p className='text-2xl capitalize'>apartment</p>
              </div>

              <Link href='#' className='flex justify-between items-center'>
                More Details
                <CiPlay1 />
              </Link>
            </span>
          </div>
          <div className=' relative'>
            <Image
              src='/images/furniture4.jpg'
              alt='furniture'
              width={400}
              height={400}
            />
            <span className='absolute w-full h-full left-0 right-0 top-0 bottom-0 bg-white- opacity-0 text-white bg-black/20 hover:opacity-100 flex flex-col justify-between p-8'>
              <div>
                <p>0 property</p>
                <p className='text-2xl capitalize'>residential</p>
              </div>

              <Link href='#' className='flex justify-between items-center'>
                More Details
                <CiPlay1 />
              </Link>
            </span>
          </div>
          <div className='relative'>
            <Image
              src='/images/furniture4.jpg'
              alt='furniture'
              width={400}
              height={400}
            />
            <span className='absolute w-full h-full left-0 right-0 top-0 bottom-0 bg-white- opacity-0 text-white bg-black/20 hover:opacity-100 flex flex-col justify-between p-8'>
              <div>
                <p>0 property</p>
                <p className='text-2xl capitalize'>villa</p>
              </div>

              <Link href='#' className='flex justify-between items-center'>
                More Details
                <CiPlay1 />
              </Link>
            </span>
          </div>
        </div>
      </section>
      <section className='bg-primaryColor/80 text-white min-h-screen  flex gap-6 p-20'>
        <div className=' basis-1/2'>
          <span>
            <h2
              style={{ wordSpacing: '.5rem' }}
              className='capitalize text-3xl mb-28 w-1/2 leading-10'
            >
              Why company Is The Perfect Choice?
            </h2>
          </span>
          <div className='flex gap-6'>
            <div className='flex flex-col gap-10'>
              <span className='relative flex flex-col gap-4 pt-8'>
                <p className='text-3xl'>01.</p>
                <h4 className='text-2xl'>Property Marketing</h4>
                <p className='text-base text-gray-300'>
                  We market your rental homes aggressively,using digital
                  listings to connect with renters across the areas. We work
                  quickly to fill your vacancy. We are the best in Property
                  Management.
                </p>
                <span className='absolute top-0 left-0 w-1/3 border-t-[1px] border-white'></span>
              </span>
              <span className='relative flex flex-col gap-4 pt-8'>
                <p className='text-3xl'>01.</p>
                <h4 className='text-2xl'>Property Marketing</h4>
                <p className='text-base text-gray-300'>
                  We market your rental homes aggressively,using digital
                  listings to connect with renters across the areas. We work
                  quickly to fill your vacancy. We are the best in Property
                  Management.
                </p>
                <span className='absolute top-0 left-0 w-1/3 border-t-[1px] border-white'></span>
              </span>
            </div>
            <div className='flex flex-col gap-10  -translate-y-28'>
              <span className='relative flex flex-col gap-4 pt-8'>
                <p className='text-3xl'>01.</p>
                <h4 className='text-2xl'>Property Marketing</h4>
                <p className='text-base text-gray-300'>
                  We market your rental homes aggressively,using digital
                  listings to connect with renters across the areas. We work
                  quickly to fill your vacancy. We are the best in Property
                  Management.
                </p>
                <span className='absolute top-0 left-0 w-1/3 border-t-[1px] border-white'></span>
              </span>
              <span className='relative flex flex-col gap-4 pt-8'>
                <p className='text-3xl'>01.</p>
                <h4 className='text-2xl'>Property Marketing</h4>
                <p className='text-base text-gray-300'>
                  We market your rental homes aggressively,using digital
                  listings to connect with renters across the areas. We work
                  quickly to fill your vacancy. We are the best in Property
                  Management.
                </p>
                <span className='absolute top-0 left-0 w-1/3 border-t-[1px] border-white'></span>
              </span>
              <span className='relative flex flex-col gap-4 pt-8'>
                <p className='text-3xl'>01.</p>
                <h4 className='text-2xl'>Property Marketing</h4>
                <p className='text-base text-gray-300'>
                  We market your rental homes aggressively,using digital
                  listings to connect with renters across the areas. We work
                  quickly to fill your vacancy. We are the best in Property
                  Management.
                </p>
                <span className='absolute top-0 left-0 w-1/3 border-t-[1px] border-white'></span>
              </span>
            </div>
          </div>
        </div>
        <EnquiryForm className='bg-white basis-1/2 px-12 flex justify-center items-center ' />
      </section>

      <section className='bg-white p-24 flex flex-col gap-10 items-center justify-center'>
        <h4 className='text-3xl text-center text-black'>
          Check Our Selection Of Finest Properties
        </h4>
        <div className='grid grid-cols-3 gap-10'>
          <PropertySliderPreviewer
            area={2000}
            description='2BHK flat for rent in tropical dwelling apartment'
            imagesArray={[
              '/images/furniture4.jpg',
              '/images/furniture4.jpg',
              '/images/furniture4.jpg',
              '/images/furniture4.jpg',
            ]}
            parkings={2}
            price={200000}
            rooms={2}
            showers={2}
            tag='for rent'
          />
          <PropertySliderPreviewer
            area={2000}
            description='2BHK flat for rent in tropical dwelling apartment'
            imagesArray={[
              '/images/furniture4.jpg',
              '/images/furniture4.jpg',
              '/images/furniture4.jpg',
              '/images/furniture4.jpg',
            ]}
            parkings={2}
            price={200000}
            rooms={2}
            showers={2}
            tag='for rent'
          />
          <PropertySliderPreviewer
            area={2000}
            description='2BHK flat for rent in tropical dwelling apartment'
            imagesArray={[
              '/images/furniture4.jpg',
              '/images/furniture4.jpg',
              '/images/furniture4.jpg',
              '/images/furniture4.jpg',
            ]}
            parkings={2}
            price={200000}
            rooms={2}
            showers={2}
            tag='for rent'
          />
        </div>

        <Button className=' text-secondaryColor border-2 border-secondaryColor font-semibold px-4 py-2  rounded-md'>
          Load more
        </Button>
      </section>
      <section className='bg-white px-24'>{/* slider section */}</section>
      <section className='bg-white p-28 flex flex-col gap-16 items-center'>
        <div>
          <h4 className='text-center text-4xl'>How it works</h4>
          <p className='text-center text-gray-500'>
            Check out the process how company work
          </p>
        </div>
        <div className='grid grid-cols-3 gap-8'>
          <div className='flex gap-8'>
            <span className='text-2xl'>
              <FaRegHandshake />
            </span>
            <span className='flex flex-col gap-4'>
              <h5 className='text-secondaryColor uppercase font-semibold'>
                sign up
              </h5>
              <p className='text-gray-500'>
                The Property Owner Will Reach AngelSpace And Signs The Agreement
                With company To Manage Or Rent-Out The Property On Behalf Of The
                Owner.
              </p>
            </span>
          </div>
          <div className='flex gap-8'>
            <span className='text-2xl'>
              <BsKey />
            </span>
            <span className='flex flex-col gap-4'>
              <h5 className='text-secondaryColor uppercase font-semibold'>
                key handover
              </h5>
              <p className='text-gray-500'>
                The Property Owner Will Reach AngelSpace And Signs The Agreement
                With AngelSpace To Manage Or Rent-Out The Property On Behalf Of
                The Owner.
              </p>
            </span>
          </div>
          <div className='flex gap-8'>
            <span className='text-2xl'>
              <BsBarChartLine />
            </span>
            <span className='flex flex-col gap-4'>
              <h5 className='text-secondaryColor font-semibold uppercase'>
                marketing
              </h5>
              <p className='text-gray-500'>
                The Property Owner Will Reach AngelSpace And Signs The Agreement
                With AngelSpace To Manage Or Rent-Out The Property On Behalf Of
                The Owner.
              </p>
            </span>
          </div>
          <div className='flex gap-8'>
            <span className='text-2xl'>
              <BsCheckLg />
            </span>
            <span className='flex flex-col gap-4'>
              <h5 className='text-secondaryColor font-semibold uppercase'>
                BACKGROUND VERIFICATION
              </h5>
              <p className='text-gray-500'>
                company Will ConductThe Background Verification Of The Tenant.
                Once Completed, Team Will Reach Out To The Owner For Final
                Approval
              </p>
            </span>
          </div>
          <div className='flex gap-8'>
            <span className='text-2xl'>
              <LiaFileContractSolid />
            </span>
            <span className='flex flex-col gap-4'>
              <h5 className='text-secondaryColor font-semibold uppercase'>
                rental agreement
              </h5>
              <p className='text-gray-500'>
                After Verification Of Prospective Tenant, AngelSpace Prepares
                The Rental Agreement Which Needs To Be Signed By Both Owner And
                Tenant
              </p>
            </span>
          </div>
          <div className='flex gap-8'>
            <span className='text-2xl'>
              <GiReceiveMoney />
            </span>
            <span className='flex flex-col gap-4'>
              <h5 className='text-secondaryColor font-semibold uppercase'>
                monthly rent transfer
              </h5>
              <p className='text-gray-500'>
                The Tenant Transfers The Deposit And Monthly Rental To
                AngelSpace Account,Which Will Be Transferred To The Owner
                Account On Monthly Cycle.
              </p>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
