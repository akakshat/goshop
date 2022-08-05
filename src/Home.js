import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home"> 
            <img
                className="home__image"
                src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt = ""
            />
            {/* Product id, title, price, rating, image */}
            <div className="home__row">
              <Product
                id= "12112121"
                title= "Apple M1 Chip with 8-Core CPU and 7-Core GPU 256GB Storage"
                price= {1215.99}
                rating= {5}
                image= "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000"
              />  
              <Product
                id= "12112121"
                title= "2021 Apple 11-inch iPad Pro (Wi-Fi, 1TB) 12.9-inch iPad Pro - Space Gray"
                price= {929.99}
                rating= {5}
                image= "https://villman.com/product_photos/ipadpro_bpioo.gif"
              />
            </div>
             
            <div className="home__row">
              <Product
                id= "12112121"
                title= "Samsung 865L 4-Door Flex French Door Refrigerator "
                price= {3726.99}
                rating= {4}
                image= "https://images.samsung.com/is/image/samsung/p6pim/in/rf87a9770sg-tl/gallery/in-family-hub-rf87a9770sg-tl-512919948?$684_547_PNG$"
              />  
              <Product
                id= "12112121"
                title= "3.8GHz 8-Core Processor upto 5GHz 512GB Storage"
                price= {2877.99}
                rating= {5}
                image= "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-27-selection-hero-202008?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1594932848000"
              />
              <Product
                id= "12112121"
                title= "Apple iPhone 12 Pro Max, 256GB, Pacific Blue(A14 Bionic Chip)"
                price= {1568.99}
                rating= {3}
                image= "https://i1.wp.com/maplestore.in/wp-content/uploads/2020/10/IN_r1309_Pacific_Blue_PDP_Image_Position_2.jpg?fit=2048%2C2048&ssl=1"
              />
            </div>
    
            <div className="home__row">
              <Product
                id= "12112121"
                title= "Samsung 2m 16cm QN900A5683409362289 Neo QLED 8K Smart TV"
                price= {17010.99}
                rating= {5}
                image= "https://static.toiimg.com/img/86781608/Master.jpg"
              />  
              <Product
                id= "12112121"
                title= "Apple Watch  Green Aluminium Case with Sport Band Series 7"
                price= {548.99}
                rating= {4}
                image= "https://www.apple.com/v/watch/as/images/compare/compare_s7__dqi9jnwa4sq6_medium_2x.jpg"
              /> 
            </div>
        </div>
      )
    }
    
    export default Home