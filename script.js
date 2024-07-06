const URL = 'https://cat-fact.herokuapp.com/facts';
let para = document.querySelector('#fact');

function RandomNum(min,max){
    return Math.floor(Math.random() * (max-min+1))+min;
}

let getFacts = async () => {
    console.log('Getting data ...');
    let response = await fetch(URL);
    console.log(response); //JSON (javascript object notation) format
    let data = await response.json(); //Converst JSON to javascript object
    let fact=data[RandomNum(0,4)].text;
    para.textContent=fact;
};



