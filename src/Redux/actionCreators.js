import * as actionTypes from './actionTypes';

//this function for adding ingredient
export const addIngredient = igtype => { //this igtype come from BurgerBuilder.js dispatch function
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: igtype,
    }
}

// this function for removing ingredient
export const removeIngredient = igtype => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: igtype,
    }
}

// this function for update purchasable or reset parchasable
// updatepurchasable function can not recive any paramiter bcz this function can check automaticaly from redux store.
export const updatePurchasable = () => {
    return {
        type: actionTypes.UPDATE_PURCHASABLE,
    }
}

export const resetIngredients = () => {
    return {
        type: actionTypes.RESET_INGREDIENT,
    }
}