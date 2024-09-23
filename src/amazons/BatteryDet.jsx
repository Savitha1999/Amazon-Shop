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

export default function BatteryDet()
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
          original: "https://m.media-amazon.com/images/I/61pUvWJ3afL._SX522_.jpg",
          thumbnail: "https://m.media-amazon.com/images/I/61pUvWJ3afL._SX522_.jpg",
        },
        {
            original: "https://m.media-amazon.com/images/I/71KbewnC4OL._SX425_.jpg",
            thumbnail: "https://m.media-amazon.com/images/I/71KbewnC4OL._SX425_.jpg",
        },
        {
            original: "https://m.media-amazon.com/images/I/71tCF4B7oyL._SX425_.jpg",
            thumbnail: "https://m.media-amazon.com/images/I/71tCF4B7oyL._SX425_.jpg",
          },
        {
          original: "https://m.media-amazon.com/images/I/71E6QowrNUL._SX425_.jpg",
          thumbnail: "https://m.media-amazon.com/images/I/71E6QowrNUL._SX425_.jpg",
        },
        {
          original: "https://m.media-amazon.com/images/I/71InjRzsjsL._SX425_.jpg",
          thumbnail: "https://m.media-amazon.com/images/I/71InjRzsjsL._SX425_.jpg",
        },
        {
          original: "https://m.media-amazon.com/images/I/71jQzS8KeuL._SX425_.jpg",
          thumbnail: "https://m.media-amazon.com/images/I/71jQzS8KeuL._SX425_.jpg",
        },
      ];
    


      const handleAddToCart = () => {
        // Define the item to add to the cart
        const item = {
          id: Date.now(), // Unique identifier for the item
          brand: 'Luminous Inverter & Battery Combo for Home, Office & Shops',
          price: 15099.00,
          description:"Inverter Type: Pure Sine Wave, Capacity: 12 Volt, Rating: 700VA, Maximum Peak Load: 560 Watts . Warranty: 2 years on inverter & 3 years on inverter battery.",
          image: 'https://m.media-amazon.com/images/I/61pUvWJ3afL._SX522_.jpg',
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
        <p className="mt-3" > 1-16 of 490 results for  <span style={{color:"orangered" ,fontWeight:"bold"}}> "inverter battery" </span> </p>
    </Row>
    </Container>
    <hr></hr>


    {/* Inverter Battery Details Section */}

    <Container fluid>
        <Row className="">
            <Col xs={12} md={6} >
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

            <Col xs={12} md={6} className="mt-5">
            <h4> Luminous Inverter & Battery Combo for Home,Office & Shops|Power Sine 800 Pure Sine Wave 700VA/12V Inverter with RC18000ST PRO Short Tubular 150Ah Battery |Warranty: 24 month(Inverter)&36month(Battery)  </h4>
            <p> Visit the Luminous Store </p>
            <img src={require('../images/s8.png')} width="180px"  /> 
            <hr></hr>
            <img src={require('../images/det1.png')} width="100%"  /> 
            <hr></hr>

            <Row>
            <Col xs={6}>
            <p> <b> Brand </b></p>
            <p> <b> Recommended Uses For Product </b> </p>
            <p> <b> Power Source </b> </p>
            <p> <b> Wattage </b> </p>
            <p> <b>Battery Capacity </b></p>
            </Col>

            <Col xs={6}>
            <p> Luminous </p>
            <p> Office, Home </p>
            <br></br>
            <p> Battery Powered </p>
            <p> 560 Watts </p>
            <p> 150 Amp Hours </p>
            </Col>
            <hr></hr>
            </Row>

            <h4> About this item </h4>
            <ul>
                <li> Inverter Type: Pure Sine Wave, Capacity: 12 Volt, Rating: 700VA, Maximum Peak Load: 560 Watts<br></br> </li>
                <li> Warranty: 2 years on inverter & 3 years on inverter battery (18 Months(flat)+18 (Pro-rata)); Package Inclusion: Luminous Power Sine 800 Pure Sine Wave Inverter, RC18000ST 150 Ah Short Tubular Battery, Instruction Manual, Warranty Card                </li>
                <li> Installation: Please check with seller during delivery for installation of your Inverter battery. If you are installing inverter/battery for the first time then 
                    you may need additional electrical wiring setup &  electrical socket for which additional charges may apply; Exchange: Please check with seller during delivery if 
                    exchange is possible for your old batteries. Depending on the battery brand, weight and condition, it can get you upto INR 2500 as exchange amount 
                </li>
            </ul>

            <h4> Customer ratings by feature </h4>
            <img src={require('../images/ex.png')} width="100%"  /> 
            <br />
            <br /> 
            </Col>

            <Col xs={12} md={4} className="card p-3">
            
            With Exchange  
            <p className="text-danger" > Up to  <MdCurrencyRupee /> 3,550.00 off </p>
            Without Exchange
            <p className="text-danger"><MdCurrencyRupee />15,099.00  <del>  33,999.00 </del> </p>
            
            <h6> FREE delivery Saturday, 10 August. Order within 16 hrs 35 mins. Details </h6>

            <p className="text-primary">Delivering to Coimbatore 641015 <br></br>
                 <b> <IoLocationOutline /> Update Location </b> </p>
                 <hr></hr>

            <h4 className="text-success"> In Stock </h4>     
            <p> Ships from
            <span style={{marginLeft:"5px"}}>  UPSBhai CHENNAI  </span> </p>
            <p> Sold by
            <span style={{marginLeft:"25px"}}> UPSBhai CHENNAI  </span> </p>

            Qty :<span> <input type="number"style={{width:"30%"}}/> </span>
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
      

        <Row>
            <h3> Frequently bought together </h3>
        <img src={require('../images/ex1.png')} width="100%" /> 
        </Row>
        <hr></hr>

    <Container fluid style={{paddingRight:"20px",paddingLeft:"20px"}}>
        <Row className="mt-2 bg-white text-dark p-2">
      <h2 className="p-2"> elated products with free delivery on eligible orders </h2>
    <Carousel controls={true} indicators={true} >
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={require('../images/cd1.png')}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../images/cd2.png')}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </Row>
    <hr></hr>
    </Container>

    <h3 className="p-2"> Brands in this category on Amazon </h3>
    <Row className="text-center">
      <Col xs={12} md={4}>
      <img src={require('../images/cd3.png')} width="90%" /> 
      </Col>

      <Col xs={12} md={4}>
      <img src={require('../images/cd4.png')} width="90%" /> 
      </Col>

      <Col xs={12} md={4}>
      <img src={require('../images/cd5.png')} width="90%" /> 
      </Col>
    </Row>
    <hr></hr>

    <Container>
      <Row>
        <Col xs={12} md={2}>
        </Col>
        <Col xs={12} md={8}>
        <img src={require('../images/cd6.png')} width="100%" /> 
        </Col>
        <Col xs={12} md={2}>
        </Col>
      </Row>
    </Container>
    <hr></hr>
    <ToastContainer />

    <Container fluid className="bg-white p-2">  
       <Row className="bg-white text-dark text-center">
       <Col xs={12} md={4}>
       </Col>

        <Col xs={12} md={4} className="w-100">
        <p> See personalized recommendations </p>
      <Link to={'/signin'} style={{textDecoration:"none"}} >
       <Button className="w-25" variant="warning">Sign in</Button>{' '}
       </Link>
       <br></br>
       <p> New customer?  </p>
       </Col>

       <Col xs={12} md={4}>
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
          <Col xs={12} md={3} className="text-left">
          <h5> Get to Know Us </h5>
         <p> About Us </p>
         <p> Careers </p>
         <p> Press Releases </p>
         <p> Amazon Science </p>
          </Col>

          <Col xs={12} md={3} className="text-left">
          <h5> Connect with Us </h5>
          <p> Facebook </p>
          <p>Twitter </p>
          <p>Instagram </p>
          </Col>

          <Col xs={12} md={3} className="text-left">
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

          <Col xs={12} md={3} className="text-left">
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
























