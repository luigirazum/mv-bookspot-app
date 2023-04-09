const apiBaseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const apiAppID = 'ap5VIBQEIErp63f16k7y';
const apiBaseEP = `apps/${apiAppID}`;

const epBooks = `${apiBaseEP}/books`;

const apiURL = `${apiBaseURL}/${epBooks}`;

const headersList = {
  Accept: '*/*',
  'Content-Type': 'application/json',
};

const apiRequest = (apiMethod, body = {}) => {
  const bodyContent = JSON.stringify(body);

  if (apiMethod === 'GET') {
    return ({
      url: `${apiURL}`,
      method: apiMethod,
      headers: headersList,
    });
  }

  if (['DELETE', 'POST'].includes(apiMethod)) {
    return ({
      url: apiMethod === 'POST'
        ? `${apiURL}`
        : `${apiURL}/${body.item_id}`,
      method: apiMethod,
      headers: headersList,
      data: bodyContent,
    });
  }

  return ({
    url: `${apiURL}`,
    method: apiMethod,
  });
};

export default apiRequest;
