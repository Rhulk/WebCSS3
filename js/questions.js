(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;

            if(answer.clientHeight == 0){
                height = answer.scrollHeight;
            }
            
            answer.style.height = '${height}px';
            
        })
    });
})();