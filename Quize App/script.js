const questions = [
    {
        que: 'What does the abbreviation HTML stand for',
        a: 'Hyper text markup language',
        b: 'High text markup language',
        c: 'Hyper text markdown language',
        d: 'None of these',
        correct: 'a',

    },
    {
        que: 'How many sizes of headers are available in HTML by default?',
        a: '1',
        b: '5',
        c: '3',
        d: '6',
        correct: 'd',
    },
    {
        que: 'What is the smallest header in HTML by default?',
        a: 'h1',
        b: 'h5',
        c: 'h10',
        d: 'h6',
        correct: 'd',
    },
    {
        que: 'How to create an ordered list in HTML?',
        a: '<ul>',
        b: '<ol>',
        c: '<a>',
        d: '<href>',
        correct: 'b',
    },
    {
        que: 'HTML files are saved by default with the extension?',
        a: '.html',
        b: '.ht',
        c: '.h',
        d: 'None of these',
        correct: 'a',
    }
]

let index = 0;
let right = 0,
    wrong = 0,
    total = questions.length;
const quesBox = document.getElementById('quesBox')
const allInputs = document.querySelectorAll(".options")
const loadQues = () => {
    if (index === total) {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index + 1}) ${data.que}`;
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}
const submitQuize = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQues();
}

const getAnswer = () => {
    let answer;
    allInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer
}
const reset = () => {
    allInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerText = ` Hii, you've scored ${right} / ${total} 
    `
}


loadQues();