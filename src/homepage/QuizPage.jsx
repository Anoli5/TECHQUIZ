import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const quizData = {

HTML: [
 {question:"HTML stands for?",options:["Hyper Text Markup Language","High Text Machine Language","Hyperlinks Text Markup Language","Home Tool Markup Language"],answer:"Hyper Text Markup Language"},
 {question:"Largest heading tag?",options:["<h6>","<h3>","<h1>","<heading>"],answer:"<h1>"},
 {question:"Hyperlink tag?",options:["<a>","<link>","<href>","<url>"],answer:"<a>"},
 {question:"Image tag?",options:["<img>","<image>","<pic>","<src>"],answer:"<img>"},
 {question:"Line break tag?",options:["<br>","<lb>","<break>","<hr>"],answer:"<br>"},
 {question:"Paragraph tag?",options:["<p>","<para>","<pg>","<text>"],answer:"<p>"},
 {question:"List item tag?",options:["<li>","<ul>","<ol>","<list>"],answer:"<li>"},
 {question:"Table row tag?",options:["<tr>","<td>","<th>","<table>"],answer:"<tr>"},
 {question:"Form tag?",options:["<form>","<input>","<fieldset>","<submit>"],answer:"<form>"},
 {question:"HTML is?",options:["Markup","Programming","Database","Scripting"],answer:"Markup"},
],

CSS: [
 {question:"CSS stands for?",options:["Central Style Sheets","Cascading Style Sheets","Color Style Sheets","Creative Style Sheets"],answer:"Cascading Style Sheets"},
 {question:"Text color property?",options:["color","font-color","text-color","bgcolor"],answer:"color"},
 {question:"Background color property?",options:["background-color","bg","color","fill"],answer:"background-color"},
 {question:"Class selector symbol?",options:[".","#","*","@"],answer:"."},
 {question:"ID selector symbol?",options:["#",".","*","@"],answer:"#"},
 {question:"Padding means?",options:["Inner space","Outer space","Border","Margin"],answer:"Inner space"},
 {question:"Margin means?",options:["Outer space","Inner space","Border","Content"],answer:"Outer space"},
 {question:"Center text?",options:["text-align:center","align:center","center","position"],answer:"text-align:center"},
 {question:"Flexbox property?",options:["display:flex","flex:block","grid:flex","inline:flex"],answer:"display:flex"},
 {question:"CSS used for?",options:["Design","Logic","Database","Server"],answer:"Design"},
],

JavaScript: [
 {question:"JS runs in?",options:["Browser","Compiler","Database","OS"],answer:"Browser"},
 {question:"Variable keyword?",options:["var","int","string","float"],answer:"var"},
 {question:"Strict equality?",options:["===","==","=","!="],answer:"==="},
 {question:"Array brackets?",options:["[]","{}","()","<>"],answer:"[]"},
 {question:"Object brackets?",options:["{}","[]","()","<>"],answer:"{}"},
 {question:"Alert method?",options:["alert()","msg()","popup()","show()"],answer:"alert()"},
 {question:"Console output?",options:["console.log()","print()","log()","write()"],answer:"console.log()"},
 {question:"Loop example?",options:["for","if","switch","try"],answer:"for"},
 {question:"DOM stands for?",options:["Document Object Model","Data Object Method","Digital Object Model","None"],answer:"Document Object Model"},
 {question:"JS used for?",options:["Logic","Styling","DB","Hosting"],answer:"Logic"},
],

Python: [
 {question:"Comment symbol?",options:["#","//","<!-- -->","/* */"],answer:"#"},
 {question:"Function keyword?",options:["def","function","fun","define"],answer:"def"},
 {question:"Print function?",options:["print()","echo()","cout","printf"],answer:"print()"},
 {question:"List brackets?",options:["[]","{}","()","<>"],answer:"[]"},
 {question:"Tuple brackets?",options:["()","[]","{}","<>"],answer:"()"},
 {question:"Dictionary brackets?",options:["{}","[]","()","<>"],answer:"{}"},
 {question:"Python is?",options:["Interpreted","Compiled","Markup","Query"],answer:"Interpreted"},
 {question:"Loop keyword?",options:["for","repeat","foreach","iterate"],answer:"for"},
 {question:"Boolean values?",options:["True/False","Yes/No","1/0","On/Off"],answer:"True/False"},
 {question:"Python used for?",options:["AI","Web","Data","All"],answer:"All"},
],

SQL: [
 {question:"Fetch data command?",options:["SELECT","GET","FETCH","PULL"],answer:"SELECT"},
 {question:"Filter records?",options:["WHERE","FROM","GROUP","ORDER"],answer:"WHERE"},
 {question:"Insert data?",options:["INSERT","ADD","PUT","SAVE"],answer:"INSERT"},
 {question:"Delete records?",options:["DELETE","REMOVE","DROP","CLEAR"],answer:"DELETE"},
 {question:"Update records?",options:["UPDATE","MODIFY","CHANGE","EDIT"],answer:"UPDATE"},
 {question:"Primary key means?",options:["Unique","Duplicate","Null","Foreign"],answer:"Unique"},
 {question:"Sort data?",options:["ORDER BY","SORT","GROUP","FILTER"],answer:"ORDER BY"},
 {question:"Aggregate function?",options:["COUNT","JOIN","WHERE","SELECT"],answer:"COUNT"},
 {question:"Table join?",options:["JOIN","MERGE","LINK","COMBINE"],answer:"JOIN"},
 {question:"SQL used for?",options:["Database","UI","Design","Logic"],answer:"Database"},
],

C: [
 {question:"Statement ends with?",options:[";"," :",".",","],answer:";"},
 {question:"Print function?",options:["printf()","print()","cout","echo"],answer:"printf()"},
 {question:"Header file?",options:["<stdio.h>","<iostream>","<conio.h>","<string>"],answer:"<stdio.h>"},
 {question:"C is?",options:["Procedural","OOP","Markup","Query"],answer:"Procedural"},
 {question:"Main function?",options:["main()","start()","run()","begin()"],answer:"main()"},
 {question:"Comment symbol?",options:["//","##","<!-- -->","**"],answer:"//"},
 {question:"Data type?",options:["int","var","string","boolean"],answer:"int"},
 {question:"Loop?",options:["for","if","switch","goto"],answer:"for"},
 {question:"Array index starts?",options:["0","1","-1","2"],answer:"0"},
 {question:"C used for?",options:["System","Web","Design","AI"],answer:"System"},
],

"C++": [
 {question:"OOP language?",options:["C++","C","HTML","SQL"],answer:"C++"},
 {question:"Output keyword?",options:["cout","printf","print","echo"],answer:"cout"},
 {question:"Input keyword?",options:["cin","scanf","input","read"],answer:"cin"},
 {question:"Header for cout?",options:["<iostream>","<stdio.h>","<string>","<conio.h>"],answer:"<iostream>"},
 {question:"Scope operator?",options:["::",":",".","->"],answer:"::"},
 {question:"Class keyword?",options:["class","struct","object","define"],answer:"class"},
 {question:"Destructor symbol?",options:["~","!","@","#"],answer:"~"},
 {question:"Inheritance supports?",options:["Yes","No","Sometimes","Never"],answer:"Yes"},
 {question:"OOP concept?",options:["Encapsulation","Compilation","Execution","Linking"],answer:"Encapsulation"},
 {question:"C++ used for?",options:["Games","System","Apps","All"],answer:"All"},
],

Bootstrap: [
 {question:"Bootstrap is?",options:["CSS Framework","JS Library","Backend","DB"],answer:"CSS Framework"},
 {question:"Responsive design?",options:["Yes","No","Partial","None"],answer:"Yes"},
 {question:"Button class?",options:["btn","button","click","submit"],answer:"btn"},
 {question:"Grid columns?",options:["12","10","8","6"],answer:"12"},
 {question:"Container class?",options:["container","box","wrap","layout"],answer:"container"},
 {question:"Navbar class?",options:["navbar","menu","nav","header"],answer:"navbar"},
 {question:"Primary button?",options:["btn-primary","btn-main","btn-blue","btn-top"],answer:"btn-primary"},
 {question:"Text center?",options:["text-center","center-text","align-center","text-middle"],answer:"text-center"},
 {question:"Bootstrap uses?",options:["Classes","IDs","Functions","APIs"],answer:"Classes"},
 {question:"Bootstrap used for?",options:["UI","Logic","DB","Server"],answer:"UI"},
],

React: [
 {question:"React is?",options:["UI Library","Framework","DB","Language"],answer:"UI Library"},
 {question:"Component type?",options:["Function","Loop","Class","Variable"],answer:"Function"},
 {question:"State hook?",options:["useState","useEffect","useRef","useMemo"],answer:"useState"},
 {question:"Effect hook?",options:["useEffect","useState","useRef","useCall"],answer:"useEffect"},
 {question:"JSX stands for?",options:["JavaScript XML","JSON XML","Java Syntax","None"],answer:"JavaScript XML"},
 {question:"Props are?",options:["Read-only","Mutable","Global","Private"],answer:"Read-only"},
 {question:"Virtual DOM?",options:["Yes","No","Sometimes","Never"],answer:"Yes"},
 {question:"Key prop used for?",options:["List rendering","Styling","Routing","State"],answer:"List rendering"},
 {question:"React uses?",options:["Components","Templates","Controllers","Models"],answer:"Components"},
 {question:"React used for?",options:["Frontend","Backend","DB","OS"],answer:"Frontend"},
],

AI: [
 {question:"AI stands for?",options:["Artificial Intelligence","Advanced Internet","Automated Info","Applied Interface"],answer:"Artificial Intelligence"},
 {question:"AI example?",options:["Chatbot","Calculator","Notepad","Paint"],answer:"Chatbot"},
 {question:"Machine learning is?",options:["Subset of AI","AI subset of ML","Same","None"],answer:"Subset of AI"},
 {question:"AI used in?",options:["Voice Assistants","Games","Cars","All"],answer:"All"},
 {question:"NLP stands for?",options:["Natural Language Processing","Neural Logic Program","New Language Process","None"],answer:"Natural Language Processing"},
 {question:"AI needs?",options:["Data","Paper","Files","Folders"],answer:"Data"},
 {question:"AI model?",options:["Neural Network","Switch","Router","Server"],answer:"Neural Network"},
 {question:"AI learns by?",options:["Training","Guessing","Coding","Typing"],answer:"Training"},
 {question:"AI field?",options:["Robotics","Design","Testing","Hosting"],answer:"Robotics"},
 {question:"AI future?",options:["Growing","Ending","Static","Declining"],answer:"Growing"},
],

ASP: [
 {question:"ASP.NET used for?",options:["Web Apps","Mobile","Games","Design"],answer:"Web Apps"},
 {question:"Developed by?",options:["Microsoft","Google","Apple","Facebook"],answer:"Microsoft"},
 {question:"Language used?",options:["C#","Java","Python","PHP"],answer:"C#"},
 {question:"Framework?",options:[".NET",".JS","JVM","Spring"],answer:".NET"},
 {question:"MVC stands for?",options:["Model View Controller","Main View Control","Model Version Code","None"],answer:"Model View Controller"},
 {question:"Razor syntax?",options:["@","$","#","%"],answer:"@"},
 {question:"Server-side?",options:["Yes","No","Partial","Client"],answer:"Yes"},
 {question:"WebForms?",options:["Old Tech","New","Mobile","DB"],answer:"Old Tech"},
 {question:"ASP uses?",options:["Server","Browser","OS","Compiler"],answer:"Server"},
 {question:"ASP used for?",options:["Dynamic Web","Static Page","Design","AI"],answer:"Dynamic Web"},
],

Angular: [
 {question:"Angular developed by?",options:["Google","Facebook","Microsoft","Amazon"],answer:"Google"},
 {question:"Language used?",options:["TypeScript","Java","Python","PHP"],answer:"TypeScript"},
 {question:"Component decorator?",options:["@Component","@Module","@Service","@Inject"],answer:"@Component"},
 {question:"Two-way binding?",options:["ngModel","ngBind","ngFor","ngIf"],answer:"ngModel"},
 {question:"CLI tool?",options:["ng","npm","node","git"],answer:"ng"},
 {question:"Framework type?",options:["Frontend","Backend","DB","OS"],answer:"Frontend"},
 {question:"SPA stands for?",options:["Single Page App","Server Page App","Simple Page App","None"],answer:"Single Page App"},
 {question:"Routing module?",options:["RouterModule","Route","Path","Nav"],answer:"RouterModule"},
 {question:"Dependency injection?",options:["Yes","No","Partial","Manual"],answer:"Yes"},
 {question:"Angular uses?",options:["Components","Pages","Files","Classes"],answer:"Components"},
],

DSA: [
 {question:"DSA stands for?",options:["Data Structure and Algorithms","Data Science Analysis","Digital System App","None"],answer:"Data Structure and Algorithms"},
 {question:"Linear structure?",options:["Array","Tree","Graph","Heap"],answer:"Array"},
 {question:"LIFO structure?",options:["Stack","Queue","Array","Tree"],answer:"Stack"},
 {question:"FIFO structure?",options:["Queue","Stack","Tree","Graph"],answer:"Queue"},
 {question:"Binary search needs?",options:["Sorted array","Unsorted","Random","Tree"],answer:"Sorted array"},
 {question:"Time complexity O(1)?",options:["Constant","Linear","Log","Quadratic"],answer:"Constant"},
 {question:"Tree root has?",options:["No parent","One parent","Two parents","Many"],answer:"No parent"},
 {question:"Graph nodes called?",options:["Vertices","Edges","Lines","Points"],answer:"Vertices"},
 {question:"Hashing used for?",options:["Fast search","Sorting","Printing","Design"],answer:"Fast search"},
 {question:"DSA used for?",options:["Optimization","UI","Color","Font"],answer:"Optimization"},
],

CyberSecurity: [
 {question:"Cyber attack?",options:["Phishing","Painting","Coding","Testing"],answer:"Phishing"},
 {question:"Data protection?",options:["Encryption","Deletion","Formatting","Copy"],answer:"Encryption"},
 {question:"Firewall used for?",options:["Security","Design","Storage","Speed"],answer:"Security"},
 {question:"Malware is?",options:["Malicious Software","Good Software","Freeware","Shareware"],answer:"Malicious Software"},
 {question:"Virus spreads via?",options:["Files","Paper","Keyboard","Screen"],answer:"Files"},
 {question:"Strong password?",options:["Complex","1234","Name","DOB"],answer:"Complex"},
 {question:"Authentication means?",options:["Verification","Deletion","Copy","Share"],answer:"Verification"},
 {question:"Hacker types?",options:["White hat","Painter","Designer","Coder"],answer:"White hat"},
 {question:"HTTPS adds?",options:["Security","Speed","Design","Color"],answer:"Security"},
 {question:"Cyber security protects?",options:["Data","UI","Font","Layout"],answer:"Data"},
],

DataScience: [
 {question:"Data Science uses?",options:["Data","Paper","HTML","CSS"],answer:"Data"},
 {question:"Popular language?",options:["Python","HTML","CSS","C"],answer:"Python"},
 {question:"Library for analysis?",options:["Pandas","Bootstrap","React","Angular"],answer:"Pandas"},
 {question:"Visualization library?",options:["Matplotlib","NumPy","Django","Flask"],answer:"Matplotlib"},
 {question:"Machine learning part of?",options:["Data Science","CSS","HTML","UI"],answer:"Data Science"},
 {question:"Big data means?",options:["Large data","Small data","No data","Fake data"],answer:"Large data"},
 {question:"CSV file contains?",options:["Tabular data","Images","Videos","Audio"],answer:"Tabular data"},
 {question:"Data cleaning means?",options:["Remove errors","Add errors","Delete DB","Create UI"],answer:"Remove errors"},
 {question:"Prediction uses?",options:["Models","Colors","Fonts","Tags"],answer:"Models"},
 {question:"Data science used for?",options:["Insights","Design","Hosting","Routing"],answer:"Insights"},
],

};


const QuizPage = () => {
  const navigate = useNavigate();
  const { topic } = useParams();

  const questions = quizData[topic]; // 🔥 MAIN FIX

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);

  // ⏳ Timer
  useEffect(() => {
    if (time === 0) {
      handleNext();
      return;
    }
    const t = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(t);
  }, [time]);

  const handleNext = () => {
    let newScore = score;

    if (selected === questions[current].answer) {
      newScore++;
      setScore(newScore);
    }

    setSelected("");
    setTime(15);

    if (current === questions.length - 1) {
      navigate("/result", {
        state: { score: newScore, total: questions.length, topic },
      });
    } else {
      setCurrent(current + 1);
    }
  };

  if (!questions) {
    return <h2 style={{ color: "white" }}>Quiz not found</h2>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #2a0657, #000428)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "550px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "30px",
          backdropFilter: "blur(8px)",
          color: "white",
        }}
      >
        <h2>
          {topic} Quiz — Question {current + 1}/{questions.length}
        </h2>

        <div
          style={{
            height: "8px",
            background: "#ffffff25",
            borderRadius: "10px",
            margin: "20px 0",
          }}
        >
          <div
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
              height: "100%",
              background: "linear-gradient(90deg,#ff00e6,#8f00ff)",
            }}
          />
        </div>

        <div style={{ textAlign: "right", marginBottom: "10px" }}>
          ⏳ {time}s
        </div>

        <h3>{questions[current].question}</h3>

        {questions[current].options.map((opt) => (
          <div
            key={opt}
            onClick={() => setSelected(opt)}
            style={{
              padding: "15px",
              margin: "12px 0",
              borderRadius: "12px",
              cursor: "pointer",
              background:
                selected === opt
                  ? "rgba(0,255,180,0.3)"
                  : "rgba(255,255,255,0.1)",
              border:
                selected === opt
                  ? "2px solid #00ffb4"
                  : "2px solid transparent",
            }}
          >
            {opt}
          </div>
        ))}

        <button
          onClick={handleNext}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "15px",
            fontSize: "20px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(90deg,#00ff85,#00c853)",
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
