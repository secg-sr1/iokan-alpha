import  { styled } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import { useThree, useLoader  } from '@react-three/fiber';
import { Fog } from 'three';
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


import * as THREE from 'three';
import { Card, CardHeader, CardMedia, CardActions, Collapse, CardContent, Typography, Box, Avatar, IconButton } from '@mui/material';




import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import '@fontsource/manrope/500.css';
import '@fontsource/manrope/300.css';
import '@fontsource/manrope/200.css';

import { MeshStandardMaterial } from 'three';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props; 
    return <IconButton {...other} />
  })(({theme}) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  
    variants: [
      {
        props: ({ expand }) => !expand, 
        style: {
          transform: 'rotate(0deg)'
        },
      },
      {
        props: ({ expand }) => !!expand, 
        style: {
          transform: 'rotate(180deg)',
        },
      },
    ],
  
  }))



export default function Scene() {

    const { scene } = useThree(); 
    const [ showCard, setShowCard ] = useState(false);
    const [ expanded, setExpanded ] = useState(false);

    

    scene.fog = new THREE.Fog('red', 1, 10);


    const cameraRef = useRef(); 
    const gltf = useLoader(GLTFLoader, 'https://cdn.glitch.global/610da9c5-d3d9-48be-83b9-3836bdc195cb/02.glb?v=1729372840252')


    return (
        <>
            <PerspectiveCamera ref={ cameraRef } />
            <OrbitControls makeDefault />    

            <directionalLight position={[1, 1, 1]} intensity={1.5} />

            <primitive object={gltf.scene} scale={[1.5, 1.5, 1.5]} position={[0, -2, 0]} />



            {/* <mesh position={[0, 0.5, 3]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="whitesmoke" />
            </mesh> */}


        </>
    )



}