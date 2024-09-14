import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import axios from "axios";

const QrScanner = () => {
    useEffect(() => {
        async function onScanSuccess(decodedText) {
            const data = {
                qr: decodedText,
            };
            const res = await axios.post("/qr", data);
            alert(res.data.firstname);
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
        <div className="bg-white container">
            <div className="flex flex-col justify-center items-center">
                <img className="w-[150px]" src="/mnhs.gif" />
                <h1 className="text-xl italic">
                    "The Finest School in Journalism and Leadership"
                </h1>
            </div>
            <div className="m-2 p-3 flex justify-center items-center">
                <div className="w-[40%]">
                    <div id="reader"></div>
                </div>
                <div className="w-[50%]">Test</div>
            </div>
        </div>
    );
};

export default QrScanner;
