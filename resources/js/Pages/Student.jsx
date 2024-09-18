import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import Table from "@/Components/Table";

export default function Student({ students, strands }) {
    return (
        <MainLayout pageName="Student">
            <Table
                tableName="All Students"
                tableData={students}
                showSearch={true}
                strands={strands}
            />
        </MainLayout>
    );
}
