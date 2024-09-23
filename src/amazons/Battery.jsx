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


    {/* Battery SEction */}




<Container fluid className="p-0">
<Row noGutters>
  <Col xs={12} md={3} lg={2} className="border-right">
    <h6>Recently used filters</h6>
    <div className="filter-section">
      <p>Delivery Day</p>
      <input type="checkbox" id="today" /> <label htmlFor="today">Get It Today</label>
      <hr />
      <input type="checkbox" id="tomorrow" /> <label htmlFor="tomorrow">Get It by Tomorrow</label>
      <br />
      <input type="checkbox" id="in-2-days" /> <label htmlFor="in-2-days">Get It in 2 Days</label>
      <br /><br />

      <p>Local Market</p>
      <input type="checkbox" id="amazon-fresh" /> <label htmlFor="amazon-fresh">Amazon Fresh</label>
      <br /><br />

      <p>Category</p>
      <div className="category-list">
        <p>Appliance Inverter Accessories</p>
        <p>Appliance Inverter Batteries</p>
        <p>Appliance Inverters & Sets</p>
        <p>Appliance Inverter & Battery Sets</p>
        <p>Inverters</p>
      </div>
      <br />

      <p>Customer Review</p>
      <img src={require('../images/str.png')} alt="Customer Review" className="img-fluid" />
      <br />

      <p>Brands</p>
      <div className="brand-checkboxes">
        <input type="checkbox" id="luminous" /> <label htmlFor="luminous">Luminous</label>
        <br />
        <input type="checkbox" id="livguard" /> <label htmlFor="livguard">Livguard</label>
        <br />
        <input type="checkbox" id="genus" /> <label htmlFor="genus">Genus</label>
        <br />
        <input type="checkbox" id="microtek" /> <label htmlFor="microtek">MICROTEK</label>
        <br />
        <input type="checkbox" id="amaron" /> <label htmlFor="amaron">Amaron</label>
        <br /><br />

        <p>Price</p>
        <b>Rs.68 _ Rs.140,200 +</b>
        <Box sx={{ width: '100%' }}>
          <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </Box>
        <br />

        <p>Deals & Discounts</p>
        <p>All Discounts <br />Today's Deals</p>
        <br />

        <p>Item Condition</p>
        <p>New</p>
        <br />

        <p>Large Appliances Top Brands</p>
        <input type="checkbox" id="top-brands" /> <label htmlFor="top-brands">Top Brands</label>
        <br /><br />

        <p>New Arrivals</p>
        <p>Last 30 days <br />Last 90 days</p>
        <br />

        <p>Discount</p>
        <div className="discount-options">
          <p>10% Off or more <br />25% Off or more <br />35% Off or more <br />50% Off or more <br />60% Off or more <br />70% Off or more</p>
        </div>
        <br />

        <p>Seller</p>
        <input type="checkbox" id="foriox" /> <label htmlFor="foriox">Foriox India</label>
        <br />
        <input type="checkbox" id="upsbhai" /> <label htmlFor="upsbhai">UPSBhai CHENNAI</label>
        <br />
        <input type="checkbox" id="retailez" /> <label htmlFor="retailez">RetailEZ Pvt Ltd</label>
        <br />
        <input type="checkbox" id="infinia" /> <label htmlFor="infinia">InfiniaRetail⭐⭐⭐⭐⭐</label>
        <br />
        <input type="checkbox" id="bowzar" /> <label htmlFor="bowzar">Bowzar</label>
        <br />
        <input type="checkbox" id="etrade" /> <label htmlFor="etrade">ETrade Online</label>
        <br />
        <input type="checkbox" id="elyssion" /> <label htmlFor="elyssion">Elyssion Designs</label>
        <br />

        <p>Availability</p>
        <input type="checkbox" id="include-out-of-stock" /> <label htmlFor="include-out-of-stock">Include Out of Stock</label>
        <br />
      </div>
    </div>
  </Col>

  <Col xs={12} md={9} lg={10}>
    <Link to={'/batterydet'} style={{ textDecoration: 'none' }}>
      <Row>
        <img src={require('../images/b1.png')} alt="Banner" className="img-fluid" />
      </Row>

      <Row className="mt-2">
        <h2>Results</h2>
        <p>Check each product page for other buying options.</p>

        {/* Product Cards */}
        {[{
          imgSrc: 'https://m.media-amazon.com/images/I/61dBHKIcHCL._AC_UY327_FMwebp_QL65_.jpg',
          title: 'Genus Hallabol GTT230 Tall Tubular 200 Ah Inverter Battery with 72 Months Warranty for Home Office & Shops',
          priceImg: require('../images/s1.png'),
          buttonText: 'See Option',
          buttonClass: 'btn btn-white'
        }, {
          imgSrc: 'https://m.media-amazon.com/images/I/51FnT1Y3m1L._AC_UY327_FMwebp_QL65_.jpg',
          title: 'GRAPHENE® 12 Volt Lithium Ferro Phosphate Inverter Battery, 100AH Battery, Equivalent to 180AH Lead Acid Battery, Long Life Span up to 20 Years, Compatible with Any Normal Inverter, 7 Years Warranty',
          priceImg: require('../images/s3.png'),
          deliveryText: 'FREE delivery Tue, 30 Jul',
          buttonText: 'See Option',
          buttonClass: 'btn btn-white'
        }, {
          imgSrc: 'https://m.media-amazon.com/images/I/61OtwkAAS+S._AC_UY327_FMwebp_QL65_.jpg',
          title: 'Luminous Red Charge RC 25000 200 Ah, Recyclable Tall Tubular Inverter Battery for Home, Office & Shops (Blue & White)',
          priceImg: require('../images/s4.png'),
          buttonText: 'Add To Cart',
          buttonClass: 'btn btn-warning'
        }].map((product, index) => (
          <Row key={index} className="mt-3">
            <Col xs={12} md={4} className="text-center bg-white border">
              <img src={product.imgSrc} alt="Product" className="img-fluid" />
            </Col>
            <Col xs={12} md={8} className="bg-white border">
              <h5 className="mt-3">{product.title}</h5>
              <img src={product.priceImg} width="180px" alt="Price" />
              <br />
              {product.deliveryText && <p>{product.deliveryText}</p>}
              <Button className={`btn ${product.buttonClass} p-2`}>{product.buttonText}</Button>
            </Col>
          </Row>
        ))}

        <h3 className="p-3 mt-3">Brands related to your search</h3>
        <Row>
          {[{
            imgSrc: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/5e94996c-5cf7-4de6-aea8-b32d33f0eea6._CR0,0,1200,628_SX920_QL70_.jpg',
            logoSrc: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/90837bb3-eb60-477e-85c1-d330c1db2af6._CR0,0,400,400_AC_SX278_SY200_QL70_.png'
          }, {
            imgSrc: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f7dc488d-a4e7-4cbe-9f40-fd0e0858930c._CR0,0,1200,628_SX920_QL70_.png',
            logoSrc: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/6e258306-36b6-4463-8813-482569c50aa6._CR0,0,400,400_AC_SX278_SY200_QL70_.png'
          }, {
            imgSrc: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/3f1e1439-1f0b-466c-adfd-8411b3cc5388._CR0,244,1972,1032_SX920_QL70_.jpg',
            logoSrc: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/67d63366-1dae-4f53-ac20-3d8a8a97adc7._CR0,0,400,400_AC_SX278_SY200_QL70_.png'
          }].map((brand, index) => (
            <Col xs={12} md={4} key={index}>
              <img src={brand.imgSrc} alt="Brand" className="img-fluid" />
              <br />
              <br />
              <img src={brand.logoSrc} alt="Brand Logo" style={{ display: 'block', margin: 'auto', height: '50px' }} />
            </Col>
          ))}
        </Row>
      </Row>
    </Link>
  </Col>
</Row>


      <br /><br />
      <hr />

      <h2 className="p-2 mt-2">Recommended based on your browsing history</h2>
      <Container className="bg-white mt-2">
        <Row>
          <img src={require('../images/ss1.png')} alt="Recommended" className="img-fluid" />
        </Row>
      </Container>

      <h2 className="p-2 mt-3">Inspired by your browsing history</h2>
      <Container className="bg-white mt-2">
        <Row>
          <img src={require('../images/ss2.png')} alt="Inspired" className="img-fluid" />
        </Row>
      </Container>
      <br />
      <hr />

      <Container fluid className="bg-white p-2">
        <Row className="text-dark text-center">
          <Col xs={12} md={4}></Col>
          <Col xs={12} md={4}>
            <p>See personalized recommendations</p>
            <Link to={'/signin'} style={{ textDecoration: 'none' }}>
              <Button variant="warning" className="w-100">Sign in</Button>
            </Link>
            <br />
            <p>New customer?</p>
          </Col>
          <Col xs={12} md={4}></Col>
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

