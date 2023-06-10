import { useEffect, useRef } from "react";
import Apollo from "../assets/Apollo.jpg";

const MessageContainer = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const containerHeight = container.scrollHeight;
            container.style.height = `${containerHeight}px`;
        }
    }, []);
    return (
        <div className="convo pt-5 pl-10 bottom-28">
            <div className="flex justify-start items-end gap-5">
                <img
                    className="w-[2.5em] h-[2.5em] rounded-full"
                    src={Apollo}
                    alt="Apollo"
                />
                <div ref={containerRef} className="msg-container w-[50em]">
                    <p className="msg-text text-start p-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, voluptatum.Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MessageContainer;
