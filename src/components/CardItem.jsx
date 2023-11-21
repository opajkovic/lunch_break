import { useState } from 'react';
import photo from '../assets/meal.jpg'
import Modal from '../layout/Modal';

const CardItem = ({meal}) => {
    const {name,price} = meal;
    const [isOpen, setIsOpen] = useState(false);
    const [item,setItem] = useState(null)

    const handleClick = (meal) => {
      setIsOpen(true);
      setItem(meal)
    }

   return (
    <div className="card w-64 mb-4 bg-base-100 shadow-xl">
      <figure><img src={photo} alt="meal" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}!</h2>
    <p>Lamb chops are usually marinated in various combinations of olive oil, and a variety of fresh herbs before </p>
    <div className="card-actions justify-between">
      <span className='text-xl p-2 text-primary'>{price}€</span>
      <button className="btn btn-primary" onClick={() => handleClick(meal)}>Buy Now</button>
      {isOpen && <Modal closeModal={setIsOpen} item={item}/>}
    </div>
  </div>
</div>
  )
}

export default CardItem