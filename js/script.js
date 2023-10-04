class Question{
	constructor(question, radioButtonType, ADMPoints, DSPoints, MECAPoints, EDFPoints){
		this.question = question
		this.radioButtonType = radioButtonType
		this.ADMPoints = ADMPoints
		this.DSPoints = DSPoints
		this.MECAPoints = MECAPoints
		this.EDFPoints = EDFPoints
	}
}

const data = [
	new Question('Gosto de Matemática, em especial de Geometria e Álgebra', 'muito/pouco', 5, 5, 5, 4),
    new Question('Lido bem com Pessoas', 'muito/pouco', 5, 3, 3, 4),
    new Question('Curto robôs', 'muito/pouco', 3, 5, 5, 3),
    new Question('Me identifico com as Ciências Exatas', 'muito/pouco', 4, 5, 5, 4),
    new Question('Gostava de brinquedos de construção na infância, como Lego', 'muito/pouco', 3, 4, 3, 5),
    new Question('Tenho afinidade com as Ciências Humanas', 'sim/nao', 5, 3, 3, 5),
    new Question('Tenho senso de liderança', 'sim/nao', 5, 3, 3, 4),
    new Question('Prefiro trabalhar sozinho', 'sim/nao', 3, 5, 4, 3),
    new Question('Gosto de ler/escrever histórias e textos', 'sim/nao', 5, 5, 3, 3),
    new Question('Sou criativo(a)', 'muito/pouco', 5, 5, 3, 4),
    new Question('Sou organizado(a)', 'muito/pouco', 5, 5, 3, 3),
    new Question('Gosto de desenhar', 'muito/pouco', 3, 3, 4, 5),
]

const main = document.querySelector('main')
const submitButton = document.querySelector('button.submit-button')

let radioButtonToAnswerId = 0


data.map((q, i) => {
	let maxName = ""
	let minName = ""

	if (q.radioButtonType == 'sim/nao') {
		maxName = 'Sim'
		minName = 'Não'
	} else if (q.radioButtonType == 'muito/pouco') {
		maxName = 'Muito'
		minName = 'Pouco'
	}

	main.innerHTML += `<div class="question disabled" data-key=${i}>
	<div class="question__index">
		<p class="question__index__value">Questão <strong>${i + 1}</strong></p>
	</div>
	<h1 class="question__question">${q.question}</h1>
	<div class="question__radio-wrapper">
		<div class="radio-wrapper">
			<div class="input-radio-wrapper input-radio-wrapper--max">
				<input class="radio-max radio-big radio-positive" type="radio" name="${i}" value="5" />
			</div>
			<p class="radio-wrapper-desc radio-wrapper-desc--max">${maxName}!</p>
		</div>
		<div class="input-radio-wrapper input-radio-wrapper--max-mid">
			<input class="radio-max-mid radio-medium radio-positive" type="radio" name="${i}" value="4" />
		</div>
		<div class="radio-wrapper">
			<div class="input-radio-wrapper">
				<input class="radio-mid" type="radio" name="${i}" value="3" />
			</div>
			<p class="radio-wrapper-desc radio-wrapper-desc--mid">meh...</p>
		</div>
		<div class="input-radio-wrapper input-radio-wrapper--min-mid">
			<input class="radio-min-mid radio-medium" type="radio" name="${i}" value="2" />
		</div>
		<div class="radio-wrapper">
			<div class="input-radio-wrapper input-radio-wrapper--min"><input class="radio-min radio-big"
					type="radio" name="${i}" value="1" />
			</div>
			<p class="radio-wrapper-desc radio-wrapper-desc--min">${minName}!</p>
		</div>
	</div>`
})

const radioButtons = document.querySelectorAll('input[type="radio"]')

document.querySelector(`div[data-key="${radioButtonToAnswerId}"]`).classList.remove('disabled')

let pressedRadiosName = []

function allowNextRadioButtonInnerFunction(r) {
	r.addEventListener('click', () => {

		if (radioButtonToAnswerId < data.length - 1) {
			
			let groupWasPressed = pressedRadiosName.indexOf(r.name) != -1
			console.log(`Btn name ${r.name}: ${groupWasPressed}`)

			if(!groupWasPressed) {
				pressedRadiosName.push(r.name) 
				radioButtonToAnswerId++
				document.querySelector(`div[data-key="${radioButtonToAnswerId}"]`).classList.remove('disabled')
				allowNextRadioButton()
			}

		} else {
			document.querySelector('button.submit-button').classList.remove('disabled')
		}
	})

}

function allowNextRadioButton() {
	const currentGroup = document.querySelectorAll(`input[name="${radioButtonToAnswerId}"]`)

	Array.from(currentGroup).map(r => {
		allowNextRadioButtonInnerFunction(r)
	})
}

allowNextRadioButton()


function calculateCourse() {
	let ADMPoints = 0
	let DSPoints = 0
	let MECAPoints = 0
	let EDFPoints = 0

	let totalADM = 0
	let totalDS = 0
	let totalMECA = 0
	let totalEDF = 0

	const selectedRadioButtons = Array.from(radioButtons).filter(r => r.checked)
	selectedRadioButtons.map((r, i) => {
		ADMPoints += r.value * data[i].ADMPoints
		DSPoints += r.value * data[i].DSPoints
		MECAPoints += r.value * data[i].MECAPoints
		EDFPoints += r.value * data[i].EDFPoints

		totalADM += Math.pow(data[i].ADMPoints, 2)
		totalDS += Math.pow(data[i].DSPoints, 2)
		totalMECA += Math.pow(data[i].MECAPoints, 2)
		totalEDF += Math.pow(data[i].EDFPoints, 2)
	})

	totalADM *= 1.15
	totalDS *= 1.15
	totalMECA *= 1.15
	totalEDF *= 1.15


	const ADMPercentage = (parseFloat(ADMPoints/totalADM) * 100).toFixed(1)
	const DSPercentage = (parseFloat(DSPoints/totalDS) * 100).toFixed(1)
	const MECAPercentage = (parseFloat(MECAPoints/totalMECA) * 100).toFixed(1)
	const EDFPercentage = (parseFloat(EDFPoints/totalEDF) * 100).toFixed(1)


	submitButton.innerHTML = "<div class='loader'></div>"

	setTimeout(() => {
		window.location.href = `./result.html?adm=${ADMPercentage}&ds=${DSPercentage}&meca=${MECAPercentage}&edf=${EDFPercentage}`;
	}, 1500);
	
	

}