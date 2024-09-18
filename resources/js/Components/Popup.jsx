import React, { useState } from "react";
import { router } from "@inertiajs/react";
import axios from "axios";

const Popup = ({ strands }) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [strand, setStrand] = useState("HUMMS-A");
    const [gradeLevel, setGradeLevel] = useState("11");
    const [photo, setPhoto] = useState(null);
    const [strandList, setStrandList] = useState(strands);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("firstname", firstname);
        data.append("lastname", lastname);
        data.append("strand", strand);
        data.append("gradeLevel", gradeLevel);
        data.append("photo", photo);

        router.post("/student", data, {
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
                    <form>
                        <div className="mb-3">
                            <label htmlFor="photo" class="form-label">
                                Photo
                            </label>
                            <input
                                type="file"
                                className="form-control-file"
                                id="photo"
                                onChange={(e) => {
                                    setPhoto(e.target.files[0]); // Set the file object instead of value
                                }}
                            />
                        </div>
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
                                {strandList.map((strnd, i) => {
                                    return (
                                        <option key={i} value={strnd.name}>
                                            {strnd.name}
                                        </option>
                                    );
                                })}
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

export default Popup;
