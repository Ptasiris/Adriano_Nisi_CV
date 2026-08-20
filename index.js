console.log("Hello, World!");
alert("Hello, World!");
myButton=document.getElementById('myButton');
myAfterClick=document.getElementById('content');
myButton.addEventListener("click", function() {
    //alert("Button clicked!").show();
    myAfterClick.innerHTML = "Button clicked!";
});