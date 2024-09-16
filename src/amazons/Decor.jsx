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
import './normal.css';




import amz from '../images/amz.png';

export default function Decor()
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
        <p className="mt-3" > 1-48 of over 40,000 results for <span style={{color:"orangered" ,fontWeight:"bold"}}> "home decor" </span> </p>
    </Row>
    </Container>
    <hr></hr>

   
   {/* Decor Section */}

   <Container fluid>
    <Row>
      <Col xs={12} md={4} lg={2} style={{borderRight: "1px solid black", padding: '1rem'}}>
        <h6>Recently used filters</h6>
        <input type="checkbox" /> Get It Today
        <hr />
        <h6>Delivery Day</h6>
        <input type="checkbox" /> Get It Today
        <br />
        <input type="checkbox" /> Get It by Tomorrow
        <br />
        <input type="checkbox" /> Get It in 2 Days
        <br /><br />
        <h6>Local Market</h6>
        <input type="checkbox" /> Amazon Fresh
        <br /><br />
        <h6>Category</h6>
        <p>
          Home & Kitchen <br />
          Wall Sculptures <br />
          Idols & Figurines <br />
          Artificial Plants <br />
          Wall Shelves <br />
          Vases <br />
          Paintings <br />
          Decorative Signs & Plaques
        </p>
        <br />
        <h6>Customer Review</h6>
        <img src={require('../images/str.png')} alt="Review" style={{ width: '100%' }} />
        <br />
        <h6>Brands</h6>
        {/* List of checkboxes */}
        {['Homesake', 'TIED RIBBONS', 'amazon basics', 'CraftVatika', 'SATYAM KRAFT', 'Bikri Kendra', 'eCraftIndia', 'Webelkart', 'Sehaz Artworks', 'SPHINX', 'SOLIMO', 'Global Grabbers', 'Painting Mantra', 'Heart Home', 'AuraDecor', 'Art Street'].map((brand) => (
          <div key={brand}>
            <input type="checkbox" /> {brand}
            <br />
          </div>
        ))}
        <br />
        <h6>Price</h6>
        Rs.35 _ Rs.54,300
        <Box sx={{ width: '100%' }}>
          <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </Box>
        <br />
        <h6>Deals & Discounts</h6>
        <p>
          All Discounts <br />
          Today's Deals
        </p>
        <br />
        <h6>Item Condition</h6>
        <p>New</p>
        <br />
        <h6>Made for Amazon</h6>
        <input type="checkbox" /> Made for Amazon
        <br /><br />
        <h6>Pay On Delivery</h6>
        <input type="checkbox" /> Eligible for Pay On Delivery
        <br /><br />
        <h6>New Arrivals</h6>
        <p>
          Last 30 days <br />
          Last 90 days
        </p>
        <br />
        <h6>Discount</h6>
        <p>
          10% Off or more <br />
          25% Off or more <br />
          35% Off or more <br />
          50% Off or more <br />
          60% Off or more <br />
          70% Off or more
        </p>
        <br />
        <h6>Seller</h6>
        <input type="checkbox" /> ETrade Online
        <br />
        <input type="checkbox" /> Clicktech Retail
        <br /><br />
        <h6>Availability</h6>
        <input type="checkbox" /> Include Out of Stock
        <br />
      </Col>

      <Col xs={12} md={8} lg={10}>
        <Link to={'/decordet'} style={{ textDecoration: "none" }}>
          <img src={require('../images/dc.png')} alt="Decor" width="100%" />
          <br /><br />
          <h4><b>Results</b></h4>
          <p>Check each product page for other buying options. Price and other details may vary based on product size and colour.</p>
          <Row>
            {['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'c14', 'c15', 'c16'].map((img, index) => (
              <Col xs={6} sm={3} key={index} className="card">
                <img src={require(`../images/${img}.png`)} alt={`Card ${img}`} style={{ width: '100%' }} />
              </Col>
            ))}
          </Row>
          <h4 className="p-3"><b>More Results</b></h4>
          <Row>
            {['c9', 'c10', 'c11', 'c12', 'c13', 'c14', 'c15', 'c16'].map((img, index) => (
              <Col xs={6} sm={3} key={index} className="card">
                <img src={require(`../images/${img}.png`)} alt={`Card ${img}`} style={{ width: '100%' }} />
              </Col>
            ))}
          </Row>
          <br /><br /><br />
          <hr />
          <h3 className="p-3">Brands related to your search</h3>
          <Row>
            {['image1', 'image2', 'image3'].map((image, index) => (
              <Col xs={12} sm={4} key={index}>
                <img src={`https://example.com/${image}.jpg`} alt={`Brand ${image}`} style={{ width: '90%', height: 'auto', marginLeft: '5%' }} />
                <br /><br />
                <img src={`https://example.com/${image}-small.png`} alt={`Brand ${image} small`} style={{ marginLeft: '25%', height: '30px', width: '50%' }} />
              </Col>
            ))}
          </Row>
        </Link>
      </Col>
    </Row>
    <br /><br />
    <hr />
    <h2 className="p-2 mt-3">Recommended based on your browsing history</h2>
    <Container className="bg-white mt-2">
      <Row>
        <img src={require('../images/dec.png')} alt="Recommendation" style={{ width: '100%' }} />
      </Row>
    </Container>
    <br />
    <hr />
    <Container fluid className="bg-white p-2">
      <Row className="bg-white text-dark text-center">
        <Col xs={12} md={4}>
        </Col>
        <Col xs={12} md={4}>
          <p>See personalized recommendations</p>
          <Link to={'/signin'} style={{ textDecoration: "none" }}>
            <Button className="w-100" variant="warning">Sign in</Button>
          </Link>
          <br />
          <p>New customer?</p>
        </Col>
        <Col xs={12} md={4}>
        </Col>
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

