import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import functions
import { getAllHeroesDBAPI } from '../apis/heroesAPI'
import { getHeroesFromDbAC } from '../actions'
// Import Components
import SingleHero from './SingleHero'

function HeroesCollection() {
  const dispatch = useDispatch()
  // const heroesArr = useSelector(state => state.heroes)

  useEffect(()=> {
    // 1 Request API to get heroes from DB
    // 2 recieve heroes
    getAllHeroesDBAPI()
      .then(resHeroesArray => {
        const action = getHeroesFromDbAC(resHeroesArray)
        dispatch(action)
      })
      .catch(err => console.log(err))
    // 3 get them into an action to dispatch them to the store
    // 4 use store array to map through the data



    // console.log(`Inside the effect heroes`)
    // // get data from API (asking to database)
    // getAllHeroesDBAPI()
    // // we will recieve an array with the current heroes in the database
    //   .then(heroesArray => {
    //     //todo:  try using thunk here
    //     console.log(`response form API call in Heroes component:\n`,heroesArray)
    //   })
    //   .catch(err => console.log(err))
  }, [])

  return (
    <div className="heroes-collection">
      {/* {heroesArr.map((singleHeroe, index) => {
        <SingleHero key={index} hero={singleHeroe} />
      })} */}
    </div>
  )
}

export default HeroesCollection