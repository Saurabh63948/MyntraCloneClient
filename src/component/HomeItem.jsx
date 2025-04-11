/* eslint-disable react/prop-types */

import { CiCircleRemove } from "react-icons/ci";
import { IoBagAdd } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";


const HomeItem=({item})=>{

const bagItems=useSelector(store=>store.bag);
const ElementFound=bagItems.indexOf(item.id)>=0;
console.log(item.id,ElementFound)

const dispatch=useDispatch();
const HandleOnClick=()=>{
    dispatch(bagActions.addToBg(item.id));
    }
    const HandleRemove=()=>{
        dispatch(bagActions.deleteToBag(item.id));
        }




return(<>
<div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>

      </div>
      {ElementFound ? <button type="button" className=" btn-add-bag btn btn-danger"onClick={HandleRemove}><CiCircleRemove />remove</button> :
      
      <button type="button" className=" btn-add-bag btn btn-success"  onClick={HandleOnClick}><IoBagAdd />Add to Bag</button>}
      
       
    </div>
</>)
};
export default HomeItem