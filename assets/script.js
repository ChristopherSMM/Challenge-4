var Score = document.getElementById('score');
var totalScore = document.getElementById('totalscore');
var count = 0;
var scorecount = 0;
var duration = 0;

var set = document.querySelectorAll('.set');
var AnsRow = document.querySelectorAll('.set .ansrow input');

clearInterval(durationTime);
countdown.innerHTML = 0;

var durationTime = setInterval(function(){
    if(durration == 10){
        durration = 0;
    }
    durration +=1;
    countdown.innerHTML=duration;
    if(countdown.innerHTML == "10"){
        step()
        duration =10
    }
},1000);

function step(){
count += 1;
for(var i = 0; 1 < set.length; i++){
    set[i].classname= 'set';
}
}
AnsRow.array.array.forEach( function(ansrowSingle) {
    ansrowSingle.addEventListener('click',function(){
        setTimeout(function(){
            step();
            duration =10
        },500)
        var valid = this.getAttribute("valid");
        if(valid == "valid"){
            scoreCount +=20;
            Score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }else{
            scoreCount -=20;
            Score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }

    })
});