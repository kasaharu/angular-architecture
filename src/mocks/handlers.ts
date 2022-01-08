import { rest } from 'msw';

const heroes = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

export const handlers = [
  rest.get('/api/heroes', (req, res, ctx) => {
    if (getRandomInt(10) < 3) {
      return res(ctx.status(500), ctx.json({ message: 'unexpected error' }));
    }
    return res(ctx.status(200), ctx.json(heroes));
  }),
  rest.get('/api/heroes/:heroId', (req, res, ctx) => {
    const { heroId } = req.params;
    return res(ctx.status(200), ctx.json(heroes.find((hero) => hero.id === Number(heroId))));
  }),
];

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};
