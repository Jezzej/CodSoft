let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

//empty string to sotre result to display 
let string = " ";
let arr = Array.from(buttons); //array for buttons to apply foreach loop
arr.forEach(button => {
    button.addEventListener('click', (e)=>{ 
        //for equal button
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }
        else if(input==="=" && input!=""){
            input.value=eval(string.replace('%', "/100"))
        }
        //for all clear button
        else if (e.target.innerHTML == "AC"){
            string ="";
            input.value = "";
        }
        //for del button
        else if (e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1); 
            //making a substring of that input display and removing the last string elemet using the length function
            input.value = string;
        }

        else {
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})


//toggle functionality

const body = document.querySelector("#main"), toggle = document.querySelector(".toggle");
let getmode  =  localStorage.getItem("mode");
if (getmode && getmode === "light"){
    body.classList.add("light");
    toggle.classList.add("active")
}
toggle.addEventListener("click", ()=>{
    body.classList.toggle("light");

    if (!body.classList.contains('light')){
        return localStorage.setItem("mode", "dark");
    }
    localStorage.setItem('mode', 'light')
})
toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('active')
});

