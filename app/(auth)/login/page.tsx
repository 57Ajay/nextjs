import Link from 'next/link';
import React from 'react'

const Login = () => {
  return (
    <div>
      main Page<br />
      <Link href="/login/login-admin">Login as Admin</Link>
    </div>
  );
};

export default Login;