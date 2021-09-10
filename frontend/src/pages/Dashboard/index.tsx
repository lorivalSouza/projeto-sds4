import NavBar from "components";
import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";

const Dashboard = () => {
    return (
        <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center txt-secundary">Taxa de sucesso(%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
          <h5 className="text-center txt-secundary">Taxa de sucesso(%)</h5>
            <DonutChart />
          </div>
          <div className="px-3">
          <h2 className="txt-primary">Total de vendas</h2>
          </div>

          <DataTable />
        </div>
      </div>
      <Footer />
    </>
    );
}

export default Dashboard;