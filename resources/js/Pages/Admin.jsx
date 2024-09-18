import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import Card from "@/Components/Card";
import Table from "@/Components/Table";

export default function Dashboard({students}) {
    return (
        <MainLayout pageName="Dashboard">
            <div className="row">
                <Card
                    cardName="Test 1"
                    cardContent="s is an examle page with no contrnt. You can use it as a starter for your custom pages."
                />
                <Card
                    cardName="Test 2"
                    cardContent="s is an examle page with no contrnt. You can use it as a starter for your custom pages."
                />
                <Card
                    cardName="Test 3"
                    cardContent="s is an examle page with no contrnt. You can use it as a starter for your custom pages."
                />
            </div>

            <div className="card">
                <Table
                    tableName="All Students"
                    tableData={students}
                    showSearch={false}
                />
            </div>
        </MainLayout>
    );
}
