const Data=[
  {q:"What is the color of Sky ?",
   o:['Red','Grey','Green','Blue'],
   a:"Blue"
   },
   {q:"What is the capital of UK ?",
   o:['Glasgow','Paris','London','York'],
   a:"London"
   },
   {q:"What is the capital of France ?",
   o:['Tokyo','Manchester','Dublin','Paris'],
   a:"Paris"
   },
   {q:"What is the Tallest Mountain ?",
   o:['Mt Everest','K2','Lhotse','Kachenjunga'],
   a:"Mt Everest"
   },
   {q:"Which is the tallest building in the world ?",
   o:['Shanghai Tower','Burj Khalifa','Jeddah Power','Tokyo Tower'],
   a:"Burj Khalifa"
   }
]
 const questionText=document.getElementById("question-text");
 const optionbox=document.getElementById("option-box");
 const nextButton=document.getElementById("next");
 const scoreText=document.getElementById("score");

 nextButton.addEventListener('click',Next);

 let questionIndex=0;
 let score=0;
 
 function DisableOptionButtons()
 {
  const buttons = document.querySelectorAll('button[id="options"]');

      // Disable all buttons
      buttons.forEach((button) => {
        button.disabled = true;
      });
 }
 function EnableOptionButtons()
 {
  const buttons = document.querySelectorAll('button[id="options"]');

      // Disable all buttons
      buttons.forEach((button) => {
        button.disabled = false;
      });
 }
 function LoadQuestions()
 {
  questionText.innerHTML=(questionIndex+1)+". "+Data[questionIndex].q;
 }
 function LoadAnswers()
 {
  const options = Array.from(optionbox.children)
  options.forEach((element,index)=>
  {
     element.innerHTML=Data[questionIndex].o[index];
     element.addEventListener('click',CheckAnswer);
  })
 }
 function CheckAnswer(event)
 {
    DisableOptionButtons();
    let selectedOption=event.target;
    let correctOption=Data[questionIndex].a;
    let correctOptionButton;
  
    const options = Array.from(optionbox.children)
    options.forEach((element,index)=>
    {
      if(element.innerHTML===Data[questionIndex].a)
      {
        correctOptionButton=element;
      }
    })

    if(selectedOption.innerHTML===correctOption)
    {
     // console.log('correct!');
      selectedOption.classList.add('correctAnswer');
      score ++;
    }
    else
    {
      correctOptionButton.classList.add('correctAnswer');
      selectedOption.classList.add('wrongAnswer');
    }
    nextButton.classList.remove('hideNextButton');
    nextButton.classList.add('displayNextButton');  
    if(questionIndex==Data.length-1)
    {
      scoreText.innerHTML=`Final Score ${Math.round((score/Data.length)*100) +"%"}`;
      nextButton.innerHTML='Reset';
    }
    else
    {
      
    }
 }
 function Next()
 {
  console.log(Data.length-1);
  if(questionIndex<Data.length-1)
  {
    
    const options = Array.from(optionbox.children);
    options.forEach((element, index) => {
      if (element.classList.contains("correctAnswer")) {
        element.classList.remove('correctAnswer');
      } else if (element.classList.contains("wrongAnswer")) {
        element.classList.remove('wrongAnswer');
      }

      
    });
  questionIndex++;
  nextButton.classList.add('hideNextButton');  
  EnableOptionButtons();
  LoadQuestions();
  LoadAnswers();
  }
  else
  {
    nextButton.innerHTML='Next';
    const options = Array.from(optionbox.children);
    options.forEach((element, index) => {
      if (element.classList.contains("correctAnswer")) {
        element.classList.remove('correctAnswer');
      } else if (element.classList.contains("wrongAnswer")) {
        element.classList.remove('wrongAnswer');
      }

      
    });
    questionIndex=0;
    score=0;
    scoreText.innerHTML='';
    nextButton.classList.add('hideNextButton');  
    EnableOptionButtons();
    LoadQuestions();
    LoadAnswers();

     //scoreText.innerHTML=`Final Score :${(score/Data.length)*100 +"%"}`;
  }
  

 }
 LoadQuestions();
 LoadAnswers();
 nextButton.classList.add('hideNextButton'); 