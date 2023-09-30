const urlParams = new URLSearchParams(window.location.search)

const ADM = urlParams.get('adm')
const DS = urlParams.get('ds')
const MECA = urlParams.get('meca')
const EDF = urlParams.get('edf')

const coursesDataWrapper = document.querySelector('section.courses-data')

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

coursesAffinity.sort((a,b) => b.affinity - a.affinity)

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