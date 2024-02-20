'use strict'

function UI(){
    this.userName = document.querySelector("#userName");
    this.passWord = document.querySelector("#passWord");
    this.user = document.querySelector(".user");
    this.pass = document.querySelector(".pass");
    this.button = document.querySelector("button");
};
UI.prototype.getUserInfo = () => {
    const dataSet = {
        userInput : this.userName.value,
        passInput : this.passWord.value
    }
    return dataSet;
}