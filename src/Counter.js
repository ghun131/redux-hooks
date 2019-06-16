import React from 'react';
import './Counter.css';
import { connect } from 'react-redux';

class Counter extends React.Component {
    onIncrement = () => {
        this.props.increment();
    }

    onDecrement = () => {
        this.props.decrement()
    }

    render() {
        const { count } = this.props

        return (
            <div className="Counter">
                This is clicked {count} times!
                <div>
                    <button onClick={this.onDecrement}>-</button>
                    <button onClick={this.onIncrement}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    count: state
})

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);