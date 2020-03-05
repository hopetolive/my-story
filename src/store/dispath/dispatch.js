
export let increment=(val)=>{
    
    return {type:"INCREMENT",value:val}
}


// export let increment=(val)=>{

//     return dispac=>{
//         setTimeout(()=>{
//            dispac( incrementAsync(val))

//         },5000)
//     }

// }

export let derement=()=>{
    return{type:"DECREMENT"}
}

export let add=()=>{

    return{type:"ADD"}
}

export let deleted=(id)=>{
    return {type:"DELETE",id:id}

}
export let display = ()=>{

    return dispach=>{
        fetch("http://localhost:5000/logs").then((response)=>{

            if(response.status===200){
                return  response.json()
            }
            else{
                throw new Error("there is problem with the system")
            }
        }).then((logs)=>{
            console.log(logs)
            dispach( {type:"DISPLAY",logs})
           
        }).catch((e)=>{
            console.log(e)
        })
    }
}
export let deleteLog= (id)=> async dispach=>{
    let log= await fetch(`http://localhost:5000/logs/${id}`)
    let res = await log.json()

    dispach({type:"DELETELOG",payload:res})
        
    
}