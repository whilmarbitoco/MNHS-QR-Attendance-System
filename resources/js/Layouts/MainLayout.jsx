import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import MainContent from "@/Components/MainContent";

const MainLayout = ({ pageName, children }) => {
    return (
        <>
            <Header />
            <Sidebar />
            <MainContent pageName={pageName}>{children}</MainContent>
        </>
    );
};

export default MainLayout;
