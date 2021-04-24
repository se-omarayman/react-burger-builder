import React from "react";
import classes from "./BuildControl.module.css";

type Props = {
   label: string;
   addIngredient: () => void;
   removeIngredient: () => void;
};

const buildControl = ({ label, addIngredient, removeIngredient }: Props) => (
   <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button onClick={removeIngredient} className={classes.Less}>
         less
      </button>
      <button onClick={addIngredient} className={classes.More}>
         more
      </button>
   </div>
);

export default buildControl;
