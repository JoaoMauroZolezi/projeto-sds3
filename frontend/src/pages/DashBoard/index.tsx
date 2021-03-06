import BarChart from "componets/BarChart";
import DataTable from "componets/DataTable";
import DonutChart from "componets/DonutChart";
import Footer from "componets/Footer";
import NavBar from "componets/NavBar";

const DashBoard = () => {
    return (
        <>
            <NavBar />
            <div className="container" >
                <h1 className="text-primary py-3">Dashboard Vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondarty">Taxa de Sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondarty">Todas vendas</h5>
                        <DonutChart />
                    </div>
                    <div className="py-3">
                        <h2 className="text-primary">Todas Vendas</h2>
                    </div>
                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}
export default DashBoard;
