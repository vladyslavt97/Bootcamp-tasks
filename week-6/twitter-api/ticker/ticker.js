const headlinesJ = $('#headlines');
let firstLinkJ;
const tickerJ = $('#ticker');
let widthOfHeadlinesJ = tickerJ.outerWidth();
console.log(widthOfHeadlinesJ);
let currentLeftValueJ = widthOfHeadlinesJ;
let idJ;
function moveLeftJ() { 
    idJ = requestAnimationFrame(() => { 
        firstLinkJ = $('a').eq(0);
        if (headlinesJ.offset().left + firstLinkJ.outerWidth() < 0){
            headlinesJ.remove(firstLinkJ); 
            headlinesJ.append(firstLinkJ);
            
            currentLeftValueJ = 0; 
            headlinesJ.css({
                left: currentLeftValueJ + 'px'
            });
        } 
        currentLeftValueJ -= 1; 
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

///
const ticker = document.getElementById('ticker');

ticker.addEventListener(('mouseenter'), () => {
    cancelAnimationFrame(idJ);
    // headlines.style.textDecoration = 'underline';
});
ticker.addEventListener(('mouseleave'), () => {
    moveLeftJ();
    // headlines.style.textDecoration = 'none';
});


///



$.get("http://localhost:8080/ticker.json", function (data) {
    data.forEach((tickerElement) => {
        headlinesJ.append(
            '<a href="' +
                tickerElement.url +
                '">' +
                tickerElement.title +
                "</a>"
        );
    });
});