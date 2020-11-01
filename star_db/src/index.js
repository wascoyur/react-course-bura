// import React from 'react';
// import ReactDOM from 'react-dom';

const url = 'https://swapi.dev/api/people/2';
const getResource = async  (url) =>{
  const res = await fetch(url);
  const body = await res.json();
  return body;
};

getResource(url)
  .then((body) => {
    console.log(body);
  }).catch((e) => {
    console.log(e);
  })
