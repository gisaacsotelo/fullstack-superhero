import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import functions
import { addHeroDB } from '../apis/heroesAPI'
import { setAllHeroesThunk, addHeroeAC } from '../actions'
// import components
import SingleHero from './SingleHero'

function Heroes() {

  const heroesState = useSelector(state => state.heroes)
  const dispatch = useDispatch()
 
  // console.log(`heroesState: `,heroesState)
  const loading = heroesState.loading
  const failed = heroesState.failed
  const heroArray = heroesState.heroes
  console.log(`heroArray: `,heroArray)
  
  // Mounting
  useEffect(()=> {
    dispatch(setAllHeroesThunk())
  }, [])




  // functions
  const addHeroClick = (hero) => {
    console.log(`click`, hero)
    hero.collected = true
    // addHeroThunk(hero)
    addHeroDB(hero)
    dispatch(addHeroeAC(hero))
  }

  //  ! RETURNS

  if (loading) {
    return (
      <div className="container">
        HEROES ARE LOADING....
      </div>
    )
  }
  if (failed){
    return (
      <div className="container">
        uh-oh.... SOMETHING FAILED.
      </div>
    )
  }

  return (
    <>
      <div>Heroes</div>
      {heroArray.api && heroArray.api.map((singleHero, index) => {
        return <SingleHero key={index} hero={singleHero} addHeroClick={addHeroClick} />
      })}
    </>
  )
}

export default Heroes