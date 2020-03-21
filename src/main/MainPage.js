import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import DatePicker from 'react-date-picker';
import moment from 'moment';
import { Alert } from 'react-bootstrap';
import { get, isEmpty } from 'lodash';
import { CountrySelect, PrettyJson, Spinner } from '../common';
import { GET_COVID_RESULT } from './queries';

let MainPage = () => {
  const now = new Date();
  const yesterday = new Date(now.setDate(now.getDate() - 1));
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState(yesterday);

  const formattedDate = moment(startDate).utc();
  const formattedCountry = get(country, 'label', '');
  const { loading, data, error } = useQuery(GET_COVID_RESULT, {
    variables: {
      country: formattedCountry,
      date: formattedDate,
    },
    fetchPolicy: 'network-only',
  });

  const onCountryChange = value => {
    if (!isEmpty(value)) {
      setCountry(value);
    }
  };

  const onDateChange = date => {
    if (date) {
      setStartDate(date);
    }
  };

  return (
    <div>
      <CountrySelect
        defaultCountry={{ value: 'Philippines', label: 'Philippines' }}
        onCountryChange={onCountryChange}
      />
      <DatePicker onChange={onDateChange} value={startDate} clearIcon={null} />
      {isEmpty(error) && !loading && (
        <div>
          <PrettyJson json={data} />
        </div>
      )}
      {error && (
        <div style={{ maxWidth: '400px' }}>
          <Alert variant={'danger'}>
            {console.log('Error:', error, formattedCountry, formattedDate)}
            <div>{`Data might not be available for this Date or Country, try a different selection.
        `}</div>
          </Alert>
        </div>
      )}
      {loading && <Spinner />}
    </div>
  );
};

export default MainPage;
