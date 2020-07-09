import React from 'react';

class PersonCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            age: props.age
        };
    }

    addBirthday = () =>{
        this.setState({
            age: this.state.age+1
        }) 
    }

    render(){
        return (
            <div class="container justify-content-center">
                <div class="row">
                    <h1>{this.props.lastName}, {this.props.firstName}</h1>
                </div>
                <div class="row">
                    Age: {this.state.age}
                </div>
                <div class="row">
                    Hair Color: {this.props.hairColor}
                </div>
                <div class="row">
                    <div class="col">
                        <button onClick={this.addBirthday} class="btn btn-secondary">Birthday Button for {this.props.firstName} {this.props.lastName}</button>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default PersonCard;