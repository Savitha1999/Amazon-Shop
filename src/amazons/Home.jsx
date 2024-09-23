import React ,{useState} from "react";
import { Container ,Row,Col ,Nav, Carousel,Button } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import crd1 from '../images/crd1.png';
import crd2 from '../images/crd2.png';
import crd3 from '../images/crd3.png';
import crd4 from '../images/crd4.png';
import decor1 from '../images/decor1.png';
import decore2 from '../images/decore2.png';
import decore3 from '../images/decore3.png';
import fur1 from '../images/fur1.png';
import fur2 from '../images/fur2.png';
import fur3 from '../images/fur3.png';
import fur4 from '../images/fur4.png';
import fur5 from '../images/fur5.png';
import cat1 from '../images/cat1.png';
import cat2 from '../images/cat2.png';
import cat3 from '../images/cat3.png';
import cat4 from '../images/cat4.png';
import bat from '../images/bat.png';
import d1 from '../images/d1.png';
import d2 from '../images/d2.png';
import d3 from '../images/d3.png';
import d4 from '../images/d4.png';
import d5 from '../images/d5.png';
import sct1 from '../images/sct1.png';
import sct2 from '../images/sct2.png';
import sct3 from '../images/sct3.png';
import sct4 from '../images/sct4.png';
import f1 from '../images/f1.png';
import f2 from '../images/f2.png';
import f3 from '../images/f3.png';
import f4 from '../images/f4.png';
import sho from '../images/sho.png';
import k1 from '../images/k1.png';
import k2 from '../images/k2.png';
import k3 from '../images/k3.png';
import k4 from '../images/k4.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import kit1 from '../images/kit1.png';
import kit2 from '../images/kit2.png';
import kit3 from '../images/kit3.png';
import kit4 from '../images/kit4.png';
import his from '../images/his.png';
import amz from '../images/amz.png';
import { Link } from "react-router-dom";
import './normal.css';


export default function Home()
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



    {/* Carousel Section */}
<Container fluid className="bg-light mt-1">
    <Row style={{cursor:"pointer"}}>

    <Carousel data-bs-theme="dark"  >
      <Carousel.Item style={{height:"350px"}}>
        <img 
          className="d-block w-100 custom-img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/July/Unrec/3000/3._CB569386741_.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p className="bg-light"> You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. Click here to go to amazon.in </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"350px"}} >
        <img
          className="d-block w-100 custom-img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_refresh._CB555261616_.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p className="bg-light"> You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. Click here to go to amazon.in </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"350px"}} >
        <img
          className="d-block w-100 custom-img"
          src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p className="bg-light"> You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. Click here to go to amazon.in </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"350px"}} >
        <img
          className="d-block w-100 custom-img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Aman/Primeday24/5300---Kitchen-hero---BAU---update_3000X1200._CB569213170_.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <p className="bg-light"> You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. Click here to go to amazon.in </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"350px"}} >
        <img
          className="d-block w-100 custom-img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/D132995370_Homepage_DesktopHeroTemplate_3000x1200._CB557152260_.jpg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <p className="bg-light"> You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. Click here to go to amazon.in </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"350px"}} >
        <img
          className="d-block w-100 custom-img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/MED_MAY/Tall_Hero_1500X600_BAU_NewLaunches._CB554931622_.jpg"
          alt="Sixth slide"
        />
        <Carousel.Caption>
          <p className="bg-light"> You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. Click here to go to amazon.in </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"350px"}} >
        <img
          className="d-block w-100 custom-img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg"
          alt="Seveth slide"
        />
        <Carousel.Caption>
          <p className="bg-light"> You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. Click here to go to amazon.in </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Row>

<Link to={'/decor'} style={{textDecoration:"none",cursor:"pointer"}}>
    <Row className="mt-4 " style={{cursor:"pointer"}}>
    <Col xs={12} sm={6} md={4} lg={3}>
    <img src={crd1} style={{width:"95%"}} />
      </Col>

      <Col xs={12} sm={6} md={4} lg={3}>
      <img src={crd2} style={{width:"95%"}} />
      </Col>

      <Col xs={12} sm={6} md={4} lg={3}>
      <img src={crd3} style={{width:"95%"}} />
      </Col>

      <Col xs={12} sm={6} md={4} lg={3}>
      <img src={crd4} style={{width:"95%"}} />
      </Col>
    </Row>
    </Link>


    <Link to={'/decor'} style={{textDecoration:"none",cursor:"pointer"}}>
    <Row className="mt-4 bg-white text-primary p-3">
    <h2 className="p-3"> Shop deals in top categories <span style={{fontSize:"15px"}} className="text-dark"> Explore all categories  </span>  </h2>
    <Col lg={2} sm={4} md={6}>
      <img src={require('../images/cs1.png')} style={{width:"95%"}} />
      </Col>

      <Col lg={2} sm={4} md={6}>
      <img src={require('../images/cs2.png')} style={{width:"95%"}} />
      </Col>

      <Col lg={2} sm={4} md={6}>
      <img src={require('../images/cs3.png')} style={{width:"95%"}} />
      </Col>

      <Col lg={2} sm={4} md={6}>
      <img src={require('../images/cs4.png')} style={{width:"95%"}} />
      </Col>

      <Col lg={2} sm={4} md={6}>
      <img src={require('../images/cs5.png')} style={{width:"95%"}} />
      </Col>

      <Col lg={2} sm={4} md={6}>
      <img src={require('../images/cs6.png')} style={{width:"95%"}} />
      </Col>
    </Row>
    </Link>


{/* Home Decor */}

<Link to={'/decor'} style={{textDecoration:"none",cursor:"pointer"}}>
  <Container fluid className="bg-light">
    <Row className="mt-4 bg-white  p-2">
      <h2 className="p-3"> Trendy home decor  <span style={{fontSize:"15px"}} className="text-dark"> See All Offer  </span>  </h2>
    <Carousel data-bs-theme="dark"   indicators={false}  >
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={decor1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={decore2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={decore3}
          alt="Third slide"
        />      
      </Carousel.Item>
    </Carousel>
    </Row>
    </Container>
  </Link>


    <Container fluid className="bg-light">
    <Link to={'/decor'} style={{textDecoration:"none",cursor:"pointer"}}>
    <Row className="mt-4 bg-white  p-2">
      <h2 className="p-2"> Minimum 40% off | Furniture | From local stores nearby  <span style={{fontSize:"15px"}} className="text-dark"> See All Offer  </span>  </h2>
    <Carousel controls={false} indicators={false} interval={3000} pause={true}>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={fur1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fur2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fur3}
          alt="Third slide"
        />      
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={fur4}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fur5}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
    </Row>
    </Link>
    </Container>

    <Container fluid className="bg-light">
    <Link to={'/decor'} style={{textDecoration:"none",cursor:"pointer"}}>
      <Row className="mt-3  p-2">
      <Col xs={12} sm={6} md={4} lg={3}>
        <img src={cat1} style={{width:"95%"}} />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
        <img src={cat2} style={{width:"95%"}} />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
        <img src={cat3} style={{width:"95%"}} />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
        <img src={cat4} style={{width:"95%"}} />
        </Col>
      </Row>
      </Link>

      <Row className="bg-white mt-3">
      <Link to={'/battery'} style={{textDecoration:"none",cursor:"pointer"}}>
        <h2 className="p-3"> Up to 70% off on | Bestselling smartwatches <span style={{fontSize:"15px"}} className="text-dark"> See All Offer  </span>  </h2>
        <Carousel controls={false} indicators={true} interval={3000} pause={true} className="p-3" >
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={require('../images/watch1.png')}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../images/watch2.png')}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </Link>
      </Row>


{/* Inverter Battries */}

<Link to={'/battery'} style={{textDecoration:"none",cursor:"pointer" }} >

      <Row className="mt-4 p-2 bg-white">
        <h2 className="p-3"> Up to 40% off | Inverter batteries | From local stores nearby  <span style={{fontSize:"15px"}} className="text-dark"> See All Offer  </span>  </h2>
        <img src={bat} />
      </Row>
    </Link>  
    

      <Row className="mt-4 bg-white text-primary p-2">
      <h2 className="p-2"> Top deals curated from local stores nearby </h2>
    <Carousel controls={false} indicators={true} interval={3000} pause={true}>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={d1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={d2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={d3}
          alt="Third slide"
        />      
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={d4}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={d5}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
    </Row>

    <Row className="mt-4 bg-white text-dark p-2">
    <Link to={'/battery'} style={{textDecoration:"none",cursor:"pointer"}}>
      <h2 className="p-2"> Electric scooters & two wheelers from stores nearby  <span style={{fontSize:"15px"}} className="text-dark"> See All Offer  </span>  </h2>
    <Carousel controls={true} indicators={true} >
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={sct1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sct2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sct3}
          alt="Third slide"
        />      
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={sct4}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    </Link>
    </Row>

    <Row className="bg-white mt-4">
    <Link to={'/kitchen'} style={{textDecoration:"none",cursor:"pointer"}}>
        <h2 className="p-3"> Starting ₹99 + 20% cashback on first order | Beauty & makeup <span style={{fontSize:"15px"}} className="text-dark"> See All Offer  </span>  </h2>
        <Carousel controls={true} indicators={false} interval={3000} pause={true} className="p-3" >
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={require('../images/up1.png')}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../images/up2.png')}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={require('../images/up3.png')}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </Link>
      </Row>


    <Row className="p-3 mt-2 bg-light ">
      <img src={sho} style={{width:"70%" , marginLeft:"15%"}}/>
    </Row>

    <Link to={'/decor'} style={{textDecoration:"none",cursor:"pointer"}} >
    <Row className="mt-2  p-2">
    <Col xs={12} sm={6} md={4} lg={3}>
    <img src={f1} style={{width:"95%"}} />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
        <img src={f2} style={{width:"95%"}} />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
        <img src={f3} style={{width:"95%"}} />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
        <img src={f4} style={{width:"95%"}} />
        </Col>
      </Row>
      </Link>

      <Link to={'/decor'} style={{textDecoration:"none",cursor:"pointer"}} >
      <Row className="mt-4 bg-white">
      <h2 className="p-3"> Amazon Ads & Kurtis Section <span style={{fontSize:"15px"}} className="text-dark"> See All Offer  </span>  </h2>
      <Col lg={4} sm={3} md={2}>        <iframe width="98%" height="300px" src="https://www.youtube.com/embed/REscpOYqGII" title="Introduction to Amazon Ads" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Col>
        <Col lg={8} sm={6} md={4} >
        <Carousel controls={true} indicators={true} >
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={k1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={k2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={k3}
          alt="Third slide"
        />      
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={k4}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
        </Col>
      </Row>
      </Link>


      <Link to={'/decor'} style={{textDecoration:"none",cursor:"pointer"}} >
      <Row className="mt-3  p-2">
      <Col xs={12} sm={6} md={4} lg={3}>
        <img src={p5} style={{width:"95%"}} />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
        <img src={p3} style={{width:"95%"}} />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
        <img src={p4} style={{width:"95%"}} />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
        <img src={p2} style={{width:"95%"}} />
        </Col>
      </Row>
      </Link>

{/* kitchen Section */}

<Link to={'/kitchen'} style={{textDecoration:"none",cursor:"pointer"}} >

      <Row className="mt-4 bg-white p-3">
      <h2 className="p-3"> Up to 60% off | Kitchen essentials | From local stores nearby  <span style={{fontSize:"15px"}} className="text-dark"> See All Offer  </span>  </h2>
    <Carousel controls={true} indicators={true} >
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={kit1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kit2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kit3}
          alt="Third slide"
        />      
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={kit4}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    </Row>
    </Link>
    </Container>
    <br />
   

    <Container fluid className="bg-white p-3 mt-3">  
      <hr></hr>

      <Row className="bg-white mt-3">
        <img src={his} />
      </Row>
      </Container>
      </Container>     
      <hr></hr>
     
      <Container fluid className="bg-white p-2">  
       <Row className="bg-white text-dark text-center">
       <Col xs={4} sm={3} md={2}>       </Col>

       <Col xs={4} sm={3} md={2} className="w-100">
        <p> See personalized recommendations </p>
        <Link to={'/signin'} style={{textDecoration:"none",cursor:"pointer"}} >
       <Button className="w-25" variant="warning">Sign in</Button>{' '}
       </Link>       <br></br>
       <p> New customer?  </p>
       </Col>

       <Col xs={4} sm={3} md={2}>       
       </Col>
       </Row>
       <hr></hr>

       </Container>
     


    {/* Footer Section */}

    <Container fluid className="foot text-white mt-2 bg-dark ">

      <Row style={{backgroundColor:"rgb(35,47,62)"}}>
        <p className="mt-3 text-center"> Back To Top </p>
      </Row>

      <Container className=" bg-dark w-75">
        <Row className="mt-5">
        <Col xs={12} sm={6} md={4} lg={3}
        className="text-left">
          <h5> Get to Know Us </h5>
         <p> About Us </p>
         <p> Careers </p>
         <p> Press Releases </p>
         <p> Amazon Science </p>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}
          className="text-left">
          <h5> Connect with Us </h5>
          <p> Facebook </p>
          <p>Twitter </p>
          <p>Instagram </p>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}
          className="text-left">
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

          <Col xs={12} sm={6} md={4} lg={3}
          className="text-left">
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


























