
const adviceId = document.querySelector('.AdviceId');
const adviceContent = document.querySelector('.AdviceContent');
const diceBtn = document.querySelector('.diceBtn');

async function Advice () {
	const api = await fetch("https://api.adviceslip.com/advice");
	const data = await api.json();

	adviceId.innerHTML=`A D V I C E # ${data.slip.id}`;
	adviceContent.innerHTML=`${data.slip.advice}`;
}

diceBtn.addEventListener('click',function(){
	Advice();	
});

