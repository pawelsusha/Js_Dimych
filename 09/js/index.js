    function alertFirstNameValues() {
        console.log(firstNameEL.value);
        console.log(firstNameEL.className);
    }
    function alertLastNameValues() {
        console.log(lastNameEL.value);
        console.log(lastNameEL.className);
    }
    
    var firstNameId = 'first-name';
    var firstNameEL = document.getElementById(firstNameId);
alertFirstNameValues();
    var lastNameId = 'last-name';
    var lastNameEL = document.getElementById(lastNameId);
alertLastNameValues();
    var addressNameId = 'address';
    var addressNameEL = document.getElementById(addressNameId);   
    console.log(addressNameEL.value);
    console.log(addressNameEL.className);
    var citiesId = 'cities';
    var citiesEL = document.getElementById(citiesId);    
    console.log(citiesEL.value);
    console.log(citiesEL.value);
    var hobbiesId = 'hobbies';
    var hobbiesEl = document.getElementById(hobbiesId); 
    console.log(hobbiesEl.value);
    console.log(hobbiesEl.className);
    var avatarWparreId = 'avatar-wrapper';
    var avatarWparreEl = document.getElementById(avatarWparreId); 
    console.log(avatarWparreEl.value);
    console.log(avatarWparreEl.className);
    var avatarId = 'avatar';
    var avatarEl = document.getElementById(avatarId); 
    console.log(avatarEl.value);
    console.log(avatarEl.className);


function alertvalue() {
    console.log('1');
    console.log('2'); 
    console.log('3');
} 

alertvalue();

    firstNameEL.value = 'Andrey';

window.alert(firstNameEL.value);
window.alert(lastNameEL.value);
window.alert(adressEl.value);


firstNameEL.className = 'first-name-input default-input default-input';
lastNameEL.className = 'last-name-input default-input error-input';


    //window.alert(avatarEl.alt);
 