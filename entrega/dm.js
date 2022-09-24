


const days = ['Lunes','Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado',
 'Domingo']

 const tittle = document.getElementById('title')
 const daysList = document.getElementById('daysList')
 const selectDays = document.getElementById('daysSelect')

 const fragment = document.createDocumentFragment()

 for (const day of days) {
    const itemlist = document.createElement('LI')
    itemlist.textContent = day
    fragment.appendChild(itemlist)

    
    
}

for (const day of days){
    const selectItem = document.createElement('option')
    selectItem.setAttribute('value', day.toLowerCase())
    selectItem.textContent= day
    fragment.appendChild(selectItem)
}

selectDays.appendChild(fragment)

 