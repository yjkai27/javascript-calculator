function Calculator() {
    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);
    const display = (symbol) => {
      setExpression((prev) => prev + symbol);
      if(expression[expression.length-1]=="="){
        if(/[1-9.]/.test(symbol)){
          setExpression(symbol);
        } else{
          setExpression(answer+symbol);
        }
      }
    };
    const calculate = () => {
      setAnswer(eval(expression));
      setExpression((prev) => prev+ "=");
    };
    const allClear = () => {
      setExpression("");
      setAnswer(0);
    };
    const clear = () => {
      setExpression((prev) =>
        prev
          .split('')
          .splice(0, prev.length - 1)
          .join('')
      );
    };
    return (
        <div className="outline">
            <div className="grid">
                <div className="screen">
                  <input type="text" value={expression} placeholder="0" disabled />
                  <div className="total">{answer}</div>
                </div>
                <div onClick={allClear} className="button AC">AC</div>
                <div onClick={clear} className="button C">C</div>
                <div onClick={() => display("/")} className="button division">/</div>
                <div onClick={() => display("*")} className="button multiplication">*</div>
                <div onClick={() => display("7")} className="button seven">7</div>
                <div onClick={() => display("8")} className="button eight">8</div>
                <div onClick={() => display("9")} className="button nine">9</div>
                <div onClick={() => display("-")} className="button subtraction">-</div>
                <div onClick={() => display("4")} className="button four">4</div>
                <div onClick={() => display("5")} className="button five">5</div>
                <div onClick={() => display("6")} className="button six">6</div>
                <div onClick={() => display("+")} className="button addition">+</div>
                <div onClick={() => display("1")} className="button one">1</div>
                <div onClick={() => display("2")} className="button two">2</div>
                <div onClick={() => display("3")} className="button three">3</div>
                <div onClick={calculate} className="button equal">=</div>
                <div onClick={() => display("0")} className="button zero">0</div>
                <div onClick={() => display(".")} className="button dot">.</div>
            </div>
        </div>
    );
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
