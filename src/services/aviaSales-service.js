/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
export default class TicketService {
  async getSearchId() {
    const response = await fetch('https://aviasales-test-api.kata.academy/search');
    if (response.status === 404) throw new Error('Технические работы на сервере');
    const data = await response.json();
    return data.searchId;
  }

  async getTickets(searchId) {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    const data = await response.json();
    return data;
  }
}
