const headlines = $('#headlines');
let firstLink;
const ticker = $('#ticker');
let widthOfHeadlines = headlines.outerWidth();
let currentLeftValue = widthOfHeadlines;
let id;
function moveLeft() { 
    id = requestAnimationFrame(() => { 
        firstLink = $('a').eq(0);
        if (headlines.offset().left + firstLink.outerWidth() < 0){
            headlines.remove(firstLink); 
            headlines.append(firstLink);
            
            currentLeftValue = 0; 
            headlines.css({
                left: currentLeftValue + 'px'
            });
        } 
        currentLeftValue -= 3; 
        headlines.css({
            left: currentLeftValue + 'px'
        });
        moveLeft();
    }); 

}
moveLeft();


ticker.on(('mouseenter'), () => {
    cancelAnimationFrame(id);
});
ticker.on(('mouseleave'), () => {
    moveLeft();
});

//



$.get("/links.json", function (data) {
    data.forEach((tickerElement) => {
        headlines.append(`
        <a href="${tickerElement.url}"> ${tickerElement.text}</a>`);
        // <a href="${tickerElement.url}"><b><em>${tickerElement.name}:</em></b> ${tickerElement.text}</a>`);
    });
});