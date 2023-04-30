import AimImage from "./assert/aim.png";
import "./ov.css";
function Aim(){
    return(
        <>
          <div id="Aim">
            <img src={AimImage} alt="Aim"/>
            <div id="content">
            <h2>Fight aginst unemployment.</h2>
            <p>
            At Jansahyog, we understand the challenges of unemployment and its impact on individuals and communities. That's why we've created a platform that not only connects those in need of employment with potential employers but also provides training and development opportunities to enhance their skills and increase their chances of success. Our goal is to empower communities by providing access to employment opportunities and fostering economic growth. Join us today and be a part of the solution to unemployment.
            </p>
            </div>
          </div>
        </>
    )
}
export default Aim;