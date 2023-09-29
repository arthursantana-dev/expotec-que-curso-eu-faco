const data = [
	{
		question: 'Gosto de Matemática',
		radioButtonType: 'muito/pouco',
		ADMPoints: 1,
		DSPoints: 2,
		MECAPoints: 3,
		EDFPoints: 1
	},
	{
		question: 'Lido bem com Pessoas',
		radioButtonType: 'sim/nao',
		ADMPoints: 3,
		DSPoints: 1,
		MECAPoints: 1,
		EDFPoints: 2
	},
	{
		question: 'Sou criativo',
		radioButtonType: 'sim/nao',
		ADMPoints: 3,
		DSPoints: 2,
		MECAPoints: 1,
		EDFPoints: 1
	},
	{
		question: 'Gosto de desenhar',
		radioButtonType: 'muito/pouco',
		ADMPoints: 1,
		DSPoints: 1,
		MECAPoints: 3,
		EDFPoints: 4
	},
	{
		question: 'Gosto de desenhar',
		radioButtonType: 'muito/pouco',
		ADMPoints: 1,
		DSPoints: 1,
		MECAPoints: 3,
		EDFPoints: 4
	},

]

const main = document.querySelector('main')
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
		<p class="question__index__value">Questão ${i + 1}</p>
	</div>
	<h1 class="question__question">${q.question}</h1>
	<div class="question__radio-wrapper">
		<div class="radio-wrapper">
			<div class="input-radio-wrapper input-radio-wrapper--max">
				<input class="radio-max radio-big radio-positive" type="radio" name="${i}" value="4" />
			</div>
			<p class="radio-wrapper-desc radio-wrapper-desc--max">${maxName}!</p>
		</div>
		<div class="input-radio-wrapper input-radio-wrapper--max-mid">
			<input class="radio-max-mid radio-medium radio-positive" type="radio" name="${i}" value="3" />
		</div>
		<div class="radio-wrapper">
			<div class="input-radio-wrapper">
				<input class="radio-mid" type="radio" name="${i}" value="2" />
			</div>
			<p class="radio-wrapper-desc radio-wrapper-desc--mid">meh...</p>
		</div>
		<div class="input-radio-wrapper input-radio-wrapper--min-mid">
			<input class="radio-min-mid radio-medium" type="radio" name="${i}" value="1" />
		</div>
		<div class="radio-wrapper">
			<div class="input-radio-wrapper input-radio-wrapper--min"><input class="radio-min radio-big"
					type="radio" name="${i}" value="0" />
			</div>
			<p class="radio-wrapper-desc radio-wrapper-desc--min">${minName}!</p>
		</div>
	</div>`
})

const radioButtons = document.querySelectorAll('input[type="radio"]')

document.querySelector(`div[data-key="${radioButtonToAnswerId}"]`).classList.remove('disabled')

function allowNextRadioButtonInnerFunction(r) {
	r.addEventListener('click', () => {
		if (radioButtonToAnswerId < data.length - 1) {
			radioButtonToAnswerId++
			document.querySelector(`div[data-key="${radioButtonToAnswerId}"]`).classList.remove('disabled')
			allowNextRadioButton()
		} else {
			document.querySelector('button.submit-button').classList.remove('disabled')
		}
	})
}

function allowNextRadioButton() {
	const currentGroup = document.querySelectorAll(`input[name="${radioButtonToAnswerId}"]`)

	Array.from(currentGroup).map(r => allowNextRadioButtonInnerFunction(r))
}

allowNextRadioButton()


function calculateCourse() {
	let ADMPoints = 0
	let DSPoints = 0
	let MECAPoints = 0
	let EDFPoints = 0

	const selectedRadioButtons = Array.from(radioButtons).filter(r => r.checked)
	selectedRadioButtons.map((r, i) => {
		ADMPoints += r.value * data[i].ADMPoints
		DSPoints += r.value * data[i].DSPoints
		MECAPoints += r.value * data[i].MECAPoints
		EDFPoints += r.value * data[i].EDFPoints
	})

	console.log(`ADM: ${ADMPoints}; DS: ${DSPoints}; MECA: ${MECAPoints}; EDF: ${EDFPoints}`);
	window.location.href = "./resultado-cursos/meca.html";

}