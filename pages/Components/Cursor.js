import React, {Component} from 'react';

class Cursor extends Component {
    state = {
        left: 0,
        top: 0
    }
    componentDidMount() {
        document.addEventListener('mousemove', (e) => {
            this.setState({left: e.pageX, top: e.pageY});
        });
    }
    render() {
        return (
            <div style={{left: this.state.left, top: this.state.top, color:'blue', width:'10px', height:'10px'}} className='cursor'></div>
        )
    }
}

export default Cursor;