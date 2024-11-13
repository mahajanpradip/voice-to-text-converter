btn.addEventListener('click',function(){
    var speech=true;
    window.SpeechRecognition=window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResult=true;
    
    recognition.addEventListener('result',e=>{
        const t = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.t);

        btn.innerHTML=t;
    })

        recognition.start();
})

