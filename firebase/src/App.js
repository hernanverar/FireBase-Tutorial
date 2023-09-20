import { useState, useEffect } from "react";
import "./App.css";
import { db, auth} from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newOcupation, setNewOcupation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await auth.singInWithEmailAndPassword(email, password);

    } catch (error) {
      console.error("error logging in", error);
    }
  };

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");


  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      age: Number(newAge),
      ocupation: newOcupation,
    });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleLogin}>Login</button>


    <div className="App">
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="Number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />

      <input
        type=""
        placeholder="Ocupation..."
        onChange={(event) => {
          setNewOcupation(event.target.value);
        }}
      />

      <button className="create-button" onClick={createUser}>
        {" "}
        Create User{" "}
      </button>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {" "}
            <h1 className="name">Name: {user.name}</h1>
            <h1 className="age">Age: {user.age}</h1>
            <h1 className="ocupation">Ocupation: {user.ocupation}</h1>
            <button
              className="
            custom-button"
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              {" "}
              Increase age
            </button>
            <button
              className="delete-button"
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete User
            </button>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default App;
