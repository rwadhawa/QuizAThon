let optionoption = ['A', 'B', 'C', 'D'];
let questions = ['', '', '', '', '', '', '', '', '', ''];
let answers = ['', '', '', '', '', '', '', '', '', ''];
let choice = -1;
let options = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
const params = new URLSearchParams (window.location.search);
var parametre = parseInt (params.get ('choice'));

switch (parametre) {
  case 0:
    setMathtest ();
    break;
  case 1:
    setEnglishtest ();
    break;
  case 2:
    setSciencetest ();
    break;
  case 3:
    setHistorytest ();
    break;
  default:
    console.log (typeof parametre);
}

function setMathtest () {
  questions = [
    'The derivative of 2x^2 - 5x + 1:',
    'The derivative of e^x is:',
    'The derivative of 2x^6-3x^3-7 is:',
    'The derivative of 7x^2-9x is:',
    'The derivative of x^3-2x^2-1 is:',
    'The derivative of 4x^5-2x^2-6 is:',
    'The derivative of 6x^7-9x^2+2:',
    'The derivative of 4x^2+5x+7 is:',
    'The derivative of 8x^2-6x+1 is:',
    'The derivative of 3x^4-7x^2+9 is:',
  ];
  answers = ['C', 'B', 'C', 'A', 'B', 'D', 'C', 'B', 'C', 'C'];
  options = ['4x - 10','2x - 5','4x - 5','4x - 5 + 1','xe^x','e^x','xe^(x-1)','e^(x-1)','2x^5 - 3x^6 - 1','2x^5 - 9x^2','12x^5 - 9x^2','12x^5 - 9x^2 - 1','14x - 9','7x - 18','14x^2 - 9x','7x - 9','x^2 - 4x','3x^2 - 4x','3x^2','x^2 - 4x - 1','4x^4 - 2x','20x^5 - 4x^2 - 6','4x^4 - 4x - 1','20x^4 - 4x','6x^6 - 9x','42x^6 - 18x + 2','42x^6 - 18x','6x^6 - 18x + 2','4x + 5','8x + 5','8x^2 + 5x + 7','4x + 1','8x - 6','16x - 6 + 1','16x - 6','8x - 6 + 1','12x^2 - 14x + 9','3x^3 - 7x','12x^3 - 14x','12x^3 - 7x',];
  document.getElementById ('logo').src =
    'https://www.transparentpng.com/download/math/jkUzKu-math-clipart-clipartix.png';
  document.getElementById ('subject').innerHTML = 'Differential Calculus';
  document.getElementById ('choice').innerHTML = 'MATH';
  setQuestions ();
}

function setEnglishtest () {
  questions = [
    'How did the suitors treat Odysseus?',
    'What is the knowledge of the highest good?',
    'What is/are (a) type(s) of good that Aristerole Identifies?',
    'Which ethical ideal corresponds to the Observance of Rites?',
    'What does charity and benevolence mean to Mencius?',
    'Descartes shows our aptness of set thought, despite change by?',
    'How does Antigone justify her actions?',
    'What was a Renaissance Humanist&#39;s end goal?',
    'Which age includes a lack of godly worship?',
    'How is Odysseus portrayed in his story?',
  ];
  answers = ['A', 'C', 'D', 'D', 'C', 'B', 'D', 'D', 'B', 'D'];
  options = ['They were cocky.','They were respectful.','They were ready to kill him.','They were neutral to him.','Amicable','Beneficial','Theoretical','Practical','Intention','Consequences','Act itself','All of the above','Zhi','Yi','Ren','Li','Prejudice','Hostility','Cruelty','Hatred','The Copper Example','The Wax Example','The Water Example','The Rubber Example','She says Creon is a bad king.','She wants to lead a rebellion.','She wants to escape the country.','She wants a ritual lauding deaths','Studying humanity&#39s nature.','Being humane to others.','Benevolence towards all.','Liberalism/Secularistic Beliefs.','Golden Age','Silver Age','Bronze Age','Iron Age','An honorable man.','A benevolent man.','A wealthy man.','A trickster.',];
  document.getElementById ('logo').src =
    'https://media.discordapp.net/attachments/895787690572795914/904814195219001364/bruh.png';
  document.getElementById ('subject').innerHTML = 'Philosophy';
  document.getElementById ('choice').innerHTML = 'HUMANITIES';
  setQuestions ();
}

function setSciencetest () {
  questions = [
    'What is the powerhouse of the cell?',
    'How much does the earth weigh?',
    'What does DNA stand for?',
    'How many bones are in the human body?',
    'What is the main gas that makes up the atmosphere?',
    'At what temperature are celsius and fahrenheit equal?',
    'When light bends as it enters a different medium, it&#39;s called?',
    'What pH is considered neutral?',
    'What element takes the form of a liquid at room temperature?',
    'What percentage of earth&#39;s surface is covered by water?',
  ];
  answers = ['C', 'B', 'A', 'B', 'B', 'D', 'C', 'B', 'A', 'D'];
  options = ['Nucleus','Cell Membrane','Mitochondria','Cytoplasm','100,000,000,000','6 × 10^24','10 lb','5 x 10^27','Deoxyribonucleic Acid','Dextro Nucleic Acid','Deoxynormic Acid','Danimals Acid','157','206','183','214','Carbon','Nitrogen','Oxygen','Phosphorus','100 degrees','0 degrees','273 degrees','-40 degrees','Reflection','Light bending','Refraction','Transfraction','5','7','10','3','Mercury','Helium','Manganese','Venus','57%','69%','77%','71%',];
  document.getElementById ('logo').src =
    'https://cdn.discordapp.com/attachments/895787690572795914/904820979744772138/pngwing.com.png';
  document.getElementById ('subject').innerHTML = 'General Science';
  document.getElementById ('choice').innerHTML = 'SCIENCE';
  setQuestions ();
}

function setHistorytest () {
  questions = [
    'Who was the first man on the moon?',
    'What significant document was signed in 1776',
    'What city was the Declaration of Independence signed?',
    'Who was the first president to live in the White House?',
    'Who invented the lightbulb?',
    'What amendment gave American women the right to vote?',
    'What country gifted the United States with the Statue of Liberty?',
    'Who was the first president to be impeached?',
    'How many US presidents have been assassinated?',
    'Who built the first car in America?',
  ];
  answers = ['C', 'B', 'D', 'A', 'A', 'D', 'D', 'C', 'B', 'A'];
  options = ['Elon Musk','Christopher Columbus','Neil Armstrong','William Clark','The US Constitution','The US Declaration of Independence','The Treaty of Paris','The Bill of Rights','New York City','Albany','Boston','Philadelphia','John Adams','Abraham Lincoln','George Washington','John Hansen','Thomas Edison','Benjamin Franklin','Nicholas Tesla','Elon Musk','18th','12th','7th','19th','Italy','Britain','Haiti','France','Donald Trump','Abraham Lincoln','Andrew Jackson','Richard Nixon','Three','Four','Two','One','Henry Ford','John Chevrolet','John Stewart','George Matthew Chrysler',];
  document.getElementById ('logo').src =
    'https://www.pinclipart.com/picdir/big/568-5682461_american-history-ii-history-book-transparent-background-clipart.png';
  document.getElementById ('subject').innerHTML = 'American History';
  document.getElementById ('choice').innerHTML = 'HISTORY';
  setQuestions ();
}

function setQuestions () {
  for (let i = 0; i < 10; i++) {
    var temp = 'ques' + (i + 1);
    document.getElementById (temp).innerHTML = questions[i] + '<br>';
    document.getElementById ('b' + (i + 1)).innerHTML = i + 1 + '.';
    let qs = '';
    for (let j = 0; j < 4; j++) {
      qs =
      `${qs}<input type='radio' name='${(i + 1)}' value='${optionoption[j].toLowerCase ()}' id='radio${optionoption[j]}q${(i + 1)}'><label for='radio${optionoption[j]}q${(i + 1)}'>${optionoption[j].toLowerCase ()}) ${options[4 * i + j]}</label><br>`
    }
    document.getElementById ('q' + (i + 1)).innerHTML = qs;
  }
}

document
  .getElementById ('form')
  .addEventListener ('submit', async function (event) {
    event.preventDefault ();
    const formDataEntries = Object.fromEntries (new FormData (this));
    score = 0;
    for (let i = 0; i < 10; i++) {
      if (formDataEntries[i + 1] == answers[i].toLowerCase ()) {
        score += 10;
        document.getElementById ('b' + (i + 1)).innerHTML = '&#9989;';
        document.getElementById ('a' + (i + 1)).innerHTML = 'Correct!' + '<br>';
        document.getElementById ('a' + (i + 1)).style.color = 'green';
      } else if (formDataEntries[i + 1] != answers[i].toLowerCase ()) {
        var x = formDataEntries[i + 1];
        document.getElementById ('b' + (i + 1)).innerHTML = '&#10060;';
        document.getElementById ('a' + (i + 1)).innerHTML =
          'Incorrect  <br>  The correct answer is ' + answers[i];
        document.getElementById ('a' + (i + 1)).style.color = 'red';
      }
    }
    switch (score) {
      case 100:
        document.getElementById ('score').innerHTML = 'A - ' + score + '%';
        document.getElementById ('score').style.color = 'green';
        break;
      case 90:
        document.getElementById ('score').innerHTML = 'A - ' + score + '%';
        document.getElementById ('score').style.color = 'green';
        break;
      case 80:
        document.getElementById ('score').innerHTML = 'B - ' + score + '%';
        document.getElementById ('score').style.color = 'yellow';
        break;
      case 70:
        document.getElementById ('score').innerHTML = 'C - ' + score + '%';
        document.getElementById ('score').style.color = 'yellow';
        break;
      case 60:
        document.getElementById ('score').innerHTML = 'D - ' + score + '%';
        document.getElementById ('score').style.color = 'orange';
        break;
      default:
        document.getElementById ('score').innerHTML = 'F - ' + score + '%';
        document.getElementById ('score').style.color = 'red';
    }
  });