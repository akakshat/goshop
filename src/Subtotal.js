import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';


function Subtotal() {
    const [{ Cart }, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
        
    {/* Price */}
    <CurrencyFormat
        renderText={(value) => (
            <>
                <p>
                    Subtotal ({Cart.length} items) :
                    <strong>
                        {value}
                    </strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" />
                    This order contains a gift🎁.
                </small>
            </>
                )}
                decimalScale={2}
                value={getCartTotal(Cart)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
    />

    <button> Proceed to Buy</button>        
        
    </div>

  )
}

export default Subtotal