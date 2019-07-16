import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//This is a react component called Counter
class Counter extends React.Component {
  //This is a constructor that sets the state of the counter to 0
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  //This handles both adding and subtracting clicks
  addSubtractClicks(type) {
    //The "type" is either 'add' or 'sub'
    //which will determine if the count
    //is incremented or subtracted
    this.setState(prevCount => {
      //prevCount is an object with a property of count that can be added or subtracted
      return {
        count: type === "add" ? prevCount.count + 1 : prevCount.count - 1
      };
    });
  }
  //logic to subtract

  render() {
    return (
      <section>
        <React.Fragment>
          <p>Counter: {this.state.count} </p>
          <input
            type="button"
            onClick={this.addSubtractClicks.bind(this, "add")}
            value="+"
          />
          <input
            type="button"
            onClick={this.addSubtractClicks.bind(this, "sub")}
            value="-"
          />
        </React.Fragment>
      </section>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//STEPS
//<Counter> should be wrapped in a <React.Fragment>

//<Counter> should contain state
//this.state = {
// count: 0,
// };

//Should contain a <p> element that contains the
//current number of clicks against your counter.
//On initialization, it should start with/display “0”.

//Should contain a button that displays a “+” for
//incrementing the counter. On click, the count
//property on your state should update/increment by
//1 and the <p> element referenced above should
//display the result.

//Should contain a button that displays a “-“ for
//decrementing the counter. On click, the count
//property on your state should update/decrement
//by 1 and the <p> element referenced above should
//display the result.

