// 1. Select the existing <header> element
const header = document.querySelector('header');

// 2. Create the main container div
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

// 3. Create the left-side div
const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

// 4. Create the logo image element (this part was missing from the instructions)
const headerLogo = document.createElement('img');
headerLogo.src = '../logo.png';
headerLogo.alt = 'UnEarthed Logo'; // Added alt text for accessibility

// 5. Create the h1 title element
const headerTitle = document.createElement('h1');
headerTitle.textContent = 'UnEarthed';

// 6. Append the logo and title to the left-side div
headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

// 7. Create the right-side div
const headerRight = document.createElement('div');
headerRight.className = 'header-right';

// 8. Create the button element and add its event listener
// Note: The instruction's example 'createElement('Home')' was corrected to 'createElement('button')'
const headerButton = document.createElement('button');
headerButton.textContent = 'Home';
headerButton.addEventListener('click', function handleClick(event) {
  window.location.href = '/'; // Using .href is a common practice
});

// 9. Append the button to the right-side div
headerRight.appendChild(headerButton);

// 10. Append the left and right divs to the main container
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

// 11. Finally, append the main container to the <header> element in the document
header.appendChild(headerContainer);