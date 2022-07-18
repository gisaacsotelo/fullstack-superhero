import React from 'react'
// import functions


function SingleHero({ hero , addHeroClick, removeHeroClick }) {
  // console.log(hero)
  // const image = hero.images.sm
  const { name, race, collected, images } = hero
  let imgCollection = ''
  let imgAPI = ''
  
  if(collected) {
    let image = JSON.parse(images)
    imgCollection = image.sm
  } else {
    imgAPI = images.sm
  }
 

  return (
    <div className="hero">
      <h3>{name}</h3>
      <img src={collected ? imgCollection : imgAPI} alt={name} />
      <section className='hero-info'>
        <p>Race: {race}</p>
        <div className='power-stats'>
          <p>STATS:</p>
          {/* <p>Strength: {strength}</p>
          <p>Speed: {speed}</p>
          <p>Intelligence: {intelligence}</p>
          <p>Durability: {durability}</p>
          <p>Combat: {combat}</p>
          <p>Power: {power}</p> */}
        </div>
      </section>
      {!collected && <button onClick={() => addHeroClick(hero)}>Add To Collection</button>}
      {collected && <button onClick={() => removeHeroClick(hero)}>Remove</button>}
      <button>Profile</button>
    </div>
  )
}

export default SingleHero