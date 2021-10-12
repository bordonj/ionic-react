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