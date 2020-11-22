import React, { Component } from 'react'

export default class Cart extends Component {
    state = {
        angka: 0
        }
    componentDidMount() {
        alert(`Okey Let's Go`)
        }

        tambahAngka = () => {
            this.setState((state) => {return {angka: state.angka + 1}})
            }
           componentDidUpdate(prevProps, prevState, snapshot) {
            alert(`Your product has been updated. The number of your previous products:
           ${prevState.angka}`)
            }
           
            shouldComponentUpdate(nextProps, nextState, nextContext) {
                return window.confirm('Are you sure you want to update your product?');
                }
            
                componentWillUnmount() {
                    alert('You will return to the product page')
                    }
    
    render() {
        
        return (
            

            <div>
            <button onClick={this.tambahAngka}>Click to update your product</button>
            <br/>
            <span>{this.state.angka}</span>

            </div>
            
        );
    }
}