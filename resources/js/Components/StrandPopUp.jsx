import { router } from "@inertiajs/react";
import React, { useState } from "react";

const StrandPopUp = () => {
    const [strand, setStrand] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("strand", strand);

        router.post("/strand", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    };

    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add Strand
                    </h1>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label">
                                Strand
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstname"
                                onChange={(e) => {
                                    setStrand(e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="sumit"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StrandPopUp;
