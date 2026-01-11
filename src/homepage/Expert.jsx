import React from "react";
import "./Quizz.css";
import { RiGraduationCapFill } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Expert = () => {
  const navigate = useNavigate();

  const handleClick = (topic) => {
    navigate(`/quiz/${topic}`);
  };

  const data = [
    {
      id: 1,
      img: "https://verpex.com/assets/uploads/images/blog/Basic-HTML-Codes-for-Websites.webp?v=1691760654",
      player: "Plays: 10k",
      title: "Introduction to HyperText Markup Language",
      topic_name: "HTML",
    },
    {
      id: 2,
      img: "https://as2.ftcdn.net/jpg/04/27/81/27/1000_F_427812786_FyUxiPBaVCSbZP7AIWAegFkSt00AcE0h.jpg",
      player: "Plays: 10k",
      title: "Introduction to Cascading Style Sheets",
      topic_name: "CSS",
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.jpg?s=612x612&w=0&k=20&c=H9FI5X3ZBQIyEijvhJc-jv5McwCh-BxqQPxee9Aoa08=",
      player: "Plays: 10k",
      title: "Introduction to JavaScript Programming",
      topic_name: "JavaScript",
    },
    {
      id: 4,
      img: "https://media.licdn.com/dms/image/v2/D5612AQEz9KSuvhncQA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1704352101828?e=2147483647&v=beta&t=AhAuVx6qViPYYTfzEnK7ANwrvrysKCSLuNLw3qoTaQs",
      player: "Plays: 10k",
      title: "Introduction to Python Programming Language",
      topic_name: "Python",
    },
    {
      id: 5,
      img: "https://www.ed2go.com/common/images/1/17136.jpg",
      player: "Plays: 10k",
      title: "Introduction to Structure Query Language",
      topic_name: "SQL",
    },
    {
      id: 6,
      img: "https://maharatech.gov.eg/pluginfile.php/655033/course/overviewfiles/C%20Programming%20%20From%20Basics%20to%20%20Mastery.jpg",
      player: "Plays: 10k",
      title: "Introduction to C Programming Language",
      topic_name: "C",
    },
    {
      id: 7,
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_CPP.jpg",
      player: "Plays: 10k",
      title: "Introduction to C++ Programming Language",
      topic_name: "C++",
    },
    {
      id: 8,
      img: "https://www.shutterstock.com/image-photo/bootstrap-inscription-against-laptop-code-600nw-1905056317.jpg",
      player: "Plays: 10k",
      title: "Introduction to Bootstrap Programming",
      topic_name: "Bootstrap",
    },
    {
      id: 9,
      img: "https://www.shutterstock.com/image-photo/react-js-inscription-against-laptop-260nw-1853300929.jpg",
      player: "Plays: 10k",
      title: "Introduction to React Programming Language",
      topic_name: "React",
    },
    {
      id: 10,
      img: "https://img.freepik.com/premium-photo/ai-circuit-board_585607-135.jpg?semt=ais_items_boosted&w=740",
      player: "Plays: 10k",
      title: "Introduction to Artificial Intelligence Programming",
      topic_name: "AI",
    },
    {
      id: 11,
      img: "https://t3.ftcdn.net/jpg/11/40/22/90/360_F_1140229090_zAfFWbG2I6YwHYDbMXgIW7RrZNL2Ag6L.jpg",
      player: "Plays: 10k",
      title: "Introduction to Active Server Page Programming",
      topic_name: "ASP",
    },
    {
      id: 12,
      img: "https://elluminatimedia.s3.us-west-2.amazonaws.com/wp-content/uploads/2024/07/angularjsarchitecture.jpg",
      player: "Plays: 10k",
      title: "Introduction to Angular Programming Language",
      topic_name: "Angular",
    },
    {
      id: 13,
      img: "https://cdn.prod.website-files.com/5dcc7f8c449e597be23356e0/65788300e4727694b6898722_top-algorithms-and-data-structures-you-really-need-to-know-blog-hero-image.webp",
      player: "Plays: 10k",
      title: "Introduction to Data Structure And Algorithms",
      topic_name: "DSA",
    },
    {
      id: 14,
      img: "https://t4.ftcdn.net/jpg/02/45/63/69/360_F_245636933_kY23ohGptK5t6n8wGSXIgLgVXWeHJRct.jpg",
      player: "Plays: 10k",
      title: "Introduction to CyberSecurity Programming",
      topic_name: "CyberSecurity",
    },
    {
      id: 15,
      img: "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg",
      player: "Plays: 10k",
      title: "Introduction to Data Science Programming",
      topic_name: "Data Science",
    },
  ];

  return (
    <div>
      <h1 className="upper-header">🧠 Think Deep. Solve Smart.</h1>
      <p className="lower-header">
        This level is for experts who love solving tricky problems, debugging, 
        and tackling tough logic. Are you ready to prove you're a true quiz master?
      </p>

      <div className="main">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <div className="logo-picture">
              <img src={item.img} alt={item.topic_name} />
            </div>
            <div className="question-no">Q:10</div>
            <div className="plays-no">{item.player}</div>
            <div className="inner-box">
              <h5 className="title">{item.title}</h5>
              <div className="quiz-name">{item.topic_name}</div>
              <div className="grade-level">
                <div className="grade">
                  <RiGraduationCapFill /> Grade 8 - 12
                </div>
                <div className="level">
                  <GoGraph /> Expert level
                </div>
              </div>
              <button className="play-now" onClick={() => handleClick(item.topic_name)}>
                Play now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expert;
