import BarCharts from "components/BarCharts";
import DataTable from "components/DataTable";
import DonutsChart from "components/DonutsChart";
import Footer from "components/footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container" >

        <h1 className="text-primary py-3">vendas</h1>
<div className="row px-3">

<div className="col-sm-6">
  <h5 className="text-center text-secondary"> porcentagem sucesso</h5>
  <BarCharts/>

</div>

<div className="col-sm-6">
  <h5 className="text-center text-secondary">todas vendas</h5>
  <DonutsChart/>

</div>
</div>

<div className="py-3"> 
<h2 className="text-primary">todas as vendas</h2>
</div>
<DataTable/>
      </div>
      <Footer/>

      </>
  );
}

export default App;
