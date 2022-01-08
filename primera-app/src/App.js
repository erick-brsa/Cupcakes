import Cupcake from "./Cupcake";
import "./App.css"
import cupcake_azul from "./Cupcake_azul.svg"
import cupcake_rosa from "./Cupcake_rosa.svg"
import cupcake_verde from "./Cupcake_verde.svg"


/* Color="" y sabor=" son props*/
const App = () => (
	<div className="cupcake-container">
		<Cupcake color="rosa" sabor="vainilla" foto={cupcake_rosa} />
		<Cupcake color="azul" sabor="chocolate" foto={cupcake_azul} />
		<Cupcake color="verde" sabor="vainilla" foto={cupcake_verde} />
		<Cupcake color="rosa" sabor="vainilla" foto={cupcake_rosa} />
		<Cupcake color="azul" sabor="chocolate" foto={cupcake_azul} />
		<Cupcake color="verde" sabor="vainilla" foto={cupcake_verde} />
		<Cupcake color="rosa" sabor="vainilla" foto={cupcake_rosa} />
		<Cupcake color="azul" sabor="chocolate" foto={cupcake_azul} />
		<Cupcake color="verde" sabor="vainilla" foto={cupcake_verde} />
		<Cupcake color="rosa" sabor="vainilla" foto={cupcake_rosa} />
		<Cupcake color="azul" sabor="chocolate" foto={cupcake_azul} />
		<Cupcake color="verde" sabor="vainilla" foto={cupcake_verde} />
		<Cupcake color="rosa" sabor="vainilla" foto={cupcake_rosa} />
		<Cupcake color="azul" sabor="chocolate" foto={cupcake_azul} />
		<Cupcake color="verde" sabor="vainilla" foto={cupcake_verde} />
	</div>
)

export default App;
