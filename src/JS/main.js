import data from '@/data'

// import data from './data';
import '../CSS/main.scss';
import json from '../JSON/json';
import svgIcons from './data';
import './../IMG/gallery/a1.jpeg';
import './../IMG/gallery/a2.jpeg';
import './../IMG/gallery/a3.jpeg';

function getArrowImg() {

    let arrow = document.querySelectorAll('.arrow');
    for (let i = 0; i < arrow.length; i++) {

        arrow[i].innerHTML = svgIcons[i];
    }
}

getArrowImg();

function showGallery() {

    let HTML = '';
    let index = 0;
    let arrow = document.querySelectorAll('.arrow');
    let galleryActions = document.querySelector('.actions');
    let galleryDots = document.querySelectorAll('.actions span');


    const galleryImg = ['a1.jpeg', 'a2.jpeg', 'a3.jpeg'];
    let where = document.querySelector('.img__wrap');
    //  ........
    HTML = `<img src="./IMG/${galleryImg[index]}" alt="img">`;
    galleryDots[index].style.backgroundColor = 'red';
    where.innerHTML = HTML;


    for (let i = 0; i < arrow.length; i++) {




        arrow[i].addEventListener('click', () => {


            for (let x = 0; x < 2; x++) {
                galleryDots[x].style.backgroundColor = 'green';
            }

            if (arrow[i].className == 'arrow left') {
                index -= 1;
            } else {
                index += 1;
            }

            if (index > 2) {
                galleryDots[2].style.backgroundColor = 'green';
                index = 0


            }
            if (index < 0) {
                index = 2;
            }
            HTML = `<img src="./IMG/${galleryImg[index]}" alt="img">`;

            where.innerHTML = HTML;
            galleryDots[index].style.backgroundColor = 'red';


            // console.log(galleryDots[0].style.backgroundColor = 'red');
            // for (let x = 0; x < galleryImg.length; x++) {
            //     galleryActions.innerHTML += `<span></span>`
            // }
            // galleryDots[index].classList.add('on');




        });

    }





}
showGallery();