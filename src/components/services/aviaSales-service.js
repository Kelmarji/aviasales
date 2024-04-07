/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
export default class TicketService {
  async getSearchId() {
    const response = await fetch('https://aviasales-test-api.kata.academy/search');
    const data = await response.json();
    return data.searchId;
  }

  async getTickets(searchId) {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    const data = await response.json();
    return data;
  }
}
