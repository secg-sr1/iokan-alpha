import { useState } from 'react';
import './App.css';

import Model from './model/Model.jsx';
import { 
  Box, 
  Button, 
  Typography, 
  Drawer, 
  List, 
  Divider, 
  ListItem, 
  ListItemButton, 
  IconButton, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Card, 
  CardContent,
  CardMedia, 
  CardActions,
  useMediaQuery,
  Link
} from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TerminalIcon from '@mui/icons-material/Terminal';
import MapIcon from '@mui/icons-material/Map';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import PersonIcon from '@mui/icons-material/Person';

import StockChart from './chart/StockChart.jsx';


import '@fontsource/manrope/500.css';
import '@fontsource/manrope/300.css';
import '@fontsource/manrope/200.css';

function App() {


  const [ drawerOpen, setDrawerOpen ] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  }


  return (
    <>
      <Model />



      <Box sx={{
              display: 'flex',
              position: 'fixed',  // Use 'fixed' to make sure it always stays in front
              zIndex: 999,        // Ensure the zIndex is high enough
              top: '40%',         // Center vertically
              left: {
                xs: '50%',
                sm: '12%',
                md:'12%'
              },        // Center horizontally
              transform: 'translate(-50%, -50%)',  // Adjust to truly center
              fontFamily:'manrope',
              flexDirection:'column'
      }}>
        <Typography sx={{fontSize: {
          xs:'6.0rem',
          sm: '6.0rem',
          md:'6.0rem'
          
        }, fontWeight:500, fontFamily:'Manrope, sans-serif'}}>
          iokan
        </Typography>


        <Box sx={{display:'flex', justifyContent:'space-between'}}>
          <ArrowForwardIosIcon fontSize='medium' />
        
          <Typography sx={{fontSize: {
            xs:'0.90rem',
            sm: '0.90rem',
            md:'0.90rem'
          }, fontWeight:200, fontFamily:'Manrope, sans-serif'}}>
            Computational Design and AEC Systems
          </Typography>

        </Box>
         
        
        <Button variant="outlined" sx={{borderRadius:5, color:'whitesmoke', borderColor:'whitesmoke'}} onClick={toggleDrawer(true)}>
          <Typography sx={{fontSize:'16px', fontWeight:200, fontFamily:'Manrope, sans-serif'}}>
            Services
          </Typography>
        </Button>


        <Box sx={{display:'flex', justifyContent:'space-between', pt:1, pl:1}}>
          <Typography sx={{fontSize: {
            xs:'0.5rem',
            sm: '0.5rem',
            md:'0.5rem'
          }, fontWeight:200, fontFamily:'Manrope, sans-serif'}}>
            Model Credits: Sumer Singh Matharu | Salvador Calgua
          </Typography> 
        </Box>

      </Box>


      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      
      >
        <Box
          sx={{
            width: {
              xs: 340,
              sm: 300,
              md: 600
            }, 
            padding:2, 
            height: '100%',
            display:'flex',
            flexDirection: 'column',
            backgroundColor:'rgb(10, 10, 10)',
            color:'whitesmoke',
            overflowY: 'auto',
            overflowX: 'hidden',
            '&::-webkit-scrollbar': { width: '5px' },
            '&::-webkit-scrollbar-track': { backgroundColor: 'rgba(0,0,0,0.1)' },
            '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(200,200,200,1)' },
          }}
        >

          <Box sx={{display: 'flex', justifyContent:'flex-end' }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon  sx={{color:'whitesmoke'}} />
            </IconButton> 
          </Box>


          <Typography variant='h5' sx={{ marginBottom: 2, fontWeight:200, fontFamily:'Manrope, sans-serif' }}>
            Services
          </Typography>

          <Accordion sx={{ boxShadow:3, backgroundColor:'rgb(18, 18, 18)', color:'whitesmoke' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'whitesmoke'}} />} >
              <Typography sx={{ fontWeight:200, fontFamily:'Manrope, sans-serif'}}>
                Maps
              </Typography>
            </AccordionSummary>
            <AccordionDetails >
            <Card variant='outlined' sx={{ boxShadow:3}}>
                <CardMedia
                  sx={{ height: 200 }}
                  image='/image-00.png'
                  title="image-00"
                  
                />

                  <CardContent sx={{backgroundColor:'rgb(18, 18, 18)', color:'whitesmoke'}}>
                    <Typography gutterBottom component="div" 
                    sx={{
                      fontSize:{
                      xs:'0.75rem',
                      sm: '0.75rem',
                      md:'0.75rem'
                    }, 
                    fontWeight:200, fontFamily:'Manrope, sans-serif'}}>
                      Small, medium & large scale maps visualization. <br/>
                      Maps and data visualization are powerful tools for representing and understanding spatial information. They serve as fundamental instruments in navigation, planning, and conveying geographical relationships.
                      The combination of maps and data visualization is crucial for effectively communicating spatial information, facilitating informed decisions, and fostering a better understanding of the world around us. 
                    </Typography> 
                  </CardContent>
                  <CardActions sx={{backgroundColor:'rgb(18, 18, 18)', color:'whitesmoke'}}>
                    <IconButton href='https://secg-sr1.github.io/GSS21-GuatemalaCityfinal/' target="_blank" rel="noopener noreferrer">
                      <MapIcon sx={{color:'whitesmoke'}} />
                    </IconButton>
                    <IconButton href='https://www.instagram.com/iokan_nakoi/profilecard/?igsh=bWlvYzl0NWdnNnpr' target="_blank" rel="noopener noreferrer" >
                      <InstagramIcon sx={{color:'whitesmoke'}} />
                    </IconButton>   
                  </CardActions>
                  
              </Card>
            </AccordionDetails>
          </Accordion>


          <Accordion sx={{ boxShadow:3, backgroundColor:'rgb(18, 18, 18)', color:'whitesmoke' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'whitesmoke'}} />} >
              <Typography sx={{ fontWeight:200, fontFamily:'Manrope, sans-serif'}}>
                Production Line Optimization Tools Development
              </Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Card variant='outlined' sx={{ boxShadow:3}}>
                {/* <CardContent sx={{borderRadius:0, fontWeight:300, fontFamily:'Manrope, sans-serif', color:'whitesmoke', backgroundColor:'rgb(18, 18, 18)' }}>
                  <Typography variant="body1" sx={{fontWeight:300, fontFamily:'Manrope, sans-serif'}}>
                    Improve and optimize communication between Creatives and Fabricators. 

                    // - Remember add image
                  </Typography>
                </CardContent> */}

                <CardMedia
                  sx={{ height: 180 }}
                  image='/image-01.png'
                  title="image-01"
                  
                />

                  <CardContent sx={{backgroundColor:'rgb(18, 18, 18)', color:'whitesmoke'}}>
                    <Typography gutterBottom component="div" 
                    sx={{
                      fontSize:{
                        xs:'0.75rem',
                        sm: '0.75rem',
                        md:'0.75rem'
                      }, 
                      fontWeight:200, fontFamily:'Manrope, sans-serif'}}>
                      Bridge between Fabrication Tools and DB <br/>
                      Enhanced Data Consistency: Integrating databases ensures that fabrication tools access the most up-to-date and consistent data. This minimizes errors caused by outdated or mismatched information, such as design specifications or material properties. <br />   
                      Streamlined Workflow: A direct connection between tools and databases automates data transfer, reducing the need for manual input. <br />
                      Real-Time Monitoring and Feedback: Databases can collect real-time data from fabrication tools, allowing for immediate analysis of production metrics. This facilitates quick adjustments to processes, enhancing efficiency and product quality.  
                    </Typography> 
                  </CardContent>
                  <CardActions sx={{backgroundColor:'rgb(18, 18, 18)', color:'whitesmoke'}}>
                    <IconButton >
                      <GitHubIcon sx={{color:'whitesmoke'}} />
                    </IconButton>
                    <IconButton href='https://www.instagram.com/iokan_nakoi/profilecard/?igsh=bWlvYzl0NWdnNnpr' target="_blank" rel="noopener noreferrer" >
                      <InstagramIcon sx={{color:'whitesmoke'}} />
                    </IconButton>   
                  </CardActions>
                  
              </Card>
            </AccordionDetails>
          </Accordion>


          


          <Accordion sx={{ boxShadow:3, backgroundColor:'rgb(18, 18, 18)', color:'whitesmoke' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'whitesmoke'}} />} >
              <Typography sx={{ fontWeight:200, fontFamily:'Manrope, sans-serif'}}>
                Data Visualization
              </Typography>
            </AccordionSummary>
            <AccordionDetails >
            <Card variant='outlined' sx={{ boxShadow:3}}>
                <CardContent sx={{borderRadius:0, fontWeight:300, fontFamily:'Manrope, sans-serif', color:'whitesmoke', backgroundColor:'rgb(18, 18, 18)' }}>
                  <StockChart />
                </CardContent>

                {/* <CardMedia
                  sx={{ height: 180 }}
                  image='/image-01.png'
                  title="image-01"
                  
                /> */}

                  <CardContent sx={{backgroundColor:'rgb(18, 18, 18)', color:'whitesmoke'}}>
                    <Typography gutterBottom component="div" 
                    sx={{
                      fontSize:{
                        xs:'0.75rem',
                        sm: '0.75rem',
                        md:'0.75rem'
                      }, 
                      fontWeight:200, fontFamily:'Manrope, sans-serif'}}>
                      Small, medium, large scale dashboards. <br />
                      Simplifying Complex Data: AEC projects generate vast amounts of data—from structural calculations to material specifications. Visual tools like 3D models, charts, and diagrams make it easier to interpret this data, facilitating better understanding among team members. <br />
                      Enhanced Communication and Collaboration: Visualizations help bridge the communication gap between architects, engineers, contractors, and clients. By presenting data visually, stakeholders can quickly grasp project details, leading to improved collaboration and fewer misunderstandings. <br />
                      Dashboards: Customized dashboards provide at-a-glance insights into project metrics such as timelines, budgets, and resource allocation.
                    </Typography> 
                  </CardContent>
                  <CardActions sx={{backgroundColor:'rgb(18, 18, 18)', color:'whitesmoke'}}>
                    <IconButton >
                      <GitHubIcon sx={{color:'whitesmoke'}} />
                    </IconButton>
                    <IconButton href='https://www.instagram.com/iokan_nakoi/profilecard/?igsh=bWlvYzl0NWdnNnpr' target="_blank" rel="noopener noreferrer" >
                      <InstagramIcon sx={{color:'whitesmoke'}} />
                    </IconButton>   
                  </CardActions>
                  
              </Card>
            </AccordionDetails>
          </Accordion>



          <Accordion sx={{ boxShadow:3, backgroundColor:'rgb(18, 18, 18)', color:'whitesmoke' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'whitesmoke'}} />} >
              <Typography sx={{ fontWeight:200, fontFamily:'Manrope, sans-serif'}}>
                UI & UX
              </Typography>
            </AccordionSummary>
            <AccordionDetails >
            <Card variant='outlined' sx={{ boxShadow:3}}>
                {/* <CardContent sx={{borderRadius:0, fontWeight:300, fontFamily:'Manrope, sans-serif', color:'whitesmoke', backgroundColor:'rgb(18, 18, 18)' }}>
                  <Typography variant="body1" sx={{fontWeight:300, fontFamily:'Manrope, sans-serif'}}>
                    Improve and optimize communication between Creatives and Fabricators. 

                    // - Remember add image
                  </Typography>
                </CardContent> */}

                {/* <CardMedia
                  sx={{ height: 180, backgroundColor:'#000000' }}
                  component="video"
                  src='/video-01.mp4'
                  controls 
                  autoPlay
                  loop 
                  muted
                /> */}

                <CardMedia
                  sx={{ height: 260 }}
                  image='/ICAERUS_UI_48.png'
                  title="image-03"
                />
                  <CardContent sx={{backgroundColor:'rgb(18, 18, 18)', color:'whitesmoke'}}>
                    <Typography gutterBottom component="div" sx={{
                      fontSize:{
                        xs:'0.75rem',
                        sm: '0.75rem',
                        md:'0.75rem'
                      }, 
                      fontWeight:200, fontFamily:'Manrope, sans-serif'}}>
                      Custom interfaces. <br />
                      Customization: UX design that allows personalization of toolsets and layouts caters to individual preferences, enhancing productivity.
                    </Typography> 
                  </CardContent>
                  
                  <CardActions sx={{backgroundColor:'rgb(18, 18, 18)', color:'whitesmoke'}}>
                    <IconButton href='https://noumena.io/sector/precision-agriculture/' target="_blank" rel="noopener noreferrer"> 
                      <QrCode2Icon sx={{color:'whitesmoke'}} />
                    </IconButton>
                    <IconButton href='https://icaerus.eu/' target="_blank" rel="noopener noreferrer"> 
                      <AgricultureIcon sx={{color:'whitesmoke'}} />
                    </IconButton>
                    <IconButton href='https://www.instagram.com/iokan_nakoi/profilecard/?igsh=bWlvYzl0NWdnNnpr' target="_blank" rel="noopener noreferrer" >
                      <InstagramIcon sx={{color:'whitesmoke'}} />
                    </IconButton>   
                  </CardActions>
                  
              </Card>
            </AccordionDetails>
          </Accordion>


          <Box sx={{display:'flex'}}>

            <IconButton href='https://blog.iaac.net/faculty/salvador-calgua-2/' target="_blank" rel="noopener noreferrer" >
              <PersonIcon sx={{color:'whitesmoke'}} />
            </IconButton> 

            <Link href='https://blog.iaac.net/faculty/salvador-calgua-2/' target="_blank" rel="noopener noreferrer" color="inherit">
              <Typography variant='h6' sx={{ marginBottom: 2, fontWeight:200, fontFamily:'Manrope, sans-serif', pt:2, color:'whitesmoke' }}>
                About Info
              </Typography>
            </Link>
            {/* PersonIcon */}
            
          </Box>


        </Box>


      </Drawer>

     

    </>
  )
}

export default App
