import React from 'react';
import '.../Styles/card.css'

function Card() {
    return(
        <div className="card-container">
            <p>id</p>
            <div className="card-image">
                <img src='https://images.prismic.io/rushordertees-web/c46d32cd-469a-49a9-b175-7362171d29a7_Custom+Short+Sleeve+T-Shirt.jpg?auto=compress%2Cformat&rect=0%2C0%2C800%2C900&w=800' alt="online-card" height='30px' width="30px"/>
            </div>
            <div>
                <h4>title</h4>
                <p>description</p>
                <p>price</p>
            </div>
            <div>
                <p>rating.rate</p>
                <p>Pieces Left</p>
                <p>rating.count</p>
                <button>Buy</button>
            </div>
        </div>
    )
}

export default Card;