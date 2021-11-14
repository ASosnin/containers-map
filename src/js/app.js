export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'name должна быть в диапазоне от 2 до 10 символов'],
      [2, 'Абстрактный класс не может быть создан'],
      [3, 'Персонаж уже в команде'],
      [4, 'Нельзя повысить уровень мёртвого персонажа'],
    ]);
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown error';
  }
}
