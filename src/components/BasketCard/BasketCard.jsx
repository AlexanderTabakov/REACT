import React from "react";
import '../BasketCard/BasketCard.css'
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/reducers/cart";

const BasketCard = ({id, image, title, price}) => {

    const dispatch = useDispatch();

    const onRemoveFromCartHandler = () => {
        dispatch(removeFromCart(id))
    }

    return (

        <div className={'basketCard'}>
                <img className={'image'} src={image} alt="product"/>

                <p className={'text title'}>{title}</p>

                <span>
                    <p className={'text price'} style={{color : '#D58C51'}}>{price}₽  <button className={'remove-btn'} onClick={onRemoveFromCartHandler}>+</button> </p>
                </span>

        </div>
    )
}

export default BasketCard;