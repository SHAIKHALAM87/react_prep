import React,{Component} from 'react';

export default class ComponentMount extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"AFTAB SHAIKH"
        }

        console.log("constructors");

    }

    onsubmit = (e)=>{
        console.log("on submit click");
        this.setState({name: "This is a onclick Method"});
    }

    render(){
        console.log("render");
        return(
            <div>
            <p> This is a {this.state.name}</p>
            <button onClick={this.onsubmit}> Change</button>
           </div>
        );
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps");
        return {};
    }

    shouldComponentUpdate(){
        return false;
    }

    componentDidUpdate(prevState){
        console.log("componentDidUpdate");
        if(prevState.name !== this.state.name){
            alert("changed");
        }
    }

    componentDidMount(){
        console.log("componentDidMount");
        setTimeout(() => {
            this.setState({name: "This is a componentDidMount Method"});
          }, 5000)
    }
}

