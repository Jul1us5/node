// ! clientWidth ir clientHeight

// Galimas plotas | width ir height
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

// console.log(mainElementWidth);
// console.log(mainElementHeight);


// ! Galimas plotas | width ir height ir plius scroll laukai

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// console.log(windowWidth);
// console.log(windowHeight);


// ! Dokumento width ir pilnas height ( su scrollu )

let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth,
);

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight,
);

// console.log(scrollWidth);
// console.log(scrollHeight);

// ! Gauti prasuktus pixelius | only read !

const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

// console.log(windowScrollTop);
// console.log(windowScrollLeft);

// ! scrollas ir click'as
// ! scrollBy(x,y) prascrollina puslapį nuo esamos vietos

function setScrollBy() {
    window.scrollBy(0, 100);
    const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
}

// document.querySelector('body').addEventListener('click', () => {
//     setScrollBy();
// });

// ! scrollas ir click'as
// ! scrollTo(pageX,pageY) prascrollina puslapį nuo 0 pozicijos

function setScrollTo() {
    window.scrollTo(0, 0);
    const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
}

// document.querySelector('body').addEventListener('click', () => {
//     setScrollTo();
// });

// ! + param.

function setScrollToOptions() {
    window.scrollTo({
        top: 100,
        left: 0,
        // smooth, instant,
        // arba auto; by default auto
        behavior: "smooth"
    });
}

// document.querySelector('body').addEventListener('click', () => {
//     setScrollToOptions();
// });

// ! scroll'as iki div || True arba false

function setScrollIntoView(param) {
    const lessonSelected = document.querySelector('.line');
    lessonSelected.scrollIntoView(param);
}

// document.querySelector('body').addEventListener('click', () => {
//     setScrollIntoView(true);
// });

function setScrollIntoViewOptions(param) {
    const lessonSelected = document.querySelector('.line');
    lessonSelected.scrollIntoView({
        block: "center", // start, center, end  arba nearest. Default: center
        inline: "center", // start, center, end  arba nearest. Default: center
        behavior: "smooth" // auto arba smooth. Default: auto 
    });
}

// document.querySelector('body').addEventListener('click', () => {
//     setScrollIntoViewOptions(true);
// });

// ! Kad sustabdyti scrolla | tokie scriptai turi but pajungtos tik apacioj

function setScroll() {

    document.body.classList.toggle('scroll-lock');
}

// document.querySelector('body').addEventListener('click', () => {
//     setScroll();
// });


// ! Objektas
// ! offsetWidth ir offsetHeight

const line = document.querySelector('.line');

const elemOffsetWidth = line.offsetWidth;
const elemOffsetHeight = line.offsetHeight;

console.log(elemOffsetWidth);
console.log(elemOffsetHeight);

// ! ND https://javascript.info/size-and-scroll