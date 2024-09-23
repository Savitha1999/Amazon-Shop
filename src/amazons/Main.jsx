import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";

import Home from "./Home";
import Nopage from './Nopage';
import Kitchen from "./Kitchen";
import Battery from "./Battery";
import Signin from "./Signin";
import Decor from "./Decor";
import Cart from "./Cart";
import BatteryDet from "./BatteryDet";
import KitchenDet from "./KitchenDet";
import DecorDet from "./DecorDet";



export default function Main()
{
    return(
        <>

        <BrowserRouter>

        <Routes>
       

            <Route path="/amazon" element={<Home /> } />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/battery" element={<Battery />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/decor" element={<Decor />} />
            <Route path="*" element={<Nopage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/kitchendet" element={<KitchenDet />} />
            <Route path="/batterydet" element={<BatteryDet />} />
            <Route path="/decordet" element={<DecorDet />} />




            
            
        </Routes>
        </BrowserRouter>
        
        
        </>
    )
}

