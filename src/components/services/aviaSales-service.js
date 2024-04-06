export default class ApiServiceAviaSales {

    
    searchIds = async () = await fetch('https://aviasales-test-api.kata.academy/search')
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err));
}