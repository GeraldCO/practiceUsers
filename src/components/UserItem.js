//currently not being used
import React, {useState} from 'react';

const UserItem = (props)=> {
    return(
        <div key={props.age}>
            {props.name} {props.age} years old
        </div>
    )
}