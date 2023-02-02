import AlertExamples from "./components/AlertExamples";
import LoginForm from "./components/LoginForm";
import PopoverExample from "./components/PopoverExample"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <LoginForm />
      <hr />
      <PopoverExample />
      <hr />
      <AlertExamples />
    </div>
  );
}

export default App;
