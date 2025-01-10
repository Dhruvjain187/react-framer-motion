import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export default function ViewBasedAnimations() {
    const ref = useRef(null)
    // const isInView = useInView(ref)
    const isInView = useInView(ref, { once: true })
    useEffect(() => {
        console.log("is in view", isInView)
    }, [isInView])
    return (
        <>
            <div
                style={
                    {
                        height: "150vh"
                    }
                }
            >

            </div>
            <motion.div
                style={{
                    height: "100vh",
                    backgroundColor: "black"
                }}
                initial={
                    {
                        opacity: 0
                    }
                }
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 1
                }}
            />

            <div ref={ref}
                style={{
                    height: "100vh",
                    background: isInView && "blue",
                    transition: "1s background ease-in"
                }} />
        </>
    );
}