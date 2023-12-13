import React from 'react'
import Hero from './Hero';
import Payout from './Payout';
import HowtoBecome from './HowtoBecome';
import AppWorks from './AppWorks';

const HomeScreen = () => {
  return (
    <div>
      <Hero/>
      <Payout/>
      <HowtoBecome/>
      <AppWorks/>
    </div>
  )
}

export default HomeScreen;