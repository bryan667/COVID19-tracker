import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Select from 'react-select';
import { get } from 'lodash';
import { Spinner } from '../../common';
import { GET_COUNTRIES } from './queries';

const CountrySelect = props => {
  const {
    defaultCountry = { value: 'Philippines', label: 'Philippines' },
    onCountryChange,
  } = props;

  const { loading, data, error } = useQuery(GET_COUNTRIES);
  let countries = get(data, 'countries', []);
  const countryOptions = countries.map((country, index) => {
    return {
      value: get(country, 'name', ''),
      label: get(country, 'name', ''),
    };
  });

  const [selectedCountry, setCountry] = useState(defaultCountry);

  useEffect(() => {
    onCountryChange(selectedCountry);
  }, [selectedCountry]);

  const onChange = value => {
    setCountry(value);
  };

  return (
    <div>
      {loading && <Spinner />}
      {error && console.log('Error:', error)}
      <Select
        options={countryOptions}
        value={selectedCountry}
        onChange={onChange}
        isLoading={loading}
      />
    </div>
  );
};

export default CountrySelect;
