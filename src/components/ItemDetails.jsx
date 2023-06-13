import React, { useEffect, useState } from 'react';
import { useLocation,useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container,Col,Row } from 'react-bootstrap';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TeamMember from './team';

const ItemDetails = (props) => {
// const [item,setItem]=useState(location.state)
let location = useLocation();
let { id } = useParams();
const {item} =location.state || {item:TeamMember[id-1]};
const {t} = useTranslation()

  return (
    <div>
        <div className="pageTitle">
            <div className="container">
                <div className="row">
                <div className="col-md-8 col-sm-8">
                    <h1>{t(`member${item.id}`)}</h1>
                </div>
                </div>
            </div>
        </div>
        <Container >
            <Col>
                
                <div className='my-4 member-info-div'>
                    <div className='col-lg-2 col-md-3 member-info-div-img' data-aos="fade-down" data-aos-duration="3000">
                        <img className='member-img' style={{borderRadius:"15px"}} src={item.image} alt=""/>
                    </div>
                    <div>
                    <ul style={{listStyle:"none",textTransform:"none"}} className='member-info-div-ul' data-aos="fade-left" data-aos-duration="3000">
                        <h2 className='my-2' style={{textTransform:"capitalize",fontWeight:"bold",color:"#3679dd"}}>{t(`member${item.id}`)}</h2>
                        <p style={{fontWeight:"bold",fontSize:"22px"}}>{t(`job${item.id}`)}</p>
                        <li className='d-flex align-items-center my-2'><PhoneIphoneOutlinedIcon fontSize='small'/><a style={{textDecoration:"none"}} href={`tel:${item.phone}`}>{item.phone}</a></li>
                        <li className='d-flex align-items-center my-2'><MailOutlineOutlinedIcon fontSize='small'/><a style={{textDecoration:"none"}} href={`mailto:${item.email}`}>{item.email}</a></li>
                        {
                            item.location==="abudhabi"?(
                                <li className='d-flex align-items-center my-2'><LocationOnOutlinedIcon fontSize='small'/><a style={{textDecoration:"none"}} href="https://www.google.com/maps/place/24%C2%B029'27.0%22N+54%C2%B021'52.3%22E/@24.490839,54.3623323,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x36c839cffff2cad1!8m2!3d24.490839!4d54.364521?hl=en">{t(`location${item.id}`)}</a></li>
                            ):(
                                <li className='d-flex align-items-center my-2'><LocationOnOutlinedIcon fontSize='small'/><a style={{textDecoration:"none"}} href="https://www.google.com/maps/place/Roti+King+Sweet+Bakery+UAQ/@25.577992,55.5584253,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef5fe6982298af3:0xb59122b5d07a9d3f!8m2!3d25.577992!4d55.560614">{t(`location${item.id}`)}</a></li>
                            )
                        }
                        
                    </ul> 
                    </div>
                </div>

                <Row>
                    {
                        t(`ProfessionalCareer${item.id}`)===""?
                        "":
                        (
                            <>
                            <h3 data-aos="fade-down" data-aos-duration="2000" style={{color:"#3679dd"}}>{t(`headtitle1`)}:</h3>
                            <p data-aos="fade-left" data-aos-duration="3000">{t(`ProfessionalCareer${item.id}`)}</p>
                            </>
                        )

                    }
                    

                    {
                        t(`Experience${item.id}`)===""? 
                        ""
                        :
                        (
                        <>
                        <h3 data-aos="fade-down" data-aos-duration="2000" style={{color:"#3679dd"}}>{t(`headtitle2`)}:</h3>
                        <p className='' data-aos="fade-right" data-aos-duration="3000">
                            {t(`Experience${item.id}`).split('.').map((part, index) => (
                               
                                    <li key={index}>{part}</li>
                                
                                
                            ))}
                        </p>
                        </>
                        )
                        
                    }
                    
                  
                    { t(`Registration${item.id}`)===""?
                        ""
                        :
                        <>
                        <h3 data-aos="fade-down" data-aos-duration="2000" style={{color:"#3679dd"}}>{t(`headtitle4`)}:</h3>
                        <p className='' data-aos="fade-left" data-aos-duration="3000">
                            {t(`Registration${item.id}`).split('.').map((part, index) => (
                                <li key={index}>{part}</li>
                            ))}
                        </p>
                        </>
                        
                    }
                     <h3 data-aos="fade-down" data-aos-duration="2000" style={{color:"#3679dd"}}>{t(`headtitle3`)}:</h3>
                        <p className='' data-aos="fade-left" data-aos-duration="3000">
                            {t(`Education${item.id}`).split('.').map((part, index) => (
                                <li key={index}>{part}</li>
                            ))}
                        </p>
                </Row>
            </Col>
        </Container>
    </div>
  );
};

export default ItemDetails;