const ui = new UI();
const serverStatus = false;
const promise = new Promise((resolve , reject) => {
    if(serverStatus){
        resolve(ui.getUserInfo());
    }else{
        reject("Server Kapalı");
    }
});

promise.then(() => {
    ui.button.addEventListener("click" , () => {
        const userInfo = ui.getUserInfo();
        ui.user.innerHTML = userInfo.userInput;
        ui.pass.innerHTML = userInfo.passInput
    })
}).catch(err => {
    const userInfo = ui.getUserInfo();
    ui.user.innerHTML = err;
})