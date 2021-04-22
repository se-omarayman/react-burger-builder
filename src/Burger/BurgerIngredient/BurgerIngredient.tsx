import classes from "./burgerIngredient.module.css";
import React from "react";

type Props = {
   children?: React.ReactNode;
   type: string;
};

const burgerIngredient = ({ children, type }: Props) => {
   let ingredient = null;

   switch (type) {
      case "bread-bottom":
         ingredient = <div className={classes.BreadBottom}></div>;
         break;
      case "bread-top":
         ingredient = (
            <div className={classes.BreadTop}>
               <div className={classes.Seeds1}></div>
               <div className={classes.Seeds2}></div>
            </div>
         );
         break;
      case "meat":
         ingredient = <div className={classes.meat}></div>;
         break;
      case "cheese":
         ingredient = <div className={classes.Cheese}></div>;
         break;
      case "salad":
         ingredient = <div className={classes.Salad}></div>;
         break;
      case "bacon":
         ingredient = <div className={classes.Bacon}></div>;
         break;
      default:
         ingredient = null;
   }

   return ingredient;
};

export default burgerIngredient;
