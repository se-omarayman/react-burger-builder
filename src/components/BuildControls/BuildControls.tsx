import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";
import { Ingredients } from "../../containters/BurgerBuilder/BurgerBuilder";

type Props = {
   addIngredient: (type: keyof Ingredients) => void;
   removeIngredient: (type: keyof Ingredients) => void;
   currentPrice: number;
};

const controls = [
   { label: "Salad", type: "salad" },
   { label: "Meat", type: "meat" },
   { label: "Bacon", type: "bacon" },
   { label: "Cheese", type: "cheese" },
];

const buildControls = ({ addIngredient, removeIngredient, currentPrice }: Props) => (
   <React.Fragment>
      <div className={classes.BuildControls}>
         <p>Current Price: {currentPrice} </p>
         {controls.map((ctrl) => (
            <BuildControl
               addIngredient={addIngredient.bind(this, ctrl.type as keyof Ingredients)}
               removeIngredient={removeIngredient.bind(this, ctrl.type as keyof Ingredients)}
               key={ctrl.label}
               label={ctrl.label}
            />
         ))}
      </div>
   </React.Fragment>
);

export default buildControls;
