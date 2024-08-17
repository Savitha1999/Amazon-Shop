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
            <Link to={'/signin'} style={{textDecoration:"none" , color:"White"}}>
                <p>  Returns & <br></br>
                <b> Orders </b></p> 
              </Link>           
            </Col>

            <Col xs={1} className="text-center">
            <Link to={'/cart'} style={{textDecoration:"none",color:"white"}}>
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
        <p className="mt-3" > 1-48 of over 40,000 results for <span style={{color:"orangered" ,fontWeight:"bold"}}> "home decor" </span> </p>
    </Row>
    </Container>
    <hr></hr>

   
   {/* Decor Section */}

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
         Wall Sculptures <br></br>
         Idols & Figurines <br></br>
         Artificial Plants <br></br>
         Wall Shelves <br></br>
         Vases  <br></br>
         Paintings <br></br> 
         Decorative Signs & Plaques
        </p>
        <br />
        <h6> Customer Review  </h6>
        <img src={require('../images/str.png')} />
        <br />

        <h6> Brands </h6>
        <input type="checkbox" /> Homesake
        <br></br>
        <input type="checkbox" /> TIED RIBBONS
        <br></br>
        <input type="checkbox" /> amazon basics
        <br></br>
        <input type="checkbox" /> CraftVatika
        <br></br>
        <input type="checkbox" /> SATYAM KRAFT
        <br></br>
        <input type="checkbox" /> Bikri Kendra
        <br></br>
        <input type="checkbox" /> eCraftIndia
        <br></br>
        <input type="checkbox" /> Webelkart
        <br></br>
        <input type="checkbox" /> Sehaz Artworks
        <br></br>
        <input type="checkbox" /> SPHINX
        <br></br>
        <input type="checkbox" /> SOLIMO
        <br></br>
        <input type="checkbox" /> Global Grabbers
        <br></br>
        <input type="checkbox" /> Painting Mantra
        <br></br>
        <input type="checkbox" /> Heart Home
        <br></br>
        <input type="checkbox" /> AuraDecor
        <br></br>
        <input type="checkbox" /> Art Street
        <br />
        <br />

        <h6> Price </h6>
        Rs.35 _ Rs.54,300 
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
    
    <h6> Made for Amazon </h6>
    <input type="checkbox" /> Made for Amazon
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
    <input type="checkbox" /> ETrade Online
    <br></br>
    <input type="checkbox" /> Clicktech Retail
    <br />
    <br />
     
    <h6> Availability </h6> 
    <input type="checkbox" /> Include Out of Stock
    <br />

    </Col>

    <Col xs={10} >

  <Link to={'/decordet'} style={{textDecoration:"none"}} >

    <img src={require('../images/dc.png')} width="100%" />
    <br />
    <br />

    <h4> <b> Results </b> </h4>
    <p>  
    Check each product page for other buying options. Price and other details may vary based on product size and colour.
    </p>

    <Row>
        <Col xs={3} className="card">
        <img src={require('../images/c1.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/c2.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/c3.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/c4.png')} />
        </Col>
    </Row>

    
    <Row className="mt-4">
        <Col xs={3} className="card">
        <img src={require('../images/c5.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/c6.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/c7.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/c8.png')} />
        </Col>
    </Row>

    <h4 className="p-3"> <b>More Results </b>  </h4>

    <Row>
        <Col xs={3} className="card">
        <img src={require('../images/c9.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/c10.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/c11.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/c12.png')} />
        </Col>
    </Row>

    
    <Row className="mt-3">
        <Col xs={3} className="card">
        <img src={require('../images/c13.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/c14.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/c15.png')} />
        </Col>

        <Col xs={3} className="card">
        <img src={require('../images/c16.png')} />
        </Col>
    </Row>
    <br />
    <br />
    <br />

    <hr></hr>
   
    <h3 className="p-3"> Brands related to your search  </h3>
    <Row>
        <Col xs={4} >
        <img style={{width:"90%",height:"200px", marginLeft:"5%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/8980a543-7c8f-4115-8e85-6a3bf099602e._CR0,0,1200,628_SX920_QL70_.jpg" />
        <br />
        <br></br>
        <img style={{marginLeft:"25%" ,height:"30px",width:"50%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/4793155d-9884-48a7-9226-7f18dab821d2._CR0,0,400,400_AC_SX278_SY200_QL70_.jpg"/>
        </Col>

        <Col xs={4} >
        <img style={{width:"90%",height:"200px", marginLeft:"5%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1ad0a83b-74a3-4951-948b-7beeef960496._CR0,0,1200,628_SX920_QL70_.jpg"/>
        <br />
        <br></br>
        <img style={{marginLeft:"25%" ,height:"50px",width:"50%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/a4a6df63-978d-48de-9da1-a268098f17fd._CR0,0,800,800_AC_SX278_SY200_QL70_.png"/>
        </Col>

        <Col xs={4} >
        <img style={{width:"90%",height:"200px", marginLeft:"5%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/35bd783a-a4a6-4c40-a759-129a0d3bc7f6._CR0,1423,2268,1187_SX920_QL70_.jpg" />
        <br />
        <br />
        <img style={{marginLeft:"40%" ,height:"20%",width:"20%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/4dc4d5a1-a5ea-468b-98c2-5e8780b70d0f._CR0,0,400,400_AC_SX278_SY200_QL70_.jpg" />
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
   <Container  className="bg-white mt-2">
    <Row>
    <img src={require('../images/dec.png')} />
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
       </Link>       
       <br></br>
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

