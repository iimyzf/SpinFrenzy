import Apollo from "../assets/Apollo.jpg";

type props = {
    message: string;
    isSentByMe: boolean;
};

const MessageContainer = ({ message, isSentByMe }: props) => {
    return (
        <>
            {isSentByMe ? (
                <div className="flex justify-end items-end ml-[15vw] mb-[.5vw] gap-[.5vw]">
                    <span className="text-[.6vw] opacity-40 whitespace-nowrap">
                        23:16 PM
                    </span>
                    <div className="flex justify-end items-end">
                        <div className="flex justify-end">
                            <div className="msg-container">
                                <p className="text-start p-[1vw] text-[.9vw]">
                                    {message}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-start items-end mr-[15vw] mb-[.5vw] gap-[.5vw]">
                    <div className="flex justify-start items-end gap-[.5vw]">
                        <img
                            className="w-[2.2vw] h-[2.2vw] rounded-full"
                            src={Apollo}
                            alt="Apollo"
                        />
                        <div className="msg-container">
                            <p className="text-start p-[1vw] text-[.9vw]">
                                {message}
                            </p>
                        </div>
                        <span className="text-[.6vw] opacity-40 whitespace-nowrap">
                            23:16 PM
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default MessageContainer;
