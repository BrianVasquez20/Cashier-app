console.log("test");

const btnShowTotal = document.getElementById("btn-show-total");
btnShowTotal.addEventListener("click", function(){
    const inputs = document.getElementsByClassName("input-numbers");

    //getting array form input-numbers object
    let numbers = [];
    for (const i of inputs) {
        if (i.value === "") {
            numbers.push(parseInt(i.value = 0));
        } else {
            numbers.push(parseInt(i.value));
        }

        
    }
    console.log(numbers);

    //multiply
    numbers[0] *= 1000;
    numbers[1] *= 50;
    numbers[2] *= 500;
    numbers[3] *= 20;
    numbers[4] *= 200;
    numbers[5] *= 10;
    numbers[6] *= 100;
    numbers[7] *= 5;
    numbers[8] *= 2;
    numbers[9] *= 1;
    console.log(numbers[0], numbers);

    //getting total from all inputs
    let total = 0;
    for(const i of numbers){
        total+=i;
    }
    console.log(total);


    //creating total container
    const containerTotal = document.querySelector(".container-total");

    containerTotal.style.color = "#1DBC60";
    containerTotal.style.fontSize  = "2rem";
    containerTotal.style.padding = "0 .5rem"
    containerTotal.style.borderRadius = "0.25rem";
    containerTotal.style.border = "2px solid #1DBC60";

    containerTotal.innerHTML = "$" + total;

});