
const body = document.querySelector("body");
let ul = document.createElement("ul");
body.appendChild(ul);
ul.style.listStyle="none";
ul.style.padding="0";
ul.style.margin="0";

for(i=0; i < 5; i++) {      
    let li = document.createElement("li"); 
    number = i + 1;
    color = i * 70;
    thick = (i+18)*number;
    ul.appendChild(li);
    li.innerHTML= "Rad " + number;
    li.style.color="darkblue"
    li.style.background=`hsl(${color}, 100%, 50%)`;
    li.style.margin=`${i*13}px 1rem 1rem 1rem`;
    li.style.height=`${thick}px`;
    li.style.fontSize=`${thick}px`;
    li.style.listStyle="none";
    li.style.textAlign="center";
    
}

let numbers = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
const container = document.createElement("div");
body.appendChild(container); 
container.style.marginLeft="1rem"
container.style.marginRight="1rem"
container.style.marginTop="3rem"
container.style.display="flex";      
container.style.border="2px solid black";
container.style.justifyContent="space-evenly"

for(let i=0; i < 3; i++) {
    let ul2 = document.createElement("ul");
    container.appendChild(ul2);
    console.log(container)

    ul2.style.padding="0";
    ul2.style.listStyle="none";
    ul2.style.marginBottom="4rem"
    ul2.style.marginTop="4rem"
    ul2.style.width="3rem";
    ul2.style.background="purple";
    ul2.style.border="0.5rem solid purple";
    if(i===0){                                                                  
        for(let i=0; i < 10; i++) {   
            let li = document.createElement("li");
            ul2.appendChild(li);
            li.innerHTML=i;
            li.style.textAlign="left";  
            if (i%2){
                li.style.background="white";
                li.style.color="black";
            }
            else if(i==4) {      
                li.style.background="purple"; 
                li.style.color="white"
            }
            else {
                li.style.background="black";
                li.style.color="white";
            }
        }
    }
    else if(i===1){
        for(let i=9; i > -1; i--) {    
            let li = document.createElement("li");
            ul2.appendChild(li);
            li.innerHTML=i;
            li.style.textAlign="center";  
            if (i%2){
                li.style.background="white";
                li.style.color="black";
            }
            else if(i==8) {
                li.style.background="purple"; // 
                li.style.color="white"
            }
            else {
                li.style.background="black";
                li.style.color="white";
            }
        }
    }
    else if(i===2){
        for(let i=0; i < numbers.length; i++) {   
            let li = document.createElement("li");
            ul2.appendChild(li);
            li.innerHTML=numbers[i];
            li.style.textAlign="right";    
            
            if (i==5){
                li.style.background="purple"; 
                li.style.color="black"
            }
            else if(i%2){
                li.style.background="white";
                li.style.color="black"
            }
            else {
                li.style.background="black";
                li.style.color="white";
            }
            
            
            
            
            
        }
    }
    
}
   























































