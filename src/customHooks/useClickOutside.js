import { useRef, useEffect, useState } from "react";

const useClickOutside = (initialState = false, onClose = {}) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false);
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return { ref, isOpen, setIsOpen };
}

export default useClickOutside;