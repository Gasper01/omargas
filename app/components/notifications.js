export default function Notifications() {
  return (
    <section className='p-5'>
      <div className='mb-5 flex items-center justify-between'>
        <h4 className='font-medium text-slate-500'>Notifications</h4>
        <div className='rounded-md bg-pink-400/70 px-2 font-semibold text-gray-900'>3</div>
      </div>

      <div className='mt-4 grid grid-cols-1 gap-4   md:grid-cols-1  '>
        <div className='flex items-start rounded-xl bg-white p-4 shadow-lg'>
          <div className='flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-blue-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
              />
            </svg>
          </div>

          <div className='ml-4'>
            <h2 className='font-semibold'>574 Messages</h2>
            <p className='mt-2 text-sm text-gray-500'>Last opened 4 days ago</p>
          </div>
          <button type='button' className=' ml-auto rounded bg-slate-50 px-2 text-xl text-slate-500 hover:bg-slate-100'>
            &times;
          </button>
        </div>
      </div>
    </section>
  );
}
