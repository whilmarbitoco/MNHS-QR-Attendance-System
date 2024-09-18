import { useState } from "react";
import Popup from "./Popup";
import QrPopUp from "./QrPopUp";

const Table = ({ tableName, tableData, showSearch = false, strands }) => {
    const [tableDatas, setTableDatas] = useState(tableData);
    const [student, setStudent] = useState({ lastname: "", qr: "" });

    const [searchData, setSearchData] = useState(" ");

    const handleSearch = (e) => {
        setSearchData(e.target.value);

        if (searchData == "") {
            setTableDatas(tableData);
            return;
        }

        let searched = tableDatas.filter((student) => {
            return (
                student.firstname == searchData ||
                student.lastname == searchData
            );
        });

        setTableDatas(searched);
    };

    return (
        <div className="card-body">
            <div className="card-title">
                <div className="h-10 d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{tableName}</h5>
                    {showSearch ? (
                        <>
                            <input
                                type="text"
                                className="form-control w-50"
                                placeholder="Search student..."
                                onChange={handleSearch}
                                value={searchData}
                            />
                            <button
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#popUp"
                            >
                                Add Student
                            </button>
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="thead-light position-sticky z-index-1">
                        <tr>
                            <th scope="col">Student</th>
                            <th scope="col">Strand</th>
                            <th scope="col">Grade Level</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {tableDatas.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        {data.firstname} {data.lastname}
                                    </td>
                                    <td>{data.strand}</td>
                                    <td>{data.grade}</td>
                                    <td>
                                        <button
                                            className="btn btn-info text-white"
                                            data-bs-toggle="modal"
                                            data-bs-target="#popUpQr"
                                            onClick={() => setStudent(data)}
                                        >
                                            Generate QR
                                        </button>
                                    </td>
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
                <Popup strands={strands} />
            </div>
            <div
                className="modal fade"
                id="popUpQr"
                tabIndex="-1"
                aria-hidden="true"
            >
                <QrPopUp student={student} />
            </div>
        </div>
    );
};

export default Table;
