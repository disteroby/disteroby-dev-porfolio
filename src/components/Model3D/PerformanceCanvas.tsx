import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { CanvasProps } from "@react-three/fiber/dist/declarations/src/web/Canvas";
import { AdaptiveDpr, Preload } from "@react-three/drei";
import { useInView } from "framer-motion";

export default function PerformanceCanvas({ children, ...props }: CanvasProps) {
    const ref = useRef<HTMLCanvasElement>(null!);
    const isInView = useInView(ref);

    const id = props.id;

    useEffect(() => {
        console.log(isInView ? "✅" : "☑️", id);
    }, [id, isInView]);

    return (
        <Canvas frameloop={isInView ? "always" : "never"} ref={ref} {...props}>
            <Suspense fallback={null}>
                {children}
                <AdaptiveDpr pixelated />
                <Preload all />
            </Suspense>
        </Canvas>
    );
}