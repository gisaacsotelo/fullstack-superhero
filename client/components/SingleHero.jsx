import React from 'react'
// import functions


function SingleHero({ hero , addHeroClick }) {

  const image = hero.images.sm
  const { name, race, collected } = hero

  // const stats = JSON.parse(hero.powerstats)
  // console.log(`STATS: `,stats)
  // const { intelligence, strength, speed, durability, combat, power } = stats

  return (
    <div className="hero">
      <h3>{name}</h3>
      <img src={image} alt={name} />
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
      {collected && <button>Remove</button>}
      <button>Profile</button>
    </div>
  )
}

export default SingleHero