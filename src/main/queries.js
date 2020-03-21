import { gql } from 'apollo-boost';

export const GET_COVID_RESULT = gql`
  query getCovidResults($country: String!, $date: String) {
    result(country: $country, date: $date) {
      confirmed
      deaths
      recovered
      growthRate
    }
  }
`;
