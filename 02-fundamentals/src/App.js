import logo from "./logo.svg";
import "./App.css";
import ExProperties from "./components/ExProperties";
import ExComponents from "./components/ExComponents";
import ExStateComp from "./components/ExStateComp";
import ExRenderCond from "./components/ExRenderCond";
import ExRenderingElements from "./components/ExRenderingElements";
import ExEvents from "./components/ExEvents";
import ExEventsES7 from "./components/ExEventsES7";
import ExMyEvent from "./components/ExMyEvent";
import ExCompFather from "./components/ExCompFather";
import ExLifeCycle from "./components/ExLifeCycle";
import ExAjaxPokemon from "./components/ExAjaxPokemon";
import ScrollHooks from "./components/ScrollHooks";
import ExRelojHooks from "./components/ExRelojHooks";
import ExAjaxHooks from "./components/ExAjaxHooks";
import ExCustomHook from "./components/ExCustomHook";
import ExReferences from "./components/ExReferences";
import ExForm from "./components/ExForm";
import ExStyles from "./components/ExStyles";
import ExStyledComp from "./components/ExStyledComp";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <hr />
                <ExStyledComp />
                <hr />
                <ExStyles />
                <hr />
                <ExForm />
                <hr />
                <ExReferences />
                <hr />
                <ExCustomHook />
                <hr />
                <ExAjaxHooks />
                <hr />
                <ExRelojHooks />
                <hr />
                <ScrollHooks />
                <hr />
                <ExProperties
                    name="Examples"
                    exArray={[1, 3, 2]}
                    exNumber={8965}
                    exObject={"s"}
                    exFunction={(num) => num * num}
                    exElementoReact={<i>Samuel Hurtado</i>}
                    exComponente={<ExComponents msg={"Component as a property"} />}
                />

                <hr />
                <ExStateComp />
                <hr />
                <ExRenderCond />
                <hr />
                <ExRenderingElements />
                <hr />
                <ExEvents />
                <hr />
                <ExEventsES7 />
                <hr />
                <ExMyEvent />
                <hr />
                <ExCompFather />
                <hr />
                <ExLifeCycle />
                <hr />
                <ExAjaxPokemon />
            </header>
        </div>
    );
}

export default App;

// npm i -S prop-type
// npm install node-sass
