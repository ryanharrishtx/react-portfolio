import React from 'react'
import { Suspense, uiseEffect, useState } from 'react'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

// import CanvasLoader from '.../Loader';

const Computers = () => {

  const computer = useGLTF(`./desktop_pc/scene.gltf`)
  return (
    <div>Computers</div>
  )
}

export default Computers