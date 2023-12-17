const shapeSrc="./images/star.png";



var levelCounter=1;

window.onload = function() {
    //console.log("init");
    
   document.getElementById('alert').style.display='none';
    setScore(1);
    generateNextLevel();

  };

  function setScore(){
    let scoreElement=document.getElementById('score');
    scoreElement.innerHTML = `Current Level: ${levelCounter}`;
  }


function nextLevel(){
    
   // console.log("next");
    
    
    
    levelCounter++;
    setScore(levelCounter);
    const elements = document.getElementsByClassName('random-element');
    const elements1 = document.getElementsByClassName('different-element');
    Array.from(elements).forEach(element => {
        element.remove();
    });
    Array.from(elements1).forEach(element=>{
        element.remove();
    })
    
    
    generateNextLevel();
   
    
}
function userLost(){
   
    // debugger;
    levelCounter=1;
    setScore(1);
    toggleAlert();
    console.log("lost");
    
    const elements = document.getElementsByClassName('random-element');
    const elements1 = document.getElementsByClassName('different-element');
    Array.from(elements).forEach(element => {
        element.remove();
    });
    Array.from(elements1).forEach(element=>{
        element.remove();
    })
    
    
    generateNextLevel();
}
function generateNextLevel(){
   
    
    //toggleAlert();
    for (let i = 0; i < levelCounter; i++) {
        //console.log(levelCounter);
        const element1 = document.createElement('img');
        const element2 = document.createElement('img');
        element1.src=shapeSrc;
        element2.src=shapeSrc;
        element1.classList.add('random-element');
        element2.classList.add('random-element');
        const randomLeft= Math.random() * 50 + '%';
        const randomTop=Math.random() * 50 + '%';
        element1.style.top = randomTop;
        element1.style.left =randomLeft;
        element2.style.top = randomTop;
        element2.style.left = randomLeft;
        element1.addEventListener('click', function() {
            
            userLost();
             });
             element2.addEventListener('click', function() {
            
                userLost();
                 });
        document.getElementById('left-container').appendChild(element1);
        document.getElementById('right-container').appendChild(element2);
      }
      const differentElement=document.createElement('img');
      differentElement.src=shapeSrc;
      differentElement.classList.add('different-element');
      differentElement.addEventListener('click', function() {
        
        nextLevel();
         });
      //differentElement.appendChild()
      let randomNUMBER=Math.random();
     
    differentElement.style.top = Math.random() * 50 + '%';
    differentElement.style.left = Math.random() * 50 + '%';
    randomNUMBER>0.5? document.getElementById('left-container').appendChild(differentElement): document.getElementById('right-container').appendChild(differentElement);
     
}
  
  function toggleAlert() {
    var x = document.getElementById("alert");
    if (x.style.display === "none") {
      x.style.display = "block";
      setInterval(function () {x.style.display = "none"}, 5000
      );
    }
    
  }





