const dealBtn = document.querySelector('#deal-btn')

dealBtn.addEventListener('click', function () {
	fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
		.then(response => response.json())
		.then(data => console.log(data))
})
