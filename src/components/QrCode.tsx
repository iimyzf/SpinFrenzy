interface QrCodeProps {
    toggleQrCode: () => void;
}

const QrCode = ({ toggleQrCode }: QrCodeProps) => {
    return (
        <div className="qr-code-container">
            <div className="qr-code">
                <div className="flex flex-col justify-between items-center gap-5">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" />
                    <button
                        className="font-bold font-satoshi text-[1.3vw] max-sm:text-[2.5vw] max-md:text-[2.5vw]"
                        onClick={toggleQrCode}
                    >
                        CLOSE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QrCode;
