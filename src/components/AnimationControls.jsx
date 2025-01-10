import { motion, useAnimationControls } from "motion/react";

export default function AnimationControls() {
    const controls = useAnimationControls()
    const handleCLick = () => {
        controls.start("flip")
    }
    return (
        <>
            <div
                style={
                    {
                        display: "grid",
                        placeContent: "center",
                        height: "100vh",
                        gap: "0.8rem"
                    }
                }
            >
                <button onClick={handleCLick} className="example-button">Flip it!</button>
                <motion.div
                    style={
                        {
                            width: 150,
                            height: 150,
                            backgroundColor: "black"
                        }
                    }
                    variants={
                        {
                            initial: {
                                rotate: "0deg",
                            },
                            flip: {
                                rotate: "180deg",
                                // transition: {
                                //     duration: 2
                                // },
                            },
                        }
                    }

                    initial="initial"
                    animate={controls}
                // ani
                >

                </motion.div>
            </div>
        </>
    );
}