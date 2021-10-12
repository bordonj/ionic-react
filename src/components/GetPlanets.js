import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_PLANETS } from '../GraphQL/Queries'

function GetPlanets() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  
  const {error, loading, data} = useQuery(LOAD_PLANETS);
  
  const response = useQuery(LOAD_PLANETS);

  useEffect(() => {
    const search = async () => {

    }
    console.log(data)
  }, [data])

  return (
    <div className="get-planets">
      <input
        type="text"
        placeholder="Search..."
        onChange={event => setSearchTerm(event.target.value)}
      />
      {data.allPlanets.planets.filter(val => {
        if (searchTerm == "") {
          return val
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <div className="planet" key={key}>
            <h3>{val.name}</h3>
          </div>
        )
      })}
      {/* <div>
        {data.allPlanets.planets.map(planet => {
          return (
            <div key={planet.id}>
              <h1>{planet.name}</h1>
            </div>
          )
        })}
      </div> */}
    </div>
  )
}

export default GetPlanets;
