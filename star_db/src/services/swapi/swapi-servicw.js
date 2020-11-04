export default class SwapiService {
  _apiBase = 'https://swapi.dev/api/';

  async getResource(url){
    console.log(`${this._apiBase}${url}`);

    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recived ${res.status}`)
    }
    return await res.json();
  }
  async getAllPeople(){
  const resp = await this.getResource(`people/`);
  return resp.results.map(this._transformPerson);
  }
  async getPerson(id){
    const resp =await this.getResource(`people/${id}/`);
    const people = this._transformPerson(resp);
    return people;
  }
  async getPlanet(id){
    const planet = await this.getResource(`planets/${id}`)
    const pOut = this._transformPlanet(planet);
    return pOut
  }
  async getAllPlanets(){
    const response = await this.getResource(`planets/`);
    const planets = response.results.map(this._transformPlanet);
    return planets
  }
  async getAllSpaceShips(){
    const resp = await this.getResource(`starships/`);
    const ships = resp.results.map(this._transformSpaceShip)
    return ships;
  }
  async getSpaceShip(id){
    const resp = await this.getResource(`starships/${id}`);
    const ship = resp._transformSpaceShip(resp);
    return ship;
  }
  _extractId(item){
    let id = item.url.match(/\/([\d]*)\/$/)[1];
    return id
  }
  _transformPlanet(planet){
    return {
      id:this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diametr: planet.diameter
    }
  }
  _transformPerson(person){
    return{
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birdYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
  _transformSpaceShip(ship){
    return{
      id: this._extractId(ship),
      name: ship.name,
      clazz: ship.starship_class,
    }
  }

}

// const test = new SwapiService();
// console.log('getAllPlanet:', test.getAllPlanets());
