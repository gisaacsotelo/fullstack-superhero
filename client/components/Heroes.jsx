import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import functions
import { getAllHeroesExtAPI } from '../apis/heroesAPI'
import { setAllHeroesThunk, addHeroesAC } from '../actions'
// import components
import SingleHero from './SingleHero'

function Heroes() {
  // Access store state
  const heroesState = useSelector(state => state.heroes)
  const dispatch = useDispatch()
  console.log(`heroesState: `,heroesState)
  const loading = heroesState.loading
  const failed = heroesState.failed
  const heroArray = heroesState.heroes
  console.log(`heroArray: `,heroArray)

  // Using this effect only on mounting
  useEffect(()=> {
    getAllHeroesExtAPI()
      .then( heroes => {
        const action = addHeroesAC(heroes)
        dispatch(action)
        }
      )
      .catch(err => console.log(`ERRORSAXO: `,err))

    
    // dispatch
    // dispatch(setAllHeroesThunk())

  }, [])

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
      {heroArray.map((singleHero, index) => (
        <SingleHero key={index} hero={singleHero} />
      ))}
    </>
  )
}

export default Heroes