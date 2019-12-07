export default interface User {
  cell: string,
  dob: DOB,
  email: string,
  gender: string,
  id: ID,
  location: Location, 
  login: object, // {uuid: "3e626340-8654-44f5-92d2-10400bf98c9f", username: "tinydog175", password: "broadway", salt: "FAwrp9uI", md5: "4b9e0bf6911bd77593316011e42c2edd", …}
  name: Name,
  nat: string,
  phone: string,
  picture: Picture,
  registered: DOB
}

interface Coordinates {
  latitude: string,
  longitude: string
}

interface DOB {
  age: number,
  date: string
}

interface ID {
  name: string,
  value: any
}

interface Location {
  street: string, 
  city: string, 
  state: string, 
  postcode: string, 
  coordinates: Coordinates
}

interface Name {
  title?: string,
  first: string,
  last: string
}

interface Picture {
  large: string,
  medium: string,
  thumbnail: string
}