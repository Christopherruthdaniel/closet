import './closet.css';
import './allproducts.css';





const Collection= () => {
  
  return (
    <div className="Collection">
    
    <div id="preloder">
        <div class="loader"></div>
    </div>

    <section class="hero">

            
            <div class="lolo">
                <img src="closet.png" alt=""/>
            </div>

{/* 
        <div class="menu">
            <a class="me"` href="closet.html">Home</a>

            &nbsp;&nbsp;
                    <a class="me" href="allproducts.html">All Products</a>
                    &nbsp;&nbsp;
             
                    <a class="me"` href="collection.html">Collections</a>
           
        </div>  
                        */}
    
          
     </section>   
     <section>
           
        <div class="roll">
            <h1>All Products</h1>
        </div> 
                
        <div class="bar">
         <div class="banner-item">
            <div class="banner1">
                <img src="red.jpg" alt="" style="height:400px; width: 400px;"/>
            </div>
            <div class="banner-text1">
                 <h2 style="font-size: 3em;">Clothing  </h2>
                 <a href="#">Shop now</a>
            </div>
        </div>
        
        <div class="banner-item">
            <div class="banner2">
                <img src="w1.jfif" alt="" style="height:400px; width: 400px;"/>
            </div>
            <div class="banner-text2">
                  <h2 style="font-size: 3em;">Ankara </h2>
                  <a href="#">Shop now</a>
            </div>

        </div>
         <div class="banner-item">
            <div class="banner3">
                <img src="br8.jfif" alt="" style="height:400px; width: 400px;"/>
            </div>
            <div class="banner-text3">
                <h2 style="font-size: 3em;">Wedding Dress</h2>
                <a href="#">Shop now</a>
            </div>
        </div>
        <div class="banner-item">
            <div class="banner4">
                <img src="b1.jfif" alt="" style="height:400px; width: 400px;"/>
            </div>
            <div class="banner-text4">
                <h2 style="font-size: 3em;">Kids</h2>
                <a href="#">Shop now</a>
            </div>
        </div>
    </div>
</section> 
    </div>
  );
}
 
export default Collection;