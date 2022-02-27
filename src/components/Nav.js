import React from 'react'

function Nav() {
  return (
    <div>
        <div className="nav">
            <div className="left-nav">
                <h1>Bloom</h1>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About us
                    </li>
                    <li>
                        Products
                    </li>
                    <li>
                        Contact Us
                    </li>
                </ul>
            </div>
            <div className="right-nav">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-user"></i>
            </div>
        </div>
    
    </div>
  )
}

export default Nav