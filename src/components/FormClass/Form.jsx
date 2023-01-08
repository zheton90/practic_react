import { Component} from "react";
import { Button } from "./Button";
import { Input } from "./Input";


export class Form extends Component{

    state = {
        visible: true,
        name: 'click',
        
    }

    componentDidMount() {
        console.log('form did mount')
    }

    handelVisible = () => {
        this.setState({ visible: !this.state.visible})
    }

    handelChangeName = (ev) => {
        this.setState({ name: ev.target.value})
    }

    render(){
        return <>
        <h2>Class component</h2>
        <h3>Parent component</h3>
        <button onClick={this.handelVisible}>{this.state.visible ? 'hide' : 'visible'}</button>
        <h3>Child component</h3>
        {this.state.visible && <Button coun={0}/>}
        <br />
        <p>Name: {this.state.name}</p>
        <Input value={this.state.name} change={this.handelChangeName} />
        </>
    }
}