import MagicianCharacter from './MagicianCharacter';

export default class Magician extends MagicianCharacter {
  constructor(name, type = 'Magician') {
    super(name);
    if (type !== 'Magician') {
      throw new Error('Некорректный тип персонажа');
    } else {
      this.type = type;
    }
    this.attack = 90;
    this.defence = 40;
  }
}
