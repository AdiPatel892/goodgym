const light_btn = document.querySelector('.light-theme');
const dark_btn = document.querySelector('.dark-theme');
const subject = document.querySelector('#subject')
const register = document.querySelector('.register')

light_btn.addEventListener('click', ()=>{
    document.body.style.setProperty('--bg-theme',color='rgb(255, 217, 178)')
    document.body.style.setProperty('--strip-theme',color='rgba(255, 230, 206, 0.959)')
    document.body.style.setProperty('--span-title',color='rgb(34, 30, 30)')
    document.body.style.setProperty('--nav-list-hyperlinks',color='#006eff')
    document.body.style.setProperty('--nav-list-hyperlinks-hover',color='#4a98ff')
    document.body.style.setProperty('--main-color',color='#000000')
    document.body.style.setProperty('--bg-time',color='#ffe3c7')
    // register.style.backgroundImage = "url(./images/light-bg.png)"
    document.body.style.setProperty('--landing-bg-head',color='rgb(34, 30, 30)')
    document.body.style.setProperty('--btn_join-now',color='#d040ff')
    document.body.style.setProperty('--lines-after-btn',color='#ff0176')
    document.body.style.setProperty('--cards-shadow',color='rgb(233, 17, 100)')
    document.body.style.setProperty('--about-bg',color='#ffe2c9') 
    register.style.backgroundImage = "url(../images/register-dark-bg.jpg)"
  
})
dark_btn.addEventListener('click', ()=>{
    document.body.style.setProperty('--bg-theme',color='rgb(37, 35, 35)')
    document.body.style.setProperty('--strip-theme',color='rgb(34, 30, 30)')
    document.body.style.setProperty('--span-title',color='linen')
    document.body.style.setProperty('--nav-list-hyperlinks',color='#4accff')
    document.body.style.setProperty('--nav-list-hyperlinks-hover',color='rgb(18, 239, 255)')
    document.body.style.setProperty('--main-color',color='#ffffff')
    document.body.style.setProperty('--bg-time',color='rgba(49, 49, 49)')
    // register.style.backgroundImage = "url(./images/dark-bg.png)"
    document.body.style.setProperty('--landing-bg-head',color='#ff3737')
    document.body.style.setProperty('--btn_join-now',color='hsl(224, 100%, 60%)')
    register.style.backgroundImage = "url(../images/register-bg.jpg)"
    
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
     