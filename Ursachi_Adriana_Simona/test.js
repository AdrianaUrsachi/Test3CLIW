let incercari = 1000000000;
let suma = 0;
let contor = 0;
for(let i=0; i<100; i++)
{
    let worker = new Worker('worker.js');

    worker.postMessage([incercari/100]);

    worker.onmessage = event =>{
        contor++;
        suma+=event.data[1];
        if(contor==100){ 
        document.body.innerHTML = suma/contor;
        document.body.innerHTML += "<br>"+Math.PI;
        }

    }
}