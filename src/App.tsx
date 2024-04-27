import React, {FC} from 'react';
import './App.css';
import PortfolioFrame  from "./components/portfolio/PortfolioFrame";
import TestComponent from "./components/portfolio/TestComponent";

const  App:FC = ()=> {
  return (
   <>
<PortfolioFrame pictureDesc={'Fox'}
                imageSource={'https://images.pexels.com/photos/2570718/pexels-photo-2570718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
/>
       <PortfolioFrame pictureDesc={'Containers'}
                imageSource={'https://images.pexels.com/photos/21628465/pexels-photo-21628465/free-photo-of-a-large-stack-of-shipping-containers-with-different-colors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
/>
 <PortfolioFrame pictureDesc={'Houses'}
                imageSource={'https://images.pexels.com/photos/21624194/pexels-photo-21624194/free-photo-of-a-river-with-boats-and-buildings-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}>
    Children text that add dynamically
</PortfolioFrame>

   </>
  );
}

export default App;
