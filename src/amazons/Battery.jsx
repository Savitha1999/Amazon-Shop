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

export default function Battery()
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
            <Link to={'/signin'} style={{textDecoration:"none", color:"White"}}  >
                <p>  Returns & <br></br>
                <b> Orders </b></p> 
              </Link>            
            </Col>

            <Col xs={1} className="text-center">
            <Link to={'/cart'} style={{textDecoration:"none", color:"white"}} >
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
        <p className="mt-3" > 1-16 of 490 results for  <span style={{color:"orangered" ,fontWeight:"bold"}}> "inverter battery" </span> </p>
    </Row>
    </Container>
    <hr></hr>


    {/* Battery SEction */}

    
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
        Appliance Inverter Accessories <br></br>
        Appliance Inverter Batteries <br></br>
        Appliance Inverters & Sets <br></br>
        Appliance Inverter & Battery Sets <br></br> 
        Inverters
        </p>
        <br />

        <h6> Customer Review  </h6>
        <img src={require('../images/str.png')} />
        <br />

        <h6> Brands </h6>
        <input type="checkbox" /> Luminous
        <br></br>
        <input type="checkbox" /> Livguard
        <br></br>
        <input type="checkbox" /> Genus
        <br></br>
        <input type="checkbox" /> MICROTEK
        <br></br>
        <input type="checkbox" /> Amaron
        <br />
        <br />

        <h6> Price </h6>
        <b> Rs.68 _ Rs.140,200 + </b>
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
    
    <h6> Large Appliances Top Brands </h6>
    <input type="checkbox" /> Top Brands
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
    <input type="checkbox" /> Foriox India
    <br></br>
    <input type="checkbox" /> UPSBhai CHENNAI
    <br></br>
    <input type="checkbox" /> RetailEZ Pvt Ltd
    <br></br>
    <input type="checkbox" /> InfiniaRetail⭐⭐⭐⭐⭐
    <br></br>
    <input type="checkbox" /> Bowzar
    <br></br>
    <input type="checkbox" /> ETrade Online
    <br></br>
    <input type="checkbox" /> Elyssion Designs
    <br />
    <br />
     
    <h6> Availability </h6> 
    <input type="checkbox" /> Include Out of Stock
    <br />
    </Col>


    <Col xs={10}>
    <Link to={'/batterydet'} style={{textDecoration:"none"}}>

    <Row>
    <img src={require('../images/b1.png')} height="330px" />
    
    </Row>
    

    <Row className="mt-2 " >
        <h2> Results </h2>
        <p> Check each product page for other buying options. </p>

        <Col xs={4}  className="mt-2 text-center bg-white" style={{borderTop:"1px solid grey", borderBottom:"1px solid black" }}>
        <img src="https://m.media-amazon.com/images/I/61dBHKIcHCL._AC_UY327_FMwebp_QL65_.jpg" style={{height:"280px" ,padding:"10px"}} />
        </Col>
        <Col xs={8} className="mt-2 " style={{borderTop:"1px solid grey", borderBottom:"1px solid black" }} >
        <h5 className="mt-3">
        Genus Hallabol GTT230 Tall Tubular 200 Ah Inverter Battery with 72 Months Warranty for Home Office & Shops
        </h5>
        <img src={require('../images/s1.png')} /> 
        <br /> <br />
        <Button className="btn btn-white p-2" > See Option </Button>
        </Col>
    </Row>


    <Row className="mt-3 " >
        <Col xs={4}  className="mt-2 text-center bg-white" style={{borderTop:"1px solid grey", borderBottom:"1px solid grey" }} >
        <img src="https://m.media-amazon.com/images/I/51FnT1Y3m1L._AC_UY327_FMwebp_QL65_.jpg" style={{height:"280px" ,padding:"10px"}} />
        </Col>
        <Col xs={8} className="mt-2 " style={{borderTop:"1px solid grey", borderBottom:"1px solid grey" }} >
        <h5 className="mt-3">
        GRAPHENE® 12 Volt Lithium Ferro Phosphate Inverter Battery, 100AH Battery, Equivalent to 180AH Lead Acid Battery, Long Life Span up to 20 Years, Compatible with Any Normal Inverter, 7 Years Warranty        </h5>
        <img src={require('../images/s3.png')} width="180px" /> 
        <p> FREE delivery Tue, 30 Jul </p>      
        <Button className="btn btn-white p-2" > See Option </Button>
        </Col>
    </Row>


    <Row className="mt-3 " >
        <Col xs={4}  className="mt-2 text-center bg-white" style={{borderTop:"1px solid grey", borderBottom:"1px solid grey" }}>
        <img src="https://m.media-amazon.com/images/I/61OtwkAAS+S._AC_UY327_FMwebp_QL65_.jpg" style={{height:"280px" ,padding:"10px"}} />
        </Col>
        <Col xs={8} className="mt-2 " style={{borderTop:"1px solid grey", borderBottom:"1px solid grey" }} >
        <h5 className="mt-3">
        Luminous Red Charge RC 25000 200 Ah, Recyclable Tall Tubular Inverter Battery for Home, Office & Shops (Blue & White)        </h5>
        <img src={require('../images/s4.png')}  width="180px"/> 
        <br /> <br />
        <Button className="btn btn-warning p-2" > Add To Cart </Button>
        </Col>
    </Row>


    <Row className="mt-3 " >
        <Col xs={4}  className="mt-2 text-center bg-white" style={{borderTop:"1px solid grey", borderBottom:"1px solid grey" }}>
        <img src="https://m.media-amazon.com/images/I/51LbSKlWWjL._AC_UY327_FMwebp_QL65_.jpg" style={{height:"280px" ,padding:"10px"}} />
        </Col>
        <Col xs={8} className="mt-2 " style={{borderTop:"1px solid grey", borderBottom:"1px solid grey" }} >
        <h5 className="mt-3">
        Luminous RedCharge RC 18000 ST 150AH Short Tubular Plate Inverter Battery for Home, Office & Shops        </h5>
        <img src={require('../images/s5.png')} width="180px" /> 
        <br /> <br />
        <Button className="btn btn-warning p-2" > Add To Cart </Button>
        </Col>
    </Row>


    <Row className="mt-3 " >
        <Col xs={4}  className="mt-2 text-center bg-white" style={{borderTop:"1px solid grey", borderBottom:"1px solid grey" }}>
        <img src="https://m.media-amazon.com/images/I/71F2tEAEK0L._AC_UY327_FMwebp_QL65_.jpg" style={{height:"280px" ,padding:"10px"}} />
        </Col>
        <Col xs={8} className="mt-2 " style={{borderTop:"1px solid grey", borderBottom:"1px solid grey" }} >
        <h5 className="mt-3">
        TATA Green Switch-On INTT2400 200AH Tall Tubular Inverter Battery with 60 Months Warranty for Home, Office & Shops        </h5>
        <img src={require('../images/s6.png')}  /> 
        <br /> <br />
        <Button className="btn btn-white p-2" > See Option </Button>
        <br /> <br />
        <p> No featured offers available <br></br>
        ₹16,899(2 new offers) </p>
        </Col>
    </Row>

    <Row className="mt-3 " >
        <Col xs={4}  className="mt-2 text-center bg-white" style={{borderTop:"1px solid grey", borderBottom:"1px solid grey" }}>
        <img src="https://m.media-amazon.com/images/I/616634ZhlaL._AC_UY327_FMwebp_QL65_.jpg" style={{height:"270px" ,padding:"10px"}} />
        </Col>
        <Col xs={8} className="mt-2" style={{borderTop:"1px solid grey", borderBottom:"1px solid grey" }} >
        <h5 className="mt-3">
        Luminous Inverter & Battery Combo with Trolley (Zelio+ 1100 Pure Sine Wave 900VA/12V Inverter, Red Charge RC 15000 PRO Short Tubular 120Ah Battery with Trolley) for Home, Office & Shops
        </h5>
        <img src={require('../images/s7.png')} width="180px" /> 
        <br /> <br />
        <Button className="btn btn-warning p-2" > Add To Cart </Button>
        <br />
        
        </Col>
    </Row>

    <Row className="mt-3 " >
        <Col xs={4}  className="mt-2 text-center bg-white" style={{borderTop:"1px solid grey", borderBottom:"1px solid grey" }}>
        <img src="https://m.media-amazon.com/images/I/51nqj9B+ZKL._AC_UY327_FMwebp_QL65_.jpg" style={{height:"250px" ,padding:"10px"}} />
        </Col>
        <Col xs={8} className="mt-2 " style={{borderTop:"1px solid grey", borderBottom:"1px solid grey" }} >
        <h5 className="mt-3">
        Luminous Inverter & Battery Combo (Eco Watt Neo 700 Square Wave 600VA/12V Inverter with Red Charge RC 15000ST Short Tubular 120Ah Battery) for Home, Office & Shops
        </h5>
        <img src={require('../images/s8.png')} width="180px"  /> 
        <br /> <br />
        <Button className="btn btn-warning p-2" > Add To Cart </Button>
        <br /> <br />
        <p> More Buying Choices <br></br>
        ₹14,799(47 new offers) </p>
        </Col>
    </Row>

    <h3 className="p-3 mt-3"> Brands related to your search  </h3>
    <Row>
        <Col xs={4} >
        <img style={{width:"90%",height:"200px", marginLeft:"5%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/5e94996c-5cf7-4de6-aea8-b32d33f0eea6._CR0,0,1200,628_SX920_QL70_.jpg" />
        <br />
        <br></br>
        <img style={{marginLeft:"25%" ,height:"30px",width:"50%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/90837bb3-eb60-477e-85c1-d330c1db2af6._CR0,0,400,400_AC_SX278_SY200_QL70_.png"/>
        </Col>

        <Col xs={4} >
        <img style={{width:"90%",height:"200px", marginLeft:"5%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f7dc488d-a4e7-4cbe-9f40-fd0e0858930c._CR0,0,1200,628_SX920_QL70_.png"/>
        <br />
        <br></br>
        <img style={{marginLeft:"25%" ,height:"50px",width:"50%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/6e258306-36b6-4463-8813-482569c50aa6._CR0,0,400,400_AC_SX278_SY200_QL70_.png"/>
        </Col>

        <Col xs={4} >
        <img style={{width:"90%",height:"200px", marginLeft:"5%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/3f1e1439-1f0b-466c-adfd-8411b3cc5388._CR0,244,1972,1032_SX920_QL70_.jpg" />
        <br />
        <br />
        <img style={{marginLeft:"40%" ,height:"20%",width:"20%"}} src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/67d63366-1dae-4f53-ac20-3d8a8a97adc7._CR0,0,400,400_AC_SX278_SY200_QL70_.png" />
        </Col>

    </Row>

    </Link>
    </Col>

  
    </Row>
    </Container>
    <br />
    <br />
    <hr></hr>


  <h2 className="p-2 mt-2" > Recommended based on your browsing history </h2>
   <Container  className="bg-white mt-2">
    <Row>
    <img src={require('../images/ss1.png')} />
    </Row>
   </Container>

   <h2 className="p-2 mt-3" > Inspired by your browsing history </h2>
   <Container  className="bg-white mt-2">
    <Row>
    <img src={require('../images/ss2.png')} />
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

