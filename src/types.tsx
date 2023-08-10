interface LoggedUser{
  username: string
  token: string
}

interface Postable {
  body: string
  timestamp: string | Date
}

const exampleUser: LoggedUser = {
  username: '',
  token: ''
}

console.log(exampleUser)
const postex: Postable = {
  body: '',
  timestamp: ''
}

console.log(postex)