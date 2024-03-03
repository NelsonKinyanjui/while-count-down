
const output = document.querySelector('.output');
output.innerHTML= '';

let i = 10;

do{
    const para = document.createElement('p');
    output.appendChild(para);
    if (i === 10){
        para.textContent =`countdown ${[i]}`;
    }
    else if (i === 0){
        para.textContent = "Blast off!";
    }
    else {
        para.textContent =[i];
    }

    i--;

}while(i > -1);
 