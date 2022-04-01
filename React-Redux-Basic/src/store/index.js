import { createStore } from 'redux'

const initializeState = {
    counter: 0,
    displayCounter: true
}

const counterReducer = (state = initializeState, action )=>{
    if (action.type === 'increment'){
        return {
            counter: state.counter + 1,
            displayCounter: true
        }
    }

    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1,
            displayCounter: true
        }
    }

    if(action.type === 'incremenOf'){
        return {
            counter: state.counter + Number(action.payload.amount),
            displayCounter: true
        }
    }

    if(action.type === 'counterDisplay'){
        return {
            counter: state.counter,
            displayCounter: !state.displayCounter
        }
    }
    return state
}

const store = createStore(counterReducer)

export default store
