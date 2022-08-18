import './App.css';
import {useState} from 'react';
import PureModal from 'react-pure-modal';
import UserForm from './components/UserForm';
import 'react-pure-modal/dist/react-pure-modal.min.css';

function App() {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([
    { name: 'Gerald', age: '31' },
    { name: 'Fernando', age: '45' }
  ]);
  const [modalMessage, setModalMessage] = useState('')

  const Modal =(message)=> <PureModal
        header="Your header"
        footer={
          <div>
            <button>Cancel</button>
            <button>Save</button>
          </div>
        }
        isOpen={modal}
        closeButton="close"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <p>{message}</p>
    </PureModal>

  const addUser = (newName, newAge)=>{
    if(newAge.trim().length === 0 || newName.trim().length === 0){
      setModalMessage('Please enter a valid name and age (non-negative values)');
      setModal(true);
      return;
    }
    if(parseInt(newAge) <0){
      setModalMessage('Please enter a valid age (>0)')
      setModal(true);
      return;
    }      
    setUsers((prevUsers)=>{
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
          name: newName, 
          age: newAge
        });
      return updatedUsers;
      
    });
  }

  const usersList = users.map((user)=>{
    return <div key={user.age}>
      {user.name} ({user.age} years old)
    </div>
  });

  return (
    <div className="App">
      <UserForm newUserHandler={addUser}/>
      {usersList}
      {Modal(modalMessage)}
    </div>
  );
}

export default App;