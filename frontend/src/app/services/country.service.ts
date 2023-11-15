export default class CountryService {

  static url = "http://localhost:4000/api/country";
  constructor() {}

  static async getCountries(name: string) { 
    const res = await fetch(`${this.url}/getCountrys?name=${name}`, {
        method: "GET",
      });
    return await res.json()
  }
}
