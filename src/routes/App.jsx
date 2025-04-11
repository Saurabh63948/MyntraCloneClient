import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import FetchItems from "../component/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../component/LoadingSpeaner";



function App() {

  const fetchStatus = useSelector((store) => store.fetchStatus);
 return(<>
 <div> <Header/>
      <FetchItems/>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/> :  <Outlet/>}
   
    <Footer/>
    </div>
 </>)
}
export default App;
  