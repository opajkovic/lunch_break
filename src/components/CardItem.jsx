

const CardItem = ({meal}) => {
  const {name,price} = meal
  return (
    <div className="card w-64 mb-4 bg-base-100 shadow-xl">
    
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="meal" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default CardItem