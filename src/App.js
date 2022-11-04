import './App.css';
import Card from './Components/Card';

function App() {

  const colorCode =[
    {
      colorName: "PINK",
      colorCode : "#FF6663",
    },
    {
      colorName: "GRAY",
      colorCode : "#333333",
    },
    {
      colorName: "BLACK",
      colorCode : "#000000",
    },
    {
      colorName: "GREEN",
      colorCode : "#38BB14",
    },
    {
      colorName: "RED",
      colorCode : "#C90B0B",
    },
    {
      colorName: "ORANGE",
      colorCode : "#FF8000",
    },
    {
      colorName: "YELLOW",
      colorCode : "#FFF500",
    },
    {
      colorName: "LIGHT GRAY",
      colorCode : "#CCCCCC",
    },
    {
      colorName: "PURPLE",
      colorCode : "#7E41A2",
    },
    {
      colorName: "BROWN",
      colorCode : "#C14911",
    },
  ];
  
  return (
    <>
    {colorCode.map((e,idx)=>{
    return(
        <Card key={idx} colorCode={e.colorCode} colorName={e.colorName}/>
      )
    })}
    </>
  
  );
}

export default App;
