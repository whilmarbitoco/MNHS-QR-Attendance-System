import MainLayout from "@/Layouts/MainLayout";
import StrandTable from "@/Components/StrandTable";

const Strand = ({ strands }) => {
    return (
        <MainLayout pageName="Strands">
            <StrandTable tableName="All Strands" tableData={strands} />
        </MainLayout>
    );
};

export default Strand;
