import { Vector3 } from "@react-three/fiber";
import { Float } from "@react-three/drei";

type Skill3DBoxProps = {
    position?: Vector3;
};

export default function Skill3DBox({ position }: Skill3DBoxProps) {
    return (
        <group position={position}>
            <Float rotationIntensity={5}>
                <mesh
                    scale={0.5}
                    position={[0, 0, 0]}
                    rotation-x={-Math.PI / 2}>
                    <icosahedronGeometry args={[0.75, 0]} />
                    <meshStandardMaterial
                        color='blue'
                        roughness={1}
                        metalness={0.23}
                    />
                </mesh>
            </Float>
        </group>
    );
}