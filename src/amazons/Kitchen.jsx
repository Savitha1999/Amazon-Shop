import React ,{useState} from "react";
import { Container ,Row,Col ,Nav, Carousel,Button } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import { IoCartOutline } from "react-icons/io5";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import amz from '../images/amz.png';



export default function Kitchen()
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

      


    return(
        <>

<Container fluid className="top p-2 bg-dark text-white">

{/* Top & NavBar */}

            <Row>
                <Col  xs={6} md={2} lg={1} >
                <Link to={'/'} >
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

              <Dropdown.Menu  >
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
        <p className="mt-3" > 1-48 of over 40,000 results for <span style={{color:"orangered" ,fontWeight:"bold"}}> "Kitchen essentials"</span> </p>
    </Row>
    </Container>
    <hr></hr>

   
   {/* Kitchen Section */}
   <Container fluid className="p-3">
      <Row>
        <Col xs={12} md={3} lg={2} className="border-end border-dark">
          <h6>Recently used filters</h6>
          <p>Delivery Day</p>
          <input type="checkbox" /> Get It Today
          <hr />
          <p>Delivery Day</p>
          <input type="checkbox" /> Get It Today<br />
          <input type="checkbox" /> Get It by Tomorrow<br />
          <input type="checkbox" /> Get It in 2 Days<br /><br />
          <p>Local Market</p>
          <input type="checkbox" /> Amazon Fresh<br /><br />
          <p>Category</p>
          <p>
            Home & Kitchen<br />
            Kitchen Tools<br />
            Kitchen Racks & Holders<br />
            Kitchen Linens<br />
            Bathroom Hardware<br />
            Reusable Cleaning Cloths<br />
            Kitchen Fixtures
          </p><br />
          <p>Customer Review</p>
          <img src={require('../images/str.png')} className="img-fluid" alt="Rating" /><br />
          <p>Brands</p>
          {['CAROTE', 'Pigeon', 'Scotch-Brite', 'SOLIMO', 'Suzec', 'Status Contract', 'ABOUT SPACE', 'GLUN', 'Vinod', 'Gala', 'CELLO', 'Plantex', 'MILTON', 'SOFTSPUN', 'Fackelmann', 'Fiskars'].map((brand, index) => (
            <div key={index}>
              <input type="checkbox" /> {brand}<br />
            </div>
          ))}
          <p>Price</p>
          Rs.32 _ Rs.351,800
          <Box sx={{ width: '100%' }}>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
          </Box>
          <br />
          <p>Deals & Discounts</p>
          <p>All Discounts<br />Today's Deals</p><br />
          <p>Item Condition</p>
          <p>New</p><br />
          <p>Kitchen Top Brands</p>
          <input type="checkbox" /> Top Brands<br />
          <input type="checkbox" /> Made for Amazon<br /><br />
          <p>Number of Pieces</p>
          {['1', '2', '3', '4', '5-8', '9-16', '17-24', '25-32', '33-44', '45-60', '61 & More'].map((pieces, index) => (
            <div key={index}>
              <input type="checkbox" /> {pieces}<br />
            </div>
          ))}
          <p>Pay On Delivery</p>
          <input type="checkbox" /> Eligible for Pay On Delivery<br /><br />
          <p>New Arrivals</p>
          <p>Last 30 days<br />Last 90 days</p><br />
          <p>Discount</p>
          <p>
            10% Off or more<br />
            25% Off or more<br />
            35% Off or more<br />
            50% Off or more<br />
            60% Off or more<br />
            70% Off or more
          </p><br />
          <p>Seller</p>
          {['Plantex', 'NIRLON KITCHENWARE PRIVATE LIMITED - MUMBAI', 'Club Bollywood SYD', 'ETrade Online', 'TheGlobalGenie', 'GUDMART ®', 'S.K. Art'].map((seller, index) => (
            <div key={index}>
              <input type="checkbox" /> {seller}<br />
            </div>
          ))}
          <p>Availability</p>
          <input type="checkbox" /> Include Out of Stock
        </Col>
        <Col xs={12} md={9} lg={10}>
          <Link to={'/kitchendet'} style={{ textDecoration: "none" }}>
            <Row>
              <Col xs={12} md={8} lg={6}>
                <Carousel controls={true} indicators={false} interval={1000}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/0cca392e-641c-4182-ad05-ccc3455c0943._CR0,0,1200,628_SX507_AGmerlin_QL70_.jpg"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1cff2523-f3ef-4717-80bc-c83ef647f906._CR0,274,1999,1047_SX507_AGmerlin_QL70_.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col xs={6} md={2} className="d-flex justify-content-center">
                <img src={require('../images/kr1.png')} className="img-fluid" alt="Image 1" />
              </Col>
              <Col xs={6} md={2} className="d-flex justify-content-center">
                <img src={require('../images/kr2.png')} className="img-fluid" alt="Image 2" />
              </Col>
            </Row>
            <br />
            <h4><b>Results</b></h4>
            <p>
              Check each product page for other buying options. Price and other details may vary based on product size and colour.
            </p>
            <Row className="mt-3">
              {['kt1.png', 'kt2.png', 'kt3.png', 'kt4.png', 'kt5.png', 'kt6.png', 'kt7.png', 'kt8.png', 'kt9.png', 'kt10.png', 'kt11.png', 'kt12.png', 'kt13.png', 'kt14.png', 'kt15.png', 'kt16.png', 'kt17.png', 'kt18.png', 'kt19.png', 'kt20.png'].map((image, index) => (
                <Col xs={6} md={3} lg={2} key={index} className="d-flex justify-content-center mb-3">
                  <img src={require(`../images/${image}`)} className="img-fluid" alt={`Image ${index + 1}`} />
                </Col>
              ))}
            </Row>
            <hr />
            <h3 className="p-3">Brands related to your search</h3>
            <Row>
              {['0cca392e-641c-4182-ad05-ccc3455c0943._CR0,0,1200,628_SX920_QL70_.jpg', '897f4311-959f-4820-b561-be85381c1a39._CR0,0,1200,628_SX920_QL70_.jpg', '160ca066-1278-4e43-99e4-e86d4e459a77._CR0,0,1200,628_SX920_QL70_.jpeg'].map((img, index) => (
                <Col xs={12} md={4} key={index} className="d-flex justify-content-center mb-3">
                  <img
                    src={`https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/${img}`}
                    className="img-fluid"
                    alt={`Brand ${index + 1}`}
                  />
                </Col>
              ))}
            </Row>
          </Link>
        </Col>
      </Row>
      <br />
      <br />
      <hr />
      <h2 className="p-2 mt-3">Recommended based on your browsing history</h2>
      <Container className="bg-white mt-2">
        <Row>
          <img src={require('../images/dec.png')} className="img-fluid" alt="Recommended" />
        </Row>
      </Container>
      <br />
      <h2 className="p-2 mt-3">Customers who viewed items in your browsing history also viewed</h2>
      <Container className="bg-white mt-2">
        <Row>
          <img src={require('../images/kct.png')} className="img-fluid" alt="Customers also viewed" />
        </Row>
      </Container>
      <br />
      <hr />
      <Container fluid className="bg-white p-2">
        <Row className="text-dark text-center">
          <Col xs={12} md={4} />
          <Col xs={12} md={4}>
            <p>See personalized recommendations</p>
            <Link to={'/signin'} style={{ textDecoration: "none" }}>
              <Button className="w-50" variant="warning">Sign in</Button>
            </Link>
            <br />
            <p>New customer?</p>
          </Col>
          <Col xs={12} md={4} />
        </Row>
        <hr />
      </Container>
    </Container>

    
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

      <Row className="mt-2" style={{backgroundColor:"rgb(35,47,62)"}}>
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

