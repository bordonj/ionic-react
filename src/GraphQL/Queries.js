import { gql } from '@apollo/client';

export const LOAD_PLANETS = gql`
  {
    allPlanets {
      planets {
        name
        id
      }
    }
  }
`

export const LOAD_PLANET = gql`
  query($planetId: ID)  {
    planet(id: $planetId) {
      name
      population
      orbitalPeriod
      climates
      terrains
    }
  }
`