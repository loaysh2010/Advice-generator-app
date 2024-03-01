function createAdvice(id_1){
    let myrequest = new XMLHttpRequest();
    myrequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const header = document.querySelector('.advice-box h1');
            const quat = document.querySelector('.advice-box p q');

            response = JSON.parse(myrequest.responseText);
            id = response['slip'].id;
            text = response['slip'].advice;
            header.innerHTML = 'Advice #' + id;
            quat.innerHTML = text;
        }
    }
    if(typeof(id_1)=='number'){
        let url = `https://api.adviceslip.com/advice/${id_1}`;
        myrequest.open("GET",url);
        myrequest.send();
    }
    else{
    myrequest.open("GET",'https://api.adviceslip.com/advice');
    myrequest.send();
    }
    
}

createAdvice(71);

const diceButton = document.querySelector('.dice-button');

diceButton.addEventListener('click',createAdvice);

