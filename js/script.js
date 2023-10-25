class Question {
	constructor(question, radioButtonType, ADMPoints, DSPoints, MECAPoints, EDFPoints) {
		this.question = question
		this.radioButtonType = radioButtonType
		this.ADMPoints = ADMPoints
		this.DSPoints = DSPoints
		this.MECAPoints = MECAPoints
		this.EDFPoints = EDFPoints
	}
}

const fixedData = [
	new Question('Gosto de Matemática, em especial de Geometria e Álgebra', 'muito/pouco', 5, 5, 5, 4),
	new Question('Lido bem com Pessoas', 'muito/pouco', 5, 3, 3, 4),
	new Question('Curto robôs', 'muito/pouco', 3, 5, 5, 3),
	new Question('Me identifico com as Ciências Exatas', 'muito/pouco', 4, 5, 5, 4),
	new Question('Me dou bem com problemas lógicos (cubo-mágico, xadrez, damas...)', 'muito/pouco', 4, 5, 3, 3),
	new Question('Gostava de brinquedos de construção na infância, como Lego', 'muito/pouco', 3, 4, 3, 5),
	new Question('Tenho afinidade com as Ciências Humanas', 'sim/nao', 5, 3, 3, 5),
	new Question('Gosto de videogames', 'muito/pouco', 2, 5, 4, 3),
	new Question('Tenho senso de liderança', 'sim/nao', 5, 3, 3, 4),
	new Question('Prefiro trabalhar sozinho', 'sim/nao', 3, 5, 4, 3),
	new Question('Gosto de ler/escrever histórias e textos', 'sim/nao', 5, 5, 3, 3),
	new Question('Sou criativo(a)', 'muito/pouco', 5, 5, 3, 4),
	new Question('Sou organizado(a)', 'muito/pouco', 5, 5, 3, 3),
	new Question('Sou fanático por tecnologia', 'muito/pouco', 3, 5, 4, 3),
	new Question('Gosto de desenhar', 'muito/pouco', 3, 3, 4, 5),
	new Question('Tenho interesse em automação residencial', 'sim/nao', 3, 4, 5, 3),
	new Question('Gosto de trabalhar com circuitos eletrônicos', 'muito/pouco', 3, 4, 5, 3),
	new Question('Tenho afinidade com processos industriais', 'muito/pouco', 4, 3, 5, 3),
	new Question('Sou fascinado por arquitetura e construção civil', 'sim/nao', 4, 3, 3, 5),
	new Question('Gosto de cuidar de detalhes em projetos', 'muito/pouco', 4, 4, 3, 4),
	new Question('Prefiro trabalhar em um ambiente de escritório', 'sim/nao', 5, 5, 3, 3),
	new Question('Tenho interesse em inteligência artificial', 'sim/nao', 3, 5, 4, 3),
	new Question('Gosto de participar de competições acadêmicas', 'muito/pouco', 4, 5, 4, 3),
	new Question('Tenho aptidão para lidar com ferramentas de design gráfico', 'muito/pouco', 3, 5, 4, 4),
	new Question('Tenho facilidade em explicar conceitos complexos', 'muito/pouco', 5, 4, 3, 3),
	new Question('Gosto de trabalhar ao ar livre', 'sim/nao', 3, 3, 3, 5),
	new Question('Tenho habilidades artísticas', 'muito/pouco', 3, 3, 4, 5),
	new Question('Gosto de estudar processos de produção', 'muito/pouco', 4, 3, 5, 3),
	new Question('Tenho facilidade em liderar equipes', 'sim/nao', 5, 4, 3, 4),
	new Question('Gosto de aprender sobre novas tecnologias', 'muito/pouco', 4, 5, 4, 3),
	new Question('Tenho interesse em empreendedorismo', 'sim/nao', 5, 4, 3, 4),

]

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}


const data = shuffleArray(fixedData)

// setInterval(fetch('https://qcef-api-arthur-santanas-projects.vercel.app', {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json'
// 	}
// }).then(response => response.json()).then(data => console.log(data)), 10000)


const main = document.querySelector('main')
const submitButton = document.querySelector('#submit-button')

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
				<input class="radio-max-mid" type="radio" name="${i}" value="3" />
			</div>
			<p class="radio-wrapper-desc radio-wrapper-desc--mid">meh...</p>
		</div>
		<div class="input-radio-wrapper input-radio-wrapper--min-mid">
			<input class="radio-mid radio-medium" type="radio" name="${i}" value="2" />
		</div>
		<div class="radio-wrapper">
			<div class="input-radio-wrapper input-radio-wrapper--min">
			<input class="radio-mid radio"
					type="radio" name="${i}" value="1" />
			</div>
			<p class="radio-wrapper-desc radio-wrapper-desc--min">${minName}!</p>
		</div>
	</div>`
})

const radioButtons = document.querySelectorAll('input[type="radio"]')

document.querySelector(`div[data-key="${radioButtonToAnswerId}"]`).classList.remove('disabled')

let pressedRadiosName = []

let answeredQuestions = 0

const progressBarValueElement = document.querySelector('.nav-progress__value')
progressBarValueElement.innerHTML = `${answeredQuestions}/${data.length}`

function allowNextRadioButtonInnerFunction(r) {
	r.addEventListener('click', () => {

		if (radioButtonToAnswerId < data.length - 1) {

			let groupWasPressed = pressedRadiosName.indexOf(r.name) != -1

			if (!groupWasPressed) {
				pressedRadiosName.push(r.name)
				radioButtonToAnswerId++
				document.querySelector(`div[data-key="${radioButtonToAnswerId}"]`).classList.remove('disabled')
				allowNextRadioButton()
				answeredQuestions++
				progressBarValueElement.innerHTML = `${answeredQuestions}/${data.length}`
				document.querySelector('.nav-progress-bar').style.width = `${100 - (answeredQuestions / data.length) * 100}%`
			}

		} else {
			submitButton.classList.remove('disabled')
			answeredQuestions++
			progressBarValueElement.innerHTML = `${answeredQuestions}/${data.length}`
			document.querySelector('.nav-progress-bar').style.width = `${100 - (answeredQuestions / data.length) * 100}%`
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

		// totalADM += Math.pow(data[i].ADMPoints, 2)
		// totalDS += Math.pow(data[i].DSPoints, 2)
		// totalMECA += Math.pow(data[i].MECAPoints, 2)
		// totalEDF += Math.pow(data[i].EDFPoints, 2)

		totalADM += 5 * data[i].ADMPoints
		totalDS += 5 * data[i].DSPoints
		totalMECA += 5 * data[i].MECAPoints
		totalEDF += 5 * data[i].EDFPoints
	})

	totalADM *= 1.02
	totalDS *= 1.01
	totalMECA *= 1.05
	totalEDF *= 1.02

	const ADMPercentage = (parseFloat(ADMPoints / totalADM) * 100).toFixed(1)
	const DSPercentage = (parseFloat(DSPoints / totalDS) * 100).toFixed(1)
	const MECAPercentage = (parseFloat(MECAPoints / totalMECA) * 100).toFixed(1)
	const EDFPercentage = (parseFloat(EDFPoints / totalEDF) * 100).toFixed(1)


	document.querySelector('div#div-submit').innerHTML = "<div class='loader'></div>"

	//result

	// const urlParams = new URLSearchParams(window.location.search)

	// const ADM = urlParams.get('adm')
	// const DS = urlParams.get('ds')
	// const MECA = urlParams.get('meca')
	// const EDF = urlParams.get('edf')

	// const coursesDataWrapper = document.querySelector('section.courses-data')
	// const courseImageElement = document.querySelector('img.main__img__img')
	// const courseDescriptionElement = document.querySelector('p.course-description')

	// const coursesInfo = [
	// 	{
	// 		course: "Administração",
	// 		content: `A Administração é uma área que exige habilidades diversas, como <strong>organização, tomada de decisões, habilidades interpessoais e visão estratégica</strong>. Sua capacidade de <strong>lidar com desafios, sua proatividade e sua habilidade para trabalhar bem em equipe</strong> certamente serão ativos valiosos ao longo do curso e em sua futura carreira na área.<br><br>Ao escolher Administração, você está se preparando para <strong>enfrentar os desafios dinâmicos do mundo dos negócios e contribuir para o sucesso de organizações</strong>. A Etec é um ambiente propício para o desenvolvimento de suas habilidades e conhecimentos, e estou confiante de que você aproveitará ao máximo essa oportunidade.`
	// 	}, {
	// 		course: "Desenvolvimento de Sistemas",
	// 		content: `O Desenvolvimento de Sistemas é uma área fascinante e dinâmica, e estou certo de que suas habilidades e características pessoais se alinham perfeitamente com as demandas desse campo. A capacidade de <strong>resolver problemas, a criatividade na criação de soluções, a paciência para depurar códigos complexos e a habilidade de trabalhar em equipe</strong> são aspectos fundamentais para o sucesso nesse curso, e estou confiante de que você os possui.<br><br>Além disso, a <strong>dedicação e o comprometimento</strong> que você demonstrou ao realizar o teste são indicativos claros de que você está disposto a enfrentar desafios e a se aprimorar constantemente. O Desenvolvimento de Sistemas é uma área que exige aprendizado contínuo, e sua atitude positiva em relação aos desafios será uma grande vantagem ao longo de sua jornada acadêmica e profissional.`
	// 	}, {
	// 		course: "Edificações",
	// 		content: `Sua escolha por Edificações revela não apenas um interesse em <strong>construção e design</strong>, mas também uma habilidade inata para compreender e trabalhar com estruturas. Este campo exige precisão, criatividade e uma mente analítica, e estou confiante de que você possui todas essas qualidades.<br><br>A área de Edificações é essencial para o desenvolvimento e aprimoramento das cidades, contribuindo para a construção de infraestruturas sólidas e ambientes funcionais. Ao escolher esse curso, você está se posicionando para desempenhar um <strong>papel crucial na sociedade</strong>, moldando o ambiente ao nosso redor.`
	// 	}, {
	// 		course: "Mecatrônica",
	// 		content: `Sua afinidade com Mecatrônica destaca sua habilidade em lidar com desafios que exigem uma abordagem multidisciplinar. Este curso combina elementos da <strong>engenharia mecânica, eletrônica e de controle</strong>, e tenho certeza de que sua capacidade de pensar de forma holística será uma vantagem valiosa.<br><br>Além disso, Mecatrônica exige <strong>criatividade e inovação</strong>, e estou certo de que você trará ideias frescas para resolver problemas complexos. Sua dedicação aos estudos e o interesse demonstrado na interseção entre mecânica e eletrônica são qualidades que certamente o destacarão no curso.`
	// 	}
	// ]

	const coursesAffinity = [
		{
			name: 'adm',
			fullName: 'Administração',
			affinity: parseFloat(ADMPercentage)
		},
		{
			name: 'ds',
			fullName: 'Desenvolvimento de Sistemas',
			affinity: parseFloat(DSPercentage)
		},
		{
			name: 'meca',
			fullName: 'Mecatrônica',
			affinity: parseFloat(MECAPercentage)
		},
		{
			name: 'edf',
			fullName: 'Edificações',
			affinity: parseFloat(EDFPercentage)
		}

	]

	coursesAffinity.sort((a, b) => {
		if (b.affinity - a.affinity != 0) return b.affinity - a.affinity

		return Math.random() - 0.5
	})

	function formatarData(data) {
		const ano = data.getFullYear();
		const mes = padLeft(data.getMonth() + 1, 2);
		const dia = padLeft(data.getDate(), 2);
		const horas = padLeft(data.getHours(), 2);
		const minutos = padLeft(data.getMinutes(), 2);
		const segundos = padLeft(data.getSeconds(), 2);

		return `${ano}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
	}

	function padLeft(valor, largura, caractere = '0') {
		return String(valor).padStart(largura, caractere);
	}

	const dataAtual = new Date();

	const dataFormatada = formatarData(dataAtual);

	const testResults = {
		idealCourse: coursesAffinity[0].name,
		idealCourseFullName: coursesAffinity[0].fullName,
		adm: parseFloat(ADMPercentage),
		ds: parseFloat(DSPercentage),
		meca:  parseFloat(MECAPercentage),
		edf: parseFloat(EDFPercentage),
		dateTime: dataFormatada
	}

	// const testResults = {
	// 	idealCourse: 'ds',
	// 	adm: 4,
	// 	ds: 4,
	// 	meca:  4,
	// 	edf: 4,
	// 	dateTime: '2023'
	// }

	localStorage.setItem('testInfo', JSON.stringify(testResults))

// 	if (testResults.idealCourse == 'ds') document.querySelector('div.course-badge-wrapper').innerHTML = `<div class="icon-wrapper">
// <img class="crown-icon" src="./assets/crown-solid.svg">
// </div>
// <h1 class="badge course-badge">O melhor curso!</h1>`

	fetch('https://qcef-api-arthur-santanas-projects.vercel.app', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(response => response.json()).then(data => console.log(`Aquecimento da API: ${data}`))

	// setTimeout(() => {
		
	// }, 3000);

	//end result

	setTimeout(() => {
		fetch('https://qcef-api-arthur-santanas-projects.vercel.app', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(testResults)
		}).then(response => response.json()).then(data => console.log(data))
	}, 3000);

	setTimeout(() => {
		window.location.href = `./result.html?ideal-course=${coursesAffinity[0].name}`
	}, 3200);
	

}