window.addEventListener("DOMContentLoaded" , ()=>{

    const tabContent = document.querySelectorAll(".tabcontent");
    const tabheader__item = document.querySelectorAll(".tabheader__item");
    const tabheader__Parent = document.querySelector(".tabheader__items");
    const loader = document.querySelector(".loader");


    // loader section start

    setTimeout(() => {
        loader.style.opacity= '0'
        setTimeout(() => {
            loader.style.display= 'none'
        }, 1000);
    },2000)

    // loader section end


    // Category of Series start

    tabheader__Parent.addEventListener("click" , (e) => {
        const target = e.target;
        tabheader__item.forEach((item, index) => {
            if(target === item){
                ContentHide();
                ShowContent(index);
            }
        });
    });

    function ContentHide(){
        tabContent.forEach((item)=>{
            item.style.display = "none";
        });
        tabheader__item.forEach((item)=>{
            item.classList.remove("tabheader__item_active");
        });
        
        
    }
    ContentHide();

    function ShowContent(index = 0){
        tabContent[index].style.display = "block" 
        tabheader__item[index].classList.add("tabheader__item_active")
        tabContent[index].classList.add('fade')
    }
    ShowContent();

    // Category of Series end


    const offer__slider_prev = document.querySelector('.offer__slider-prev')
    const offer__slider_next = document.querySelector('.offer__slider-next')
    const current = document.querySelector('#current')
    const offer__slide = document.querySelectorAll('.offer__slide')


    let i = offer__slide.length-1

    offer__slider_prev.addEventListener('click', () =>{
        i--
        if(i<0){
            i=offer__slide.length-1
        }
        hideSlide()
        AddSlide(i)

    })


    offer__slider_next.addEventListener('click',()=>{
        i++
        if(i>offer__slide.length-1){
            i=0
        }
        hideSlide()
        AddSlide(i)
    })


    function hideSlide(){
        offer__slide.forEach((item)=>{
            item.style.display= 'none'
        })
    }
    hideSlide()

    function AddSlide(index){
        offer__slide[index].style.display= 'block'
        current.innerText= `0${index+1}`
    }
    AddSlide()


});