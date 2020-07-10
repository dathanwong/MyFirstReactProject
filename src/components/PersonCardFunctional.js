import React from 'react';
const PersonCardFunctional = props =>{
    return(
        <div className="container justify-content-center">
                <div className="row">
                    <h1>{props.lastName}, {props.firstName}</h1>
                </div>
                <div className="row">
                    Age: {props.age}
                </div>
                <div className="row">
                    Hair Color: {props.hairColor}
                </div>
                {props.children}
            </div>
    );
}

export default PersonCardFunctional;