const surpriseButton = document.querySelector(".surprise"); 
const container = document.querySelector(".container"); 

function showContent(button, container) {
    button.addEventListener('click', (e) => {
        container.classList.remove('hidden'); 
        button.classList.add('hidden'); 
        document.documentElement.scrollTop = 0;
    }); 
}

showContent(surpriseButton, container); 

