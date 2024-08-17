let nextBtn = document.querySelector('.next-btn')
let prevBtn = document.querySelector('.prev-btn')
let slides = document.querySelectorAll('.slider')
let slideCount = 0

function showSlide(i = 0){
    slides[i].classList.add('active')
}
function hideSlide() {
    slides.forEach((slide)=>{
        slide.classList.remove('active')
        slide.classList.add('none')
    })
    
}

nextBtn.addEventListener('click' , ()=>{
    if(slideCount > slides.length-2){
        slideCount = 0
    }
    else{
        slideCount++
    }
    hideSlide()
    showSlide(slideCount)
    console.log(slideCount);

})

prevBtn.addEventListener('click' , ()=>{
    if(slideCount <= 0 ){
        slideCount = slides.length-1
    }
    else{
        slideCount--
    }
    hideSlide()
    showSlide(slideCount)
    console.log(slideCount);
})
/**/

let tabLinks = document.querySelectorAll('.tab_link');
let tabContents = document.querySelectorAll('.tabImage');
let tabWords = document.querySelectorAll('.tabWords');


function toggleTabs(tabContents, tabLinks) {
    function hideTab() {
        tabWords.forEach((item) => {
            item.classList.remove('active');
        });
        tabContents.forEach((imgTabs) => {
            imgTabs.style.display = 'none';
        });
        tabLinks.forEach((tabLink)=>{
            tabLink.classList.remove('active')
        })
        
    }

    function tabsName() {
        tabWords.forEach((section_two) => {
            planetName.style.display = 'none';
        });
    }

    function showTab(i = 0) {
        tabContents[i].style.display = 'flex';
        tabLinks[i].classList.add('active');
        tabWords[i].classList.add('active');
        // console.log(tabWords[i]);
    }

    tabLinks.forEach((tablink, i) => {
        tablink.addEventListener('click', () => {
            hideTab();
            showTab(i);
        });
    });

    hideTab();
    showTab();
}
toggleTabs(tabContents, tabLinks);