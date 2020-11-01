// import React from 'react';
// import ReactDOM from 'react-dom';

class SwapiService {
  _apiBase = 'https://swapi.dev/api/';

  async getResource(url){
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recived ${res.status}`)
    }
    return await res.json();
  }
  async getAllPeople(){
  const resp = await this.getResource(`people/`);
  return resp.results;
  }
  getPerson(id){
  return this.getResource(`people/${id}/`);
  }
}
const swapy = new SwapiService();
const rnd = Math.round(Math.random() * 10)
swapy.getPerson(rnd).then((people) =>{
  console.log(people/* .map((el) => el */.name);
})
