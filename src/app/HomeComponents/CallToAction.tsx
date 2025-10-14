import { Primary } from '@/constant/color';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-[#F8F7F3] font-sans py-20 sm:py-24" 
    style={{
          backgroundColor:Primary
        }}>
      <div className="container mx-auto  px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Want to help us build the future of safe AI?
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#"
            className="w-full rounded-md bg-black px-8 py-3 font-semibold text-white transition-colors hover:bg-gray-800 sm:w-auto"
          >
            See open roles
          </Link>
          <Link
            href="#"
            className="w-full rounded-md border border-gray-400 bg-transparent px-8 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-200/50 sm:w-auto"
          >
            Speak with sales
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;