"use client";

import { Fragment } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  return(
    <Fragment>
      <h1 className="text-3xl font-bold text-center pt-10">Hello Crypto Lovers</h1>
      <div className="flex flex-col justify-center items-center pt-32">
      <button className="bg-blue-500 text-white p-2 rounded-lg">
        <Link href="/dashboard">Dashboard {`->`}(using Link)</Link>
      </button>
      <button className="bg-blue-500 text-white p-2 rounded-lg mt-3" onClick={() => router.push('/dashboard')}>
        Dashboard {`->`}(using useRouter)
      </button>
      </div>
    </Fragment>
  )
}

export default Home;