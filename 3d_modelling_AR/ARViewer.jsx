import React, { startTransition } from 'react';
import { useGLTF } from '@react-three/drei';

const ARViewer = ({ product }) => {
  const { name, arModel } = product;

   // Load 3D model using React-AR
   let scene = null;
   startTransition(() => {
     const gltf = useGLTF(arModel);
     scene = gltf.scene;
   });

  return (
    <div className="ar-viewer">
      <h2>AR Viewer</h2>
      <p>{`Try on the ${name} virtually!`}</p>
      
      {/* Display the PNG image */}
      <img src="https://i.ibb.co/6JYftmR/pngwing-com-2.png" alt={name} />

      <React.Suspense fallback={null}>
        <Model scene={scene} />
      </React.Suspense>
    </div>
  );
};

const Model = ({ scene }) => {
  // Use scene to render 3D model
  return scene ? <primitive object={scene} /> : null;
};

export default ARViewer;
