const introContainer = document.querySelector('.intro-container');
const introHeader = document.querySelector('.intro-header');
const intro = document.querySelectorAll('.intro');
const borders = document.querySelector('.toheeb-wrapper1');
const cursor = document.querySelector('.cursor');
const bt1 = document.getElementById('bt1');
const bt2 = document.getElementById('bt2');
const gif = document.querySelector('.question-gif-wrapper');
const cursors = document.querySelectorAll('.links');


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

const srcs2 = [
    {
        id: 1,
        src: 'Konga.png',
    },
    {
        id: 2,
        src: 'African Alliance.png',
    },
    {
        id: 3,
        src: 'Mailman main logo.png',
    },
    {
        id: 4,
        src: 'Madison and Park.png',
    },
    {
        id: 5,
        src: 'AIC.png',
    },
    {
        id: 6,
        src: 'Sterling Bank.png',
    },
    {
        id: 7,
        src: 'CGTN.png',
    },
    {
        id: 8,
        src: 'Noemdek.png',
    },
    {
        id: 9,
        src: 'Nivea.png',
    },
    {
        id: 10,
        src: 'BUH.png',
    }
]
let currentItem2 = 0;

const clientImg2 = document.getElementById('client-img2');

const showClient2 = (img) => {
    const item = srcs2[img];
    clientImg2.setAttribute("src", item.src)
}

setInterval(
    () => {
        currentItem2++;
        if(currentItem2 > srcs2.length - 1) {
            currentItem2 = 0;
        }
        showClient2(currentItem2);
    }
, 1500);




window.addEventListener('resize', function(event){
    var w = window.innerWidth;
    console.log(w);
});




cursors.forEach(curse => {
    curse.addEventListener('mouseover', e => {
        cursor.classList.add('lin')
    });
    curse.addEventListener('mouseleave', e => {
        cursor.classList.remove('lin')
    })
});




window.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
});

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let valux = value - "1000"
    let valuy = value + "1000" * "0.0001"
    let abouty = valuy * "0.03" 


    let e = window.event;
    let y = e.clientY;
    let x = e.clientX;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    cursor.style.position = "fixed";
    bt2.style.transform = `translateX(${valux}px)`;
    bt1.style.transform = `translateX(-${valuy}px)`;
    // bt3.style.transform = `translateX(${valux}px)`;
    // bt4.style.transform = `translateX(-${valuy}px)`;
    gif.style.top = `-${abouty}rem`;
    gif.style.marginTop = `-7rem`;
});

window.addEventListener('DOMContentLoaded', () => {
    anim();
});

    setTimeout(() => {
        borders.classList.add('active');
    }, 6000);


const anim = () => {
    setTimeout(() => {
        intro.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 450)
        });
        setTimeout(() => {
            intro.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            });
        }, 2000);
        setTimeout(() => {
            introContainer.style.top = '-100vh'
        }, 2300)
    });
}


const reviews = [
    {
        id: 1,
        text: 'Yemi is good at what he does so I have no reason to go elsewhere for my UX writing needs - Idris Abass, Estateintel',
    },
    {
        id: 2,
        text: 'My directors keep asking me how I keep stealing the show with my presentations!- Nafisah Gbadamosi, Markets.ng',
    },
    {
        id: 3,
        text: 'You always dazzle me with your ad copy! - Odun Kazeem, 1st Point Hotel',
    },
    {
        id: 4,
        text: 'You should charge more for work like these! - Ira Selby Dakat, Sterling Bank',
    },
    {
        id: 5,
        text: 'This is so simple yet it captures everything I want this app to say! -Farouk Musa, Bridge Networks',
    }
];

// const tab = document.querySelectorAll('.review-text');
const tab = document.getElementById('review-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIte = 0;

const showPerson = (person) => {
    const item = reviews[person];
    tab.textContent = item.text;
}

window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentIte);
});

nextBtn.addEventListener('click', () => {
    currentIte++;
    if(currentIte > reviews.length - 1) {
        currentIte = 0;
    }
    showPerson(currentIte);
    // console.log('clicked');
});

prevBtn.addEventListener('click', () => {
    currentIte--;
    if(currentIte < 0) {
        currentIte = reviews.length - 1;
    }
    showPerson(currentIte);
});


const srcs = [
    {
        id: 1,
        src: 'Konga.png',
    },
    {
        id: 2,
        src: 'African Alliance.png',
    },
    {
        id: 3,
        src: 'Mailman main logo.png',
    },
    {
        id: 4,
        src: 'Madison and Park.png',
    },
    {
        id: 5,
        src: 'AIC.png',
    },
    {
        id: 6,
        src: 'Sterling Bank.png',
    },
    {
        id: 7,
        src: 'CGTN.png',
    },
    {
        id: 8,
        src: 'Noemdek.png',
    },
    {
        id: 9,
        src: 'Nivea.png',
    },
    {
        id: 10,
        src: 'BUH.png',
    }
];
let currentItem = 0;

const clientImg = document.getElementById('client-img');


const showClient = (img) => {
    const item = srcs[img];
    clientImg.setAttribute("src", item.src)
}

setInterval(
    () => {
        currentItem++;
        if(currentItem > srcs.length - 1) {
            currentItem = 0;
        }
        showClient(currentItem);
        showClient2(currentItem);
    }
, 1000);


const closeBtn2 = document.querySelector('.close-btn2');
const credit2 = document.querySelector('.credit2');
const credits2 = document.querySelector('.credits2');

closeBtn2.addEventListener('click', e => {
    credit2.style.display = 'none'
});
credits2.addEventListener('click', e => {
    credit2.style.display = 'flex'
});
 
const closeBtn = document.querySelector('#close-btn');
const credit = document.querySelector('#credit');
const credits = document.querySelector('#credits');

closeBtn.addEventListener('click', e => {
    credit.style.display = 'none'
});
credits.addEventListener('click', e => {
    credit.style.display = 'flex'
});












