let hasPressedStop = new Boolean(false);

async function bubble() {
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        for(let j = 0; j < ele.length-i-1; j++){

            if(hasPressedStop == true){
                return;
            }

            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
            //    allows us to alter speed during the process as it's called after every iteration and speed is checked in sorting.js
                await delayTime(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = '#e43f5a';
            ele[j+1].style.background = '#e43f5a';
        }
        // sorted place colour depiction
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

// button activation
const bubSortbtn = document.querySelector(".bubbleSort");

// button clicked
bubSortbtn.addEventListener('click', async function(){

    hasPressedStop = false;

    // disable necessary buttons
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();

    // sorting function called
    await bubble();
    if(hasPressedStop==true){
        // if stopped in between only option is to generate new array
        disableSpeedSlider();
    } else {
        // enable on completion provided not stopped in between
        enableSortingBtn();
        enableSizeSlider();
    }

    // back to initial state
    enableNewArrayBtn();
    disableStopSortingBtn();
});