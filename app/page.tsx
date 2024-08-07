'use client';
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import natureImage from "@/public/NaturesImage.jpg";
import natureBed from "@/public/grassBed.jpg"

const Home = ()=>{
  const router = useRouter();
  const handleClick = ()=>{
    router.push("/about");
  };
  return(
    <Fragment>
      <div className="m-4 border-2 border-green-300 p-4 rounded-md">
        <h1>Home</h1><br />
        <Link href={'/login'} className="bg-red-800 p-1 rounded">login page</Link><br /><br />
        <Link href={'/register'} className="bg-green-800 p-1 rounded">register page</Link>
        <br />
        <Link href={'/userslist'}>userlist</Link>
        <h1>useRouter</h1>
        <button onClick={handleClick} className="bg-blue-800 p-1 rounded">about</button><br />
        <Link href={'/projects'}>Projects</Link>
        <div className="flex flex-row">
        <div className="relative h-[100vh] w-[49vw] mr-1"> 
          <Image 
            src={natureImage}
            alt="Image of a field with yellow grasses"
            fill 
            style={{ objectFit: 'cover' }} 
          />
        </div>
        <div className="relative h-[100vh] mt-1 w-[49vw]">
        <Image src={natureBed}
         alt="Green lush Grass field"
         fill
         style={{ objectFit: 'cover' }}
        />
        </div>
        </div>
      </div>
    </Fragment>
  )
};

export default Home;