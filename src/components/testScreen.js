import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionSliceAction } from "../store/test";
import { MdTimer } from "react-icons/md";
import Timer from "./timer";
import { PiFastForwardCircleBold } from "react-icons/pi";
import { FaClipboardQuestion } from "react-icons/fa6";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import QuestionSelector from "./questionSelector";

const TestScreen = () => {
  const [nextVisible,setNextVisible]=useState(false)
  const dispatch = useDispatch();
  const questions = useSelector((state) => {
    return state.current;
  });
  const allQuestions = useSelector((state) => state.question);

  console.log("currentquestions", questions);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setNextVisible(true)
  };
  const questionHandler = (queNo) => {
    dispatch(questionSliceAction.jumpQuestion(queNo));
  };
  const skipQuestionHandler = () => {
    dispatch(questionSliceAction.skipQuestion(questions[0].no));
    setSelectedOption(null)
  };
  const submitQuestionHandler = (props) => {
    dispatch(questionSliceAction.submitQuestion(questions[0].no));
    setSelectedOption(null)
    setNextVisible(false)
  };
  return (
    <div className="container-fluid">
      <div className="row pt-4 ">
        <div className="col-9 border mx-3 shadow animate__animated animate__fadeInLeft">
          <div className="row d-flex justify-content-center align-item-center pt-3 ">
            <div className="col d-flex justify-content-center align-item-center fw-bolder">
              <FaClipboardQuestion style={{ width: "40px", height: "40px" }} />
              <span style={{ marginTop: "10px" }}>
                Total Questions : {allQuestions.length}
              </span>
            </div>
            <div className="col d-flex justify-content-center align-item-center">
              <MdTimer style={{ width: "40px", height: "40px" }} />
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  marginTop: "5px",
                  fontWeight: "bolder",
                }}
              >
                <Timer></Timer>
              </div>
            </div>
            <button
              type="button"
              className="col-2 btn btn-outline-success d-flex justify-content-center align-items-center me-4 fw-bold"
            >
              Finish Test
              <IoCheckmarkDoneCircleSharp
                style={{ width: "30px", height: "30px", margin: "5px" }}
              ></IoCheckmarkDoneCircleSharp>
            </button>
          </div>
          <hr></hr>
          <div className="container">
            <div className="ms-5">
              <h4>
                <span className="mx-3" key={questions[0].subject}>
                  Que {questions[0].no + 1} :
                </span>
                {questions[0].subject}
              </h4>
              <div className="row p-2">
                <label className="col-6 m-2">
                  <input
                    type="checkbox"
                    checked={selectedOption === "option1"}
                    onChange={() => handleOptionChange("option1")}
                    className="m-2"
                  />
                  {questions[0].A}
                </label>
                <label className="col-6 m-2">
                  <input
                    type="checkbox"
                    checked={selectedOption === "option2"}
                    onChange={() => handleOptionChange("option2")}
                    className="m-2"
                  />
                  {questions[0].B}
                </label>
                <label className="col-6 m-2">
                  <input
                    type="checkbox"
                    checked={selectedOption === "option3"}
                    onChange={() => handleOptionChange("option3")}
                    className="m-2"
                  />
                  {questions[0].C}
                </label>{" "}
                <label className="col-6 m-2">
                  <input
                    type="checkbox"
                    checked={selectedOption === "option4"}
                    onChange={() => handleOptionChange("option4")}
                    className="m-2"
                  />
                  {questions[0].D}
                </label>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="d-flex justify-content-end my-4">
              <button
                type="button"
                class="btn btn-outline-danger mx-2"
                onClick={skipQuestionHandler}
              >
                Skip
              </button>
              {!nextVisible&&<button
                type="button"
                className="btn border-warning mx-2 fw-bold"
                // style={{border:"2px solid gold"}}
               
              >
                next{" "}
                <PiFastForwardCircleBold
                  style={{ width: "30px", height: "30px" }}
                />
              </button>}
              {nextVisible&&<button
                type="button"
                className="btn btn-warning mx-2 fw-bold"
                onClick={() => {
                  submitQuestionHandler(questions[0]);
                }}
              >
                next{" "}
                <PiFastForwardCircleBold
                  style={{ width: "30px", height: "30px" }}
                />
              </button>}
            </div>
          </div>
        </div>
       <QuestionSelector></QuestionSelector>
      </div>
    </div>
  );
};
export default TestScreen;
