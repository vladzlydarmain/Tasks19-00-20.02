function printScroll() {
    console.log(window.scrollX, window.scrollY);
    console.log(document.body.clientHeight/2);
}

// setInterval(printScroll,1000)

window.addEventListener('scroll',(event)=>{
    let arrowTop = document.querySelector('#arrowTop');
    let arrowDown = document.querySelector('#arrowDown');
    if (window.scrollY<document.body.scrollHeight/2){
        arrowDown.removeAttribute('hidden');
        arrowTop.setAttribute('hidden','#');
    }
    if (window.scrollY>document.body.scrollHeight/2){
        arrowTop.removeAttribute('hidden');
        arrowDown.setAttribute('hidden','#');
    }
}
)

arrowTop.addEventListener('click',(event)=>{
    window.scrollTo(0,0)
})
arrowDown.addEventListener('click',(event)=>{
    window.scrollTo(0,document.body.scrollHeight)
})
