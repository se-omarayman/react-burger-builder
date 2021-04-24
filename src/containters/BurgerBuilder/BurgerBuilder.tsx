import React from "react";
import BuildControls from "../../components/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";

interface MyState {
   ingredients: Ingredients;
   totalPrice: number;
}

export interface Ingredients {
   meat: number;
   salad: number;
   cheese: number;
   bacon: number;
}
interface ingredientPrices extends Ingredients {}

const INGREDIENT_PRICES: ingredientPrices = {
   cheese: 0.5,
   meat: 1.3,
   salad: 0.4,
   bacon: 0.7,
};
class BurgerBuilder extends React.Component {
   state: MyState = {
      ingredients: {
         meat: 0,
         salad: 0,
         cheese: 0,
         bacon: 0,
      },
      totalPrice: 4,
   };

   addIngredientHandler = (type: keyof Ingredients) => {
      const oldCount: number = this.state.ingredients[type];
      const newCount: number = oldCount + 1;
      let updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = newCount;
      const priceAddition = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;
      this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
   };

   removeIngredientHandler = (type: keyof Ingredients) => {
      const oldCount: number = this.state.ingredients[type];
      if (oldCount <= 0) return;
      const newCount: number = oldCount - 1;
      let updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = newCount;
      const priceAddition = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceAddition;
      this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
   };

   render() {
      return (
         <React.Fragment>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
               currentPrice={this.state.totalPrice}
               addIngredient={this.addIngredientHandler}
               removeIngredient={this.removeIngredientHandler}
            />
         </React.Fragment>
      );
   }
}

export default BurgerBuilder;
