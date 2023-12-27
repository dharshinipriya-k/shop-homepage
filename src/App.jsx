import React, {useState} from 'react'
import Card from './components/Card'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    let [cartCount,setCartCount] = useState(0)

    let cardData = [
        {
            isBadge: false,
            title:"Fancy Product",
            price:"$40.00 - $80.00",
            isDiscount:false,
            isRating:false,
            isOption: true
        },

        {
            isBadge: true,
            title:"Special Item",
            originalPrice:"$20.00",
            discountPrice:"$18.00",
            isDiscount:true,
            isRating:true,
            isOption: false
        },

        {
            isBadge: true,
            title:"Sale Item",
            originalPrice:"$50.00",
            discountPrice:"$25.00",
            isDiscount:true,
            isRating:false,
            isOption: false
        },

        {
            isBadge: false,
            title:"Popular Item",
            price:"$40.00",
            isDiscount:false,
            isRating:true,
            isOption: false
        },

        {
            isBadge: true,
            title:"Sale Item    ",
            originalPrice:"$50.00",
            discountPrice:"$25.00",
            isDiscount:true,
            isRating:false,
            isOption: false
        },

        {
            isBadge: false,
            title:"Fancy Product",
            price:"$120.00 - $280.00",
            isDiscount:false,
            isOption: true
        },
        {
            isBadge: true,
            title:"Special Item",
            originalPrice:"$20.00",
            discountPrice:"$18.00",
            isDiscount:true,
            isRating:true,
            isOption: false
        },
        {
            isBadge: false,
            title:"Popular Item",
            price:"$40.00",
            isDiscount:false,
            isRating:true,
            isOption: false
        }
    ]

  return <>
   <TopBar cartCount={cartCount} setCartCount={setCartCount}/>
  <Header/>
  <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   {cardData.map((ele,i)=>{
                        return <Card data={ele} cartCount={cartCount} setCartCount={setCartCount} key={i}/>
                    })
                   } 
                </div>
            </div>
        </section>
<Footer/>

  </>
 
}
export default App