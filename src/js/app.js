const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
    }
  ]
}

export function arrayDataFromObject({ id, name, icon, description }) {
  if (!description) {
    description = 'Описание недоступно';
  }
  const arr = [id, name, icon, description];
  return arr;
}

arrayDataFromObject(character.special[1]);