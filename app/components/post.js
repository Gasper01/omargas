import Image from 'next/image';
export default function Post({ children }) {
  return (
    <section className='text-gray-600 max-w-lg m-auto'>
      <div className='container  mx-auto'>
        <div className='flex flex-wrap'>
          <div className='p-0 m-auto  w-full max-w-main'>
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
              <div className='w-full'>
                <div className='w-full flex p-0'>
                  <div className='p-0 '>
                    <Image className=' rounded-full overflow-hidden w-auto h-auto ' alt='' src='/gas.jpg' width={30} height={30} />
                  </div>
                  <div className='pl-2 pt-2 '>
                    <p className='font-bold'>administrator</p>
                    <p className='text-xs'>2 June 2022</p>
                  </div>
                </div>
              </div>
              <div className=' p-4'>
                <h1 className='tracking-widest text-lg title-font font-bold text-green-400 mb-1 uppercase '>Gran promocion de cilindros de gas</h1>
                <h2 className='title-font text-sm font-medium text-gray-500 mb-0'>Este Diciembre no te quedes sin gas</h2>
              </div>

              <Image className='m-auto  object-cover object-center w-full h-auto ' alt='Post Admin' src='/postgas.jpg' width={320} height={400} />

              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
