import Button from "./Button";

function App() {
  // you don't have to do outline={true} for boolean props
  return (
    <div>
      <div>
        <Button outline rounded primary>
          children text!
        </Button>
      </div>
      <div>
        <Button>1</Button>
      </div>
      <div>
        <Button>2</Button>
      </div>
      <div>
        <Button>3</Button>
      </div>
      <div>
        <Button>4</Button>
      </div>
    </div>
  );
}

export default App;
