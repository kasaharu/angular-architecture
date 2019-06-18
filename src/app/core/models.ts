export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Album {
  id: number;
  userId: number;
  title: string;
}
