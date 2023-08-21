import React from 'react'
import { CheckCircle2 } from 'lucide-react';

type Props = {}

function Features({}: Props) {
  return (
    <section className="my-32">
    <div className="flex justify-center">
      <div className="max-w-[700px] text-center">
        <p className="mb-6 font-bold uppercase text-primary dark:text-primary-400">
          Features
        </p>
        <h2 className="mb-6 text-3xl font-bold p-2">Why is it so great?</h2>
        <p className="mb-16 text-neutral-500 p-4 ">
          Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque
          iaculis malesuada. Aenean gravida magna orci, non efficitur est
          porta id. Donec magna diam.
        </p>
      </div>
    </div>

    <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-12 px-10 md:px-16 lg:px-20">
      <div className="mb-12">
        <div className="flex">
          <div className="shrink-0">
          <CheckCircle2 className='w-5 text-green-600 font-bold'/>
          </div>
          <div className="ml-2 grow">
            <p className="mb-1 font-bold">Support 24/7</p>
            <p className="text-neutral-500 ">
              Pellentesque mollis, metus nec fringilla aliquam
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex">
          <div className="shrink-0">
          <CheckCircle2 className='w-5 text-green-600 font-bold'/>
          </div>
          <div className="ml-2 grow">
            <p className="mb-1 font-bold">Tracking</p>
            <p className="text-neutral-500">
              Magna lacus iaculis elit, quis pharetra varius.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex">
          <div className="shrink-0">
          <CheckCircle2 className='w-5 text-green-600 font-bold'/>
          </div>
          <div className="ml-2 grow">
            <p className="mb-1 font-bold">Reporting</p>
            <p className="text-neutral-500">
              Pellentesque varius ex vel consequat quis.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex">
          <div className="shrink-0">
          <CheckCircle2 className='w-5 text-green-600 font-bold'/>
          </div>
          <div className="ml-2 grow">
            <p className="mb-1 font-bold">Analytics</p>
            <p className="text-neutral-500">
              Vestibulum gravida iaculis nisl, vel lobortis eros.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex">
          <div className="shrink-0">
          <CheckCircle2 className='w-5 text-green-600 font-bold'/>
          </div>
          <div className="ml-2 grow">
            <p className="mb-1 font-bold">Huge community</p>
            <p className="text-neutral-500 ">
              Praesent vulputate lacus bibendum augue .
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex">
          <div className="shrink-0">
          <CheckCircle2 className='w-5 text-green-600 font-bold'/>
          </div>
          <div className="ml-2 grow">
            <p className="mb-1 font-bold">Easy to use</p>
            <p className="text-neutral-500 ">
              Sed mauris ex, imperdiet sit amet nisl ac, ultrices.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex">
          <div className="shrink-0">
          <CheckCircle2 className='w-5 text-green-600 font-bold'/>
          </div>
          <div className="ml-2 grow">
            <p className="mb-1 font-bold">Frequent updates</p>
            <p className="text-neutral-500 ">
              Aenean lectus ex, placerat id tellus in eros.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex">
          <div className="shrink-0">
          <CheckCircle2 className='w-5 text-green-600 font-bold'/>
          </div>
          <div className="ml-2 grow">
            <p className="mb-1 font-bold">Responsive</p>
            <p className="text-neutral-500">
              Donec consequat orci quis volutpat imperdiet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features