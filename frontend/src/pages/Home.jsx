import List from '@/components/List';
import NavBar from '@/components/navBar';
import { apiUrl, frontEndUrls } from '@/config';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    // let url = window.location.href;

    // for(let i=0;i<frontEndUrls.length;i++) {
    //     url = url.replace(frontEndUrls[i], '');
    // }
    
    // let points = url.split('/').filter(str => str !== '');
    // console.log(points);

    // let path = '';

    // if(points.length == 0) {
    //     path = "home";
    // } else {
    //     if(points.length % 2 == 0) {
    //         for(let i=0;i<points.length;i++) {
    //             path += points[i];
    //             if(i%2==0) {
    //                 path += '/';
    //             } else {
    //                 path += '~';
    //             }
    //         }
    //         path = path.slice(0, -1);
    //     }
    // }

    // console.log(path);
    
    // const token = localStorage.getItem("token");
    
    // const navigate = useNavigate();
    // const [toDo, setToDo] = useState({});

    // useEffect(() => {
    //     if(path.length > 0) {
    //         axios.get(apiUrl + 'todo', {
    //             params: {
    //                 path,
    //             },
    //             headers: {
    //                 Authorization: token,
    //             }
    //         }).then(res => {
    //             setToDo(res.data);
    //             console.log(res.data);
    //         }).catch(error => {
    //             console.log(error.message);
    //         });
    //     }
    // },[path]);

    // useEffect(() => {
    //     if(token) {
    //         axios.get(apiUrl + 'auth/user', {
    //             headers: {
    //                 Authorization: token,
    //             }
    //         }).then(res => {
    //             if(res.status == 200) {
    //                 console.log(res.data.user);
    //             } else {
    //                 localStorage.removeItem('token');
    //                 navigate('/login');
    //             }
    //         }).catch(error => {
    //             console.log(error.message);
    //             localStorage.removeItem('token');
    //             navigate('/login');
    //         });
    //     } else {
    //         localStorage.removeItem('token');
    //         navigate('/login');
    //     }
    // },[token]);

    const arr = ["wait", "a minute", "who r u","wait", "a minute", "who r u","wait", "a minute", "who r u"];

    return (
        <div className="w-screen h-screen flex flex-col">
            <NavBar />
            <div className="md:flex-1 p-2 w-[90%] md:w-[80%] lg:w-[70%] m-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-4 overflow-auto">
                <List heading={'ui'} titles={arr} />
                <List heading={'un'} />
                <List heading={'ni'} titles={arr} />
                <List heading={'nn'} titles={arr} />
            </div>
        </div>
    )
}

export default Home
