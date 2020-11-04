export default class SwapiService {
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
  _extractId(item){
    let id = item.url.match(/\/([\d]*)\/$/)[1];
    console.log('id:', id);
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

}

// const test = new SwapiService();
// console.log('getAllPlanet:', test.getAllPlanets());
