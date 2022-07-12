//  ^ API FILE
// import superagent to make request for data
import request from 'superagent'

// ~ getTheBooksAPI
export function getTheBooksAPI() {
  // making data request to our db
  return request.get('/bookAPI/v1/books').then((response) => {
    console.log(`Response from API request to db: `, response.body)
    return response.body
  })
}

// ~addBookAPI
export function addBookAPI(newBook) {
  return request
    .post('/bookAPI/v1/books')
    .send(newBook)
    .then((response) => response.body)
}
