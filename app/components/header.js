import Image from 'next/image';
export default function Header() {
  return (
    <div className='rounded-b-xl bg-indigo-600 p-2 pb-4 text-white'>
      <div className='mb-4 flex items-center justify-between'>
        <h1 className='ext-center text-3xl font-semibold'>Omar Gas</h1>
        <div className='rounded-lg bg-indigo-50/30 p-3 hover:bg-white hover:text-indigo-500'>
          <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
            ></path>
          </svg>
        </div>
      </div>
      <div className='space-y-2 items-center text-center'>
        <div className='text-2xl font-light tracking-wider'>
          El cilindro que dura mas
          <Image className='rounded-xl m-auto' alt='' src='/gas.jpg' height={50} width={50} priority />
        </div>

        <div className='text-slate-200'>Lps:320.00</div>
      </div>
    </div>
  );
}
