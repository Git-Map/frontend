export const ACTION_TYPES = {
  FETCH_COUNTRIES:'FETCH_COUNTRIES',
  COUNTRIES_RECEIVED:'COUNTRIES_RECEIVED'
};

const fetchCountries = () => {
  return {
    type: ACTION_TYPES.FETCH_COUNTRIES
  };
};

const countriesReceived = (countries) => {
  return {
    type:ACTION_TYPES.COUNTRIES_RECEIVED,
    payload:countries
  }
};

export default {
  fetchCountries,
  countriesReceived
};
