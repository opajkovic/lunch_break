import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom"

const Menu = () => {
  const {categories,types} = useLoaderData();
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen,setIsOpen] = useState(false)
  
const handleChange = () => {
  setIsChecked(!isChecked)
}

const toggleOpen = () => {
  setIsOpen(!isOpen)
}


  return (
    <div  className="hidden md:w-1/6 w-full md:flex">
    <ul className="menu bg-gray-200 pt-4 w-full capitalize">
    <li>
    <Link to='/'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    meals
    </Link>
  </li>
<li>
 <details>
      <summary onClick={toggleOpen}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
</svg> categories
</summary>
      <ul>
      {categories.map((category) => {
        return (
          <li key={category.id}><Link to={`/categories/${category.id}`}>{category.name}</Link></li>
        )
      })}
      </ul>
    </details>
</li>
  
  <li>
    <details open={open ? open : ''}>
    <summary>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      filters
      </summary>
      <ul>
      {types.map((type) => {
        return (
          <li key={type.id}>
          <div className={`form-control  ${isChecked ? 'bg-gray-300' : ''}`}>
  <label className="label cursor-pointer">
  <input type="checkbox" checked={isChecked} className="checkbox checkbox-sm " onChange = {handleChange} />
    <span className="label-text ml-4">{type.name}</span> 
    
  </label>
</div>
          </li>
        )
      })}
       </ul>
  </details>
  </li>
</ul>
</div>
  )
}

export default Menu