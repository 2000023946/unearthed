const renderGift = async () => {
  console.log('rendering the gift')
  // Get the gift ID from the end of the URL
  const requestedID = parseInt(window.location.href.split('/').pop());
  console.log(requestedID)
  // Fetch all gift data
  const response = await fetch('/gifts');
  const data = await response.json();

  const giftContent = document.getElementById('gift-content');

  let gift;

  // Find the specific gift that matches the ID from the URL
  if (data) {
    gift = data.find(g => g.id === requestedID);
  }

  // If a gift with the matching ID was found, display its details
  if (gift) {
    document.getElementById('image').src = gift.image;
    document.getElementById('name').textContent = gift.name;
    
    // FIX #1: Changed gift.submittedBy to gift.submitted_by
    document.getElementById('submittedBy').textContent = 'Submitted by: ' + gift.submitted_by;
    
    // FIX #2: Added the missing line for the submission date
    document.getElementById('submittedOn').textContent = 'Submitted on: ' + gift.submitted_on;

    document.getElementById('pricePoint').textContent = 'Price: ' + gift.pricePoint;
    document.getElementById('audience').textContent = 'Great For: ' + gift.audience;
    document.getElementById('description').textContent = gift.description;
    document.title = `UnEarthed - ${gift.name}`;    
  } 
  // If no gift was found, display an error message
  else {
    const message = document.createElement('h2');
    message.textContent = 'No Gift Found 😞';
    giftContent.appendChild(message);
  }
};

// Run the function when the script loads
renderGift();