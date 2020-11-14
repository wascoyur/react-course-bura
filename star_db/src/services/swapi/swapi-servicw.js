export default class SwapiService {
  _apiBase = 'https://swapi.dev/api/';
  _imgApiBase = 'https://starwars-visualguide.com/assets/img/';
  async getResource(url){

    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recived ${res.status}`)
    }
    return await res.json();
  }
  getAllPeople = async() =>{
    const resp = await this.getResource(`people/`);
    const out = resp.results.map((item) =>{
      return this._transformPerson(item)
    })
    return out;
  }
   getPerson =async(id) =>{
    const resp =await this.getResource(`people/${id}/`);
    const people = this._transformPerson(resp);
    return people;
  }
  getImgPerson = (id) =>{
    const img = `${this._imgApiBase}characters/${id}.jpg`;
    return img;
  }
  getImgPlanet = (id) =>{
    const img = `${this._imgApiBase}planets/${id}.jpg`;
    return img;
  }
  getImgSpaceShip = (id) =>{
    const img = `${this._imgApiBase}starships/${id}.jpg`;
    return img;
  }
   getPlanet = async(id) =>{
    const planet = await this.getResource(`planets/${id}`)
    const pOut = this._transformPlanet(planet);
    return pOut
  }
    getAllPlanets = async() =>{
    const response = await this.getResource(`planets/`);
    const planets = response.results.map(this._transformPlanet);
    return planets
  }
  async getAllSpaceShips(){
    const resp = await this.getResource(`starships/`);
    const ships = this.results.map(this._transformSpaceShip)
    return ships;
  }
   getSpaceShip = async (id) =>{
    const resp = await this.getResource(`starships/${id}`);
    const ship = this._transformSpaceShip(resp);
    return ship;
  }
  _extractId(item){
    let id = item.url.match(/\/([\d]*)\/$/)[1];
    return id
  }
  _transformPlanet = (planet) =>{
    const id =this._extractId(planet);
    
    return {
      id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diametr: planet.diameter,
      img: this.getImgPlanet(id)
    }
  }
  _transformPerson = (person) => {
    const id = this._extractId(person);
    const out = {
      id:id ,
      name: person.name,
      gender: person.gender,
      birdYear: person.birth_year,
      eyeColor: person.eye_color,
      img: this.getImgPerson(id),
    }
    return out
  }
  _transformSpaceShip = (ship) => {
    const id = this._extractId(ship);
    return{
      id: this._extractId(ship),
      name: ship.name,
      model: ship.model,
      manufacturer: ship.manufacturer,
      img: this.getImgSpaceShip(id)
    }
  }

}

// const test = new SwapiService();
// console.log('getAllPlanet:', test.getAllPlanets());
