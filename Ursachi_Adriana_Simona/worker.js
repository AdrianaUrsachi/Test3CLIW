
onmessage = function(e) {
    let c=0;
    let incercari = e.data[0];
    for(let i=0; i<incercari; i++){
        let x = Math.random()*2-1;
	    let y = Math.random()*2-1;
        if (Math.sqrt(x*x + y*y) < 1) 
            c++;
    }
    let pi = c*4/incercari;
    postMessage(["raspuns",pi]);
}