import React from 'react';

class PersonCard extends React.Component{
    render(){
        return (
            <div class="container justify-content-center">
                <div class="row">
                    <h1>{this.props.lastName}, {this.props.firstName}</h1>
                </div>
                <div class="row">
                    Age: {this.props.age}
                </div>
                <div class="row">
                    Hair Color: {this.props.hairColor}
                </div>
            </div>
        );
    }
}

export default PersonCard;