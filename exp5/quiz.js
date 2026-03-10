var time=10;

var timer=setInterval(function(){

time--;

document.getElementById("timer").innerHTML="Time Left : "+time;

if(time==5)
{
document.getElementById("warning").innerHTML="⚠ Only 5 seconds remaining!";
}

if(time==0)
{
clearInterval(timer);
submitQuiz();
}

},1000);



function submitQuiz()
{

clearInterval(timer);

var answers={
q1:"b",
q2:"b",
q3:"a",
q4:"a",
q5:"b"
};

var score=0;

for(var q in answers)
{

var selected=document.querySelector('input[name="'+q+'"]:checked');

if(selected && selected.value==answers[q])
score++;

}

document.getElementById("result").innerHTML="🎉 Your Score : "+score+" / 5";

var inputs=document.querySelectorAll("input");

inputs.forEach(function(i){
i.disabled=true;
});

}