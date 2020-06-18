
let taps = document.querySelectorAll('button');
document.addEventListener('keypress',function(event){
	music(event.key);
	remove(event.key);
});


function music(inp)
{
	if(inp=='a'||inp=='A')
	{
		let sound = document.createElement('audio');
		sound.src = 'sounds/boom.wav';
		sound.play();
		taps[0].classList.add('press');
   
	}
	else if(inp=='s'||inp=='S')
	{
		let sound = document.createElement('audio');
		sound.src = 'sounds/clap.wav';
		sound.play();
		taps[1].classList.add('press');
	}
  
	else if(inp=='d'||inp=='D')
	{
		let sound = document.createElement('audio');
		sound.src = 'sounds/hihat.wav';
		sound.play();
		taps[2].classList.add('press');
	}
	else if(inp=='f'||inp=='F')
	{
		let sound = document.createElement('audio');
		sound.src = 'sounds/kick.wav';
		sound.play();
		taps[3].classList.add('press');
	}
	else if(inp=='g'||inp=='G')
	{
		let sound = document.createElement('audio');
		sound.src = 'sounds/openhat.wav';
		sound.play();
		taps[4].classList.add('press');
	}
	else if(inp=='h'||inp=='H')
	{
		let sound = document.createElement('audio');
		sound.src = 'sounds/ride.wav';
		sound.play();
		taps[5].classList.add('press');
	}
	else if(inp=='j'||inp=='J')
	{
		let sound = document.createElement('audio');
		sound.src = 'sounds/snare.wav';
		sound.play();
		taps[6].classList.add('press');
	}
	else if(inp=='k'||inp=='K')
	{
		let sound = document.createElement('audio');
		sound.src = 'sounds/tink.wav';
		sound.play();
		taps[7].classList.add('press');
	}
	else if(inp=='l'||inp=='L')
	{
		let sound = document.createElement('audio');
		sound.src = 'sounds/tom.wav';
		sound.play();
		taps[8].classList.add('press');
	}
}


function remove(inp){
	
	if(inp=='a'||inp=='A')
	{setTimeout(() => {  taps[0].classList.remove('press'); }, 200);
		
}
	else if(inp=='s'||inp=='S')
	{setTimeout(() => {  taps[1].classList.remove('press'); }, 200);
}
	else if(inp=='d'||inp=='D')
	{setTimeout(() => {  taps[2].classList.remove('press'); }, 200);
}
	else if(inp=='f'||inp=='F')
	{setTimeout(() => {  taps[3].classList.remove('press'); }, 200);
}
	else if(inp=='g'||inp=='G')
	{setTimeout(() => {  taps[4].classList.remove('press'); }, 200);
}
	else if(inp=='h'||inp=='H')
	{setTimeout(() => {  taps[5].classList.remove('press'); }, 200);
}
	else if(inp=='j'||inp=='J')
	{setTimeout(() => {  taps[6].classList.remove('press'); }, 200);
}
	else if(inp=='k'||inp=='K')
	{setTimeout(() => {  taps[7].classList.remove('press'); }, 200);
}
	else if(inp=='l'||inp=='L')
	{setTimeout(() => {  taps[8].classList.remove('press'); }, 200);
		
}

}