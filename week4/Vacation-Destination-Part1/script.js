(function(){

    "use strict";
const formDetails = document.querySelector('#destination_details');
formDetails.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event)
{
    event.preventDefault();
    const desName = event.target.elements['name'].value;
    const desLocation = event.target.elements['location'].value;
    const desPhoto = event.target.elements['photo'].value;
    const desDescription = event.target.elements['description'].value;

    for(let i=0; i<formDetails.length; i++)
    {
        formDetails.elements[i].value = "";
    }

    const desCard = createCardDestination(desName, desLocation, desPhoto, desDescription);

    const wishListContainer = document.querySelector('#destination_container');

    if(wishListContainer.children.length === 0)
    {
        document.querySelector('#title').innerHTML = 'My Wish List';
    }

    document.querySelector('#destination_container').appendChild(desCard);

    function createCardDestination(name, location, photoUrl, description)
    {
        const card = document.createElement('div');
        card.className = 'card';

        const image = document.createElement('img');
        image.setAttribute('alt', name);

        const constantPhotoUrl = "images/signpost.jpg";

        if(photoUrl.length == 0)
        {
            image.setAttribute('src', constantPhotoUrl);
        }
        else 
        {
            image.setAttribute('src', photoUrl);
        }
        card.appendChild(image);

        const cardBody = document.createElement('div');
        cardBody.className = "card-body";

        const cardTitle = document.createElement('h3');
        cardTitle.innerHTML = name;
        cardBody.appendChild(cardTitle);

        const cardSubtitle = document.createElement('h4');
        cardSubtitle.innerHTML = location;
        cardBody.appendChild(cardSubtitle);

        if(description.length !== 0)
        {
            var cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerHTML = description;
            cardBody.appendChild(cardText);
        }

        const cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.innerHTML = "Remove";

        cardDeleteBtn.addEventListener('click', removeDestination)

        cardBody.appendChild(cardDeleteBtn);

        card.appendChild(cardBody);

        return card;
    }

    function removeDestination(event)
    {
        const card = event.target.parentElement.parentElement;
        card.remove();
    }
}

})();