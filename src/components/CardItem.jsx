import { useState } from 'react';
import Modal from '../layout/Modal';
import { useSelector } from 'react-redux';

const CardItem = ({meal}) => {
    const numItemsInCart = useSelector((state) => state.cart.meals.length)
    const {name,price} = meal;
    const [isOpen, setIsOpen] = useState(false);
    const [item,setItem] = useState(null);
    const photo= `https://picsum.photos/seed/{${Math.random()}}/200`

    const handleClick = (meal) => {
      setIsOpen(true);
      setItem(meal)
    }

   return (
    <div className={numItemsInCart==0 ? "w-full pl-2 pr-2 md:w-1/5 md:p-0" : "w-full pl-2 pr-2 md:w-1/3 md:p-0"}>
    <div className="card bg-base-100 m-1 shadow-xl">
    <figure><img src={photo} alt="meal" className='w-full h-1/4' /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}!</h2>
    <p>Lamb chops are usually marinated in various combinations of olive oil, and a variety of fresh herbs before </p>
    <div className="card-actions justify-between">
      <span className='text-xl p-2 text-primary'>{price}€</span>
      <button className="btn btn-primary" onClick={() => handleClick(meal)}>Buy Now</button>
      {isOpen && <Modal closeModal={setIsOpen} item={item} photo={photo}/>}
    </div>
  </div>
  </div>
</div>
  )
}

export default CardItem