import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className='get-app'>
        <div className=''>
          <h1 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Get For Free Now</h1>
          <p className='regular-16 text-gray-10'>Available on both iOS and Android</p>

          <div className='mt-5 flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row xl:items-center'>
            <Button
            type='button'
            title='App store'
            icon='/apple.svg'
            variant='btn_white'
          full
            
            />
            <Button
            type='button'
            title='Play store'
            icon='/android.svg'
            variant='btn_dark_green_outline'
          full
            
            />
          </div>
        </div>

        <div className='flex flex-1 justify-end items-center'>
          <Image
          src='/phones.png'
          alt='phones'
          width={550}
          height={870}
          />
        </div>
      </div>
    </section>
  )
}

export default GetApp
