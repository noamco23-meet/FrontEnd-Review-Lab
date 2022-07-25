var function_count = 0;

function changeBackgroundColour(colour){
    if (function_count %2 == 0){
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "blue";
    }
    function_count++;
}