import React from 'react'
import Cards from '../components/cards'
import { cardsMock } from '../mocks/CardsMock'


const page = () => {



return (
    <div className='max-padd-container  w-full flex gap-7 '>
      {cardsMock.map((card, index) => (
        <Cards
          key={card.id}
          icon={card.icon}
          title={card.title}
          subtitle={card.subtitle}
          msg={card.msg}
          index={index}
        />
      ))}
      </div>
  )
}

export default page