import { arrayDataFromObject } from '../app';

test('arrayDataFromObject creates an array with id, name, icon, and description', () => {
  const data = {
    id: 1,
    name: 'Test Name',
    icon: 'test-icon.png',
    description: 'Test Description',
  };

  const result = arrayDataFromObject(data);

  expect(result).toEqual([1, 'Test Name', 'test-icon.png', 'Test Description']);
});

test('arrayDataFromObject sets description to "Описание недоступно" if not provided', () => {
  const data = {
    id: 1,
    name: 'Test Name',
    icon: 'test-icon.png',
  };

  const result = arrayDataFromObject(data);

  expect(result).toEqual([1, 'Test Name', 'test-icon.png', 'Описание недоступно']);
});