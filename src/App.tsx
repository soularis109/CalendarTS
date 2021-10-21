import React, {useEffect} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import {useActions} from "./hooks/useActions";
import {User} from "./models/User";

function App() {
    const {setUser, setIsAuth} = useActions();
    useEffect(() => {
            if (localStorage.getItem('auth')) {
                setUser({username: localStorage.getItem('username' || '')} as User)
                setIsAuth(true)
            }
    }, [])
  return (
    <Layout >
       <Navbar/>
        <Layout.Content>
            <AppRouter/>
        </Layout.Content>
    </Layout>
  );
}

export default App;
