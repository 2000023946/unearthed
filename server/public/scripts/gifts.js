const renderGifts = (data) => {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = '' // clear before rendering

  if (data && data.length > 0) {
    console.log('has the data')
    data.map(gift => {
      const card = document.createElement('div')
      card.classList.add('card')

      const topContainer = document.createElement('div')
      topContainer.classList.add('top-container')
      topContainer.style.backgroundImage = `url(${gift.image})`

      const bottomContainer = document.createElement('div')
      bottomContainer.classList.add('bottom-container')

      const name = document.createElement('h3')
      name.textContent = gift.name
      bottomContainer.appendChild(name)

      const pricePoint = document.createElement('p')
      pricePoint.textContent = 'Price: ' + gift.pricePoint
      bottomContainer.appendChild(pricePoint)

      const audience = document.createElement('p')
      audience.textContent = 'Great For: ' + gift.audience
      bottomContainer.appendChild(audience)

      const link = document.createElement('a')
      link.textContent = 'Read More >'
      link.setAttribute('role', 'button')
      link.href = `/gifts/${gift.id}`
      bottomContainer.appendChild(link)

      card.appendChild(topContainer)
      card.appendChild(bottomContainer) 
      mainContent.appendChild(card)
    })
  } else {
    console.log('no data')
    const message = document.createElement('h2')
    message.textContent = 'No Gifts Available 😞'
    mainContent.appendChild(message)
  }
}

const fetchGifts = async () => {
  const response = await fetch('/gifts')
  console.log('rendering the home with all gifts')
  return await response.json()
}

const fetchGiftsBySearch = async (searchName) => {
  const response = await fetch(`/gifts/name/${searchName}`)
  console.log('rendering the home by name:', searchName)
  return await response.json()
}


// Event listeners
document.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchGifts()
  renderGifts(data);

  // If you have a search form with a submit button
  const searchBtn = document.getElementById('search-btn')
  console.log('button', searchBtn)
  if (searchBtn) {
    searchBtn.addEventListener('click', async (e) => {
      console.log('searched')
      e.preventDefault()
      const searchInput = document.getElementById('gift-search') // assuming you have an input field
      const searchName = searchInput.value.trim()
      if (searchName) {
        const data = await fetchGiftsBySearch(searchName)
        renderGifts(data)
      }
    })
  }
})


