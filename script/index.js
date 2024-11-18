//============ header ===================

const header = document.createElement('header')
const header_top_block = document.createElement('div')
header_top_block.classList.add('header_top_block')
const logo = document.createElement('img')
logo.src = './image/somelogo.png'
const h1 = document.createElement('h1')
h1.textContent = 'SLOGAN SLOGAN  SLOGAN'

const menu = document.createElement('nav')
const menu__item = document.createElement('ul')
menu__item.classList.add('menu')
const navArr = ['Главная', 'О приложении', 'О проекте', 'Скачать' , 'Контакты']
navArr.forEach (el => {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.className = 'menu__item'
    link.textContent = el
    li.append(link)
    menu__item.append(li)
})
// ======================

// =============main===========



const main = document.createElement('main')
const sectionOne = document.createElement('section')
sectionOne.classList.add('question')



for (let i = 0; i < 3; i++) {
    const question_card = document.createElement('div');
    question_card.classList.add('question_card');
  
    const img = document.createElement('img');
    img.src = './image/3pic.png';
    img.alt = 'question';
  
    const p = document.createElement('p');
    p.textContent = 'Часто ли Вы опаздываете на работу (учёбу)?';
  

    question_card.append(img, p);

    // Добавляем карточку в секцию
    sectionOne.appendChild(question_card);
}


const sectionTwo = document.createElement('section')
sectionTwo.classList.add('about_app')

const h2 = document.createElement('h2')
h2.textContent = ' О приложении'
h2.classList.add('love_app')

const cart1 = document.createElement('div')
cart1.classList.add('cart')

const img2 = document.createElement('img')
img2.classList.add('mainplay')
img2.src = './image/full2.png'

const img3 = document.createElement('img')
img3.classList.add('play')  
img3.src = './image/play-button.png'

sectionTwo.append(h2,cart1)
cart1.append(img2,img3)




const sectionThree = document.createElement('section')
sectionThree.classList.add('photo12345')
const photo5x = document.createElement('div')
photo5x.classList.add('photo5x')


for (let i = 0; i < 5; i++) {

const img4 = document.createElement('img')
img4.src = './image/question.png'


sectionThree.appendChild(photo5x)

photo5x.append(img4)

}


const sectionFour = document.createElement('section')
const h3 = document.createElement('h3');
h3.classList.add('project'); // Добавляем класс "project"
h3.textContent = 'О проекте'; // Добавляем текст "О проекте"

const text_project = document.createElement('div')
text_project.classList.add('text_project')

const text_in_project = document.createElement('p')
text_in_project.classList.add('text_in_project')
text_in_project.textContent = 'Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель'

text_project.append(text_in_project)
sectionFour.append(h3,text_project)




const sectionFive = document.createElement('section')
sectionFive.classList.add('dowload')

const h4 = document.createElement('h4')
h4.textContent = 'Скачать'

const images = document.createElement('div')
images.classList.add('images')

const img11 = document.createElement('img')
img11.src ='./image/android.png'

const img12 = document.createElement('img')
img12.src='./image/icon.png'

sectionFive.append(h4,images)

images.append(img11, img12)

//  =============== footer =============

const footer = document.createElement('footer')

const h22 = document.createElement('h2')
h22.classList.add('logo_text')
h22.textContent = 'SOME'

const social_medias = document.createElement('div')
social_medias.classList.add('social_medias')

const img8 = document.createElement('img')
img8.src = './image/somepic.png'

const foot = document.createElement('div')
foot.classList.add('block_1')


const footer_nav = document.createElement('div')
footer_nav.classList.add('footer_nav')
footer_nav.style.display = 'flex'

const block_1 = document.createElement('div')
block_1.classList.add('block_1')

const contact = document.createElement('h4')
contact.textContent = 'Контакты'

const parag1 = document.createElement('p')
parag1.textContent = 'Tel.: +996 (996) 508680534 +Ext'

const parag2 = document.createElement('p')
parag2.textContent = 'Fax: +996 508680534'

const block_2 = document.createElement('div')
block_2.classList.add('block_2')

const h44 = document.createElement('h4')
h44.textContent = 'Адреса'

const adress1 = document.createElement('p')
adress1.textContent = 'American University of Central Asia'

const adress2 = document.createElement('p')
adress2.textContent = '7/6 Aaly Tokombaev Stree'

const adress3 = document.createElement('p')
adress3.textContent = 'Bishkek, Kyrgyz Republic 720060'

const block_3 = document.createElement('div')
block_2.classList.add('block_3')

const help = document.createElement('h4')
help.textContent = 'Помощь'

const help2 = document.createElement('a');  // Создаем ссылку и сохраняем в переменной help2
    help2.href = '#';  // Устанавливаем атрибут href
    help2.textContent = 'Помощь';  // Устанавливаем текст

    const help3 = document.createElement('a');  // Создаем ссылку и сохраняем в переменной help2
    help3.href = '#';  // Устанавливаем атрибут href
    help3.textContent = 'Помощь'; 

    const help4 = document.createElement('a');  // Создаем ссылку и сохраняем в переменной help2
    help4.href = '#';  // Устанавливаем атрибут href
    help4.textContent = 'Помощь'; 


social_medias.append(img8)

footer_nav.append(block_1, block_2, block_3)
footer.append(h22,social_medias,footer_nav)
block_1.append(contact,parag1,parag2)
block_2.append(h44,adress1,adress2,adress3)
block_3.append(help,help2,help3,help4)


// ==================
const body = document.body
body.append(header,main,footer)
header.append(header_top_block, menu)
header_top_block.append(logo, h1)
menu.append(menu__item)


main.append(sectionOne,sectionTwo,sectionThree,sectionFour,sectionFive )
sectionOne.append(question_card)

sectionTwo.append(h2,cart1)
cart1.append(img2,img3)






