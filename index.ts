import { Observable } from 'rxjs';

const observable = new Observable ((obs)=>{
  obs.next(10);
  obs.complete();
});

const observer = {
        next: evt => {displayLog('OBS1:'+evt);},
        error: err => console.error("[ERR] - ", err),
        complete: () => displayLog("[*** ACABE ***]")
    }


const refObservable = 
  observable.subscribe( observer );  


  function displayLog (content) {
    let element = document.createElement('div');
    element.innerHTML = content;
    const logContainer = document.getElementById("log-container");
    logContainer.appendChild(element);
    console.log(content);
}