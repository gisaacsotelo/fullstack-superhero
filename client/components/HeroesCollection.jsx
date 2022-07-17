import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import functions
// import { getHeroCollectionThunk } from '../apis/heroesAPI'
import { getHeroCollectionThunk, setAllHeroesThunk } from '../actions'
// Import Components
import SingleHero from './SingleHero'

function HeroesCollection() {

  const heroesState = useSelector(state => state.heroes)
  const dispatch = useDispatch()

  const loading = heroesState.loading
  const failed = heroesState.failed
  const heroArray = heroesState.heroes
  console.log(`heroArray: `, heroArray)

  // Mounting
  useEffect(()=> {
    // dispatch(getHeroCollectionThunk())
    dispatch(setAllHeroesThunk())
  }, [])

  // ! RETURNS

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
    <div className="heroes-collection">
      {heroArray.collection && heroArray.collection.map((hero, index) => {
        console.log(hero)
        return <SingleHero key={index} hero={hero} />
      })}
    </div>
  )
}

export default HeroesCollection