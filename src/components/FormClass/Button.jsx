import { PureComponent, createRef } from "react";

export class Button extends PureComponent {

    constructor(props) {
        super(props)
        this.interval = null
        this.state = {
            count: 1
            // count: this.props.count
        }
        this.myRef = createRef()

    }

    componentDidMount() {        
        console.log('button did mount')
        // this.interval = setInterval( () => console.log(1), 1000)
        console.log(this.myRef.current.innerHTML)
    }

    componentDidUpdate(nextProps, nextState, snapshot){
        console.log('Button did update', snapshot)
    }

    componentWillUnmount(){
        console.log('Button will unmount')
        clearInterval(this.interval)
    }

    // Для не обнавления button, при обновлении input
    // shouldComponentUpdate(nextProps, nextState) {
    //     if(nextProps.coun !== this.props.coun) {
    //         return true
    //     }
    //     return false
    // }

    getSnapshotBeforeUpdate () {
        return {value: 999}
    }

    render() {
        return<>
        <p ref={this.myRef}>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1})}> +1 </button>
        </>
    }
}