import React from "react";

const ImageContent = () => {
  return (
    <div className="imagecontent">
     <div className="animation1">
     <h1 className="slide-left">Are you hungry?</h1><br /><br />
     <h1 className="slide-up">We’ve got the perfect bite waiting for you.</h1>

     </div>
     <div className="animation2">
      <h1 style={{textAlign:"center"}}>Top Picks</h1>
      <hr />
      <br /><br />
      <div className="carousel-track">

      <button className="buy-food1">Buy Chowmin</button>
     <img src="https://daruadda.com/wp-content/uploads/2023/01/Veg-Chowmin.png" alt="Image 1"  />
     
     <button className="buy-food">Buy Momo</button>
      <img src="https://bancankitchen.ca/wp-content/uploads/2022/11/Vegetable-Momo.png" alt="Image 2" />

      <button className="buy-food"> Buy Burger</button>
      <img src="https://www.allrecipes.com/thmb/8fe_5pLNz2eHcpknNhL52fdq5hE=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg" alt="Image 3" />

      <button className="buy-food"> Buy Pizza</button>

      <img src="https://www.foodandwine.com/thmb/4qg95tjf0mgdHqez5OLLYc0PNT4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" alt="Image 4" />

      <button className="buy-food"> Buy Chicken Chilly</button>

      <img src="https://www.yummytummyaarthi.com/wp-content/uploads/2023/03/chilli-chicken-dry-1.jpeg" alt="Image 5" />

</div>


     </div>
    </div>
  );
};

export default ImageContent;
