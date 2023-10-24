import Button from './Button'
import { useSpring } from '@react-spring/web'
import { animated } from '@react-spring/web';
import { useDispatch, useSelector } from 'react-redux';
import { clearFocus, setFocus } from '../redux/focus';

// I created a new branch and I'm trying to do some cool stuffs with VCs

const BoostSection = () => {
  const { isFocused } = useSelector(state => state.focus)
  //----------------------or-----------------------------
  // const isFocused = useSelector((state) => state.focus.isFocused)


  // Used redux toolkit to store the focused state here 
  const dispatch = useDispatch()
  const springs = useSpring({
    from: { x: isFocused ? 100 : 0 },
    x: isFocused ? 10 : 0,
    transform: isFocused ? 'scale(1)' : 'scale(0.8)',
  })

  const handleFocus = () => {
    dispatch(setFocus());
  }
  
  return (
    <section
      onMouseOver={handleFocus}
      tabIndex='1'
      className='grid place-content-center place-items-center bg-boost-texture bg-no-repeat bg-dark_violet mt-10  py-20
    '>
      <div className='grid place-items-center py-10'>
        <animated.h2
        style={{ ...springs }}
        className='text-white text-center text-lg md:text-lg lg:text-3xl font-bold font-serif pb-2'>Boost your links today</animated.h2>

      <Button text='Get Started'></Button> 
      </div>
     
    </section>
  )
}

export default BoostSection
