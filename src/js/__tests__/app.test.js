import ErrorRepository from '../app';

test.each([
  [1, 'name должна быть в диапазоне от 2 до 10 символов'],
  [2, 'Абстрактный класс не может быть создан'],
  [3, 'Персонаж уже в команде'],
  [4, 'Нельзя повысить уровень мёртвого персонажа'],
  [22, 'Unknown error'],
])('Проверка метода translate', (code, description) => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(code)).toBe(description);
});
