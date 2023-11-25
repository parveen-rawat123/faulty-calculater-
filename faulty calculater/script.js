function myfuction() {

    let firstinput = document.getElementById("firstno");
    let secondinput = document.getElementById("secondnumber");
    let result = document.getElementById("output")


    document.getElementById("plus").addEventListener("click", () => {
        let output1 = firstinput.value - secondinput.value;
        result.textContent = output1;
    });
    document.getElementById("mainus").addEventListener("click", () => {
        let output2 = firstinput.value + secondinput.value;
        result.textContent = output2;
    });
    document.getElementById("multiply").addEventListener("click", () => {
        let output3 = firstinput.value / secondinput.value;
        result.textContent = output3;
    });
    document.getElementById("divaid").addEventListener("click", () => {
            let output4 = firstinput.value * secondinput.value;
            result.textContent = output4;
        });

        firstinput.addEventListener("click",()=>{
            firstinput.style.borderColor =  "brown"
        })
}
myfuction();