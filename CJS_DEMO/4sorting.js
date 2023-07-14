function insertionsort(arr){
    for(let i=0;i<arr.length;i++){
        let currElt=arr[i];
        let j =i-1;
        while(j>=0 && arr[j]>currElt){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=currElt;
    }
}


 function bubblesort(arr) {
    let n = arr.length;
    // this function applied adjacent comparisons and immediate swaps with adjacent element
    for(let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        // we just need n-1 iterations because after than we will be only left with smallest element
        for(let j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(isSwapped == false) break;
    }
}

 function selectionSort(arr) { // we assume array is integer array
    for(let i = 0; i < arr.length; i++) {
        // [i, n-1] -> unsorted region
        let minIndex = getMinIndex(arr, i);
        // swap the ith element with min index
        if(i != minIndex) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}





module.exports.insertionSort=insertionsort;
module.exports.bubbleSort=bubblesort;
module.exports.selectionsort=selectionSort;



