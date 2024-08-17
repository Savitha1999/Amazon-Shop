import React ,{useState,useEffect} from "react";
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






export default function KitchenDet()
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
          original: "https://m.media-amazon.com/images/I/61pSdrdIqRL._SX679_.jpg",
          thumbnail: "https://m.media-amazon.com/images/I/61pSdrdIqRL._SX679_.jpg",
        },
        {
            original: "https://m.media-amazon.com/images/I/61chSeSWwvL._SX425_.jpg",
            thumbnail: "https://m.media-amazon.com/images/I/61chSeSWwvL._SX425_.jpg",
        },
        {
            original: "https://m.media-amazon.com/images/I/718-KQKzSwL._SX425_.jpg",
            thumbnail: "https://m.media-amazon.com/images/I/718-KQKzSwL._SX425_.jpg",
          },
        {
          original: "https://m.media-amazon.com/images/I/61hlzNcrn7S._SX425_.jpg",
          thumbnail: "https://m.media-amazon.com/images/I/61hlzNcrn7S._SX425_.jpg",
        },
        {
          original: "https://m.media-amazon.com/images/I/41Qi0DBKzpL._SX425_.jpg",
          thumbnail: "https://m.media-amazon.com/images/I/41Qi0DBKzpL._SX425_.jpg",
        },
        {
          original: "https://m.media-amazon.com/images/I/512i5L5jQvS._SX425_.jpg",
          thumbnail: "https://m.media-amazon.com/images/I/512i5L5jQvS._SX425_.jpg",
        },
      ];
    


      const handleAddToCart = () => {
       
        const item = {
          id: Date.now(), 
          brand: 'Visit the SIMPARTE Store',
          price: 369.00,
          description:"SIMPARTE Plastic Durable Kitchen Drainer Dish Rack Organizer/Drying Tray, Dish Rack with Drying Tray (Brown & Beige, 45 x 32 x 18 cm, Dish Rack Br&B)",
          image: 'https://m.media-amazon.com/images/I/61pSdrdIqRL._SX679_.jpg',
          quantity: 1,
        };
    
        
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
        
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        if (existingItemIndex >= 0) {
          
          cartItems[existingItemIndex].quantity += 1;
        } else {
       
          cartItems.push(item);
        }
    
      
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
      
        toast.success('Item added to cart!');
      };
    

      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
      


    return(
        <>

        <Container fluid className="top p-2 bg-dark text-white">

{/* Top & NavBar */}

            <Row>
                <Col xs={1} >
                <Link to={'/'} >
                <img src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png" style={{width:"100px",height:"50px"}} />   
                </Link>                
                </Col>

                <Col xs={3} className="text-center" >
                <p>Delivering to Coimbatore 641015 <br></br>
                 <b> <IoLocationOutline /> Update Location </b> </p>
                </Col>

                <Col xs={5} className="seach">
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
                <input type="text" className="p-2 mt-1"  style={{width:"60%"}}
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

              <Dropdown.Menu >
                {countryFlags.map((country, index) => (
                  <Dropdown.Item key={index}  onClick={() => handleCountrySelect(country)}>
                    <img
                      src={country.flag}
                      alt={country.name}
                      width="20"
                      height="15"
                      style={{ marginRight: '5px' }}
                    />
                    {country.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>      
            </Col>

            <Col xs={1} className="">
                <Dropdown className="bg-dark">
                <Dropdown.Toggle className="text-white" id="dropdown-basic">
                   Sign in  <br></br>
                   <b>Accounts </b>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"> <img src={amz} /> </Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>   
            </Col>

            <Col xs={1} className="text-white bg-dark text-center">
            <Link to={'/signin'} style={{textDecoration:"none", color:"White"}}  >
                <p>  Returns & <br></br>
                <b> Orders </b></p> 
              </Link>            
            </Col>

            <Col xs={1} className="text-center">
            <Link to={'/cart'} style={{textDecoration:"none", color:"white"}} >
            <IoCartOutline  style={{fontSize:"40px"}}/> <br></br>
            {cartItems.length > 0 && (
                <Badge className="ml-1" bg="danger">
                  {cartItems.length}
                </Badge>
              )}
             Cart 
             </Link>
            </Col>
            </Row>

            <Row  style={{backgroundColor:"rgb(35,47,62)"}}>
            <Col xs={10}>
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


        <Col xs={2}>
        </Col>
    </Row>

    </Container>  

    <Container fluid>
    <Row className="text-dark bg-white">
        <p className="mt-3" > 1-48 of over 40,000 results for <span style={{color:"orangered" ,fontWeight:"bold"}}> "Kitchen essentials"</span> </p>
    </Row>
    </Container>
    <hr></hr>


    {/* Kitchen Items Details Section */}

    <Container fluid>
        <Row className="">
            <Col xs={6} >
        <div className="image-gallery custom-image-gallery">
         <ImageGallery
         items={images}
         showIndex={false}
         showFullscreenButton={false}
         showPlayButton={false}
         slideOnThumbnailOver={true}
         width={100} />
        </div>       
            </Col>

            <Col xs={4} className="mt-5">
            <h4> SIMPARTE Plastic Durable Kitchen Drainer Dish Rack Organizer/Drying Tray, Dish Rack with Drying Tray (Brown & Beige, 45 x 32 x 18 cm, Dish Rack Br&B) </h4>
            <p> Visit the SIMPARTE Store </p>
            <img src={require('../images/kc1.png')} width="180px"  /> 
            <hr></hr>
            <h5 className="text-danger"> -39% <span style={{marginLeft:"10px", fontSize:"30px",color:"black"}}> <MdCurrencyRupee /> 369 </span> </h5>
            <p> M.R.P. <del> 699 </del> <br></br>
            Inclusive of all taxes <br></br>
            EMI starts at ₹128 per month.<span className="text-danger"> EMI OPTIONS </span> </p>
            <hr></hr>
            <img src={require('../images/kc2.png')} width="100%"  /> 
            <hr></hr>

            <h6>Colour:<b> Brown & Beige</b></h6>
            <br />
            <hr></hr>

            <Row>
            <Col xs={6}>
            <p> <b> Material </b></p>
            <p> <b> Product Dimensions	 </b> </p>
            <p> <b> Brand	 </b> </p>
            <p> <b> Colour </b> </p>
            <p> <b>Recommended Uses For Product	 </b></p>
            </Col>

            <Col xs={6}>
            <p> Plastic </p>
            <p> 18D x 32W x 45H Centimeters </p>
            <p> SIMPARTE </p>
            <p> 	Brown & Beige </p>
            <p> Lightweight </p>
            </Col>
            <hr></hr>
            </Row>

            <h4> About this item </h4>
            <ul>
                <li> Made of durable heavy-duty plastic, environmental safe and healthy. DIMENSION: SIZE :-(L) 45 cm , (W) 32 cm , (H) 18 cm  </li>
                <li> Provision of a slanting surface at the bottom for quick water drainage from washed utensils into the sink, keeping the kitchen clean and dry. </li>
                <li> Can also be used in office and workspace for file and stationery organisation. Easy to clean: Sturdy and durable for everyday use. </li>
                <li> Consists of a storage basket for storing and arranging just washes utensils. Major space saver in kitchen </li>
                <li> Package Included :1 x Dish Rack, 1 x Draining Tray, 1 x Knife and Fork Holder </li>
            </ul>

            <h4> Customer ratings by feature </h4>
            <img src={require('../images/kc3.png')} width="100%"  /> 
            <br />
            <br /> 
            </Col>

            <Col xs={2} className="card p-3">
            
           
            <p className="text-success"><MdCurrencyRupee /> <b>369.00</b>  </p>
            
            <h6> FREE delivery Tuesday, 13 August on orders dispatched by Amazon over ₹499. <br></br> <span className="text-warning"> Details </span> </h6>

            <h6> Or fastest delivery Tomorrow, 9 August. Order within 15 hrs 50 mins. <br></br> <span className="text-warning"> Details </span> </h6>

            <p className="text-primary">Delivering to Coimbatore 641015 <br></br>
                 <b> <IoLocationOutline /> Update Location </b> </p>
                 <hr></hr>

            <h4 className="text-success"> In Stock </h4>     
            <p> Ships from
            <span style={{marginLeft:"5px"}}> Amazon  </span> </p>
            <p> Sold by
            <span style={{marginLeft:"25px"}}> RetailEZ Pvt Ltd  </span> </p>

            Quantity :<span> <input type="number" min="1" style={{width:"30%"}}/> </span>
            <br />
            <Button className="btn btn-warning" onClick={handleAddToCart} > ADD TO CART </Button>
            <br />
            <Button className="btn btn-warning">  BUY NOW </Button>
            <br />
            <p className="text-info"> <FaLock />  Secure Transaction </p>  
            <hr></hr> 

            <Button> Add To Wishlist </Button>

            </Col>  
        </Row>
        <hr></hr>
      

        <Row className="p-3">
            <h3 className="p-2"> Get instant recommendations </h3>
        <img src={require('../images/kc5.png')} width="100%" /> 
        </Row>
        <hr></hr>

        <Row>
          <h3> What is in the box? </h3>
          <li> Dish Rack </li>
        </Row>
        <hr></hr>

    <Container fluid  style={{paddingRight:"20px",paddingLeft:"20px"}}>
    <h2 className="p-2"> Customers who bought this item also bought </h2>
        <Row className="mt-2 bg-white text-dark p-4">
    <Carousel controls={true} indicators={true} >
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={require('../images/kc6.png')}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../images/kc7.png')}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={require('../images/kc8.png')}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../images/kc9.png')}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={require('../images/kc10.png')}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../images/kc11.png')}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../images/kc12.png')}
        />
      </Carousel.Item>
    </Carousel>
    </Row>
    </Container>
    <hr></hr>

    <Container >
    <Row>
      <h2> Looking for specific info? </h2>
      <br />
      <input type="text" placeholder="Search In Reviews & Q And Ans" width="50%" />
    </Row>
    </Container>  
    <br />
    <hr></hr>

    <Row>
      <Col xs={2}></Col>
    <Col xs={8}>
    <img src={require('../images/kc13.png')} width="90%" style={{marginLeft:"5%"}}  /> 
    </Col>
    <Col xs={2}></Col>
    </Row>
    <hr></hr>

    <h3 className="p-2"> Inspired by your browsing history </h3>
    <Row className=" bg-white p-3">
      <img src={require('../images/kc14.png')} />
    </Row>
    <hr></hr>

    <ToastContainer />

    <Container fluid className="bg-white p-2">  
       <Row className="bg-white text-dark text-center">
       <Col xs={4}>
       </Col>

        <Col xs={4} className="w-100">
        <p> See personalized recommendations </p>
      <Link to={'/signin'} style={{textDecoration:"none"}} >
       <Button className="w-25" variant="warning">Sign in</Button>{' '}
       </Link>
       <br></br>
       <p> New customer?  </p>
       </Col>

       <Col xs={4}>
       </Col>
       </Row>
       <hr></hr>
       </Container>
    </Container>
    <br />
    <br />

    
    {/* Footer Section */}

    <Container fluid className="foot text-white mt-4 bg-dark ">

      <Row style={{backgroundColor:"rgb(35,47,62)"}}>
        <p className="mt-3 text-center"> Back To Top </p>
      </Row>

      <Container className=" bg-dark w-75">
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







