import "./ov.css";
import ProblemImg from "./assert/problem.png";
import SolutionImg from "./assert/solution.jpg";

function Problem() {
  return (
    <>
      <div id="problem">
        <div id="problemstatement">
          <img src={ProblemImg} alt="problem" />
          <div id="content">
            <h3>What make us different then others?</h3>
          Jansahyog is not just another platform for job postings or service listings. 
          It is a unique solution to the problem of unemployment, providing a platform 
          for people to connect with each other in their local communities and beyond. 
          By facilitating a sense of mutual support and empowerment, Janshayog aims to 
          promote social cohesion and address the issue of joblessness in a meaningful way.
          The platform's user-friendly design and robust features make it easy for both 
          requesters and helpers to navigate and engage with each other, resulting in a
           seamless and efficient experience. Join Jansahyog today and become part of 
           the solution to the problem of unemployment.
          </div>
        </div>
        <div id="solutionstatement">
          <img src={SolutionImg} alt="solution" />
          <div id="content">
          <h3>What makes us go for JANSAHYOG?</h3>
 Jansahyog is a platform that seeks to bridge the gap between those in need and those who can help,
  specifically in terms of unemployment. With the increasing demand for small jobs and assistance,
   we believe that Janshayog can help alleviate the burden of unemployment while fostering a sense
    of community and mutual support. Our seamless and user-friendly platform empowers individuals
     to make a positive impact in their local communities and beyond. Join us today and become part
      of the Jansahyog.
          </div>
        </div>
      </div>
    </>
  );
}

export default Problem;
