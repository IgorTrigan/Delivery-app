import images from './images'
const storeNames = [
  "Mc Donald's",
  'KFC',
  'Burger King',
  'Evrasia',
  'Mafia',
  'Mister Cat',
]

const storeGoods = {
  "Mc Donald's": [
    { name: 'Big Mac', price: 50, url: images.BigMac, id: 1, count: 0 },
    { name: 'Big Tasty', price: 60, url: images.BigTasty, id: 2, count: 0 },
    {
      name: 'Cheeseburger',
      price: 45,
      url: images.Cheeseburger,
      id: 3,
      count: 0,
    },
    {
      name: 'Double Cheeseburger',
      price: 50,
      url: images.DoubleCheeseburger,
      id: 4,
      count: 0,
    },
    { name: 'Hamburger', price: 30, url: images.Hamburger, id: 5, count: 0 },
    { name: 'Mc Chicken', price: 50, url: images.McChicken, id: 6, count: 0 },
    {
      name: 'Roll Chicken',
      price: 60,
      url: images.RollChicken,
      id: 7,
      count: 0,
    },
    { name: 'Coca Cola', price: 20, url: images.CocaCola, id: 8, count: 0 },
    { name: 'Fanta', price: 20, url: images.Fanta, id: 9, count: 0 },
    { name: 'Sprite', price: 20, url: images.Sprite, id: 10, count: 0 },
  ],
  KFC: [
    { 'Big Mac': 10 },
    { 'Big Tasty': 10 },
    { Cheeseburger: 10 },
    { 'Double Cheeseburger': 10 },
    { Hamburger: 10 },
    { 'Mc Chicken': 10 },
    { 'Roll Chicken': 10 },
    { 'Coca Cola': 10 },
    { Fanta: 10 },
    { Sprite: 10 },
  ],
  'Burger King': [
    { 'Big Mac': 10 },
    { 'Big Tasty': 10 },
    { Cheeseburger: 10 },
    { 'Double Cheeseburger': 10 },
    { Hamburger: 10 },
    { 'Mc Chicken': 10 },
    { 'Roll Chicken': 10 },
    { 'Coca Cola': 10 },
    { Fanta: 10 },
    { Sprite: 10 },
  ],
}

export { storeNames, storeGoods }
