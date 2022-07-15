import React from 'react'

function SingleHero({ hero }) {
  
  const image = hero.images.sm
  console.log(image)
  // const stats = JSON.parse(hero.powerstats)
  // console.log(`STATS: `,stats)
  // const { intelligence, strength, speed, durability, combat, power } = stats

  return (
    <div className="hero">
      <h3>{hero.name}</h3>
      <img src={image} alt={hero.name} />
      <section className='hero-info'>
        <p>Race: {hero.appearance.race}</p>
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
    </div>
  )
}

export default SingleHero