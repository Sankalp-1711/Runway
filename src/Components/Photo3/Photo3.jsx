// import React from 'react';
// //import './Photos3.scss';
// import Pic6 from '../../assets/Pic6.png';  // Update these paths as needed


// const Photo1 = () => {
//   return (
//     <div>
//     <div className="photo-gallery1">
//       <img src={Pic6} alt="Person 1" className="gallery-img" />
//     </div>
//     </div>
//   );
// }

// export default Photo1;

import React from 'react';
import './Photo3.scss';  // Assuming you have this SCSS file for styling
import Pic8 from '../../assets/Pic8.png';  // Update these paths as needed

const Photo1 = () => {
  return (
    <div className="photo-gallery1-container">
      <div className="photo-gallery1">
        <img src={Pic8} alt="Person 1" className="gallery-img" />
      </div>
    </div>
  );
}

export default Photo1;
