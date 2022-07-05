const inputs = document.querySelectorAll('form input');
const labels = document.querySelectorAll('form label');
const videoEle = document.querySelector('video');
const vidPlayIcon = document.querySelector('.layout img');
const vidlayout = document.querySelector('.layout');
const joinNowButton = document.querySelector('#join_now');
const closeModalIcon = document.querySelector('#close');
const registerButton = document.querySelector('#click_here_register');
const registrationModal = document.querySelector('#form_modal');

// Looping on the inputs [ add active class to the parent + translateY the label ].
inputs.forEach((ele)=>{ 
    ele.addEventListener('click',function(e){
        inputs.forEach((elem)=>{
            if(elem.value === '') {
                elem.labels[0].style.transform = 'translateY(90%)';
                elem.parentElement.classList.remove('active');
            } else {
                elem.labels[0].style.transform = 'translateY(0%)';
                elem.parentElement.classList.add('active');
            }
        })

        e.target.labels[0].style.transform = 'translateY(0%)';
        ele.parentElement.classList.add('active');
    });
});

// show modal when click on the join btn.
joinNowButton.addEventListener('click',function(){
    if(getComputedStyle(registrationModal).display === 'none'){
        registrationModal.style.display = 'flex';
    }
});

// close the modal when clicking on the close icon [X].
closeModalIcon.addEventListener('click',function(){
    if(getComputedStyle(registrationModal).display === 'flex'){
        registrationModal.style.display = 'none';
    }
});

// validation on inputs.
function validation(ele, id) {

    if (id === 'firstName') {
        if (ele.value !== '' || ele.value !== null || ele.value !== undefined) {
            if ( ele.value.length < 3 ) {
                ele.nextElementSibling.classList.remove('hide');
            } else {
                ele.nextElementSibling.classList.add('hide');
            }
        }
    } 
    else if (id === 'lastName') {
        if (ele.value !== '' || ele.value !== null || ele.value !== undefined) {
            if ( ele.value.length < 3 ) {
                ele.nextElementSibling.classList.remove('hide');
            } else {
                ele.nextElementSibling.classList.add('hide');
            }
        }
    }
    else if (id === 'email') {
        if (ele.value !== '' || ele.value !== null || ele.value !== undefined ) {
            if (!ele.value.includes('@')) {
                ele.nextElementSibling.classList.remove('hide');
            } else {
                ele.nextElementSibling.classList.add('hide');
            }
        }
    }
    else if (id === 'phone') {
        let pattern = /^[0-9]{11}$/ ;
        let regexCheck = pattern.test(ele.value);

        if (ele.value !== '' || ele.value !== null || ele.value !== undefined ) {
            if (regexCheck) {
                    ele.nextElementSibling.classList.add('hide');
                } else {
                    ele.nextElementSibling.classList.remove('hide');
            }
        }
    }

}

// when clicking on submit form btn.
registerButton.addEventListener('click',function(e){
    e.preventDefault();
    inputs.forEach((ele)=> {
        validation(ele, ele.id)
    });
});


// toggle video icon.
function togglePlayPause() {
    if(videoEle.paused) {
        vidlayout.classList.add('hide');
        videoEle.play();
    } else {
        vidlayout.classList.remove('hide');
        videoEle.pause();
    }
}

// when clicking on the icon to play the video.
vidPlayIcon.addEventListener('click',function(){
   togglePlayPause()
});

// when clicking on the video to pause it.
videoEle.addEventListener('click',function(){
   togglePlayPause()
});