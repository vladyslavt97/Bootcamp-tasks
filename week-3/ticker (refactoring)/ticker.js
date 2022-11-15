const headlinesJ = $('#headlines2');
let firstLinkJ = $('.a');
const tickerJ = $('#ticker2');
let widthOfHeadlinesJ = tickerJ.outerWidth();
console.log(widthOfHeadlinesJ);
let currentLeftValueJ = widthOfHeadlinesJ;
let idJ;
function moveLeftJ() { 
    if (headlinesJ.offset() + firstLinkJ.outerWidth() < 0){
        headlinesJ.empty(firstLinkJ); 
        headlinesJ.appendTo(firstLinkJ);
        firstLinkJ = $('.a');
        currentLeftValueJ = 0; 
        headlinesJ.css({
            left: currentLeftValueJ + 'px'
        });
    } 
    idJ = requestAnimationFrame(() => { 
 
        console.log(currentLeftValueJ);
        currentLeftValueJ -= 5; 
        headlinesJ.css({
            left: currentLeftValueJ + 'px'
        });
        moveLeftJ();
    }); 

}
moveLeftJ();


tickerJ.on(('mouseenter'), () => {
    cancelAnimationFrame(idJ);
});
tickerJ.on(('mouseleave'), () => {
    moveLeftJ();
});