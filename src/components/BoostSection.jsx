import React from 'react'
import Button from './Button'
import { useSpring } from '@react-spring/web'
import { animated } from '@react-spring/web';

// I created a new branch and I'm trying to do some cool stuffs with VCs

const BoostSection = () => {
  const springs = useSpring({
    from: { y: 10 },
    to: { y: 0 }
  })
  return (
    <section className='grid place-content-center place-items-center bg-boost-texture bg-no-repeat bg-dark_violet mt-10  ring py-20
    '>
      <animated.h2 style={{... springs}} className='text-white text-center text-lg md:text-lg lg:text-3xl font-bold font-serif pb-2'>Boost your links today</animated.h2>
      <Button text='Get Started'></Button>
    </section>
  )
}

export default BoostSection
