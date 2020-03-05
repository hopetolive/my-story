import React,{Component}from "react"
import Comedy from "./Comedy"
import {connect} from "react-redux"
import * as actionCreator from "../../../dispath/dispatch"

class Action extends Component{
    render(){
        let day=  new Date().getDay()
        let time=  new Date().getHours()
        let text;
        let password="Kurj"
        let msg
        let wish

if(time<16){
    wish="good afternoon"
}else if(time<11){
    wish="good morning"
}else if(time>16){
    wish="good evening"
}       if(password.includes("$")){
           // msg="Don't enetr thr $ symbol"

        }
        switch(day){
            case(1):
            text="today is tuesday"
            break;
            case(0):
            text="today is wensday"
            break;
            case(4):
            text="today is THURSDAY"
            break;
            
            default:
                text="ENTER DAY"
        
        }

let isvalid=false


        return(
            <div>
                {
    isvalid?<Comedy/>:""
                }
        
        <h2>{text}</h2>
        <h3>{msg}</h3>
            <h4>{time}</h4>
            <h5>{wish}</h5>
            <h4>{this.props.ctr}</h4>
            <h3>{this.props.time}</h3>
            <button onClick={this.props.onIncrementHandler}>increment</button>
            <button onClick={this.props.onDecrementHandler}>decrement</button>
            <button onClick={this.props.onAddMovieHandler}>AddMovie</button>
            <button onClick={this.props.onDisplayLogHandler}>DisplayLogs</button>
            <button onClick={this.props.onDeleteLogHandler}>DisplayLogs</button>

          <ul>
          {this.props.movie.map((m)=>
          ( <li   

            key={m.id}
            onClick={()=>this.props.onDeleteMovieHandler(m.id)}
            
          
          >  {m.counter}</li>
          ))}

          </ul>


          <ul>
              {this.props.logdetails.map((log)=>

              (<li 
                key={log.id}
                onClick={()=>this.props.onDeleteLogHandler(log.id)}

               >{log.message}</li>)

              )}

          </ul>
          




        
            </div>
        )
    }
}

let mapStateToProps = (state)=>{
console.log(state)
    return{
        ctr:state.counter,
        time:state.hour,
        movie:state.movies,
        logdetails:state.logs
    }
}

let mapDispathToProps=(dispach)=>{
    return{

        onIncrementHandler:()=>{dispach(actionCreator.increment(2))},
        onDecrementHandler:()=>{dispach(actionCreator.derement())},
        onAddMovieHandler:()=>{dispach(actionCreator.add())},
        onDeleteMovieHandler:(id)=>{dispach(actionCreator.deleted(id))},
        onDisplayLogHandler:()=>{dispach(actionCreator.display())},
        onDeleteLogHandler:(id)=>{dispach(actionCreator.deleteLog(id))}

    }

}

export default connect(mapStateToProps,mapDispathToProps)(Action)