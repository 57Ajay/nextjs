import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h2 className='text-3xl font-bold text-red-500'>Not Found</h2>
      <p className='text-2xl font-semibold text-red-500'>Could not find requested resource</p>
      <Link href="/">
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Go Home
        </button>
    </Link>

    </div>
  )
}

/**
 * can be async also;
 * (*
import Link from 'next/link'
import { headers } from 'next/headers'
 
export default async function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')
  const data = await getSiteData(domain)
  return (
    <div>
      <h2>Not Found: {data.name}</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  );
};
 *)
 */