import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import functions
import { removeHeroAPI } from '../apis/heroesAPI'
import { setAllHeroesThunk } from '../actions'
// Import Components
import SingleHero from './SingleHero'

function HeroesCollection() {

  const heroesState = useSelector(state => state.heroes)
  const dispatch = useDispatch()

  const loading = heroesState.loading
  const failed = heroesState.failed
  const heroArray = heroesState.heroes

  // Mounting
  useEffect(()=> {
    // dispatch(getHeroCollectionThunk())
    dispatch(setAllHeroesThunk())
  }, [])

  // ^ FUNCTIONS

  // ~removeHeroClick
  const removeHeroClick = (hero) => {
    console.log(hero)
    // todo:
    // removeHeroThunk(hero.id)
    // so heroes refreshes and dispatches action to re-render w/o removed hero
    removeHeroAPI(hero.id)
    .then(dispatch(setAllHeroesThunk()))
    .catch(err => {console.log(err)})
    // for now tricky solution for re-render
    
  }

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
    <>
      <h2>My Collection</h2>
      <div className="heroes">
        {heroArray.collection && heroArray.collection.map((hero, index) => {
          return <SingleHero key={index} hero={hero} removeHeroClick={removeHeroClick} />
        })}
      </div>
    </>
  )
}

export default HeroesCollection