import React from 'react'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
const roboto = Roboto({subsets: ['latin'], weight: '500'});

const About = () => {
 
  return (
    <div className='ml-4'>
      <h1>About</h1>
      <Image src={'https://images.app.goo.gl/tVMyTLQx9xBsk2LdA'}
       alt='Image of a gragon Lighten up by lights probably chinese new year'
       width={400}
       height={300}/>
       <h1>Image description</h1>
       <p className={roboto.className}>The Upper Image is of a dragon who is just Standing Still On his 2 legs</p>

    </div>
  )
}

export default About;