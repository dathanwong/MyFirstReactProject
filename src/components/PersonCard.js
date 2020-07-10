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
            <div className="container justify-content-center">
                <div className="row">
                    <h1>{this.props.lastName}, {this.props.firstName}</h1>
                </div>
                <div className="row">
                    Age: {this.state.age}
                </div>
                <div className="row">
                    Hair Color: {this.props.hairColor}
                </div>
                <div className="row">
                    <div className="col">
                        <button onClick={this.addBirthday} className="btn btn-secondary">Birthday Button for {this.props.firstName} {this.props.lastName}</button>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default PersonCard;