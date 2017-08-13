const {Environment, Network} = require('relay-runtime');
require('es6-promise').polyfill();
require('isomorphic-fetch');

const GitHubToken = process.env.GITHUBTOKEN || '';
console.log('GitHubToken -> ' + GitHubToken);

function fetchQuery(
  operation,
  variables,
  cacheConfig,
  uploadables,
) {
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `bearer ${GitHubToken}`,
      'Accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  })
}

const network = Network.create(fetchQuery);

export default network;
