const api = {
    key: "7d599ce045a697247a327dd3f4029960",
    basurl: "https://pro.openweathermap.org/data/2.5/forecast/hourly?",
    iconurl: 'http://openweathermap.org/img/wn/' 
}

window.addEventListener("load", () => {
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            fetch(`${api.basurl}lat=${lat}&lon=${long}&units=metric&appid=${api.key}`)
                .then(responce => {
                    return responce.json();
                })
                .then(data => {
                    console.log(data);
                    let city = document.querySelector('.location .city');
                    city.innerText = `${data.city.name}, ${data.city.country}`;
                    
                    let now = new Date();

                    let date = document.querySelector('.location .date');
                    date.innerText = dateBuilder(now);
                    
                    let time = document.querySelector('.location .time');
                    time.innerText = timeBuilder(now);
                
                    let temp = document.querySelector('.current .temp');
                    temp.innerHTML = `${tempFormat(data.list[0].main.temp)}`;
                    
                    let defaultTemp = document.querySelector('.current .temp');
                    defaultTemp.innerHTML= `${Math.round(data.list[0].main.temp)}<span>°C</span>`;

                    let icon = document.querySelector('.current .icon');
                    icon.src = `${api.iconurl}${data.list[0].weather[0].icon}@2x.png`;

                    let weather_el = document.querySelector('.weather');
                    weather_el.innerText = data.list[0].weather[0].main;

                    let hilow = document.querySelector('.current .hi-low');
                    hilow.innerText = `Max:${Math.round(data.list[0].main.temp_max)}°c~Min:${Math.round(data.list[0].main.temp_min)}°c`;
                    // Days 

                    //day1
                    let day1 = document.querySelector('.days1 .only-day');
                    day1.innerText = dayBuilder(now, i=0);

                    let precipitation1 = document.querySelector('.days1 .precipitation');
                    precipitation1.innerText = `${(data.list[0].pop)*100}%`;

                    let day_icon1 = document.querySelector('.days1 .icon');
                    day_icon1.src = `${api.iconurl}${data.list[0].weather[0].icon}.png`;

                    let day_hilow1 = document.querySelector('.days1 .hi-low');
                    day_hilow1.innerText = `${Math.round(data.list[0].main.temp_max)}°${Math.round(data.list[0].main.temp_min)}°`;

                    //day2
                    let day2 = document.querySelector('.days2 .only-day');
                    day2.innerText = dayBuilder(now, i=1);

                    let precipitation2 = document.querySelector('.days2 .precipitation');
                    precipitation2.innerText = `${(data.list[24].pop)*100}%`;

                    let day_icon2 = document.querySelector('.days2 .icon');
                    day_icon2.src = `${api.iconurl}${data.list[24].weather[0].icon}.png`;

                    let day_hilow2 = document.querySelector('.days2 .hi-low');
                    day_hilow2.innerText = `${Math.round(data.list[24].main.temp_max)}°${Math.round(data.list[24].main.temp_min)}°`;


                    //day3
                    let day3 = document.querySelector('.days3 .only-day');
                    day3.innerText = dayBuilder(now, i=2);

                    let precipitation3 = document.querySelector('.days3 .precipitation');
                    precipitation3.innerText = `${(data.list[48].pop)*100}%`;

                    let day_icon3 = document.querySelector('.days3 .icon');
                    day_icon3.src = `${api.iconurl}${data.list[48].weather[0].icon}.png`;

                    let day_hilow3 = document.querySelector('.days3 .hi-low');
                    day_hilow3.innerText = `${Math.round(data.list[48].main.temp_max)}°${Math.round(data.list[48].main.temp_min)}°`;

                    //day4
                    let day4 = document.querySelector('.days4 .only-day');
                    day4.innerText = dayBuilder(now, i=3);

                    let precipitation4 = document.querySelector('.days4 .precipitation');
                    precipitation4.innerText = `${(data.list[72].pop)*100}%`;

                    let day_icon4 = document.querySelector('.days4 .icon');
                    day_icon4.src = `${api.iconurl}${data.list[72].weather[0].icon}.png`;

                    let day_hilow4 = document.querySelector('.days4 .hi-low');
                    day_hilow4.innerText = `${Math.round(data.list[72].main.temp_max)}°${Math.round(data.list[72].main.temp_min)}°`;
                    now
                    //day5
                    let day5 = document.querySelector('.days5 .only-day');
                    day5.innerText = dayBuilder(now, i=4);

                    let precipitation5 = document.querySelector('.days5 .precipitation');
                    precipitation5.innerText = `${(data.list[95].pop)*100}%`;

                    let day_icon5 = document.querySelector('.days5 .icon');
                    day_icon5.src = `${api.iconurl}${data.list[95].weather[0].icon}.png`;

                    let day_hilow5 = document.querySelector('.days5 .hi-low');
                    day_hilow5.innerText = `${Math.round(data.list[95].main.temp_max)}°${Math.round(data.list[95].main.temp_min)}°`;
                    
                    //hours
                    
                    //hour1
                    let hour1 = document.querySelector('.mini-card1 .time');
                    hour1.innerText = timeBuilderMini(now, i=0);

                    let time_icon1 = document.querySelector('.mini-card1 .icon');
                    time_icon1.src = `${api.iconurl}${data.list[0].weather[0].icon}.png`;

                    let time_temp = document.querySelector('.mini-card1 .temp');
                    time_temp.innerHTML= `${tempFormat(data.list[0].main.temp)}`;
                
                    let time_defaultTemp = document.querySelector('.mini-card1 .temp');
                    time_defaultTemp.innerHTML= `${Math.round(data.list[0].main.temp)}<span>°C</span>`;

                    //hour2
                    let hour2 = document.querySelector('.mini-card2 .time');
                    hour2.innerText = timeBuilderMini(now, i=1);

                    let time_icon2 = document.querySelector('.mini-card2 .icon');
                    time_icon2.src = `${api.iconurl}${data.list[1].weather[0].icon}.png`;

                    let time_temp2 = document.querySelector('.mini-card2 .temp');
                    time_temp2.innerHTML= `${tempFormat(data.list[1].main.temp)}`;
                
                    let time_defaultTemp2 = document.querySelector('.mini-card2 .temp');
                    time_defaultTemp2.innerHTML= `${Math.round(data.list[1].main.temp)}<span>°C</span>`;

                    //hour3
                    let hour3 = document.querySelector('.mini-card3 .time');
                    hour3.innerText = timeBuilderMini(now, i=2);

                    let time_icon3 = document.querySelector('.mini-card3 .icon');
                    time_icon3.src = `${api.iconurl}${data.list[2].weather[0].icon}.png`;

                    let time_temp3 = document.querySelector('.mini-card3 .temp');
                    time_temp3.innerHTML= `${tempFormat(data.list[2].main.temp)}`;
                
                    let time_defaultTemp3 = document.querySelector('.mini-card3 .temp');
                    time_defaultTemp3.innerHTML= `${Math.round(data.list[2].main.temp)}<span>°C</span>`;

                    //hour4
                    let hour4 = document.querySelector('.mini-card4 .time');
                    hour4.innerText = timeBuilderMini(now, i=3);

                    let time_icon4 = document.querySelector('.mini-card4 .icon');
                    time_icon4.src = `${api.iconurl}${data.list[3].weather[0].icon}.png`;

                    let time_temp4 = document.querySelector('.mini-card4 .temp');
                    time_temp4.innerHTML= `${tempFormat(data.list[3].main.temp)}`;
                
                    let time_defaultTemp4 = document.querySelector('.mini-card4 .temp');
                    time_defaultTemp4.innerHTML= `${Math.round(data.list[3].main.temp)}<span>°C</span>`;

                    //hour5
                    let hour5 = document.querySelector('.mini-card5 .time');
                    hour5.innerText = timeBuilderMini(now, i=4);

                    let time_icon5 = document.querySelector('.mini-card5 .icon');
                    time_icon5.src = `${api.iconurl}${data.list[4].weather[0].icon}.png`;

                    let time_temp5 = document.querySelector('.mini-card5 .temp');
                    time_temp5.innerHTML= `${tempFormat(data.list[4].main.temp)}`;
                
                    let time_defaultTemp5 = document.querySelector('.mini-card5 .temp');
                    time_defaultTemp5.innerHTML= `${Math.round(data.list[4].main.temp)}<span>°C</span>`;

                    //hour6
                    let hour6 = document.querySelector('.mini-card6 .time');
                    hour6.innerText = timeBuilderMini(now, i=5);

                    let time_icon6 = document.querySelector('.mini-card6 .icon');
                    time_icon6.src = `${api.iconurl}${data.list[5].weather[0].icon}.png`;

                    let time_temp6 = document.querySelector('.mini-card6 .temp');
                    time_temp6.innerHTML= `${tempFormat(data.list[5].main.temp)}`;
                
                    let time_defaultTemp6 = document.querySelector('.mini-card6 .temp');
                    time_defaultTemp6.innerHTML= `${Math.round(data.list[5].main.temp)}<span>°C</span>`;

                    //hour7
                    let hour7 = document.querySelector('.mini-card7 .time');
                    hour7.innerText = timeBuilderMini(now, i=6);

                    let time_icon7 = document.querySelector('.mini-card7 .icon');
                    time_icon7.src = `${api.iconurl}${data.list[6].weather[0].icon}.png`;

                    let time_temp7 = document.querySelector('.mini-card7 .temp');
                    time_temp7.innerHTML= `${tempFormat(data.list[6].main.temp)}`;
                
                    let time_defaultTemp7 = document.querySelector('.mini-card7 .temp');
                    time_defaultTemp7.innerHTML= `${Math.round(data.list[6].main.temp)}<span>°C</span>`;

                    //hour8
                    let hour8 = document.querySelector('.mini-card8 .time');
                    hour8.innerText = timeBuilderMini(now, i=7);

                    let time_icon8 = document.querySelector('.mini-card8 .icon');
                    time_icon8.src = `${api.iconurl}${data.list[7].weather[0].icon}.png`;

                    let time_temp8 = document.querySelector('.mini-card8 .temp');
                    time_temp8.innerHTML= `${tempFormat(data.list[7].main.temp)}`;
                
                    let time_defaultTemp8 = document.querySelector('.mini-card8 .temp');
                    time_defaultTemp8.innerHTML= `${Math.round(data.list[7].main.temp)}<span>°C</span>`;




                });
            });
        }
    }); 


const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);


function setQuery(evt) {
    if(evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
        evt.preventDefault();
        evt.currentTarget.value = "";    
    }
}

function getResults (query) {
    fetch(`${api.basurl}q=${query}&units=metric&appid=${api.key}`)
        .then(responce => {
            return responce.json();
        })
        .then(data);
}



function data (responce) {
    console.log(responce);
    let city = document.querySelector('.location .city');
    city.innerText = `${responce.city.name}, ${responce.city.country}`
    
    let now = new Date();
    
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
 

    
    let time = document.querySelector('.location .time');
    time.innerText = timeBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML= `${tempFormat(responce.list[0].main.temp)}`;

    let defaultTemp = document.querySelector('.current .temp');
    defaultTemp.innerHTML= `${Math.round(responce.list[0].main.temp)}<span>°C</span>`;

    let icon = document.querySelector('.current .icon');
    icon.src = `${api.iconurl}${responce.list[0].weather[0].icon}@2x.png`;
    
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = responce.list[0].weather[0].main;

    let hilow = document.querySelector('.current .hi-low');
    hilow.innerText = `Max:${Math.round(responce.list[0].main.temp_max)}°c~Min:${Math.round(responce.list[0].main.temp_min)}°c`;

        // Days 

    //day1
    let day1 = document.querySelector('.days1 .only-day');
    day1.innerText = dayBuilder(now, i=0);

    let precipitation1 = document.querySelector('.days1 .precipitation');
    precipitation1.innerText = `${(responce.list[0].pop)*100}%`;

    let day_icon1 = document.querySelector('.days1 .icon');
    day_icon1.src = `${api.iconurl}${responce.list[0].weather[0].icon}.png`;

    let day_hilow1 = document.querySelector('.days1 .hi-low');
    day_hilow1.innerText = `${Math.round(responce.list[0].main.temp_max)}°${Math.round(responce.list[0].main.temp_min)}°`;

    //day2
    let day2 = document.querySelector('.days2 .only-day');
    day2.innerText = dayBuilder(now, i=1);

    let precipitation2 = document.querySelector('.days2 .precipitation');
    precipitation2.innerText = `${(responce.list[24].pop)*100}%`;

    let day_icon2 = document.querySelector('.days2 .icon');
    day_icon2.src = `${api.iconurl}${responce.list[24].weather[0].icon}.png`;

    let day_hilow2 = document.querySelector('.days2 .hi-low');
    day_hilow2.innerText = `${Math.round(responce.list[24].main.temp_max)}°${Math.round(responce.list[24].main.temp_min)}°`;


    //day3
    let day3 = document.querySelector('.days3 .only-day');
    day3.innerText = dayBuilder(now, i=2);

    let precipitation3 = document.querySelector('.days3 .precipitation');
    precipitation3.innerText = `${(responce.list[48].pop)*100}%`;

    let day_icon3 = document.querySelector('.days3 .icon');
    day_icon3.src = `${api.iconurl}${responce.list[48].weather[0].icon}.png`;

    let day_hilow3 = document.querySelector('.days3 .hi-low');
    day_hilow3.innerText = `${Math.round(responce.list[48].main.temp_max)}°${Math.round(responce.list[48].main.temp_min)}°`;

    //day4
    let day4 = document.querySelector('.days4 .only-day');
    day4.innerText = dayBuilder(now, i=3);

    let precipitation4 = document.querySelector('.days4 .precipitation');
    precipitation4.innerText = `${(responce.list[72].pop)*100}%`;

    let day_icon4 = document.querySelector('.days4 .icon');
    day_icon4.src = `${api.iconurl}${responce.list[72].weather[0].icon}.png`;

    let day_hilow4 = document.querySelector('.days4 .hi-low');
    day_hilow4.innerText = `${Math.round(responce.list[72].main.temp_max)}°${Math.round(responce.list[72].main.temp_min)}°`;
    now
    //day5
    let day5 = document.querySelector('.days5 .only-day');
    day5.innerText = dayBuilder(now, i=4);

    let precipitation5 = document.querySelector('.days5 .precipitation');
    precipitation5.innerText = `${(responce.list[95].pop)*100}%`;

    let day_icon5 = document.querySelector('.days5 .icon');
    day_icon5.src = `${api.iconurl}${responce.list[95].weather[0].icon}.png`;

    let day_hilow5 = document.querySelector('.days5 .hi-low');
    day_hilow5.innerText = `${Math.round(responce.list[95].main.temp_max)}°${Math.round(responce.list[95].main.temp_min)}°`;

    //hours
    
    //hour1
    let hour1 = document.querySelector('.mini-card1 .time');
    hour1.innerText = timeBuilderMini(now, i=0);

    let time_icon1 = document.querySelector('.mini-card1 .icon');
    time_icon1.src = `${api.iconurl}${responce.list[0].weather[0].icon}.png`;

    let time_temp = document.querySelector('.mini-card1 .temp');
    time_temp.innerHTML= `${tempFormat(responce.list[0].main.temp)}`;

    let time_defaultTemp = document.querySelector('.mini-card1 .temp');
    time_defaultTemp.innerHTML= `${Math.round(responce.list[0].main.temp)}<span>°C</span>`;

    //hour2
    let hour2 = document.querySelector('.mini-card2 .time');
    hour2.innerText = timeBuilderMini(now, i=1);

    let time_icon2 = document.querySelector('.mini-card2 .icon');
    time_icon2.src = `${api.iconurl}${responce.list[1].weather[0].icon}.png`;

    let time_temp2 = document.querySelector('.mini-card2 .temp');
    time_temp2.innerHTML= `${tempFormat(responce.list[1].main.temp)}`;

    let time_defaultTemp2 = document.querySelector('.mini-card2 .temp');
    time_defaultTemp2.innerHTML= `${Math.round(responce.list[1].main.temp)}<span>°C</span>`;

    //hour3
    let hour3 = document.querySelector('.mini-card3 .time');
    hour3.innerText = timeBuilderMini(now, i=2);

    let time_icon3 = document.querySelector('.mini-card3 .icon');
    time_icon3.src = `${api.iconurl}${responce.list[2].weather[0].icon}.png`;

    let time_temp3 = document.querySelector('.mini-card3 .temp');
    time_temp3.innerHTML= `${tempFormat(responce.list[2].main.temp)}`;

    let time_defaultTemp3 = document.querySelector('.mini-card3 .temp');
    time_defaultTemp3.innerHTML= `${Math.round(responce.list[2].main.temp)}<span>°C</span>`;

    //hour4
    let hour4 = document.querySelector('.mini-card4 .time');
    hour4.innerText = timeBuilderMini(now, i=3);

    let time_icon4 = document.querySelector('.mini-card4 .icon');
    time_icon4.src = `${api.iconurl}${responce.list[3].weather[0].icon}.png`;

    let time_temp4 = document.querySelector('.mini-card4 .temp');
    time_temp4.innerHTML= `${tempFormat(responce.list[3].main.temp)}`;

    let time_defaultTemp4 = document.querySelector('.mini-card4 .temp');
    time_defaultTemp4.innerHTML= `${Math.round(responce.list[3].main.temp)}<span>°C</span>`;

    //hour5
    let hour5 = document.querySelector('.mini-card5 .time');
    hour5.innerText = timeBuilderMini(now, i=4);

    let time_icon5 = document.querySelector('.mini-card5 .icon');
    time_icon5.src = `${api.iconurl}${responce.list[4].weather[0].icon}.png`;

    let time_temp5 = document.querySelector('.mini-card5 .temp');
    time_temp5.innerHTML= `${tempFormat(responce.list[4].main.temp)}`;

    let time_defaultTemp5 = document.querySelector('.mini-card5 .temp');
    time_defaultTemp5.innerHTML= `${Math.round(responce.list[4].main.temp)}<span>°C</span>`;

    //hour6
    let hour6 = document.querySelector('.mini-card6 .time');
    hour6.innerText = timeBuilderMini(now, i=5);

    let time_icon6 = document.querySelector('.mini-card6 .icon');
    time_icon6.src = `${api.iconurl}${responce.list[5].weather[0].icon}.png`;

    let time_temp6 = document.querySelector('.mini-card6 .temp');
    time_temp6.innerHTML= `${tempFormat(responce.list[5].main.temp)}`;

    let time_defaultTemp6 = document.querySelector('.mini-card6 .temp');
    time_defaultTemp6.innerHTML= `${Math.round(responce.list[5].main.temp)}<span>°C</span>`;

    //hour7
    let hour7 = document.querySelector('.mini-card7 .time');
    hour7.innerText = timeBuilderMini(now, i=6);

    let time_icon7 = document.querySelector('.mini-card7 .icon');
    time_icon7.src = `${api.iconurl}${responce.list[6].weather[0].icon}.png`;

    let time_temp7 = document.querySelector('.mini-card7 .temp');
    time_temp7.innerHTML= `${tempFormat(responce.list[6].main.temp)}`;

    let time_defaultTemp7 = document.querySelector('.mini-card7 .temp');
    time_defaultTemp7.innerHTML= `${Math.round(responce.list[6].main.temp)}<span>°C</span>`;

    //hour8
    let hour8 = document.querySelector('.mini-card8 .time');
    hour8.innerText = timeBuilderMini(now, i=7);

    let time_icon8 = document.querySelector('.mini-card8 .icon');
    time_icon8.src = `${api.iconurl}${responce.list[7].weather[0].icon}.png`;

    let time_temp8 = document.querySelector('.mini-card8 .temp');
    time_temp8.innerHTML= `${tempFormat(responce.list[7].main.temp)}`;

    let time_defaultTemp8 = document.querySelector('.mini-card8 .temp');
    time_defaultTemp8.innerHTML= `${Math.round(responce.list[7].main.temp)}<span>°C</span>`;


}



function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", 
    "Augest", "September", "October", "Nouvember", "December"];
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
}

function dayBuilder (today, i) {

    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[(today.getDay()+i)%7];

    return `${day}`;
}


function timeBuilder (d) {
    let hour = d.getHours();
    if (hour < 10) hour = '0' + hour;
    let minute = d.getMinutes();
    if (minute < 10) minute = '0' + minute;
    return `${hour}:${minute}`;
}
//// time format for mini card
function timeBuilderMini (d, i) {
    let hour = d.getHours();
    if (hour < 12) {
        return `${hour + i}AM`;
    }
    else {
        return `${(hour + i)%12}PM`;
    }
    
}




// slide show mini temp js code
//var slideIndex = 1;
//showSlides(slideIndex);

// Next/previous controls
//function plusSlides(n) {
//  showSlides(slideIndex += n);
//}

// Thumbnail image controls
//function currentSlide(n) {
//  showSlides(slideIndex = n);
//}
//
//function showSlides(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides");
//  var dots = document.getElementsByClassName("dot");
//  if (n > slides.length) {slideIndex = 1}
//  if (n < 1) {slideIndex = slides.length}
//  for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none";
//  }
//  for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" active", "");
//  }
//  slides[slideIndex-1].style.display = "block";
//  dots[slideIndex-1].className += " active";
//} 


function tempFormat(t) {
    const celsiusbtn = document.querySelector('.celsius-btn');
    const fahrenheitbtn = document.querySelector('.fahrenheit-btn');
    

    celsiusbtn.addEventListener("click", celsiusFormat);
    function celsiusFormat() {
        let temp = document.querySelector('.current .temp');
        temp.innerHTML= Math.round(t) + "<span>°C</span>";
    }
    fahrenheitbtn.addEventListener("click", fahrenheitFormat);
    function fahrenheitFormat() {
            let temp = document.querySelector('.current .temp');
            temp.innerHTML= Math.round(t*1.8+32) + "<span>°F</span>";
        }

}

//mini card
//let text = "";
//for (let i = 0; i < 5; i++) {
//    //slider.innerHTML = `<div class="time-mini">${timeBuilderMini(now, i)}</div>`;
//    //slider.innerHTML = `<img src=${api.iconurl}${responce.list[i].main.icon}@2x.png/>`;
//    text += "amir"
//}   
//document.getElementsByClassName('.full-card .one').innerHTML = text; ;



