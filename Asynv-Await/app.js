const serverStatus = true;

const serverInfo = () => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(serverStatus){
                resolve("Server Aktif");
            }else{
                reject("Server Kapalı");
            }
        } , 1000)
    })
};

const postInfo = () => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(serverStatus){
                resolve(["Post_1" , "Post_2" , "Post_3"]);
            }else{
                reject("Server Kapalı");
            }
        } , 2000)
    })
};

const login = (userName , passWord) => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(serverStatus){
                resolve({userName : userName , passWord : passWord});
            }else{
                reject("Server Kapalı");
            }
        } , 3000)
    })
}

const displayUser = async () => {
    try{
        const dateOne = await serverInfo();
        console.log(dateOne);
        const dateTwo = await postInfo();
        console.log(dateTwo);
        const dateThree = await login("Coder123" , "123456")
        console.log(dateThree);
    }catch(err){
        console.log(err)
    }
}
displayUser();