import { User } from '../../features/user/domain/user';

export const createMockUser = (override: Partial<User>): User => {
  return {
    id: 1,
    name: '',
    username: '',
    email: '',
    address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '0', lng: '0' } },
    phone: '',
    website: '',
    company: { name: '', catchPhrase: '', bs: '' },
    ...override,
  };
};
