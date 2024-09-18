import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import axios from "axios";

const QrScanner = () => {
    const [scanned, setScanned] = useState("");

    useEffect(() => {
        async function onScanSuccess(decodedText) {
            const data = {
                qr: decodedText,
            };
            const res = await axios.post("/qr", data);
            setScanned(res.data);
        }

        let config = {
            fps: 10,
            qrbox: { width: 250, height: 250 },
            rememberLastUsedCamera: true,
        };

        let html5QrcodeScanner = new Html5QrcodeScanner(
            "reader",
            config,
            false
        );
        html5QrcodeScanner.render(onScanSuccess);
    }, []);

    return (
        <div className="bg-gray-100 p-5 h-screen flex align-center items-center">
            <div className="w-[50%]">
                <div id="reader"></div>
            </div>
            <div className="bg-white drop-shadow-lg w-[50%] h-full m-3 rounded-lg p-4">
                <div class="container">
                    <div class="row ">
                        <div class="col-md-6">
                            <img src="user.png" className="w-full" />
                        </div>

                        <div class="col-md-6">
                            <form>
                                <div className="mb-3">
                                    <label
                                        htmlFor="firstname"
                                        class="form-label"
                                    >
                                        Firstname
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstname"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="lastname"
                                        class="form-label"
                                    >
                                        Lastname
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastname"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="strand" class="form-label">
                                        Strand
                                    </label>
                                    <select
                                        className="form-select"
                                        id="strand"
                                    ></select>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="gradelevel"
                                        class="form-label"
                                    >
                                        Grade Level
                                    </label>
                                    <select
                                        className="form-select"
                                        id="gradelevel"
                                    ></select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QrScanner;
