const redux = require('redux'); 
const createStore = redux.createStore; 


const initialState = {
    counter:0,
}

// reducer

const rootReducer =(state =initialState,action)=>{

    
        if(action.type==='INC_COUNTER'){
           // console.log("Increment Counter");

            return {...state, counter:state.counter+1 }
                        
        }
        if(action.type==='ADD_COUNTER'){
           // console.log("Add Counter");
            
            return {...state, counter:state.counter+action.value}
        }
    
    return state; 
}

//store 

const store= createStore(rootReducer); 
console.log(store.getState());


//Subscription 
const subMethod =()=>{
    console.log('[Subscription', store.getState()); 
}
store.subscribe(subMethod);

// Dispatching Action 

console.log("INC");
store.dispatch({type:'INC_COUNTER'});
console.log("ADD");
store.dispatch({type:'ADD_COUNTER',value:10});
console.log(store.getState());




