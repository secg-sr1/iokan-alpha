import { Canvas } from '@react-three/fiber';
import Scene from './Scene.jsx'


import { Box } from '@mui/material';


export default function Model() {


    return (

        <>

            <Canvas
                gl={{
                    alpha: true, 
                    antialias: true
                }}
                style={{ position: 'relative'}}
            >

                <Scene />

            </Canvas> 

            
            


        </>


        

    )


}