import Daemon from '../Magician';

test('Magician', () => {
  const expected = {
    attack: 90,
    defence: 40,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Magician',
  };
  const received = new Daemon('name', 'Magician');
  expect(received).toEqual(expected);
});

test('type error in Magician', () => {
  function typeDaemon() {
    return new Daemon('name', 'sometype');
  }
  expect(typeDaemon).toThrowError(new Error('Некорректный тип персонажа'));
});
