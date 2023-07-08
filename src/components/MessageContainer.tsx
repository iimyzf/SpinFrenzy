import { useEffect, useRef } from "react";
import Apollo from "../assets/Apollo.jpg";

type props = {
	message: string;
};

const MessageContainer = ({message}: props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const containerHeight = container.scrollHeight;
            container.style.height = `${containerHeight}px`;
        }
    }, []);

    return (
        <div className="w-full overflow-y-auto mb-3">
            <div className="flex items-end gap-5">
                <img
                    className="w-[2.5em] h-[2.5em] rounded-full"
                    src={Apollo}
                    alt="Apollo"
                />
                <div ref={containerRef} className="msg-container w-[50em]">
                    <p className="msg-text text-start p-5">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MessageContainer;
