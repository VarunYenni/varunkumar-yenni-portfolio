import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const SpaceShipCursor = () => {
    const containerRef = useRef(null);
    const requestRef = useRef(null);

    // Mouse position and actual animated position
    let mouseX = 0,
        mouseY = 0;
    let currentX = 0,
        currentY = 0;

    useEffect(() => {
        // Skip on mobile
        if (window.innerWidth < 768) return;

        const anim = lottie.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "/space_ship.json",
        });

        // Set mouse position on move
        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            // Smooth follow motion
            currentX += (mouseX - currentX) * 0.1;
            currentY += (mouseY - currentY) * 0.1;

            if (containerRef.current) {
                containerRef.current.style.left = `${currentX}px`;
                containerRef.current.style.top = `${currentY}px`;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        document.body.style.cursor = "none";
        window.addEventListener("mousemove", handleMouseMove);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            anim.destroy();
            cancelAnimationFrame(requestRef.current);
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.style.cursor = "auto";
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: "fixed",
                width: "70px",
                height: "70px",
                pointerEvents: "none",
                zIndex: 9999,
                transform: "translate(-50%, -50%)",
                filter: "drop-shadow(0 0 10px gold)",
            }}
        />
    );
};

export default SpaceShipCursor;