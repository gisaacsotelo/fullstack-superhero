// import superagent to make request for data
import request from 'superagent'

export function getTheBooks() {
  // making data request to our db
  return request.get('/api/v1/books').then((response) => {
    console.log(`Response from API request to db: `, response)
    return response.body
  })
}
