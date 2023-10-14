const urlParams = new URLSearchParams(window.location.search)

const ADM = urlParams.get('adm')
const DS = urlParams.get('ds')
const MECA = urlParams.get('meca')
const EDF = urlParams.get('edf')

const coursesDataWrapper = document.querySelector('section.courses-data')
const courseImageElement = document.querySelector('img.main__img__img')
const courseDescriptionElement = document.querySelector('p.course-description')

const coursesInfo = [
    {
        course: "Administração",
        content: `A Administração é uma área que exige habilidades diversas, como <strong>organização, tomada de decisões, habilidades interpessoais e visão estratégica</strong>. Sua capacidade de <strong>lidar com desafios, sua proatividade e sua habilidade para trabalhar bem em equipe</strong> certamente serão ativos valiosos ao longo do curso e em sua futura carreira na área.<br><br>Ao escolher Administração, você está se preparando para <strong>enfrentar os desafios dinâmicos do mundo dos negócios e contribuir para o sucesso de organizações</strong>. A Etec é um ambiente propício para o desenvolvimento de suas habilidades e conhecimentos, e estou confiante de que você aproveitará ao máximo essa oportunidade.`
    }, {
        course: "Desenvolvimento de Sistemas",
        content: `O Desenvolvimento de Sistemas é uma área fascinante e dinâmica, e estou certo de que suas habilidades e características pessoais se alinham perfeitamente com as demandas desse campo. A capacidade de <strong>resolver problemas, a criatividade na criação de soluções, a paciência para depurar códigos complexos e a habilidade de trabalhar em equipe</strong> são aspectos fundamentais para o sucesso nesse curso, e estou confiante de que você os possui.<br><br>Além disso, a <strong>dedicação e o comprometimento</strong> que você demonstrou ao realizar o teste são indicativos claros de que você está disposto a enfrentar desafios e a se aprimorar constantemente. O Desenvolvimento de Sistemas é uma área que exige aprendizado contínuo, e sua atitude positiva em relação aos desafios será uma grande vantagem ao longo de sua jornada acadêmica e profissional.`
    }, {
        course: "Edificações",
        content: `Sua escolha por Edificações revela não apenas um interesse em <strong>construção e design</strong>, mas também uma habilidade inata para compreender e trabalhar com estruturas. Este campo exige precisão, criatividade e uma mente analítica, e estou confiante de que você possui todas essas qualidades.<br><br>A área de Edificações é essencial para o desenvolvimento e aprimoramento das cidades, contribuindo para a construção de infraestruturas sólidas e ambientes funcionais. Ao escolher esse curso, você está se posicionando para desempenhar um <strong>papel crucial na sociedade</strong>, moldando o ambiente ao nosso redor.`
    }, {
        course: "Mecatrônica",
        content: `Sua afinidade com Mecatrônica destaca sua habilidade em lidar com desafios que exigem uma abordagem multidisciplinar. Este curso combina elementos da <strong>engenharia mecânica, eletrônica e de controle</strong>, e tenho certeza de que sua capacidade de pensar de forma holística será uma vantagem valiosa.<br><br>Além disso, Mecatrônica exige <strong>criatividade e inovação</strong>, e estou certo de que você trará ideias frescas para resolver problemas complexos. Sua dedicação aos estudos e o interesse demonstrado na interseção entre mecânica e eletrônica são qualidades que certamente o destacarão no curso.`
    }
]

const coursesAffinity = [
	{
		name: 'adm',
		fullName: 'Administração',
		affinity: ADM
	},
	{
		name: 'ds',
		fullName: 'Desenvolvimento de Sistemas',
		affinity: DS
	},
	{
		name: 'meca',
		fullName: 'Mecatrônica',
		affinity: MECA
	},
	{
		name: 'edf',
		fullName: 'Edificações',
		affinity: EDF
	}

]

coursesAffinity.sort((a,b) => {
	if (b.affinity - a.affinity != 0) return b.affinity - a.affinity

	return Math.random() - 0.5
})

const testResults = {
	idealCourse: coursesAffinity[0].name,
	adm: ADM,
	ds: DS,
	meca: MECA,
	edf: EDF
}

if (testResults.idealCourse == 'ds') document.querySelector('div.course-badge-wrapper').innerHTML = `<div class="icon-wrapper">
<img class="crown-icon" src="./assets/crown-solid.svg">
</div>
<h1 class="badge course-badge">O melhor curso!</h1>`

fetch('https://qcef-api.vercel.app/', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(testResults)
}).then(response => response.json()).then(data => console.log(data))

// fetch('https://localhost:8080/', {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 	}
// })

// fetch('https://localhost:8080/', {
// 	method: 'GET'
// })




const idealCourse = coursesAffinity[0].name
const idealFullCourse = coursesAffinity[0].fullName

courseImageElement.src = `./assets/${idealCourse}.png`
console.log(courseImageElement);
courseDescriptionElement.innerHTML = coursesInfo[coursesInfo.indexOf(idealFullCourse)]

coursesInfo.forEach(c => {if(c.course == idealFullCourse) courseDescriptionElement.innerHTML = c.content})



coursesAffinity.map(c => {
	coursesDataWrapper.innerHTML += `
	<div class="progress">
                <div class="progress-bar" style="width: ${c.affinity}%; background-color: var(--${c.name});" role="progressbar" aria-valuenow="${c.affinity}" aria-valuemin="0" aria-valuemax="100"></div>

            </div>
			<span class="course__info">
				<p>${c.fullName}</p><p class="course__affinity">${c.affinity}%</p>
			</span>
	`
})

coursesDataWrapper.innerHTML += `<hr><p class="courses-data__obsertation">
O percentual de afinidade pode somar para mais de 100% pois considera como total somente os atributos relacionados ao próprio curso.
</p>`