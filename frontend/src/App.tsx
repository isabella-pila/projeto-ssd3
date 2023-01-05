import BarCharts from "components/BarCharts";
import DataTable from "components/DataTable";
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
  <h5>todas vendas</h5>
  <BarCharts/>

</div>


</div>
<DataTable/>
      </div>
      <Footer/>

      </>
  );
}

export default App;
