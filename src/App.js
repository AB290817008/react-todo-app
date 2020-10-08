import React from 'react'

class App extends React.Component{
  
  constructor(){
    super()
    this.state = {

      todos:[{title:'Flower',amount:-20},{title:'Salary',amount:100}],
      value:'',
      desc:''
    }


  }

  addtodo = (e) => {

    e.preventDefault()
    
    let obj = {title:this.state.value}
    this.setState(
      {todos:[...this.state.todos,obj],
      value:''
      }
    )

    
  }
  
  
  render(){
    let {value} = this.state;
    let {desc} = this.state;
    return(
      <div>
        <h1>TODO</h1>
        <div>
          <form onSubmit={this.addtodo}>
            <input type='text' placeholder='enter inc/exp' onChange={(e)=>this.setState({value:e.target.value})} value={value} required/>
            <input type='number' placeholder='enter amount' onChange={(e)=>this.setState({desc:e.target.value})} value={value} required/>
            <button type="submit">Add Item</button>
            
          </form>
          <button>Clear All</button>
        </div>
        <div>
          <ul>
            {this.state.todos.map((v,i)=>{
              return <li key={i}>{v.title}
                <button>Edit</button>
                <button>Delete</button>
              </li>
            })}
          </ul>
        </div>
      </div>

    )

  }


}

export default App;
