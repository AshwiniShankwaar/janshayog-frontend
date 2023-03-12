import AimImage from "./assert/aim.png";
import "./ov.css";
function Aim(){
    return(
        <>
          <div id="Aim">
            <img src={AimImage} alt="Aim"/>
            <div id="content">
            <h2>What is Lorem Ipsum?</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.

            </p>
            </div>
          </div>
        </>
    )
}
export default Aim;