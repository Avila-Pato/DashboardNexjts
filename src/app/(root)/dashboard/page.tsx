import React from 'react'
import Cards from '../components/cards'
import { cardsMock } from '../mocks/CardsMock'
import DataTable from '../components/table/data-table'


const page = () => {



return (
    <div className='max-padd-container grid lg:grid-cols-4 sm:grid-cols-2  gap-7  '>
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

      <section>
        <h1>Table</h1>
        <DataTable  />
      </section>
      </div>
  )
}

export default page