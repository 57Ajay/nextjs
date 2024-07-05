import Link from 'next/link'
import React from 'react'

const Layout = ({chldren} : {chldren: React.ReactNode}) => {
  return (
    <div>
        <ul className='login-menu'>
            <li>
                <Link href={'/login'}>Login main</Link><br />
                <Link href={'/login/login-user'}>Login User</Link><br />
                <Link href={'/login/login-admin'}>Login Admin</Link>
            </li>
        </ul>
        {chldren}
    </div>
  )
}

export default Layout