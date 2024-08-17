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
                <Col xs={1} >
                <Link to={'/'}>
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
            <Link to={'/signin'} style={{textDecoration:"none" , color:"White"}}>
                <p>  Returns & <br></br>
                <b> Orders </b></p> 
              </Link>            
            </Col>

            <Col xs={1} className="text-center">
            <Link to={'/cart'} style={{textDecoration:"none" , color:"white"}}>
            <IoCartOutline  style={{fontSize:"40px"}}/> <br></br>
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

   
   {/* Kitchen Section */}

   <Container fluid className="">
    <Row>
        <Col xs={2} style={{borderRight:"1px solid black"}}>
        <h6>
        Recently used filters <br></br>
        Delivery Day
        </h6>
        <input type="checkbox" /> Get It Today

        <hr></hr>

        <h6> Delivery Day </h6>
        <input type="checkbox" /> Get It Today
        <br></br>
        <input type="checkbox" /> Get It by Tomorrow
        <br></br>
        <input type="checkbox" /> Get It in 2 Days
        <br />
        <br />

        <h6> Local Market </h6>
        <input type="checkbox" /> Amazon Fresh
        <br />
        <br />

        <h6> Category </h6>
        <p> 
         Home & Kitchen <br></br>
         Kitchen Tools <br></br>
         Kitchen Racks & Holders <br></br>
         Kitchen Linens <br></br>
         Bathroom Hardware <br></br>
         Reuseable Cleaning Cloths  <br></br>
         Kitchen Fixtures 
        </p>
        <br />
        <h6> Customer Review  </h6>
        <img src={require('../images/str.png')} />
        <br />

        <h6> Brands </h6>
        <input type="checkbox" /> CAROTE
        <br></br>
        <input type="checkbox" /> Pigeon
        <br></br>
        <input type="checkbox" /> Scotch-Brite
        <br></br>
        <input type="checkbox" /> SOLIMO
        <br></br>
        <input type="checkbox" /> Suzec
        <br></br>
        <input type="checkbox" /> Status Contract
        <br></br>
        <input type="checkbox" /> ABOUT SPACE
        <br></br>
        <input type="checkbox" /> GLUN
        <br></br>
        <input type="checkbox" /> Vinod
        <br></br>
        <input type="checkbox" /> Gala
        <br></br>
        <input type="checkbox" /> CELLO
        <br></br>
        <input type="checkbox" /> Plantex
        <br></br>
        <input type="checkbox" /> MILTON
        <br></br>
        <input type="checkbox" /> SOFTSPUN
        <br></br>
        <input type="checkbox" /> Fackelmann
        <br></br>
        <input type="checkbox" /> Fiskars
        <br />
        <br />

        <h6> Price </h6>
        Rs.32 _ Rs.351,800 
        <Box sx={{ width:150}}>
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
    <br />
  

    <h6> Deals & Discounts </h6>
    <p>  
    All Discounts <br></br>
    Today's Deals
    </p>
    <br />
   
    <h6> Item Condition </h6>
    <p> New </p>
    <br></br>
    
    <h6> Kitchen Top Brands </h6>
    <input type="checkbox" /> Top Brands
    <br></br>
    <input type="checkbox" /> Made for Amazon
    <br />
    <br />

    <h6> Number of Pieces  </h6>
    <input type="checkbox" /> 1
        <br></br>
        <input type="checkbox" /> 2
        <br></br>
        <input type="checkbox" /> 3
        <br></br>
        <input type="checkbox" /> 4
        <br></br>
        <input type="checkbox" /> 5-8
        <br></br>
        <input type="checkbox" /> 9-16
        <br></br>
        <input type="checkbox" /> 17-24
        <br></br>
        <input type="checkbox" /> 25-32
        <br></br>
        <input type="checkbox" /> 33-44
        <br></br>
        <input type="checkbox" /> 45-60
        <br></br>
        <input type="checkbox" /> 61 & More
        <br></br>
        <br />
        <br />

   

    <h6> Pay On Delivery </h6>
    <input type="checkbox" /> Eligible for Pay On Delivery
    <br />
    <br />


    <h6> New Arrivals </h6>
    <p>  
    Last 30 days <br></br>
    Last 90 days
    </p>
    <br></br>
  

    <h6> Discount  </h6>
        <p> 
        10% Off or more <br></br>
        25% Off or more <br></br>
        35% Off or more <br></br>
        50% Off or more <br></br>
        60% Off or more <br></br>
        70% Off or more  <br></br>
        </p>
        <br></br>

    <h6> Seller </h6>
    <input type="checkbox" /> <input type="checkbox" /> Plantex
        <br></br>
        <input type="checkbox" /> NIRLON KITCHENWARE PRIVATE LIMITED - MUMBAI
        <br></br>
        <input type="checkbox" /> Club Bollywood SYD
        <br></br>
        <input type="checkbox" /> ETrade Online
        <br></br>
        <input type="checkbox" /> TheGlobalGenie
        <br></br>
        <input type="checkbox" /> GUDMART ®
        <br></br>
        <input type="checkbox" /> S.K. Art
    <br />
    <br />
     
    <h6> Availability </h6> 
    <input type="checkbox" /> Include Out of Stock
    <br />

    </Col>

    <Col xs={10} >
    <Link to={'/kitchendet'} style={{textDecoration:"none"}} >
    <Row>
        <Col xs={6}>
        <Carousel controls={true} indicators={false} interval={1000} >
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

        <Col xs={2} className="card">
        <img src={require('../images/kr1.png')} />
        </Col>
        <Col xs={2} className="card">
        <img src={require('../images/kr2.png')} />
        </Col>
        <Col xs={2}>
        </Col>
    </Row>

    <br />
    <br />

    <h4> <b> Results </b> </h4>
    <p>  
    Check each product page for other buying options. Price and other details may vary based on product size and colour.    
    </p>

    <Row>
        <Col xs={3} className="card">
        <img src={require('../images/kt1.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/kt2.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/kt3.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/kt4.png')} />
        </Col>
    </Row>

    
    <Row className="mt-3">
        <Col xs={3} className="card">
        <img src={require('../images/kt5.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/kt6.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/kt7.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/kt8.png')} />
        </Col>
    </Row>

    <h4 className="p-3"> More Results </h4>

    <Row>
        <Col xs={3} className="card">
        <img src={require('../images/kt9.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/kt10.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/kt11.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/kt12.png')} />
        </Col>
    </Row>

    
    <Row className="mt-3">
        <Col xs={3} className="card">
        <img src={require('../images/kt13.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/kt14.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/kt15.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/kt16.png')} />
        </Col>
    </Row>

    <Row className="mt-3">
        <Col xs={3} className="card">
        <img src={require('../images/kt17.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/kt18.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/kt19.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/kt20.png')} />
        </Col>
    </Row>
    <br />
    <br />
    <br />

    <hr></hr>
   
    <h3 className="p-3"> Brands related to your search  </h3>
    <Row>
        <Col xs={4} >
        <img style={{width:"90%",height:"200px", marginLeft:"5%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/0cca392e-641c-4182-ad05-ccc3455c0943._CR0,0,1200,628_SX920_QL70_.jpg" />
        <br />
        <br></br>
        <img style={{marginLeft:"40%" ,height:"20%",width:"20%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/6b9af555-7309-4503-9acc-872057ff4db0._CR0,0,600,600_AC_SX278_SY200_QL70_.png"/>
        </Col>

        <Col xs={4} >
        <img style={{width:"90%",height:"200px", marginLeft:"5%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/897f4311-959f-4820-b561-be85381c1a39._CR0,0,1200,628_SX920_QL70_.jpg"/>
        <br />
        <br></br>
        <img style={{marginLeft:"30%" ,height:"50px",width:"40%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/7b4b6c28-5d87-438b-affa-08cd790df850._CR0,0,1000,1000_AC_SX278_SY200_QL70_.png"/>
        </Col>

        <Col xs={4} >
        <img style={{width:"90%",height:"200px", marginLeft:"5%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/160ca066-1278-4e43-99e4-e86d4e459a77._CR0,0,1200,628_SX920_QL70_.jpeg" />
        <br />
        <br />
        <img style={{marginLeft:"30%" ,height:"50px",width:"40%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/618c299b-dbc4-4e69-a4f0-b3a78c39788d._CR0,0,400,400_AC_SX278_SY200_QL70_.png" />
        </Col>

    </Row>
    </Link>

    </Col>
    </Row>
   </Container>
   <br />
   <br />
   <hr></hr>

   <h2 className="p-2 mt-3" > Recommended based on your browsing history </h2>
   <Container className="bg-white mt-2">
    <Row>
    <img src={require('../images/dec.png')} />
    </Row>
   </Container>
   <br />
 
   <h2 className="p-2 mt-3" > Customers who viewed items in your browsing history also viewed </h2>
   <Container  className="bg-white mt-2">    <Row>
    <img src={require('../images/kct.png')} />
    </Row>
   </Container>
   <br />
   <hr></hr>

   <Container fluid className="bg-white p-2">  
       <Row className="bg-white text-dark text-center">
       <Col xs={4}>
       </Col>

        <Col xs={4} className="w-100">
        <p> See personalized recommendations </p>
        <Link to={'/signin'} style={{textDecoration:"none"}} >
       <Button className="w-25" variant="warning">Sign in</Button>{' '}
       </Link>       <br></br>
       <p> New customer?  </p>
       </Col>

       <Col xs={4}>
       </Col>
       </Row>
       <hr></hr>

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

