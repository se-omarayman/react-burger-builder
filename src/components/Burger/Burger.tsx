import classes from "./burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
type Props = {
   ingredients: {
      [key: string]: number;
   };
};

const burger = ({ ingredients }: Props) => {
   let transformedIngredients: React.ReactNode[] | string = Object.keys(ingredients)
      .map((igKey) => {
         return [...Array(ingredients[igKey])].map((e, index) => (
            <BurgerIngredient key={igKey + index} type={igKey} />
         ));
      })
      .reduce((accum, el) => {
         return accum.concat(el);
      }, []);

   if (transformedIngredients.length === 0) {
      transformedIngredients = "please start adding ingredients";
   }

   return (
      <div className={classes.Burger}>
         <BurgerIngredient type="bread-top" />
         {transformedIngredients}
         <BurgerIngredient type="bread-bottom" />
      </div>
   );
};

export default burger;
