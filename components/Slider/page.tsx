import { SliderInterface } from '@/types/types';
import SliderCardHolder from './SliderCardHolder/page';
import { AiFillStar } from 'react-icons/ai';
import { BiSolidStarHalf } from 'react-icons/bi';

const Slider: React.FC<SliderInterface> = ({ slides }) => {
  return (
    <div className='border-[1px] border-gray-00 flex gap-4 py-4 shadow-2xl'>
      <div className=' basis-[25%] flex flex-col items-center justify-center gap-2 '>
        <h2 className='font-semibold text-2xl'>Excellent </h2>
        <span className='flex gap-1 text-yellow-400 text-3xl'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
        <p className='text-gray-600'>based on {slides.length} reviews</p>
      </div>

      <SliderCardHolder slides={slides} />
    </div>
  );
};

export default Slider;
