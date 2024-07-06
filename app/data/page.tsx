'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Data: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error); 
        // Handle the error gracefully (e.g., show an error message to the user)
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      {products.map((item) => (
        <div key={item.id} className='border-black border-2 mb-2 p-1'>
          <h1 className='text-bold text-3xl text-center border-b-2 border-lime-500'>{item.title}</h1>
          <p className='text-2xl'><strong>Description: </strong> {item.description}</p>
          <p className='text-bold text-2xl'><strong>Category: </strong> {item.category}</p>
          <div className='flex flex-row items-center justify-center m-2'>
            <Image width={100} height={150} src={item.image} alt={item.title} />  
            <p className='text-semibold text-2xl'>Rating: {item.rating.rate}★</p>,
            <p className='text-semibold text-2xl'>Price: ${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Data;
