let myQuestion = [
    {
        qustion: 'what year was the first model T Ford released',
        options: ['1908', '1999', '1907', '2001'],
        correctAns: '1908',
        selectedAns: ''
    },
    {
        qustion: 'which country produce most coffee in the world',
        options: ['American', 'Canada', 'Paris', 'Brazil'],
        correctAns: 'Brazil',
        selectedAns: ''
    },
    {
        qustion: 'which Animal is the largest land mammal',
        options: ['Elephant', 'African bush elephant', 'Boa', 'Snake'],
        correctAns: 'African bush elephant', 
        selectedAns: ''
    },
    {
        qustion: 'Who is the author of the Chronicles of Narnia',
        options: ['C.S Lewis', 'C.S john', 'C.S peter', 'S.S Lewis'],
        correctAns: 'C.S Lewis',
        selectedAns: ''
    },
        {
        qustion: 'Which city is the home to the Eiffel Tower',
        options: ['Osogbo', 'Paris', 'Berlin', 'New york'],
        correctAns: 'Paris',
        selectedAns: ''
    },
        {
        qustion: 'Which planent is closer to the Earth',
        options: ['Venus', 'Uranus', 'Mars', 'Mercury'],
        correctAns: 'Venus',
        selectedAns: ''
    },
        {
        qustion: 'What is the National Sport of India',
        options: ['Basket ball', 'Football', 'Table tennis', 'Cricket'],
        correctAns: 'Cricket',
        selectedAns: ''
    },
        {
        qustion: 'What is hardest substance in the World',
        options: ['Gold', 'Heliem', 'Diamond', 'stone'],
        correctAns: 'Diamond',
        selectedAns: ''
    },
    {
        qustion: 'Which country is mount everest located',
        options: ['Africa', 'Nepal', 'Hedwig', 'mount'],
        correctAns: 'Nepal',
        selectedAns: ''
    },
    {
        qustion: 'Who painted the Mona Lisa',
        options: ['Leonardo da Vinci', 'Herbelt', 'st. peter', 'john da lien'],
        correctAns: 'Leonardo da Vinci',
        selectedAns: ''
    },
    {
        qustion: 'What is the capital of Italy',
        options: ['Rome', 'Germeny', 'Ghana', 'Roman'],
        correctAns: 'Rome',
        selectedAns: ''
    },
    {
        qustion: 'Which Country is Grand Canyon located',
        options: ['Italy', 'New york', 'United States', 'Niger'],
        correctAns: 'United States',
        selectedAns: ''
    },
    {
        qustion: 'Which planent is know as the Ringed Planent',
        options: ['Neptune', 'saturn', 'Pluto', 'Earth'],
        correctAns: 'saturn',
        selectedAns: ''
    },
    {
        qustion: 'In which country was Mozart born?',
        options: ['Canada', 'London', 'Austria', 'Berlin'],
        correctAns: 'Austria',
        selectedAns: ''
    },
    {
        qustion: 'What country id the Birth  place of the Pizza',
        options: ['italy', 'American', 'Brazil', 'London'],
        correctAns: 'italy',
        selectedAns: ''
    },
    {
        qustion: 'Which country is the home to the Great Barrier',
        options: ['Zinbambua', 'Australia', 'Egypt', 'Cairo'],
        correctAns: 'Australia',
        selectedAns: ''
    },
    {
        qustion: 'which country is the home to the Dead sea',
        options: ['Main land', 'Nepal', 'Brazil', 'Isreal'],
        correctAns: 'isreal',
        selectedAns: ''
    },
    {
        qustion: 'Which US State is knoe as the sunshine',
        options: ['Capital city', 'Florida', 'Paris', 'New York'],
        correctAns: 'Florida',
        selectedAns: ''
    },
    {
        qustion: 'which country is know as the "land of the Midnight Sun"',
        options: ['North America', 'Toroto', 'Norway', 'France'],
        correctAns: 'Norway',
        selectedAns: ''
    },
    {
        qustion: 'What is a Verb',
        options: ['An action Word', 'acting word', 'common Word', 'Conjunction'],
        correctAns: 'An action word',
        selectedAns: ''
    },
]
let index = 0;
let issubmit = true;
let tim = 60;
function timeReader() {
   let readtime =  setInterval(() => {
        tim--
        // console.log(tim);
        counter.innerHTML= tim
        if (tim == 0) {
        clearInterval(readtime)
        handleResult()
        questionpage.style.display = 'none'
    }
    }, 2000);
    
}


function disPlayQuiz(){
        ques.innerHTML=''
        count.innerHTML=''
        let data = myQuestion[index]
        ques.innerHTML= `<h3>${data.qustion}</h3>
        `
        count.innerHTML = index + 1
        list1.innerHTML = ''
        data.options.forEach((el)=>{
            list1.innerHTML +=`
            <li><input type="radio" ${data.selectedAns === el ? 'checked' : ''} name="name" onchange='handlechange("${el}")'><span>${el}</span></li>
            `
        })

        // console.log(index++);
}
function startG(){
    questionpage.style.display =  'block'
    startQuiz.style.display = 'none'
    disPlayQuiz()
    timeReader()
    if (tim == 0) {
        handleResult()
    }
}
function controls(params) {
    
    if (params == 'next1' && myQuestion[index + 1]) {
        index++
        // console.log('jbfkv');
    }
    if (params == 'Previous' && myQuestion[index - 1]) {
        index--
    }
    disPlayQuiz()
}
function handlechange(params) {
    myQuestion[index].selectedAns = params
}

function handleResult() {
    const result = myQuestion.filter((el)=> el.selectedAns === el.correctAns)
    show1.innerHTML = ` ${result.length}/${myQuestion.length}`
    printResult.style.display = 'block'
    
}

function presubmit() {
    const unAnswersQuestion = myQuestion.filter(el=> el.selectedAns == '')
    if (unAnswersQuestion.length > 0) {
        modal.style.display = 'block'
        issubmit=false
    }
    if (issubmit) {
        handleResult()
        questionpage.style.display = 'none'
    }

}

function sure(params) {
    if (params == 'yes'){
        issubmit = true
        show1.style.display = 'block'
        questionpage.style.display = 'none'
        handleResult()
        modal.style.display = 'none'
    }else{
        show1.style.display = 'none'

    }
    if (params == 'no') {
        modal.style.display= 'none'
    }
}

// console.log(myQuestion.length);