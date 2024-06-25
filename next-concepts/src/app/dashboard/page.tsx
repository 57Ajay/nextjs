import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";
import Link from 'next/link'


export default function LandingPage() {
    return (
        <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Dashboard />
        <div className="flex flex-col justify-center items-center">
            <button className="bg-blue-500 text-white p-2 rounded-lg">
                <Link href="/">Go Home</Link>
            </button>
            </div>
        </div>
    )
    }