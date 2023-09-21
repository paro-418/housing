import DropDown from '@/components/DropDown/page';
import HomeForm from '@/components/Forms/HomeForm/page';
import SelectOptions from '@/components/SelectOptions/page';

export default function Home() {
  return (
    <main className='relative w-screen min-h-screen border-4  border-yellow-500  '>
      {/* hero section */}
      <section className='sticky top-0 left-0 right-0 h-screen bg-[url("/images/furniture.jpg")] bg-cover  border-4 border-red-700 -z-50'></section>
      <section className=' relative border-4 border-green-600 -mt-[100vh]  h-[80vh] bg-[url("/images/building2.jpg")]  bg-cover '>
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
      <section className='min-h-[50vh] bg-white  '></section>
      <section className='bg-blue-400 min-h-screen opacity-50'>hello</section>
    </main>
  );
}
