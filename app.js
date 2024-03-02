











let RandNum=Math.floor((Math.random()*12)+1);
let count=0;
function clickGuess(){
    let InputNum=Number(document.getElementById("newNumber").value);

   
   
    if(count<3){

        if(InputNum==RandNum){
            document.getElementById("statement").innerHTML="You won";
            
        }else if(InputNum>RandNum){
            document.getElementById("statement").innerHTML="Your Input number is Larger than the system generated number!";
        }else if(InputNum<RandNum){
            document.getElementById("statement").innerHTML="Your Input number is Smaller than the system generated number!";
        }
        count++;
    }else if((count>=3 && InputNum==RandNum) ||(count>=3 && InputNum>RandNum) || (count>=3 && InputNum<RandNum)){
        document.getElementById("statement").innerHTML="Game over.Reload page to restart!!";
    }       
              
    }  
    









