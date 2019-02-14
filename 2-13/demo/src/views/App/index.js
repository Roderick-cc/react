import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../../actions/index';
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux'

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    onClick() {
        // this.props.dispatch(increment())
        // console.log(this.props)
        // this.props.actions()
         
    }

    onClick2 () {
        console.log(this.props)
        // this.props.dispatch({ type: 'INCREMENT_ASYNC' })
        this.props.INCREMENT_ASYNC()
    }

    render() {
        return (
            <div>
                <div>react-router 测试</div>
                <nav>
                    <ul>
                    <li><Link to="/about/">页面一</Link></li><li><Link to="/users/">页面二</Link></li>
                    </ul>
                </nav>

                <br/>
                <div>redux & redux-saga测试</div>
                <div>current number： {this.props.number} <button onClick={()=>this.onClick()}>点击+1</button></div>
                <div>current number： {this.props.number} <button onClick={()=>this.onClick2()}>点击2秒后+1</button></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {number: state.number}
}


const appActions=text =>({type:"INCREMENT"})
const INCREMENT_ASYNC = text =>({type:'INCREMENT_ASYNC'})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch),
  INCREMENT_ASYNC:bindActionCreators(INCREMENT_ASYNC , dispatch)
})


export default connect(
   mapStateToProps,mapDispatchToProps
)(App);

// export default connect(
//     state => ({
//         number: state.number
//     })
// )(App);