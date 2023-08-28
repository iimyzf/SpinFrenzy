import Apollo from "../assets/Apollo.jpg";

type props = {
    message: string;
    isSentByMe: boolean;
};

const MessageContainer = ({ message, isSentByMe }: props) => {
    return (
        <>
            {isSentByMe ? (
                <div className="mb-3 bg-red600">
                    <div className="flex justify-end gap-5">
                        <div className="msg-container">
                            <p className="msg-text text-start p-5">{message}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mb-3 bg-green600">
                    <div className="flex justify-start gap-5">
                        <img
                            className="w-[2.5em] h-[2.5em] rounded-full"
                            src={Apollo}
                            alt="Apollo"
                        />
                        <div className="msg-container">
                            <p className="msg-text text-start p-5">{message}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MessageContainer;
