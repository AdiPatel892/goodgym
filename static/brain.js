const light_btn = document.querySelector('.light-theme');
const dark_btn = document.querySelector('.dark-theme');
const landing_bg_img = document.querySelector('#landing-bg-img')
const input = document.querySelector('input')
const contact = document.querySelector('#contact')
const subject = document.querySelector('#subject')

light_btn.addEventListener('click', ()=>{
    document.body.style.setProperty('--bg-theme',color='rgb(255, 217, 178)')
    document.body.style.setProperty('--strip-theme',color='rgba(255, 230, 206, 0.959)')
    document.body.style.setProperty('--span-title',color='rgb(34, 30, 30)')
    document.body.style.setProperty('--nav-list-hyperlinks',color='#006eff')
    document.body.style.setProperty('--nav-list-hyperlinks-hover',color='#4a98ff')
    document.body.style.setProperty('--main-color',color='rgb(34, 30, 30)')
    document.body.style.setProperty('--bg-time',color='#ffe3c7')
    landing_bg_img.style.backgroundImage = "url(../images/light-bg.png)"
    document.body.style.setProperty('--landing-bg-head',color='rgb(34, 30, 30)')
    document.body.style.setProperty('--btn_join-now',color='#d040ff')
    document.body.style.setProperty('--lines-after-btn',color='#ff0176')
    document.body.style.setProperty('--cards-shadow',color='rgb(233, 17, 100)')
    document.body.style.setProperty('--about-bg',color='#ffe2c9')
    contact.style.backgroundImage = "url(../images/contact-light.jpg)"
    document.body.style.setProperty('--contact-font',color='black')
})
dark_btn.addEventListener('click', ()=>{
    document.body.style.setProperty('--bg-theme',color='rgb(37, 35, 35)')
    document.body.style.setProperty('--strip-theme',color='rgb(34, 30, 30)')
    document.body.style.setProperty('--span-title',color='linen')
    document.body.style.setProperty('--nav-list-hyperlinks',color='#4accff')
    document.body.style.setProperty('--nav-list-hyperlinks-hover',color='rgb(18, 239, 255)')
    document.body.style.setProperty('--main-color',color='#e0dada')
    document.body.style.setProperty('--bg-time',color='rgba(49, 49, 49)')
    landing_bg_img.style.backgroundImage = "url(../images/dark-bg.png)"
    document.body.style.setProperty('--landing-bg-head',color='#ff3737')
    document.body.style.setProperty('--btn_join-now',color='hsl(224, 100%, 60%)')
    document.body.style.setProperty('--lines-after-btn',color='#8601ff')
    document.body.style.setProperty('--cards-shadow',color='rgb(17, 17, 185)')
    document.body.style.setProperty('--about-bg',color='black')
    contact.style.backgroundImage = "url(../images/contact.jpg)"
    document.body.style.setProperty('--contact-font',color='white')
})
function clock() {
        var d = new Date();
        var hr = document.getElementById('getHours');
        var min = document.getElementById('getMinutes');
        var sec = document.getElementById('getSeconds');
        var h = d.getHours();
        var ah = d.getMinutes();
        var b = d.getSeconds();
        hr.innerHTML = h;
        min.innerHTML = ah;
        sec.innerHTML = b;
    }
    
  setInterval(clock, 1000)
  subject.addEventListener('click', ()=>{
    subject.innerHTML= '';
})
