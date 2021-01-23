// import './css/style.css'
let header_nav = document.querySelector('.header__nav')
let icon = document.querySelector('.header__nav__btn')
const sub_menu = document.querySelector('.header__navigation')
let seacrhContainer = document.querySelector('.seaching_results')
let resultsArr = []
let infoOb = []
let temp_cont_res = document.querySelector('.template_result_container')
let temp_container_title = document.querySelector('#template_title')
let temp_container_p1 = document.querySelector('#template_p1')
let temp_container_p2 = document.querySelector('#template_p2')
let temp_container_p3 = document.querySelector('#template_p3')
let temp_container_p4 = document.querySelector('#template_p4')
let temp_container_p5 = document.querySelector('#template_p5')
let temp_container_p6 = document.querySelector('#template_p6')
let temp_container_p7 = document.querySelector('#template_p7')
let sub_button = document.querySelector('.template_submit_button')
let template_p1_span = document.querySelector('#template_p1_span')
let template_p2_span = document.querySelector('#template_p2_span')
let template_p3_span = document.querySelector('#template_p3_span')
let template_p4_span = document.querySelector('#template_p4_span')
let template_p5_span = document.querySelector('#template_p5_span')
let template_p6_span = document.querySelector('#template_p6_span')
let template_p7_span = document.querySelector('#template_p7_span')
function navMenu () {
    document.querySelector('#nav_newWindow').addEventListener('click',()=>{
        window.open('http://127.0.0.1:5500/src/index.html')
    })
    document.querySelector('#nav_tab').addEventListener('click',()=>{
        
    })
    document.querySelector('#nav_errmessage').addEventListener('click',()=>{
        window.open('http://127.0.0.1:5500/src/index.html')
    })
    document.querySelector('#nav_settings').addEventListener('click',()=>{
        window.open('http://127.0.0.1:5500/src/index.html')
    })

}
navMenu()
header_nav.addEventListener('click',evt=>{
    if(evt.target.name = 'btn_nav'){
        let qr = (header_nav.classList.contains('active_btn_nav') == false) ? (header_nav.classList.add('active_btn_nav'),icon.childNodes[1].classList.add('activ_btn_span_top'),icon.childNodes[3].classList.add('activ_span'),icon.childNodes[5].classList.add('activ_btn_span_bottom'),sub_menu.classList.remove('hide'),sub_menu.classList.add('show')) : (header_nav.classList.remove('active_btn_nav'),icon.childNodes[1].classList.remove('activ_btn_span_top'),icon.childNodes[3].classList.remove('activ_span'),icon.childNodes[5].classList.remove('activ_btn_span_bottom'),sub_menu.classList.remove('show'),sub_menu.classList.add('hide'))
    }
})
window.onload = () =>{
    setInterval(()=>{
        count>40 ? stopCreateEl() : createBackgroundSVG()
    },1000)
}
let count = 0
function createBackgroundSVG(){
    const backgroundSVG = document.createElement('i')
    backgroundSVG.classList.add('new_back_tangl')
    backgroundSVG.style.width = 40*Math.random()+'px'
    let wdth = backgroundSVG.style.width
    backgroundSVG.style.height = wdth
    backgroundSVG.style.left = Math.random()*(window.innerWidth-50)+'px'
    backgroundSVG.style.top = Math.random()*(window.innerHeight-50)+'px'
    backgroundSVG.style.opacity = Math.random()
    let container = document.querySelector('body')
    container.appendChild(backgroundSVG)
    count++
}
function stopCreateEl(){
    let aim = document.querySelector('.new_back_tangl')
    document.body.removeChild(aim)
    count--
}

let time = setInterval(() =>{
    const clock = new Date()
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const container = document.querySelector('.timeNow')
    container.innerHTML = (clock.getHours() + ' : ' + clock.getMinutes())
    document.querySelector('.date').innerText = clock.toLocaleString("ru",options)
},1000)
function createWeatherWidget(){
    let lon
    let lat
    const KELVIN = 273 
    const currentTemp = document.querySelector('.temp')
    const currentTempDescr = document.querySelector('.temp_descr')
    const currentLocal = document.querySelector('.temp_location')
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            lon = position.coords.longitude
            lat = position.coords.latitude
            // const proxy = 'https://cors-anywhere.herokuapp.com/'
            key = '7796d244892ec58e9ca6354fac63a5f5'
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
            fetch(api)
                .then(response=>{
                    return response.json()
                })
                .then(data => {
                    let discr = data.weather[0].description
                    // let discr = 'snow'
                    // console.dir(discr)
                    // console.dir(data)
                    let weatherObj = data
                    // console.log(weatherObj)
                    currentTemp.innerHTML = Math.floor(data.main.temp - KELVIN) + ' C ' + `<sup>o</sup>`
                    currentTempDescr.innerText = data.weather[0].description
                    currentLocal.innerText = data.name
                    weatherIcon(discr)
                })
        })
    }
}
createWeatherWidget()
function weatherIcon (status) {
    let container = document.querySelector('.icon')
    let subContainer = document.querySelector('.icon_svg')
    let icon = document.querySelector('#weather_status')
    let weatherStat = status.toString()
    console.log(weatherStat)
    if(weatherStat.indexOf('sun') > -1) {
        container.style.backgroundColor = '#f6c544'
        subContainer.title = weatherStat
        icon.title = weatherStat
        icon.src = './assets/weather_icons/sun.png'
    }else if (weatherStat.indexOf('snow') > -1) {
        container.style.backgroundColor = '#017fdd'
        subContainer.title = weatherStat
        icon.title = weatherStat
        icon.src = './assets/weather_icons/snowflake.png'
    }else if (weatherStat.indexOf('rain') > -1) {
        container.style.backgroundColor = '#9e37a9'
        subContainer.title = weatherStat
        icon.title = weatherStat
        icon.src = './assets/weather_icons/rain.png'
    }else if (weatherStat.indexOf('cloud') > -1) {
        container.style.backgroundColor = '#277c85'
        subContainer.title = weatherStat
        icon.title = weatherStat
        icon.src = './assets/weather_icons/cloud.png'
    }else{
        container.style.backgroundColor = '#999'
        subContainer.title = weatherStat
        icon.title = weatherStat
        icon.src = './assets/weather_icons/notfound.png'
    }
}

function searchField(){
    let field = document.querySelector('#search_field_input')
    let categories = ['films','people','planets','species','starships','vehicles']
    document.querySelector('#search_field_btn').addEventListener('click',()=>{
        if(resultsArr.length !=  0) {
            resultsArr.length = 0
            seacrhContainer.innerHTML = ''
            seacrhContainer.style.display = 'none'
            console.log(resultsArr)
            console.log('clearing')
        }
        let request = field.value
        console.log(request)
        getEl(request,categories)
    })
}
searchField()
function getEl (request = '', categories){ 
    if(request != ''){
        for(let i = 0 ; i < 6; i++){
            let swapiUrl = 'https://swapi.dev/api/' + categories[i] + '/?search=' + request
            fe(swapiUrl)
        }
    }else {
        console.log('request is too low')
        document.querySelector('.error').style.display = 'block'
        setTimeout(()=>{
            document.querySelector('.error').style.display = 'none'
        },8000)
        
    }
}
function fe(url){
    fetch(url)
            .then(response => {
                return response.json()
            })
            .then(response => {
                // console.log(response, 'is result')
                if(response.count > 0) {
                    for(let i = 0 ; i < response.count ; i++) {
                        let newObjctSe = new searchObjct(response,i).seachTemplate()
                        console.log(response.results[i].name, ' is response we needed')
                        infoOb.push(response.results[i])
                        console.log(infoOb, 'is massive')
                        resultsArr.push(newObjctSe)
                    }
                    
                }
                if(resultsArr.length !=  0) {
                    resultsArr.forEach(el => {
                        seacrhContainer.insertAdjacentHTML('beforeend', el)
                    })
                    seacrhContainer.style.display = 'block'
                    document.querySelector('.seaching_results').addEventListener('click',evt=>{
                        let tempName = evt.target.getAttribute('name')
                        console.log(tempName)
                        console.log(resultsArr)
                        for(let i = 0; i < infoOb.length; i++){
                            let timeArr = infoOb[i].name.indexOf(tempName)
                            if(timeArr != -1){
                                let takeAr = infoOb[i]
                                temp_cont_res.style.display = 'block'
                                typeOfData(takeAr)
                                seacrhContainer.style.display = 'none'
                                console.log(takeAr, ' it is our win')
                            }
                            console.log(timeArr)
                        }
                    })
                }
                console.log(resultsArr + 'is resultsArr')
                console.log(resultsArr.length)
            })
}
class searchObjct{
    constructor(response,i) {
        this.name = response.results[i].name
        this.title = response.results[i].title
    }
    seachTemplate() {
        if(this.name != undefined ) {
            return`<div class="sub_seach_res"><a href="#"><p name='${this.name}'>${this.name}</p></a></div>`
        }else{
            return `<div class="sub_seach_res"><a href="#"><p>${this.title}</p></a></div>`
        }
    }
}
function typeOfData (takeAr) {
    if(takeAr.birth_year != undefined){//people
        temp_container_title.innerText = takeAr.name
        temp_container_p1.innerText = takeAr.birth_year
        temp_container_p2.innerText = takeAr.eye_color
        temp_container_p3.innerText = takeAr.gender
        temp_container_p4.innerText = takeAr.hair_color
        temp_container_p5.innerText = takeAr.height
        temp_container_p6.innerText = takeAr.mass
        temp_container_p7.innerText = takeAr.species
        template_p1_span.innerText = 'birth_year : '
        template_p2_span.innerText = 'eye_color : '
        template_p3_span.innerText = 'gender : '
        template_p4_span.innerText = 'hair_color : '
        template_p5_span.innerText = 'height : '
        template_p6_span.innerText = 'mass : '
        template_p7_span.innerText = 'species : '
    }else if(takeAr.producer != undefined){//films
        temp_container_title.innerText = takeAr.title
        temp_container_p1.innerText = takeAr.episode_id
        temp_container_p2.innerText = takeAr.opening_crawl
        temp_container_p3.innerText = takeAr.director
        temp_container_p4.innerText = takeAr.producer
        temp_container_p5.innerText = takeAr.release_date
        temp_container_p6.innerText = takeAr.species
        temp_container_p7.innerText = takeAr.planets
        template_p1_span.innerText = 'episode_id : '
        template_p2_span.innerText = 'opening_crawl : '
        template_p3_span.innerText = 'director : '
        template_p4_span.innerText = 'producer : '
        template_p5_span.innerText = 'release_date : '
        template_p6_span.innerText = 'species : '
        template_p7_span.innerText = 'planets : '
    }else if(takeAr.starship_class != undefined){//Starships
        temp_container_title.innerText = takeAr.name
        temp_container_p1.innerText = takeAr.model
        temp_container_p2.innerText = takeAr.starship_class
        temp_container_p3.innerText = takeAr.manufacturer
        temp_container_p4.innerText = takeAr.cost_in_credits
        temp_container_p5.innerText = takeAr.length
        temp_container_p6.innerText = takeAr.max_atmosphering_speed
        temp_container_p7.innerText = takeAr.hyperdrive_rating
        template_p1_span.innerText = 'model : '
        template_p2_span.innerText = 'starship_class : '
        template_p3_span.innerText = 'manufacturer : '
        template_p4_span.innerText = 'cost_in_credits : '
        template_p5_span.innerText = 'length : '
        template_p6_span.innerText = 'max_atmosphering_speed : '
        template_p7_span.innerText = 'hyperdrive_rating : '
    }else if(takeAr.model != undefined && takeAr.starship_class == undefined) {//Vehicles
        temp_container_title.innerText = takeAr.name
        temp_container_p1.innerText = takeAr.model
        temp_container_p2.innerText = takeAr.vehicle_class
        temp_container_p3.innerText = takeAr.manufacturer
        temp_container_p4.innerText = takeAr.length
        temp_container_p5.innerText = takeAr.cost_in_credits
        temp_container_p6.innerText = takeAr.max_atmosphering_speed
        temp_container_p7.innerText = takeAr.cargo_capacity
        template_p1_span.innerText = 'model : '
        template_p2_span.innerText = 'vehicle_class : '
        template_p3_span.innerText = 'manufacturer : '
        template_p4_span.innerText = 'length : '
        template_p5_span.innerText = 'cost_in_credits : '
        template_p6_span.innerText = 'max_atmosphering_speed : '
        template_p7_span.innerText = 'cargo_capacity : '
    }else if(takeAr.classification != undefined){//Species
        temp_container_title.innerText = takeAr.name
        temp_container_p1.innerText = takeAr.classification
        temp_container_p2.innerText = takeAr.designation
        temp_container_p3.innerText = takeAr.average_height
        temp_container_p4.innerText = takeAr.average_lifespan
        temp_container_p5.innerText = takeAr.language
        temp_container_p6.innerText = takeAr.homeworld
        temp_container_p7.innerText = takeAr.hair_colors
        template_p1_span.innerText = 'classification : '
        template_p2_span.innerText = 'designation : '
        template_p3_span.innerText = 'average_height : '
        template_p4_span.innerText = 'average_lifespan : '
        template_p5_span.innerText = 'language : '
        template_p6_span.innerText = 'homeworld : '
        template_p7_span.innerText = 'hair_colors : '
    }else if(takeAr.terrain != undefined){//Planets
        temp_container_title.innerText = takeAr.name
        temp_container_p1.innerText = takeAr.diameter
        temp_container_p2.innerText = takeAr.rotation_period
        temp_container_p3.innerText = takeAr.orbital_period
        temp_container_p4.innerText = takeAr.gravity
        temp_container_p5.innerText = takeAr.climate
        temp_container_p6.innerText = takeAr.terrain
        temp_container_p7.innerText = takeAr.surface_water
        template_p1_span.innerText = 'diameter : '
        template_p2_span.innerText = 'rotation_period : '
        template_p3_span.innerText = 'orbital_period : '
        template_p4_span.innerText = 'gravity : '
        template_p5_span.innerText = 'climate : '
        template_p6_span.innerText = 'terrain : '
        template_p7_span.innerText = 'surface_water : '
    }
}
sub_button.addEventListener('click',()=>{
    temp_cont_res.style.display = 'none'
})