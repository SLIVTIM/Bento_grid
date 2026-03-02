const barsContainer = document.getElementById('purple-bars')

const monday = document.getElementById('monday')
const tuesday = document.getElementById('tuesday')
const wednesday = document.getElementById('wednesday')
const thursday = document.getElementById('thursday')
const friday = document.getElementById('friday')

function changeBars() {
    monday.addEventListener('click', () => {
        
        barsContainer.classList.add('monday')
        barsContainer.classList.remove('tuesday')
        barsContainer.classList.remove('wednesday')
        barsContainer.classList.remove('thursday')
        barsContainer.classList.remove('friday')
    })
    tuesday.addEventListener('click', () => {

        barsContainer.classList.remove('monday')
        barsContainer.classList.add('tuesday')
        barsContainer.classList.remove('wednesday')
        barsContainer.classList.remove('thursday')
        barsContainer.classList.remove('friday')
    })
    wednesday.addEventListener('click', () => {

        barsContainer.classList.remove('monday')
        barsContainer.classList.remove('tuesday')
        barsContainer.classList.add('wednesday')
        barsContainer.classList.remove('thursday')
        barsContainer.classList.remove('friday')
    })
    thursday.addEventListener('click', () => {

        barsContainer.classList.remove('monday')
        barsContainer.classList.remove('tuesday')
        barsContainer.classList.remove('wednesday')
        barsContainer.classList.add('thursday')
        barsContainer.classList.remove('friday')
    })
    friday.addEventListener('click', () => {

        barsContainer.classList.remove('monday')
        barsContainer.classList.remove('tuesday')
        barsContainer.classList.remove('wednesday')
        barsContainer.classList.remove('thursday')
        barsContainer.classList.add('friday')
    })

}

changeBars()