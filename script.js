let player="O"; 
let game=true;
let run=true;
let counter=0;
function Restart(){

    window.location="index.html";
}
let cell0=true;
function Cell0(){
  if(cell0){
    let d=document.getElementById("cell0");
    hasRun=true;
    
    if(hasRun){  
      if(player=="O"){
        d.innerHTML="O";
        Win();
        player="x";
      }else{
        d.innerHTML="x";
        Win();
        player="O";
      }
    }
  }//outer if

  cell0=false
 
}//end function
  
let cell1=true;
function Cell1(){
  if(cell1){
    let d=document.getElementById("cell1");
    if(game){
        if(player=="O"){
          d.innerHTML="O";
          Win();
          player="x";
        }else{
          d.innerHTML="x";
          Win();
          player="O";
      }
  }//outer if
    
}
cell1=false;
}

let cell2=true;
function Cell2(){
  if(cell2){
    let d=document.getElementById("cell2");
    if(game){
        if(player=="O"){
          d.innerHTML="O";
          Win();
          player="x";
        }else{
          d.innerHTML="x";
          Win();
          player="O";
      }
  }//outer if
}
  cell2=false;
}

let cell3=true
function Cell3(){
  if(cell3){
    let d=document.getElementById("cell3");
    if(game){ 
        if(player=="O"){
          d.innerHTML="O";
          Win();
          player="x";
        }else{
          d.innerHTML="x";
          Win();
          player="O";
      }
  }//outer if
}
   cell3=false;
}

let cell4=true;

function Cell4(){
  if(cell4){
    let d=document.getElementById("cell4");
    if(game){
        if(player=="O"){
          d.innerHTML="O";
          Win();
          player="x";
        }else{
          d.innerHTML="x";
          Win();
          player="O";
      }
  }//outer if
}
cell4=false;
}

let cell5=true;
function Cell5(){
  if(cell5){
    let d=document.getElementById("cell5");
    if(game){
        if(player=="O"){
          d.innerHTML="O";
          Win();
          player="x";
        }else{
          d.innerHTML="x";
          Win();
          player="O";
      }
  }//outer if
}
cell5=false;
}

let cell6=true;
function Cell6(){
  if(cell6){
    let d=document.getElementById("cell6");
    if(game){
        if(player=="O"){
          d.innerHTML="O";
          Win();
          player="x";
        }else{
          d.innerHTML="x";
          Win();
          player="O";
      }
  }//outer if
}
cell6=false;
}

let cell7=true;
function Cell7(){
  if(cell7){
    let d=document.getElementById("cell7");
    if(game){
        if(player=="O"){
          d.innerHTML="O";
          Win();
          player="x";
        }else{
          d.innerHTML="x";
          Win();
          player="O";
      }
  }//outer if
}
cell7=false;
}

let cell8=true;
function Cell8(){
  if(cell8){
    let d=document.getElementById("cell8");
    if(game){
        if(player=="O"){
          d.innerHTML="O";
          Win();
          player="x";
        }else{
          d.innerHTML="x";
          Win();
          player="O";
      }
  }//outer if
}
cell8=false;
}

function Win(){
  counter++;
    let cell0=document.getElementById("cell0").innerHTML;
    let cell1=document.getElementById("cell1").innerHTML;
    let cell2=document.getElementById("cell2").innerHTML;
    let cell3=document.getElementById("cell3").innerHTML;
    let cell4=document.getElementById("cell4").innerHTML;
    let cell5=document.getElementById("cell5").innerHTML;
    let cell6=document.getElementById("cell6").innerHTML;
    let cell7=document.getElementById("cell7").innerHTML;
    let cell8=document.getElementById("cell8").innerHTML;

      if((cell0==player && cell1==player && cell2==player)  || (cell3==player && cell4==player && cell5==player) ||
         (cell6==player && cell7==player && cell8==player)  || (cell0==player && cell3==player && cell6==player) ||
          (cell1==player && cell4==player && cell7==player) || (cell2==player && cell5==player && cell8==player) ||
          (cell0==player && cell4==player && cell8==player) || (cell2==player && cell4==player && cell6==player)){
            
            let d=document.getElementById("win");
            d.innerHTML=player+" is win";
            game=false;
      } 
      if(counter==9){
        let ele=document.getElementById("win");
        ele.innerHTML="Match is Draw";
         
      }
     
  }
  