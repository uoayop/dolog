"use client";
import { useRef, lazy, Suspense } from "react";
import { Application } from "@splinetool/runtime";

const Spline = lazy(() => import("@splinetool/react-spline"));

const Logo = () => {
  const canvasRef = useRef<any>();

  const handleLoad = (e: Application) => {
    if (canvasRef.current) {
      canvasRef.current.children[0].style.width = "100%";
      canvasRef.current.children[0].style.height = "100%";
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Spline
        ref={canvasRef}
        scene="https://prod.spline.design/y47bFXOj2dn2XpAC/scene.splinecode"
        onLoad={handleLoad}
        style={{ width: "700px", height: "400px" }}
      />
    </Suspense>
  );
};

export default Logo;
//
