//Question Constructor Function
function Question(clue1, clue2, clue3, clue4, answer) {
    this.clue1 = clue1;
    this.clue2 = clue2;
    this.clue3 = clue3;
    this.clue4 = clue4;
    this.answer = answer;
}

//Question Construction
const questionAlpha = new Question('Tag: The Power of Paint', 'Chex Quest', 'Portal', "Super 3D Noah's Ark", 'Games with Non Lethal Guns');
const questionBeta = new Question('Tag: The Power of Paint', 'Chex Quest', 'Portal', "Super 3D Noah's Ark", 'Games with Non Lethal Guns');
const questionGamma = new Question('Tag: The Power of Paint', 'Chex Quest', 'Portal', "Super 3D Noah's Ark", 'Games with Non Lethal Guns');
const questionDelta = new Question('Tag: The Power of Paint', 'Chex Quest', 'Portal', "Super 3D Noah's Ark", 'Games with Non Lethal Guns');
const questionEpsilon = new Question('Tag: The Power of Paint', 'Chex Quest', 'Portal', "Super 3D Noah's Ark", 'Games with Non Lethal Guns');
const questionZeta= new Question('Tag: The Power of Paint', 'Chex Quest', 'Portal', "Super 3D Noah's Ark", 'Games with Non Lethal Guns');

//Grabbing all Elements from DOM
const buttonsAll = document.querySelectorAll('button')
const btnAlpha = document.querySelector('#Alpha');
const btnBeta = document.querySelector('#Beta');
const btnGamma = document.querySelector('#Gamma');
const btnDelta = document.querySelector('#Delta');
const btnEpsilon = document.querySelector('#Epsilon');
const btnZeta = document.querySelector('#Zeta');
const clue1Text = document.querySelector('#Clue1');
const clue2Text = document.querySelector('#Clue2');
const clue3Text = document.querySelector('#Clue3');
const clue4Text = document.querySelector('#Clue4');
const answerText = document.querySelector('#Answer');

//Button Functionality Declaration
btnAlpha.addEventListener('click', () => {DisplayQuestion (questionAlpha, btnAlpha)});
btnBeta.addEventListener('click', () => {DisplayQuestion (questionBeta, btnBeta)});
btnGamma.addEventListener('click', () =>  {DisplayQuestion (questionGamma, btnGamma)});
btnDelta.addEventListener('click', () =>  {DisplayQuestion (questionDelta, btnDelta)});
btnEpsilon.addEventListener('click', () =>  {DisplayQuestion (questionEpsilon, btnEpsilon)});
btnZeta.addEventListener('click', () =>  {DisplayQuestion (questionZeta, btnZeta)});

//Button function
function DisplayQuestion(questionCurrent, buttonCurrent){
    for (let button of buttonsAll){
        button.style.display = 'none';
        }    
        buttonCurrent.style.display = 'inline';
    if (clue1Text.innerHTML == ''){
        clue1Text.innerHTML = questionCurrent.clue1;
        }
        else if (clue2Text.innerHTML == ''){
        clue2Text.innerHTML = questionCurrent.clue2;
        }
        else if (clue3Text.innerHTML == ''){
        clue3Text.innerHTML = questionCurrent.clue3;
        }
        else if (clue4Text.innerHTML == ''){
        clue4Text.innerHTML = questionCurrent.clue4;
        }
        else if (answerText.innerHTML == ''){
        answerText.innerHTML = questionCurrent.answer;
        }
        else{
        clue1Text.innerHTML = '';
        clue2Text.innerHTML = '';
        clue3Text.innerHTML = '';
        clue4Text.innerHTML = '';
        answerText.innerHTML = '';
        for (let button of buttonsAll){
            button.style.display = 'inline';
            }
        buttonCurrent.disabled = true;    
    }
}

