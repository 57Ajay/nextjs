import React from 'react'
import { redirect } from 'next/navigation';

type params = {
    params: {
        id: string | string[] | number
    }
  
}
const Id = ( {params}: params ) => {
    if (params.id == 2) {
        return redirect('/')
    };
  return (
    <div>Id {params.id}</div>
  );
};

export default Id;