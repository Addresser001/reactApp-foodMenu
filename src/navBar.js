const NavBar = ({data, setItems}) => {

    const filterAll=()=>{
    
        setItems(data)
    
    }

    const filterBreakfast=()=>{
        let newItems= data.filter((item)=> item.category === 'breakfast');
        setItems(newItems)

    }

    const filterLunch=()=>{
        let newItems= data.filter((item)=> item.category === 'lunch');
        setItems(newItems) 
    }
    const filterShakes=()=>{
        let newItems= data.filter((item)=> item.category === 'shakes');
        setItems(newItems) 
    }
    
    return ( 
        <div className="Navigation-container">
            <div className="title">
                <h1>Our Menu</h1>
                <i class="fa fa-minus"></i>
            </div>

            <div className="NavButtons">
                <button onClick={()=>filterAll()}>all</button>
                <button onClick={()=>filterBreakfast()} >breakfast</button>
                <button onClick={()=>filterLunch()}>lunch</button>
                <button onClick={()=>filterShakes()}>shakes</button>
            </div>
        </div>
    );
}
 
export default NavBar;