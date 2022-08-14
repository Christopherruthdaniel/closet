import './closet.css';
import './allproducts.css';



const Closet = () => {
  
    return (
  
      <div className="Closet">
      
      <section class="hero">
            <div class="vid1">
                <video  autoplay loop muted width="100%">
                    <source src="vid.mp4"/>
                </video>
            </div>
            <div class="lolo">
                <img  src="closet.png" alt=""/>
            </div>
            
            <div class="roll">
                <h1>welcome to closet</h1>
            </div>
                    
     </section>
    <section class="logo">

        <div class="all">
            <h1 class="all p" style=" color: white;">All Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis quaerat iste ea</p>
        </div> 
        <div class="lorem">
            <div class="lorem-item">
                <img src="closet.png" alt="" style="height: 100px; width: 100px;"/>
                <p style="color: white;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis quaerat iste ea</p>
            </div>
            <div class="lorem-item">
                <img src="closet.png" alt=""  style="height: 100px; width: 100px;"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis quaerat iste ea</p>
            </div>
            <div class="lorem-item">
                <img src="closet.png" alt=""  style="height: 100px; width: 100px;"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis quaerat iste ea</p>
            </div>
    
           
            <div class="action-button">   
            <button>
                <a href="allproducts.html">See More</a>

            </button>
            </div>
            </div>
            </section>  
        </div>


    );
}

 
export default Closet;