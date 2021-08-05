import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Tandoori Chicken',
    description: 'Tandoori Chicken from Nor Restaurant...',
    price: 190,
    imgSrc:'./images/mutton.png',
  },
  {
    id: 'm2',
    name: 'Mutton Gosht Nihari',
    description: 'Mutton Gosht Nihari from Nor Restaurant...',
    price: 16.5,
    imgSrc:'./images/nihari.jpg',
  },
  {
    id: 'm3',
    name: 'Mutton Biryani',
    description: 'Mutton Biryani from Nor Restaurant... ',
    price: 12.99,
    imgSrc:'./images/biryani.jpg',
  },
  {
    id: 'm4',
    name: 'Chicken Tikka',
    description: 'Chicken Tikka from Nor Restaurant...',
    price: 18.99,
    imgSrc:'./images/chickentikka.jpg',
  },
  {
    id: 'm5',
    name: 'Mutton Korma',
    description: 'Mutton Korma from Nor Restaurant...',
    price: 18.99,
    imgSrc:'./images/muttonkorma.jpg',
  },
  {
    id: 'm6',
    name: 'Chicken Biryani',
    description: 'Chicken Biryani from Nor Restaurant...',
    price: 18.99,
    imgSrc:'./images/chikanbiryani.jpg',
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      imgSrc={meal.imgSrc}
    />
  ));
  const menu="Non-Veg Menu"

  return (
    <section className={classes.meals}>
      <Card menu={menu}>
        <ul className={classes.mealCard}>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
