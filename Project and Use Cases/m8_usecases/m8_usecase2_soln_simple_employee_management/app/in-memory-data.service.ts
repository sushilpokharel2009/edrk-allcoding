export class InMemoryDataService {
  createDb() {
    let employees = [
       { id: 1, name: 'Elinor Bysshe' },
  { id: 2, name: 'Jakki Raleigh' },
  { id: 3, name: 'Gil Frona' },
  { id: 4, name: 'Dionne Natille' },
  { id: 5, name: 'Kevyn Ravindra' },
  { id: 6, name: 'Claudia Serina' },
  { id: 7, name: 'Calanthia Elsie' },
  { id: 8, name: 'Chris Kipling' },
  { id: 9, name: 'Gautam Harlow' },
  { id: 10, name: 'Lissa Liddy' }
    ];
    return { employees };
  }
}
