import NavBar from "./NavBar";

function CheckOut(props) {
    return ( 
        <div className='checkout-container'>
            {props.navBar}
        </div>
     );
}

export default CheckOut;