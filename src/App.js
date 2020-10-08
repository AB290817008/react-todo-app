import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [
        {title:'flower',amount:-20},
        {title:'salary',amount:100}
        
			],
			value: '',
      desc: 0,
      balance:null
      
  }
}

	addtodo = (e) => {
		e.preventDefault();

		let obj = { title: this.state.value, amount: this.state.desc };

    this.setState({ todos: [...this.state.todos, obj]});
    console.log(this.state.todos);
    
	};

	clearall = () => {
		this.state.todos = [];
		this.setState({ todos: this.state.todos });
	};

	edittodo = (index) => {
		var updated_value = prompt('Enter New Value');
    var updated_value_2 = prompt('Enter New Amount');
    var num_2 = parseInt(updated_value_2);
		this.state.todos[index].title = updated_value;
		this.state.todos[index].amount = num_2;
    this.setState({ todos: this.state.todos });
    
	};

	deltodo = (index) => {
		this.state.todos.splice(index, 1);

		this.setState({ todos: this.state.todos });
  }
 
  



  abc = () => {
    var totalBalance = this.state.todos.reduce(function(prev, cur) {
      return prev + cur.amount;
    }, 0);
    
    console.log('Total Messages:', totalBalance); 
    console.log(this.state.todos)
  }
  
  


	render() {
		let { value } = this.state;

		return (
			<div>
				<h1>Expense Tracker App</h1>
				<h2>
					Your Balance
					<br />
          {this.state.balance}
				</h2>
				<div>
					<form onSubmit={this.addtodo}>
						<input
							type="text"
							placeholder="enter inc/exp"
							onChange={(e) => this.setState({ value: e.target.value })}
							value={value}
							required
						/>
						<br></br>
						<input
							type="number"
							placeholder="enter amount"
							onChange={(e) => this.setState({ desc: e.target.value })}
							value={this.state.desc}
							required
						/>
						<br></br>
						<button type="submit">Add Item</button>
					</form>
					<button onClick={this.clearall}>Clear All</button>
				</div>
				<div>
					<ul>
						{this.state.todos.map((v, i) => {
							return (
								<li key={i}>
									{v.title} {v.amount}
									<button onClick={() => this.edittodo(i)}>Edit</button>
									<button onClick={() => this.deltodo(i)}>Delete</button>
								</li>
							);
						})}
					</ul>
          <button onClick={this.abc}>Sum</button>
				</div>
			</div>
		);
	}
  }

  export default App


