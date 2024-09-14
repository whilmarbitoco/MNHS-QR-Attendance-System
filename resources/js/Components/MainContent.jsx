import React, { useEffect } from "react";
import Card from "./Card";
import Table from "./Table";

const MainContent = ({ pageName, children }) => {
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>{pageName}</h1>
            </div>

            <section className="section">{children}</section>
        </main>
    );
};

export default MainContent;
