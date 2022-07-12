import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import functions
import { getAllHeroesDBAPI } from '../apis/heroesAPI'

function Heroes() {

  // Access store state
  // const heroesArr = useSelector(state => state.heroes)

  // Using this effect only on mounting
  useEffect(()=> {
    /* pseudo:
    call API to get list of all the heroes
     */
  }, [])


  return (
    <div>Heroes</div>
  )
}

export default Heroes