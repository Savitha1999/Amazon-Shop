import React ,{useState} from "react";
import { Container ,Row,Col ,Nav, Carousel,Button, Badge } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import { IoCartOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { MdCurrencyRupee } from "react-icons/md";
import 'react-toastify/dist/ReactToastify.css';
import { FaLock } from "react-icons/fa";
import './normal.css';
import amz from '../images/amz.png';

export default function DecorDet()
{
    const [selectedCountry, setSelectedCountry] = useState({
        name: 'Country',
        flag: 'https://dummyimage.com/20x15/ccc/000&text=Flag', // Default flag image URL
      });

     
      const handleCountrySelect = (country) => {
        setSelectedCountry(country);
      };
    
      const countryFlags = [
        {
          name: 'India',
          flag: 'https://media.geeksforgeeks.org/wp-content/uploads/20200630132503/iflag.jpg'
        },
        {
          name: 'USA',
          flag: 'https://media.geeksforgeeks.org/wp-content/uploads/20200630132504/uflag.jpg'
        },
        {
          name: 'England',
          flag: 'https://media.geeksforgeeks.org/wp-content/uploads/20200630132502/eflag.jpg'
        },
        {
          name: 'Brazil',
          flag: 'https://media.geeksforgeeks.org/wp-content/uploads/20200630132500/bflag.jpg'
        }
      ];


      const images = [ 
        {
          original: "https://m.media-amazon.com/images/I/61gFtfcK3oL._SX679_.jpg",
          thumbnail: "https://m.media-amazon.com/images/I/61gFtfcK3oL._SX679_.jpg",
        },
        {
            original: "https://m.media-amazon.com/images/I/51Ok-aurFmL.jpg",
            thumbnail: "https://m.media-amazon.com/images/I/51Ok-aurFmL.jpg",
        },
        {
            original: "https://m.media-amazon.com/images/I/61YsG8YNzLL._SX679_.jpg",
            thumbnail: "https://m.media-amazon.com/images/I/61YsG8YNzLL._SX679_.jpg",
          },
        {
          original: "https://m.media-amazon.com/images/I/617sUpNHcaL._SX679_.jpg",
          thumbnail: "https://m.media-amazon.com/images/I/617sUpNHcaL._SX679_.jpg",
        },
        {
          original: "https://m.media-amazon.com/images/I/61DoVkKwiDL._SX679_.jpg",
          thumbnail: "https://m.media-amazon.com/images/I/61DoVkKwiDL._SX679_.jpg",
        },
        {
          original: "https://m.media-amazon.com/images/I/41+xmNxkkVL.jpg",
          thumbnail: "https://m.media-amazon.com/images/I/41+xmNxkkVL.jpg",
        },
      ];
    


      const handleAddToCart = () => {
        // Define the item to add to the cart
        const item = {
          id: Date.now(), // Unique identifier for the item
          brand: 'PREMIUM DECOR HUB',
          price: 1239.00,
          description:"PREMIUM DECOR HUB Metal Wall Clock- for Home Decor This Handcrafted wall Clock for Living Room, Bedroom,drawing room,Kitchen,with Silent Clock no more tick-tock quartz mechanism. ",
          image: 'https://m.media-amazon.com/images/I/61gFtfcK3oL._SX679_.jpg',
          quantity: 1,
        };
    
        // Get the current cart from localStorage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
        // Check if the item is already in the cart
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        if (existingItemIndex >= 0) {
          // Item is already in the cart; update the quantity
          cartItems[existingItemIndex].quantity += 1;
        } else {
          // Item is not in the cart; add it
          cartItems.push(item);
        }
    
        // Save the updated cart to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
        // Show success notification
        toast.success('Item added to cart!');
      };
    
      // Get cart items count
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
      


    return(
        <>
       <Container fluid className="top p-2 bg-dark text-white">

{/* Top & NavBar */}

            <Row>
                <Col  xs={6} md={2} lg={1} >
                <Link to={'/amazon'} >
                <img src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png" style={{width:"100px",height:"50px"}} />   
                </Link>
                </Col>

                <Col xs={6} md={6} lg={3} className="text-center" >
                <p>Delivering to Coimbatore 641015 <br></br>
                 <b> <IoLocationOutline /> Update Location </b> </p>
                </Col>

                <Col xs={12} md={6} lg={5} className="seach">
                <select className=" bg-light mt-1" style={{width:"60px" ,height:"44px"}}>
                    <option value="">All </option>
                    <option value="Allxa Skils"> Allxa Skils </option>
                    <option value="Amazon Devices"> Amazon Devices </option>
                    <option value="Amazon Fashion"> Amazon Fashion </option>
                    <option value="Amazon Fresh"> Amazon Fresh </option>
                    <option value="Amazon Pharmacy"> Amazon Pharmacy </option>
                    <option value="Apps & Games"> Apps & Games </option>
                    <option value="Appliances"> Appliances </option>
                    <option value="Electronics">Electronics </option>
                    <option value="Baby"> Baby </option>
                    <option value="Beauty"> Beauty </option>
                    <option value="Books"> Books </option>
                    <option value="Colthing & Accessories"> Colthing & Accessories </option>
                    <option value="Deals"> Deals </option>
                    <option value="Furniture"> Furniture </option>
                    <option value="Garden & Outdoors"> Garden & Outdoors </option>
                    <option value="Home & Kitchen "> Home & Kitchen </option>
                </select>
                <input type="text" className="p-2 mt-1"  
                style={{width:"60%"}}
                placeholder="Search Amazon" /> 
                <span className="p-2" style={{backgroundColor:"rgb(254,189 ,105)"}} > <FaSearch style={{marginBottom:"5px",width:"40px"}} /> </span>


                <Dropdown as={ButtonGroup}   style={{width:"30px",marginLeft:"10px"}}>
              <Dropdown.Toggle  className="p-2 bg-white text-black" id="dropdown-basic">
                <img
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  width="20"
                  height="15"
                  style={{ marginRight: '5px' }}
                />
                {selectedCountry.name}
              </Dropdown.Toggle>

              <Dropdown as={ButtonGroup} style={{ width: "30px", marginLeft: "10px" }}>
  <Dropdown.Toggle className="p-2 bg-white text-black dropdown-toggle" id="dropdown-basic">
    <img
      src={selectedCountry.flag}
      alt={selectedCountry.name}
      width="20"
      height="15"
      style={{ marginRight: '5px' }}
    />
    {selectedCountry.name}
  </Dropdown.Toggle>
  <Dropdown.Menu>
    {/* Dropdown items here */}
  </Dropdown.Menu>
</Dropdown>

            </Dropdown>      
            </Col>

            <Col xs={6} md={2} lg={1} className="custom-class">
  <Dropdown className="bg-dark">
    <Dropdown.Toggle className="text-white" id="dropdown-basic">
      Sign in <br />
      <b>Accounts</b>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">
        <img src={amz} />
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</Col>

<Col xs={6} md={2} lg={1} className="custom-class text-white bg-dark text-center">
  <Link to={'/signin'} style={{ textDecoration: "none", color: "White" }}>
    <p>Returns & <br />
      <b>Orders</b></p>
  </Link>
</Col>

            <Col xs={6} md={2} lg={1} className="custom-cart text-center">
            <Link to={'/cart'} style={{textDecoration:"none", color:"white"}} >          
            <IoCartOutline  style={{fontSize:"40px"}}/> <br></br>
             Cart 
             </Link> 
            </Col>         
            </Row>

            <Row  style={{backgroundColor:"rgb(35,47,62)"}}>
            <Col xs={12} lg={10}>
        <Nav variant="underline" >
      <Nav.Item>
        <Nav.Link style={{ color: "white", marginLeft:"15px" }} > <FaBars />  All</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ color: "white", marginLeft:"10px" }} > Today's Deals </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ color: "white", marginLeft:"10px" }} > Customer Services </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ color: "white", marginLeft:"10px" }} > Registry </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ color: "white", marginLeft:"10px" }} > Best Seller </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ color: "white", marginLeft:"10px" }} > Fresh </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ color: "white", marginLeft:"10px" }} > Fashion </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ color: "white", marginLeft:"10px" }} > Gift Cards </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ color: "white", marginLeft:"10px" }} > Sell </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ color: "white", marginLeft:"10px" }} > Mobiles </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ color: "white", marginLeft:"10px" }} > New Release </Nav.Link>
      </Nav.Item>
    </Nav>
    </Col>

        <Col xs={12} lg={2}>
        </Col>
    </Row>
    </Container>   



    <Container fluid>
    <Row className="text-dark bg-white">
        <p className="mt-3" > 1-48 of over 40,000 results for <span style={{color:"orangered" ,fontWeight:"bold"}}> "home decor" </span> </p>
    </Row>
    </Container>
    <hr></hr>


    {/* Home Decor Details Section */}
    <Container fluid>
  <Row>
    {/* Image Gallery Column */}
    <Col xs={12} md={6} className="mb-3">
      <div className="image-gallery custom-image-gallery">
        <ImageGallery
          items={images}
          showIndex={false}
          showFullscreenButton={false}
          showPlayButton={false}
          slideOnThumbnailOver={true}
          width="100%" // Adjust to be responsive
        />
      </div>
    </Col>

    {/* Product Details Column */}
    <Col xs={12} md={6} lg={4} className="mb-3">
      <h4> PREMIUM DECOR HUB Metal Wall Clock- for Home Decor This Handcrafted wall Clock for Living Room, Bedroom, drawing room, Kitchen, with Silent Clock no more tick-tock quartz mechanism </h4>
      <p> Brand: PREMIUM DECOR HUB </p>
      <img src={require('../images/st1.png')} width="180px" alt="Clock" /> 
      <p> 1K+ bought in the past month </p>
      <hr />
      <h5 className="text-danger"> -77% <span style={{marginLeft:"10px", fontSize:"30px", color:"black"}}> <MdCurrencyRupee /> 1,239 </span> </h5>
      <p> M.R.P. <del> 2,999 </del> <br /> Inclusive of all taxes <br /> EMI starts at ₹103 per month.<span className="text-danger"> EMI OPTIONS </span> </p>
      <hr />
      <img src={require('../images/off.png')} width="100%" alt="Discount" />
      <hr />

      <Row>
        <Col xs={6}>
          <p> <b> Brand </b></p>
          <p> <b> Colour </b> </p>
          <p> <b> Display Type </b> </p>
          <p> <b> Style </b> </p>
          <p> <b> Special Feature </b></p>
          <p> <b> Product Dimensions </b> </p>
          <p> <b> Power Source </b> </p>
          <p> <b> Age Range </b> </p>
          <p> <b> Room Type </b> </p>
          <br />
          <p> <b> Shape </b></p>
        </Col>

        <Col xs={6}>
          <p> PREMIUM DECOR HUB </p>
          <p> Golden and Blue </p>
          <p> Analog </p>
          <p> Art Deco </p>
          <p> Silent Clock </p>
          <p> 70W x 52H Centimeters </p>
          <p> Battery Powered </p>
          <p> Adult </p>
          <p> Kitchen, Living Room, Bedroom, office, Dining Room </p>
          <p> Flower </p>
        </Col>
        <hr />
      </Row>

      <h4> About this item </h4>
      <ul>
        <li> Looking for a clock that's more than just a timekeeper? This handcrafted wall clock is a conversation starter and a statement piece for any room. It's the perfect way to add a touch of industrial chic to your space<br /></li>
        <li> Sleek and Modern Design: Enhance your space with this sleek metal wall clock, featuring a contemporary design that complements any interior décor style. </li>
        <li> Silent precision (no more tick-tock!): The quiet, quartz mechanism ensures peaceful nights </li>
        <li> Design And Style: Choose A Clock That Complements Your Interior Decor. Whether You Prefer A Minimalist, Modern, Or Classic Style, Ensure It Matches Your Aesthetic Preferences. </li>
        <li> Effortless style and built to last: Crafted from high-quality metal with a beautiful gold finish, this clock is as stylish as it is durable </li>
        <li> Ready to hang (skip the assembly!): This clock comes with pre-installed brackets and requires just one nail for effortless installation </li>
        <li> 100% Handcrafted by Highly Skilled Artisans Each Piece Handpicked for Quality and Uniqueness </li>
        <li> Don't wait – elevate your space with this stunning clock today! </li>
      </ul>
      <img src={require('../images/st3.png')} alt="Clock Description" /> 
      <hr />

      <Row>
        <Col xs={12} md={6} className="mb-3">
          <img src={require('../images/st2.png')} width="100%" alt="Related Product" /> 
        </Col>
        <Col xs={12} md={6} className="text-primary">
          Rizik Store Metal Wall Hanging Floral Handmade Wall Clock Multicolor Ticking Sound For Bedroom/Drawing Room/Hall/Dining Room (Gold & Black) - Analog, 23.22 X 1.49 Inch
          <br /><br />
          <Button className="btn btn-warning"> Add To Cart </Button>
        </Col>
      </Row>
      <hr />
    </Col>

    {/* Pricing Column */}
    <Col xs={12} md={6} lg={2} className="card p-3 mb-3">
      <h4 className="text-dark"><MdCurrencyRupee />1,239 </h4>
      <h6 className="text-success"> FREE delivery Monday, 26 August. Details </h6>
      <p className="text-primary">Delivering to Coimbatore 641015 <br /> <b> <IoLocationOutline /> Update Location </b> </p>
      <hr />
      <h4 className="text-success"> In Stock </h4>     
      <p> Ships from <span style={{marginLeft:"5px"}}> Amazon </span> </p>
      <p> Sold by <span style={{marginLeft:"25px"}}> RIZIK STORE </span> </p>
      <h6> Add a Protection Plan: </h6>
      <p>1 Year Fire Protection Plan <br /> For <MdCurrencyRupee /> 99.00 </p> 
      <Button className="btn btn-warning" onClick={handleAddToCart}> ADD TO CART </Button>
      <br />
      <Button className="btn btn-warning"> BUY NOW </Button>
      <br />
      <p className="text-info"> <FaLock /> Secure Transaction </p>  
      <hr />
      <Button> Add To Wishlist </Button>
      <hr />
      <img src={require('../images/st4.png')} alt="Protection Plan" /> 
    </Col>  
  </Row>
  <hr />

  <Row>
    <h3 className="p-2"> Frequently bought together </h3>
    <img src={require('../images/st5.png')} width="100%" alt="Frequently Bought Together" /> 
  </Row>
  <hr />

  <Container>
    <h4> Product description </h4>
    <p>
      Introducing the Rizik Store Handcrafted Multicolor Wall Clock: Elevate your living space with the timeless charm of the Rizik Store Handcrafted Multicolor Wall Clock. This exquisite timepiece is a true masterpiece, meticulously crafted by our team of highly skilled artisans who pour their dedication and craftsmanship into each and every clock.
      The result is a stunning work of art that is not just a clock but a statement piece suitable for various spaces in your home. Key Features: 100% Handcrafted: Every Rizik Store wall clock is a labor of love, entirely handcrafted with precision and care. This level of craftsmanship ensures that each clock is a unique piece of art, making it the perfect addition to your home decor. Handpicked Selection: We believe in offering our customers only the best. Our artisans handpick the materials, colors, and designs to ensure that each clock is not just beautiful but also long-lasting. Versatile Placement: This multicolor wall clock with dimensions of 37" x 21" is designed to suit a variety of spaces in your home. Whether it's your bedroom, drawing room, hallway, lobby, dining room, or any other area, this clock blends seamlessly with any decor. Multi-Purpose Design: Beyond its primary function as a clock, the Rizik Store Wall Clock doubles as a captivating wall sculpture. Its artistic design adds a touch of elegance and creativity to your interior, making it more than just a timekeeping device. Perfect for Gifting: Looking for a thoughtful and unique gift? The Rizik Store Handcrafted Wall Clock is an excellent choice. Its combination of functionality and artistry makes it a memorable present for housewarmings, weddings, or any special occasion.
      With the Rizik Store Handcrafted Multicolor Wall Clock, you're not just buying a timepiece; you're investing in a piece of artistry that will transform your living space and leave a lasting impression. Immerse yourself in the world of fine craftsmanship and bring home this exceptional work of art today.
    </p>
  </Container>
  <hr />

  <Container fluid style={{paddingRight:"20px", paddingLeft:"20px"}}>
    <Row className="mt-2 bg-white text-dark p-2">
      <h2 className="p-2"> Related products with free delivery on eligible orders </h2>
      <Carousel controls={true} indicators={true}>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={require('../images/st6.png')}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/st7.png')}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={require('../images/st8.png')}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/st9.png')}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/st10.png')}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </Row>
    <hr />
  </Container>

  <ToastContainer />

  <Container fluid className="bg-white p-2">  
    <Row className="bg-white text-dark text-center">
      <Col xs={12} className="mb-3">
        <p> See personalized recommendations </p>
        <Link to={'/signin'} style={{textDecoration:"none"}}>
          <Button className="w-25" variant="warning">Sign in</Button>
        </Link>
        <br />
        <p> New customer? </p>
      </Col>
    </Row>
    <hr />
  </Container>
</Container>

    <br />
    <br />

    
    {/* Footer Section */}

    <Container fluid className="foot text-white  bg-dark ">

      <Row style={{backgroundColor:"rgb(35,47,62)"}}>
        <p className="mt-3 text-center"> Back To Top </p>
      </Row>

      <Container className=" bg-dark w-75 p-2">
        <Row className="mt-5">
          <Col xs={3} className="text-left">
          <h5> Get to Know Us </h5>
         <p> About Us </p>
         <p> Careers </p>
         <p> Press Releases </p>
         <p> Amazon Science </p>
          </Col>

          <Col xs={3} className="text-left">
          <h5> Connect with Us </h5>
          <p> Facebook </p>
          <p>Twitter </p>
          <p>Instagram </p>
          </Col>

          <Col xs={3} className="text-left">
          <h5> 	Make Money with Us </h5>
          <p>Sell on Amazon </p>
          <p>Sell under Amazon Accelerator </p>
          <p>Protect and Build Your Brand </p>
          <p>Amazon Global Selling </p>
          <p>Become an Affiliate </p>
          <p>Fulfilment by Amazon </p>
          <p>Advertise Your Products </p>
          <p>Amazon Pay on Merchants </p>

          </Col>

          <Col xs={3} className="text-left">
          <h5> Let Us Help You </h5>
          <p>COVID-19 and Amazon </p>
          <p>Your Account </p>
          <p>Returns Centre </p>
          <p>Recalls and Product Safety Alerts </p>
          <p>100% Purchase Protection </p>
          <p>Amazon App Download </p>
          <p>Help </p>
          </Col>
        </Row>
      </Container>

      <Row style={{backgroundColor:"rgb(35,47,62)"}}>
        <p className="mt-3 text-center p-1">
          Conditions of Use & Sale
          Privacy Notice
          Interest-Based Ads 
        <br></br>
        © 1996-2024, Amazon.com, Inc. or its affiliates
        </p>

      </Row>
  
    </Container>  
        




    </>


    )
}


























