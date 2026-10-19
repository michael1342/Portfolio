import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
    const [enabled, setEnabled] = useState(false);
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const opacityTarget = useMotionValue(0);
    const glowX = useSpring(pointerX, { stiffness: 190, damping: 32, mass: 0.45 });
    const glowY = useSpring(pointerY, { stiffness: 190, damping: 32, mass: 0.45 });
    const trailX = useSpring(pointerX, { stiffness: 65, damping: 25, mass: 0.9 });
    const trailY = useSpring(pointerY, { stiffness: 65, damping: 25, mass: 0.9 });
    const opacity = useSpring(opacityTarget, { stiffness: 90, damping: 24 });

    useEffect(() => {
        const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const updateAvailability = () => {
            setEnabled(pointerQuery.matches && !motionQuery.matches);
        };

        updateAvailability();
        pointerQuery.addEventListener("change", updateAvailability);
        motionQuery.addEventListener("change", updateAvailability);

        return () => {
            pointerQuery.removeEventListener("change", updateAvailability);
            motionQuery.removeEventListener("change", updateAvailability);
        };
    }, []);

    useEffect(() => {
        if (!enabled) return undefined;

        function handlePointerMove(event) {
            pointerX.set(event.clientX - window.innerWidth / 2);
            pointerY.set(event.clientY - window.innerHeight / 2);
            opacityTarget.set(1);
        }

        function handlePointerLeave() {
            opacityTarget.set(0);
        }

        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        document.documentElement.addEventListener("pointerleave", handlePointerLeave);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
        };
    }, [enabled, opacityTarget, pointerX, pointerY]);

    if (!enabled) return null;

    return (
        <div className="pointer-glow-layer" aria-hidden="true">
            <motion.div
                className="pointer-glow pointer-glow-trail"
                style={{ x: trailX, y: trailY, opacity }}
            />
            <motion.div
                className="pointer-glow pointer-glow-core"
                style={{ x: glowX, y: glowY, opacity }}
            />
        </div>
    );
}