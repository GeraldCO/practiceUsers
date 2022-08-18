import React, {useState} from 'react';

const UserForm = (props)=>{
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const nameChangeHandler = (event)=>{
         setName(event.target.value);
    }
    const ageChangeHandler = (event)=>{
        setAge(event.target.value);
    }

    const addUserHandler = (event)=> {
        // if(name === "" || age === ""){
        //     console.log('entro al primer if');
        //     setModalMessage('Please enter a valid name and age (non-negative values)');
        //   }else if(parseInt(newAge) <0){
        //     console.log('entro al segundo if');
        //     setModalMessage('Please enter a valid age (>0)')
            
        event.preventDefault();
        props.newUserHandler(name, age);
        setName('');
        setAge('');
    }

    return(
        <form onSubmit={addUserHandler}>
            <div className='form-group'>
                <label>Username</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={nameChangeHandler} 
                />
            </div>
            <div className='form-group'>
                <label>Age (Years)</label>
                <input 
                    type="number" 
                    value={age} 
                    onChange={ageChangeHandler} 
                />
            </div>
            <div className='form-group'>
                <button type='submit'>
                    Add User
                </button>
            </div>

        </form>
    )
}

export default UserForm;