//  ^ API FILE
// import superagent to make request for data
import request from 'superagent'

// ~ getTheBooksAPI
export function getTheBooksAPI() {
  // making data request to our db
  return request.get('/bookAPI/v1/books').then((response) => {
    return response.body
  })
}
