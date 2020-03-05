
let initialState={
   counter:0,
   hour:new Date().getHours(),
   movies:[],
   logs:[]


}

let rootReducer = (state=initialState,action)=>{
  
switch(action.type){

case("INCREMENT"):
return {
    ...state,
    counter:state.counter + action.value
}
case("DECREMENT"):
return {
    ...state,
    counter:state.counter - 2
}
case("ADD"):
return {

    ...state,
    movies:state.movies.concat({id:new Date().getTime(),counter:state.counter})
}
case("DELETE"):
let updatedArray = state.movies.filter((item)=>{
    return item.id !==action.id

})
return {

    ...state,
    movies:updatedArray
}
case("DISPLAY"):
return {

    ...state,
    logs:state.logs.concat(action.logs)
}
case("DELETELOG"):

let newLog = state.logs.filter((log)=>{
    return log.id !==action.payload.id
})
return {

    ...state,
    logs:newLog
}
}
    


    return state
}

export default rootReducer