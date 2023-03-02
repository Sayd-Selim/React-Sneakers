import React from 'react';
import cardStyles from './Card.module.scss'


export function Card({imageUrl, title, price, onPlus}) {
const [isAdded, setIsAdded] = React.useState(false)
const [favorite, setFavorite] = React.useState()

const onClickPlus = () => {
  onPlus()
  setIsAdded(!isAdded)
}

const onFavorite = () => {
  setFavorite(!favorite)
}


  return (
    <div className={cardStyles.card} >
      <div className={cardStyles.favorite}>
        <img onClick={onFavorite} src={favorite ? '/img/heart-liked.svg': '/img/heart-unliked.svg'}  alt="like" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>

      <div className="d-flex justify-between align-center mt-15">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        
          <img className={cardStyles.plus} onClick={onClickPlus}  src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="" />
        
      </div>
    </div>
  );
}
