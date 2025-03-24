import "./App.css";
import ToDo from "./Todo";
import Eat from "./Eat";
import Actor from "./Actor";
import Singer from "./Singer";
import Library from "./Library";

function App() {

  // const actors = ['Bappa  Raj', 'Omar Sunny', 'Salman Shah', 'Jasim', 'Anwar', 'Razzak'];


  const singers = [
    {id: 1, name: 'Dr. Mahfuz', age: 68},
    {id: 2, name: 'Tahsan', age: 45},
    {id: 3, name: 'Shuvro Deb', age: 57},
  ]

  const books = [
    {id: 1, name: 'physics', price: 250},
    {id: 2, name: 'Math', price: 350},
    {id: 3, name: 'Chemistry', price: 550},
    {id: 4, name: 'Biology', price: 450},
    {id: 5, name: 'ICT', price: 150},
  ]

  // const time = 50;

  return (
    <>
      <h1>React Core Concepts</h1>

      <Library books = {books}></Library>

      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }

      {/* {
        actors.map(actor => <Actor actor = {actor}></Actor>)
      } */}

      {/* <Eat fruite="Banana" day="Sunday"></Eat>
      <Eat fruite="Mango"></Eat>
      <Eat fruite="Orange" day="Monday"></Eat> */}

      {/* <ToDo task='Learn React' isDone={true} time={time}></ToDo>
      <ToDo task='Revice JS' isDone={false}></ToDo>
      <ToDo task='Take a shower' isDone={true} time=''></ToDo> */}

      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Munim" tech="java" device="apple"></Developer>
      <Developer name="Tawseef" tech="pyhton" device="pixel"></Developer>
      <Developer name="Apurba" tech="JavaScript" device="realmi"></Developer>
      <Player name='tamim' runs='5000'></Player>
      <Player name='mushi' runs='5000'></Player>
      <Salami event='Rojar Eid' amount='2000'></Salami>
      <Salami event='Graduation'></Salami>
      <Book book='marhaba, js e maro thaba' auth='Jhankar vhai'></Book>
      <Book book='computer programming' auth='shubin vhai'></Book>
      <Book book='give me virus' ></Book> */}

      {/* <Person></Person>
      <Sports></Sports>
      <Sports></Sports>
      <Person></Person>
      <Sports></Sports>
      <Pet></Pet> */}
    </>
  );
}

function Book({book, auth = 'unknown'}){
  return(
    <div className="student">
      <p>My fav book: {book}</p>
      <p>Author: {auth}</p>
    </div>
  )
}

function Salami({event, amount = 0}){
  return(
    <div className="student">
      <p>Salami For: {event}</p>
      <p>Amount: {amount}</p>
    </div>
  )
}


// const {name, runs} = {name: 'tamim', runs: '5000'}
function Player({name, runs}){
  // console.log(props)
  return(
    <div className="student">
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

// const{name, tech, device} = {name: 'Munim', tech: 'java', device: 'apple'}

function Developer(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "20px",
        margin: "10px",
      }}
    >
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
      <p>Device: {props.device}</p>
    </div>
  );
}

function Person() {
  const age = 23;
  const name = "munim";

  const personStyle = {
    color: "red",
    fontSize: "30px",
  };

  return (
    <p id="" title="tooltip" style={personStyle}>
      I am a person: {name} {age}
    </p>
  );
}

function Student() {
  return (
    <div className="student">
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  );
}

function Pet() {
  return <p>Cat</p>;
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Kola</li>
        <li>Komola</li>
      </ul>
      <p>Playing and Losing</p>
    </div>
  );
}

export default App;
