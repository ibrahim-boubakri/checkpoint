import './App.css';
import image2 from './image2.jpg';
function App() {
  return (
    <>
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red">Ibrahim Boubakri</h1>
      <br />
      <img src="/image1.jpg" />
      <br />
      <br />
      <img src={image2} />
      <br />
    </div>
    
  </>
  );
}

export default App;
