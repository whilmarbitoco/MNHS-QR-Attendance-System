import React, { useState } from "react";
import axios from "axios";

const Popup = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [strand, setStrand] = useState("");
    const [gradeLevel, setGradeLevel] = useState("");

    const handleSubmit = async () => {
        if (
            firstname == "" ||
            lastname == "" ||
            strand == "" ||
            gradeLevel == ""
        ) {
            alert("All fields must be filled");
            return;
        }
        const data = {
            firstname,
            lastname,
            strand,
            gradeLevel,
        };

        const res = await axios.post("/student", data);
        console.log(res);
    };

    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add Student
                    </h1>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="modal-body">
                    <div>
                        <div className="mb-3">
                            <label htmlFor="firstname" class="form-label">
                                Firstname
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstname"
                                onChange={(e) => {
                                    setFirstname(e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastname" class="form-label">
                                Lastname
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastname"
                                onChange={(e) => {
                                    setLastname(e.target.value);
                                }}
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
                                onChange={(e) => {
                                    setStrand(e.target.value);
                                }}
                            >
                                <option value="HUMSS-A">HUMSS A</option>
                                <option value="HUMSS-B">HUMSS B</option>
                                <option value="ABM">ABM</option>
                                <option value="GAS">GAS</option>
                                <option value="Cookery">Cookery</option>
                                <option value="Agri-Crop">Agri-Crop</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gradelevel" class="form-label">
                                Grade Level
                            </label>
                            <select
                                className="form-select"
                                id="gradelevel"
                                onChange={(e) => {
                                    setGradeLevel(e.target.value);
                                }}
                            >
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                    </div>
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
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
