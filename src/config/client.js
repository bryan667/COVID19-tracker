import ApolloClient from 'apollo-boost';
import './css/DayPicker.css';
import './css/bootstrap.min.css';

const client = new ApolloClient({
  uri: 'https://covid19-graphql.now.sh/',
});

export default client;
