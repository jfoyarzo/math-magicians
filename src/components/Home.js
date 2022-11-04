import React from 'react';
import img from '../img/home_image.png';

const Home = () => (
  <div className="home-wrapper">
    <div className="text-wrapper">
      <h2>Welcome to our page!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lectus ligula, suscipit
        pellentesque felis at, scelerisque lacinia libero. Mauris vestibulum magna in rutrum
        finibus. Duis vitae placerat massa. Aliquam convallis orci ligula, vel rhoncus nunc
        laoreet vitae. Curabitur sed lectus eget libero eleifend scelerisque. Phasellus tincidunt
        non leo non egestas. Cras ut augue sit amet sem mollis varius. Nunc blandit leo venenatis
        porttitor tincidunt. Aliquam luctus turpis ut justo dapibus dignissim id non tortor. Sed
        nec bibendum tellus, ac tincidunt libero. Sed ipsum nulla, egestas quis mollis
        scelerisque, commodo aliquet nibh. Aenean vitae volutpat ex. Fusce id hendrerit tellus,
        eu feugiat lorem. Curabitur et imperdiet arcu. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Proin id libero ac massa faucibus laoreet.
      </p>
    </div>
    <img src={img} alt="" />
  </div>

);

export default Home;
