
import classes from './Counter.module.css';
import {useSelector, useDispatch, connect} from "react-redux";
import {Component} from "react";

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.displayCounter)

  const incrementHandler = () => {
      dispatch({type: 'increment'})
  }
    const decrementHandler = () => {
        dispatch({type: 'decrement'})
    }
    const incrementHandlerOf = () => {
      const payload ={
          amount:3
      }
        dispatch({type: 'incremenOf', payload})
    }
  const toggleCounterHandler = () => {
      dispatch({type: 'counterDisplay'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {showCounter && <div className={classes.value}>{counter}</div>}
        <div style={{marginBottom: "20px"}}>
            <button
                style={{marginRight: "20px"}}
                onClick={incrementHandler}>
                Increment
            </button>
            <button
                style={{marginRight: "20px"}}
                onClick={incrementHandlerOf}>
                Increment by 3+
            </button>
            <button
                onClick={decrementHandler}>
                Decrement
            </button>

        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter

// class Counter extends Component{
//     incrementHandler(){
//         this.props.increment()
//     }
//     decrementHandler(){
//         this.props.decrement()
//     }
//     toggleCounterHandler(){
//         console.log('toggle conter');
//     }
//
//     render(){
//         return (
//         <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}>{this.props.counter}</div>
//             <div style={{marginBottom: "20px"}}>
//                 <button style={{marginRight: "20px"}} onClick={this.incrementHandler.bind(this)}>Increment</button>
//                 <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//             </div>
//             <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//         </main>
//         )
//     }
// }
// const mapStateToProps = (state) => ({ counter: state.counter })
// const mapDispatchToProps = (dispatch) =>{
//     return{
//         increment: () => dispatch({type: 'increment'}),
//         decrement: () => dispatch({type: 'decrement'})
//     }
// }
//
// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
