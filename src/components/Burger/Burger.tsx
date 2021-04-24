import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

interface Props {
   ingredients: Ingredients;
}

interface Ingredients {
   meat: number;
   salad: number;
   cheese: number;
   bacon: number;
}

const burger = ({ ingredients }: Props) => {
   let transformedIngredients: React.ReactNode[] | string = Object.keys(ingredients)
      .map((igKey: string) => {
         return [...Array(ingredients[igKey as keyof Ingredients])].map((e, index) => (
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
