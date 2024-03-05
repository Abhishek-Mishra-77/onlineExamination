import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionSliceAction } from "../store/test";
import { MdTimer } from "react-icons/md";
import Timer from "./timer";

const TestScreen = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => {
    return state.current;
  });
  const selectorSheet = useSelector((state) => state.selectorSheet);
  console.log("selectorSheet", selectorSheet);
  console.log("currentquestions", questions);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const questionHandler = () => {};
  const skipQuestionHandler = () => {
    console.log("called", questions[0].no);
    dispatch(questionSliceAction.skipQuestion(questions[0].no));
  };
  const submitQuestionHandler = (props) => {
    console.log(props.no);
    console.log("called", questions[0].no);
    dispatch(questionSliceAction.submitQuestion(questions[0].no));
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-9 border mx-3 ">
          <div className="row d-flex justify-content-center align-item-center py-3">
            <div className="col d-flex justify-content-center align-item-center">total Questions : 3</div>
            <div className="col d-flex justify-content-center align-item-center">
              <MdTimer style={{ width: "40px", height: "40px" }} />
              <div style={{ width: "40px", height: "40px" }}> <Timer ></Timer></div>
              
            </div>
            <button type="button" className="col-3 btn btn-outline-success d-flex justify-content-center align-items-center">
              Finish Test
            </button>
          </div>
          <hr></hr>
          <div className="container">
            <>
              <h4>
                <span className="mx-3" key={questions[0].subject}>
                  Que {questions[0].no + 1} :
                </span>
                {questions[0].subject}
              </h4>
              <div className="row">
                <label className="col-6 m-2">
                  <input
                    type="checkbox"
                    checked={selectedOption === "option1"}
                    onChange={() => handleOptionChange("option1")}
                  />
                  {questions[0].A}
                </label>
                <label className="col-6 m-2">
                  <input
                    type="checkbox"
                    checked={selectedOption === "option2"}
                    onChange={() => handleOptionChange("option2")}
                  />
                  {questions[0].B}
                </label>
                <label className="col-6 m-2">
                  <input
                    type="checkbox"
                    checked={selectedOption === "option3"}
                    onChange={() => handleOptionChange("option3")}
                  />
                  {questions[0].C}
                </label>{" "}
                <label className="col-6 m-2">
                  <input
                    type="checkbox"
                    checked={selectedOption === "option4"}
                    onChange={() => handleOptionChange("option4")}
                  />
                  {questions[0].D}
                </label>
              </div>
            </>
          </div>
          <div className="container">
            <div className="d-flex justify-content-end my-2">
              <button
                type="button"
                class="btn btn-outline-danger mx-2"
                onClick={skipQuestionHandler}
              >
                Skip
              </button>
              <button
                type="button"
                className="btn btn-outline-warning mx-2"
                onClick={() => {
                  submitQuestionHandler(questions[0]);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col border overflow-y-scroll">
          <div className="d-flex flex-wrap">
            {selectorSheet.map((current) => {
              let currentClassName = "";
              currentClassName =
                current.attempted && current.submit
                  ? "card m-2 text-center bg-success text-white fw-bold"
                  : !current.attempted && !current.submit
                  ? "card m-2 text-center bg-danger text-white fw-bold"
                  : current.attempted && !current.submit
                  ? "card m-2 text-center bg-warning text-white fw-bold"
                  : "";

              return (
                <div
                  key={current.no+1}
                  className={currentClassName}
                  style={{ width: "50px", height: "30px" }}
                  onClick={questionHandler}
                >
                  {current.no+1}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestScreen;
