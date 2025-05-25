const checkHealthStatus = require('../health-checker');

describe('Проверка статуса здоровья персонажа', () => {
  it('Возвращает "healthy" при здоровье больше 50', () => {
    expect(checkHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  it('Возвращает "wounded" при здоровье между 15 и 50 включительно', () => {
    expect(checkHealthStatus({ name: 'Рейнджер', health: 45 })).toBe('wounded');
    expect(checkHealthStatus({ name: 'Варвар', health: 15 })).toBe('wounded');
  });

  it('Возвращает "critical" при здоровье менее 15', () => {
    expect(checkHealthStatus({ name: 'Клерик', health: 10 })).toBe('critical');
  });
});