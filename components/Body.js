import Restaurent from "./Restaurent"
import resdata from "../constants/mockData";


const Body = () => {    
    return(
        <div className='body'>
            <div className='search-cont'>
                <input className="search" type="text" placeholder="Search"></input>
                <button className="search-btn">Search</button>
            </div>
            <div className='res-cont'>
                {
                    resdata.map((res) => (
                       
                            <Restaurent key={res.id} resdata = {res}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;