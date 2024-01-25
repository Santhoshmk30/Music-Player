const music = new Audio('audio/1.mp3');
const songs = [
    {
        id:'1',
        songName:` Unakku Thaan <br>
        <div class="subtitle">Chithha</div>`,
        poster: "images/cover1.jpeg",
    },
    {
        id:'2',
        songName:`Kaatrodu Pattam Pola <br>
        <div class="subtitle">Ayothi</div>`,
        poster: "images/cover2.jpeg",
    },
    {
        id:'3',
        songName:`Engeyo partha <br>
        <div class="subtitle">Yaaradi Nee Mohini</div>`,
        poster: "images/cover3.jpeg",
    },
    {
        id:'4',
        songName:`Mundhinam Paartheney <br>
        <div class="subtitle">Vaaranam Aayiram</div>`,
        poster: "images/cover4.jpeg",
    },
    {
        id:'5',
        songName:`Poovukkul <br>
        <div class="subtitle">Jeans</div>`,
        poster: "images/cover5.jpeg",
    },
    {
        id:'6',
        songName:`Nee Kavithaigala <br>
        <div class="subtitle">Maragatha Naanayam</div>`,
        poster: "images/cover6.jpeg",
    },
    {
        id:'7',
        songName:`Yaanji <br>
        <div class="subtitle">Vikram Vedha</div>`,
        poster: "images/cover7.jpeg",
    },
    {
        id:'8',
        songName:`Kangal Edho <br>
        <div class="subtitle">Chithha</div>`,
        poster: "images/cover8.jpeg",
    },
    {
        id:'9',
        songName:`Megham Karukatha <br>
        <div class="subtitle">Thiruchitrambalam</div>`,
        poster: "images/cover9.jpeg",
    },
    {
        id:'10',
        songName:`Naa Ready <br>
        <div class="subtitle">Leo</div>`,
        poster: "images/cover10.jpeg",
    },
    {
        id:'11',
        songName:`Vaathi Coming <br>
        <div class="subtitle">Master</div>`,
        poster: "images/cover11.jpeg",
    },
    {
        id:'12',
        songName:`Ethir Neechal<br>
        <div class="subtitle">Ethir Neechal</div>`,
        poster: "images/cover12.jpeg",
    },
    {
        id:'13',
        songName:`Vaa Senthaazhini <br>
        <div class="subtitle">Adiyae</div>`,
        poster: "images/cover13.jpeg",
    },
    {
        id:'14',
        songName:`Urugi Urugi <br>
        <div class="subtitle">Joe</div>`,
        poster: "images/cover14.jpeg",
    },
    {
        id:'15',
        songName:`Thamarai Poovukkum <br>
        <div class="subtitle">Pasumpon</div>`,
        poster: "images/cover15.jpeg",
    },
    {
        id:'16',
        songName:`Arjunaru Villu <br>
        <div class="subtitle">Ghilli</div>`,
        poster: "images/cover16.jfif",
    },
    {
        id:'17',
        songName:`Adi Penne <br>
        <div class="subtitle">Naam</div>`,
        poster: "images/cover17.jfif",
    },
    {
        id:'18',
        songName:`Nira <br>
        <div class="subtitle">Takkar</div>`,
        poster: "images/cover18.jfif",
    },
]

Array.from(document.getElementsByClassName('songitem')).forEach((element, i) =>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
    }

           
const makeAllBackgrounds = () =>{

    Array.from(document.getElementsByClassName('songitem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `images/${index}.jpeg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })
        
        
        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        
        
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songitem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})
    
       
    
       
   

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;


    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }

    currentEnd.innerText = `${min}:${sec}`;
    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value =progressbar;
    let seekbar = seek.value
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change',()=>{
    music.currentTime = seek.value *music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2')
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change',()=>{
    if (vol.value == 0){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0){
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })
        
        
        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        makeAllPlays()

        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songitem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
})
next.addEventListener('click',()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songitem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })
        
        
        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        makeAllPlays()

        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songitem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
})

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})

/*small screen*/
let smallmasterPlay = document.getElementById('smallmasterPlay');
let small_wave = document.getElementsByClassName('small_wave')[0];

smallmasterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        smallmasterPlay.classList.remove('bi-play-fill');
        smallmasterPlay.classList.add('bi-pause-fill');
        small_wave.classList.add('active2');
    } else {
        music.pause();
        smallmasterPlay.classList.add('bi-play-fill');
        smallmasterPlay.classList.remove('bi-pause-fill');
        small_wave.classList.remove('active2');

    }
} )

let small_index = 0;
let small_poster_master_play = document.getElementById('small_poster_master_play');
let small_title = document.getElementById('small_title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        small_poster_master_play.src = `images/${index}.jpeg`;
        music.play();
        let song_small_title = songs.filter((ele)=>{
            return ele.id == index;
        })
        
        
        song_small_title.forEach(ele =>{
            let {songName} = ele;
            small_title.innerHTML = songName;
        })
        smallmasterPlay.classList.remove('bi-play-fill');
        smallmasterPlay.classList.add('bi-pause-fill');
        small_wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            smallmasterPlay.classList.add('bi-play-fill');
            smallmasterPlay.classList.remove('bi-pause-fill');
            small_wave.classList.remove('active2');

        })

        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songitem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})

let smallcurrentStart = document.getElementById('smallcurrentStart');
let smallcurrentEnd = document.getElementById('smallcurrentEnd');
let small_seek = document.getElementById('small_seek');
let small_bar2 = document.getElementById('small_bar2');
let small_dot = document.getElementsByClassName('small_dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;


    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }

    smallcurrentEnd.innerText = `${min}:${sec}`;
    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    smallcurrentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    small_seek.value = progressbar;
    let seekbar = small_seek.value
    small_bar2.style.width = `${seekbar}%`;
    small_dot.style.left = `${seekbar}%`;
})

small_seek.addEventListener('change',()=>{
    music.currentTime = small_seek.value *music.duration/100;
})

music.addEventListener('ended', ()=>{
    smallmasterPlay.classList.add('bi-play-fill');
    smallmasterPlay.classList.remove('bi-pause-fill');
    smallwave.classList.remove('active2')
})

let small_vol_icon = document.getElementById('small_vol_icon');
let small_vol = document.getElementById('small_vol');
let small_vol_dot = document.getElementById('small_vol_dot');
let small_vol_bar = document.getElementsByClassName('small_vol_bar')[0];

small_vol.addEventListener('change',()=>{
    if (small_vol.value == 0){
        small_vol_icon.classList.remove('bi-volume-down-fill');
        small_vol_icon.classList.add('bi-volume-mute-fill');
        small_vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (small_vol.value > 0){
        small_vol_icon.classList.add('bi-volume-down-fill');
        small_vol_icon.classList.remove('bi-volume-mute-fill');
        small_vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (small_vol.value > 50){
        small_vol_icon.classList.remove('bi-volume-down-fill');
        small_vol_icon.classList.remove('bi-volume-mute-fill');
        small_vol_icon.classList.add('bi-volume-up-fill');
    }

    let small_vol_a = small_vol.value;
    small_vol_bar.style.width = `${small_vol_a}%`;
    small_vol_dot.style.left = `${small_vol_a}%`;
    music.volume = small_vol_a/100;
})

let smallback = document.getElementById('smallback');
let smallnext = document.getElementById('smallnext');

smallback.addEventListener('click',()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src = `audio/${index}.mp3`;
        small_poster_master_play.src = `img/${index}.jpg`;
        music.play();
        let song_small_title = songs.filter((ele)=>{
            return ele.id == index;
        })
        
        
        song_small_title.forEach(ele =>{
            let {songName} = ele;
            small_title.innerHTML = songName;
        })
        makeAllPlays()

        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songitem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
})
smallnext.addEventListener('click',()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songitem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
        small_poster_master_play.src = `img/${index}.jpg`;
        music.play();
        let song_small_title = songs.filter((ele)=>{
            return ele.id == index;
        })
        
        
        song_small_title.forEach(ele =>{
            let {songName} = ele;
            small_title.innerHTML = songName;
        })
        makeAllPlays()

        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songitem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
})



        
        

