import { Fragment } from "react"
import Link from 'next/link'

const Home = () => {
  return(
    <Fragment>
      <h1 className="text-3xl font-bold text-center">Hello Ajay</h1>
      <div className="flex flex-col justify-center items-center h-screen">
      <button className="bg-blue-500 text-white p-2 rounded-lg">
        <Link href="/dashboard">Go to Dashboard</Link>
      </button>
      </div>
    </Fragment>
  )
}

export default Home;