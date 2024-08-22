const inputValue = document.getElementById("user-input");

const number = document.querySelectorAll(".number").forEach((function (item) {
    item.addEventListener("click", function (e) {
        if(inputValue.innerHTML === "NaN"){
            inputValue.innerText = "";
        }
        if (inputValue.innerText === "0"){
            inputValue.innerHTML = ""
        }
        inputValue.innerText = inputValue.innerText + e.target.innerHTML.trim()
})
}))

const calculate = document
.querySelectorAll(".operations")
.forEach(function (item) {
    item.addEventListener("click", function (e) {
        let lastvalue = inputValue.innerText.substring(
            inputValue.innerText.length,
            inputValue.innerText.length - 1
        );

        if (!isNaN(lastvalue) && e.target.innerHTML === "=") {
            inputValue.innerText = eval(inputValue.innerText);
        } else if (e.target.innerHTML === "AC") {
            inputValue.innerText = 0;
        } else if (e.target.innerHTML === "DEL") {
            inputValue.innerText = inputValue.innerText.substring(
                0,
                inputValue.innerText.length - 1
            );
            if (inputValue.innerText.length == 0) {
                inputValue.innerText = 0;
            }
        } else {
            if(!isNaN(lastvalue)) {
                inputValue.innerText += e.target.innerHTML;
            }
        }
    });
});