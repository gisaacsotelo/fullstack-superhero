//  ^ API FILE
// import superagent to make request for data
import request from 'superagent'

// ~ getTheBooksAPI
export function getTheBooksAPI() {
  // making data request to our db
  return request.get('/bookAPI/v1/books').then((response) => {
<<<<<<< HEAD
    console.log(`Response from API request to db: `, response.body)
||||||| e28f4ab
    console.log(`Response from API request to db: `, response)
=======
>>>>>>> 2b93b7230a8832f7529ec14696a647a235992460
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
