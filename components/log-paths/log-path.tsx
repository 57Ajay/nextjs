'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const LogPath = () => {
    const path = usePathname();
  return (
    <div>
        <ul>
            <li>
                <Link href="/login">login</Link>
            </li>
        </ul>
        {path === '/login/login-admin' ? (
            <ul>
                <li>
                    <Link href="/login/login-admin">Login Admin</Link>
                </li>
            </ul>
        ) : (
            <ul>
                <li>
                    <Link href="/login/login-user">Login User</Link>
                </li>
            </ul>
        )}
        
    </div>
  );
};

export default LogPath;