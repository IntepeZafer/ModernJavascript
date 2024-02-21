'use strict'
const serverStatus = false;
const login = (userName , passWord) => {
    return new Promise((resolve , reject) => {
        if(serverStatus){
            resolve({userName : userName , passWord : passWord})
        }else{
            reject("Server Kapalı");
        }
    });
};

const getPostByUserName = () => {
    return new Promise((resolve , reject) => {
        if(serverStatus){
            resolve(["1" , "2" , "3"])
        }else{
            reject("Server Kapalı");
        }
    });
};

const postDetails = () => {
    return new Promise((resolve , reject) => {
        if(serverStatus){
            resolve("Post Başarılı");
        }else{
            reject("Server Kapalı");
        }
    });
};

login("Coder" , "123456")
    .then(user => {
        console.log(user.userName);
        console.log(user.passWord);
        return getPostByUserName();
    })
    .then(array => {
        console.log(array)
        return postDetails();
    })
    .then(post => {
        console.log(post);
    })
    .catch(err => {
        console.log(err);
    })