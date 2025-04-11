import BagItem from "../component/BagItem";
import BagSummary from "../component/BagSummary";
import {useSelector} from "react-redux"


const Bag=()=>{
 const bagItems=useSelector(state=>state.bag)
 const items=useSelector(state=>state.items)
 const FinalItems=items.filter(item=>{
  const itemIndex=bagItems.indexOf(item.id);
  return itemIndex >=0;
 })
  return(<>
  
<main>
  <div className="bag-page">
    <div className="bag-items-container">
      {FinalItems.map((item)=> <BagItem item={item} key={item.id} />)};
     
    </div>
   <BagSummary/>

  </div>
</main>

</>)
};
export default Bag;