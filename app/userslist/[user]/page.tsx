'use client'
import React from 'react'

type UserProps = {
    params: {
        user: string;
    };
}

const User = ({ params }: UserProps) => {
    console.log(params);
  return (
    <div>
        User: {params.user}
    </div>
  )
}

export default User;