import Navbar from "./components/Navbar";


function App() {
  return ( 
    <>
    <Navbar />
    <button className="btn btn-outline">Default</button>
    <button className="btn btn-outline btn-primary">Primary</button>
    <button className="btn btn-outline btn-secondary">Secondary</button>
    <button className="btn btn-outline btn-accent">Accent</button>
    </>
   );
}

export default App;
