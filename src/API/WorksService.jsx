export default class WorksService {
  static async getALL(...params) {
    const url = new URL(
      'http://localhost:3000/works'
    );
    if ([...params]) {
      for (let item of [...params]) {
        url.searchParams.set(item.name, item.value);
      }
    }
  
    let response = await fetch(url);
    return await response.json();
  }
}