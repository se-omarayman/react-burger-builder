import React from "react";
import Burger from "../../components/Burger/Burger";

type MyState = {
   ingredients: {
      meat: number;
      salad: number;
      cheese: number;
      bacon: number;
   };
};

class BurgerBuilder extends React.Component {
   state: MyState = {
      ingredients: {
         meat: 0,
         salad: 0,
         cheese: 0,
         bacon: 0,
      },
   };

   render() {
      return (
         <React.Fragment>
            <Burger ingredients={this.state.ingredients} />
            <div>build controls</div>
         </React.Fragment>
      );
   }
}

export default BurgerBuilder;
