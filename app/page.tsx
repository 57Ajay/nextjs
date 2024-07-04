'use client';
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import Link from "next/link";

const Home = ()=>{
  const router = useRouter();
  const handleClick = ()=>{
    router.push("/about");
  };
  return(
    <Fragment>
      <h1>Home</h1><br />
      <Link href={'/login'} className="bg-red-800 p-1 rounded">login page</Link><br /><br />
      <Link href={'/register'} className="bg-green-800 p-1 rounded">register page</Link>
      <br />
      <h1>useRouter</h1>
      <button onClick={handleClick} className="bg-blue-800 p-1 rounded">about</button>
    </Fragment>
  )
};

export default Home;