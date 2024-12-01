import React from 'react'
import Banner from './component/Banner/Banner'
import PopularMovieSlide from './component/PopularMoiveSlide/PopularMovieSlide'
import TopRatedSlide from './component/TopRatedSlide/TopRatedSlide'
import UpcomingSlide from './component/UpcomingSlide/UpcomingSlide'

const Homepage = () => {
  return (
    <div>
      <Banner/>
      <PopularMovieSlide/>
      <TopRatedSlide/>
      <UpcomingSlide/>
    </div>
  )
}

export default Homepage