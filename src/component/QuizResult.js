export default function QuizResult(props) {
    return (
        <>
        <div className="" style={{ width: "94%", height: "25rem", background: "transparent", margin: "1rem" }}>
            <br></br><br></br>
            <span
                style={{
                    color: "#ffffff", textAlign: "center", fontSize: "2rem", WebkitTextFillColor: "#FC0",
                    WebkitTextStroke: ".4px #ffffff"
                }}>
                Your Score: {props.score}</span>
            <br></br>
            <span style={{
                color: "#ffffff", textAlign: "center", fontSize: "2rem", WebkitTextFillColor: "#FC0",
                WebkitTextStroke: ".4px #ffffff"
            }}>
                Total Score: {props.total}</span>
        </div>
        <button id="next-button" 
        style={{
            width: "5rem",
            backgroundColor: "rgb(54, 4, 101)",
            color: "#ffffff",
            borderRadius: "1rem",
            padding: "1px",
            marginBottom: "1rem"
        }}
        onClick={props.tryAgain}>Try Again</button>
        </>
    )
}