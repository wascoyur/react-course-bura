import React from 'react';

 const {
  Consumer: BookstoreServiceProvider,
  Provider: BookstoreServiceConsumer
 } = React.createContext();
 
 export  {BookstoreServiceProvider, BookstoreServiceConsumer}