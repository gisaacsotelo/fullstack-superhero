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
 
  const loading = heroesState.loading
  const failed = heroesState.failed
  const heroArray = heroesState.heroes

  
  // Mounting
  useEffect(()=> {
    dispatch(setAllHeroesThunk())
  }, [])




  // ^ FUNCTIONS

  // ~ addHeroClick
  const addHeroClick = (hero) => {

    hero.collected = true

    // todo:
    // addHeroThunk(hero)
    // so it refreshes the heroes state  w/o the add to collection if already collected
    addHeroDB(hero)
    
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
      <h2>All Heroes</h2>
      <div className="heroes">
      {heroArray.api && heroArray.api.map((singleHero, index) => {
        return <SingleHero key={index} hero={singleHero} addHeroClick={addHeroClick} />
      })}
      </div>
    </>
  )
}

export default Heroes