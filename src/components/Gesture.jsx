import { motion, MotionConfig } from "motion/react"
export default function Gesture() {
    return (
        <div style={
            {
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: "0.8rem"
            }
        }>
            <MotionConfig
                transition={
                    {
                        duration: 0.125,
                        ease: "easeInOut"
                    }
                }
            // now this transition will be applied to all the elements inside the motionConfig container
            >
                <motion.button
                    whileHover={
                        {
                            scale: 1.05,
                        }
                    }
                    whileTap={
                        {
                            scale: 0.95,
                            rotate: "2.5deg"
                        }
                    }
                    // transition={
                    //     {
                    //         duration: 0.125,
                    //         ease: "easeInOut"
                    //     }
                    // }
                    className="example-button">Click me!</motion.button>

                <motion.button
                    whileHover={
                        {
                            scale: 1.05,
                        }
                    }
                    whileTap={
                        {
                            scale: 0.85,
                            rotate: "-2.5deg"
                        }
                    }
                    // transition={
                    //     {
                    //         duration: 0.125,
                    //         ease: "easeInOut"
                    //     }
                    // }
                    style={{
                        backgroundColor: "red"
                    }}
                    className="example-button">Click me!</motion.button>
            </MotionConfig>
        </div>
    )
}