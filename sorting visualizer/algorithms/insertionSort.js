async function insertion(){

    // getting the generated array
    const ele = document.querySelectorAll(".bar");

    // as per insertion sort we assume the first element to be a sorted subarray 
    // and put the next element in position accordingly in this subarray
    ele[0].style.background = 'green';

    for(let i = 1; i < ele.length; i++){

        // repeatedly checking if the stop sorting has be activated
        if(hasPressedStop==true){
            return;
        }

        // done for comparing the current element with the sorted part of the array 
        let j = i - 1;
        
        // assigning the height of the current element
        let key = ele[i].style.height;

        
        ele[i].style.background = 'blue';

        await delayTime(delay);

        if(hasPressedStop==true){
            return;
        }

        // comparing the element to the elements in the sorted part till a smaller element is not found and keeping 
        // in that position and moving the greater elements by one to the right
        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){

            if(hasPressedStop==true){
                return;
            }
            ele[j].style.background = 'blue';

            ele[j + 1].style.height = ele[j].style.height;

            j--;

            await delayTime(delay);

            if(hasPressedStop==true){
                return;
            }
            // indication that after comparison has passed that point that certain part of the array is still in its sorted state
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        // assigning the current elements height at the right index in the sorted array
        ele[j + 1].style.height = key;
        ele[i].style.background = 'green';
    }
}

// first instance to be selected 
const inSortbtn = document.querySelector(".insertionSort");

inSortbtn.addEventListener('click', async function(){

    // making necessary modification for the button access
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();

    // sorting algorithm called
    await insertion();

    // if stopped in between only option remains is to generate new array
    // else back to normal state of buttons
    if(hasPressedStop==true){
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});