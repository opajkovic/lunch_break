import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeal } from '../redux/cart/cartSlice';

const Modal = ({closeModal,item,photo}) => {
const [count,setCount] = useState(1);
const dispatch = useDispatch();

const decreaseCount = () => {
  if(count !=1 || count > 1) {
    setCount(count => count-1)
  }
}

const increaseCount = () => {
   setCount(count => count + 1)
}

const handleClick = () => {
  closeModal(false);
  dispatch(addMeal([item.id, count]))
}
false
  return (
    <>
    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-md w-96 flex justify-center flex-col">
      <p onClick={()=>closeModal(false)} className="close text-right p-2">X</p>
      <figure className="w-64 p-2 mx-auto"><img src={photo} alt="meal" /></figure>
        <h2 className="text-2xl text-center">{item.name}!</h2>
        <div className='flex justify-center mt-3 text-xl'>
        <span className='p-2' onClick={decreaseCount}>-</span>
        <span className='p-2'>{count}</span>
        <span className='p-2' onClick={increaseCount}>+</span>
        </div>
    <p className='w-full mt-2 p-4'>Lamb chops are usually marinated in various combinations of olive oil, and a variety of fresh herbs before </p>
        <button onClick={()=> handleClick()} className="bg-blue-500 text-white px-4 py-2 rounded">Add to cart</button>
      </div>
       </div>
    </>
  )
}

export default Modal