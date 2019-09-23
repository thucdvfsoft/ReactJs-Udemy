import React, {Fragment} from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const summary = Object.keys(props.ingredients)
                          .map(igKey => 
                          <li key={igKey}> 
                            <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]} 
                          </li>);
    return(
        <Fragment>
            <h3> Your Order</h3>
            <p> A delicious burger with the following ingredients: </p>
            <ul>
                {summary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked = {props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked = {props.purchaseContinued}>CONTINUE</Button>
        </Fragment>
    );
};

export default orderSummary;