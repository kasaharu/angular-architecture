interface User {
  name: string;
  email: string;
  website: string;
}

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null,
};
