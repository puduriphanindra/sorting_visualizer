async function heapSort(ele){
    n=ele.length;
    console.log("In heapSort");
    for(i=n/2-1;i>=0;i--){
        await waitforme(delay);
        await heapify(ele,n,i);
    }
    for(i=n-1;i>0;i--){
        await waitforme(delay);
        swap(ele[0],ele[i]);
        ele[0].style.background='yellow';
        ele[i].style.background='yellow';
        await heapify(ele,i,0);
    }
    ele[0].style.background='green';
}

async function heapify(ele,n,i){
    console.log("In heapify");
    largest=i;
    l=2*i+1;
    r=2*i+2;
    /*ele[l].style.background="yellow";
    ele[r].style.background="yellow";
    ele[largest].style.background="yellow";*/
    if(l<n && parseInt(ele[l].style.height)>parseInt(ele[largest].style.height)){
        /*ele[l].style.background="blue";
        ele[largest].style.background="blue";*/
        largest=l;
    }
    if(r<n && parseInt(ele[r].style.height)>parseInt(ele[largest].style.height)){
        /*ele[r].style.background="blue";
        ele[largest].style.background="blue";*/
        largest=r;
    }
    if(largest!=i){
        swap(ele[i],ele[largest]);
        await heapify(ele,n,largest);
    }
}

const heapSortbtn = document.querySelector(".heapSort");
heapSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await heapSort(ele);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


