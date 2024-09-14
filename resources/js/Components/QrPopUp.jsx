import QRCode from "react-qr-code";

const QrPopUp = ({ qrCode }) => {
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
                    <div className="d-flex justify-content-center align-items-center">
                        <QRCode value={qrCode} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QrPopUp;
