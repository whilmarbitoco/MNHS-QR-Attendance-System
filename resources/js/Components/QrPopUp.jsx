import { useRef } from "react";
import * as htmlToImage from "html-to-image";
import QRCode from "react-qr-code";

const QrPopUp = ({ student }) => {
    const qrCodeRef = useRef(null);

    const handleClick = () => {
        htmlToImage
            .toPng(qrCodeRef.current)
            .then(function (dataUrl) {
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = student.lastname + "-qr-code.png";
                link.click();
            })
            .catch(function (error) {
                console.error("Error generating QR code:", error);
            });
    };

    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Student QR Code
                    </h1>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="modal-body">
                    <div className="d-flex flex-col justify-content-center align-items-center">
                        <div ref={qrCodeRef}>
                            <QRCode value={student.qr} />
                        </div>
                        <button
                            className="btn mt-5 btn-primary"
                            onClick={handleClick}
                        >
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QrPopUp;
