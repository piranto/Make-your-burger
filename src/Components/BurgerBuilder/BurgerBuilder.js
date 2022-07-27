import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import Summary from "./Summary/Summary";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import { addIngredient, removeIngredient, updatePurchasable } from '../../Redux/actionCreators';


// this function call all the store from Redux(mane redux ar skl state annbe)
const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,  // age ja state a silo segulo akhon redux a asbe props hisebe.
        totalPrice: state.totalPrice,    //same
        purchasable: state.purchasable, //same
    }
}


//this function use for dispatched the redux function
const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (igtype) => dispatch(addIngredient(igtype)),
        removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
        updatePurchasable: () => dispatch(updatePurchasable()),
    }
}



class BurgerBuilder extends Component {
    state = {

        modalOpen: false,
    }

    addIngredientHandle = type => {

        this.props.addIngredient(type);
        this.props.updatePurchasable();
    }

    removeIngrediendtHandle = type => {
        this.props.removeIngredient(type);
        this.props.updatePurchasable();
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    } //this function use for Open modal

    handleCheckout = () => {
        this.props.history.push("/checkout")
    }



    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients={this.props.ingredients} />
                    <Controls
                        ingredientAdded={this.addIngredientHandle}
                        ingredientRemoved={this.removeIngrediendtHandle}
                        price={this.props.totalPrice}
                        toggleModal={this.toggleModal}
                        purchasable={this.props.purchasable} />

                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summary</ModalHeader>
                    <ModalBody>
                        <h5>Total Price: {this.props.totalPrice.toFixed(0)} BDT</h5>
                        <Summary ingredients={this.props.ingredients}></Summary>

                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ backgroundColor: "#D70F64" }} onClick={this.handleCheckout}>Continue to  Checkout</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>

                </Modal>
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
