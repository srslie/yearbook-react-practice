import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = (props) => {
  return props.staff.map(person => {
    console.log(person.name)
    return (
      <div>
        <img src={person.photo}/>
        <h1 className="name">{person.name}</h1>
        <h2>"{person.quote}"</h2>
        <h3>{person.superlative}</h3>
      </div>
    )
  })
}

export default Cohort;
