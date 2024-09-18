import { useState } from "react";
import Popup from "./Popup";
import QrPopUp from "./QrPopUp";
import StrandPopUp from "@/Components/StrandPopUp";

const StrandTable = ({ tableName, tableData }) => {
    return (
        <div className="card-body">
            <div className="card-title">
                <div className="h-10 d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{tableName}</h5>
                    <button
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#popUp"
                    >
                        Add Strand
                    </button>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="thead-light position-sticky z-index-1">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Strand</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {tableData.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div
                className="modal fade"
                id="popUp"
                tabIndex="-1"
                aria-hidden="true"
            >
                <StrandPopUp />
            </div>
            <div
                className="modal fade"
                id="popUpQr"
                tabIndex="-1"
                aria-hidden="true"
            ></div>
        </div>
    );
};

export default StrandTable;
