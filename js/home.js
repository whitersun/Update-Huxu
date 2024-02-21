const Huxu_json = {
    'carousel-list': [
        {
            headName: '自然農法的魅力，找尋回美麗的生態',
            description: '亮麗的生態環境，期待你的蒞臨!',
            name: '鬍鬚青蛙',
            link: '/master.html',
            images: '../../images/LR_Fix_Model/images-14.jpg'
        },
        {
            headName: '在迷人的生態中，漫步欣賞蝴蝶曼妙身影',
            description: '亮麗的生態環境，期待你的蒞臨!',
            name: '鬍鬚小蝴蝶',
            link: '/master.html',
            images: '../../images/LR_Fix_Model/images-4.jpg'
        }
    ],

    'gallery-grid': [
        {
            id: 1,
            name: '香蕉',
            description: '為高熱量水果，熱帶地區廣泛栽培食用。香蕉味香、富於營養，終年可收穫，它富含大量醣類物質及它營養成分，在某些熱帶地區可作為主要糧食。',
            images: '../../images/LR_Fix_Model/images-8.jpg',
            link: '#banana'
        },
        {
            id: 2,
            name: '四季豆',
            description: '生育旺盛、蔓性，白花，綠莢，莢型端直粗圓，無筋，肉厚，莢質細嫩，不易老化。適合用來炒食、川燙',
            images: '../../images/LR_Fix_Model/images-9.jpg',
            link: '#bean'
        },
        {
            id: 3,
            name: '麻竹筍',
            description: '外型筆直、呈圓錐狀，筍殼略帶淡綠黃色，肉質較粗、纖維多，適合切片煮湯、切絲快炒、醃製筍醬，或曬成筍乾做成其他料理。',
            images: '../../images/fruits/11.jpg',
            link: 'bamboo'
        },
        {
            id: 4,
            name: '水果玉米',
            description: '特點為皮薄無渣、口感細膩、質脆而甜，所含水分較高，生吃有解暑的功效。',
            images: '../../images/LR_Fix_Model/images-7.jpg',
            link: '#popcrop'
        },
        {
            id: 5,
            name: '小番茄',
            description: '番茄富含紅素和多種營養，是對身體很好的蔬果。外型小巧可愛，口感圓潤，可當生菜沙拉、夾土司食用，或再拌炒肉類、海鮮時加入對切的小茄，增加酸甜風味和營養。',
            images: '../../images/fruits/3.jpg',
            link: '#littleTomato'
        },
        {
            id: 6,
            name: '金鑽鳳梨',
            description: '此植株特性為生育強、果實大、肉質軟、多汁、纖維稍粗、鮮食加工皆宜。果實小、肉黃纖維細、果心小、味甜香濃。',
            images: '../../images/fruits/12.jpg',
            link: '#Fengli'
        }
    ],

    'new-list': [
        {
            id: 1,
            title: '鬍鬚蕭山上小番茄',
            description: '太過份了，#鬍鬚蕭山上小番茄 侵門踏戶在美濃設攤，就在中壇 #廟口粄條 旁，#中壇郵局 斜對面,請認明這顆大番茄，別無分行！',
            images: '../../images/news/1.jpg',
            link: 'https://www.facebook.com/photo/?fbid=810775951062497&set=a.470337271773035'
        },
        {
            id: 2,
            title: '「西施芒果」',
            description: '8/14周一是最後一批「西施芒果」宅配日，下次宅配日是明年，想訂購的朋友手腳要快喔！',
            images: '../../images/news/2.jpg',
            link: 'https://www.facebook.com/photo?fbid=698667242273369&set=a.470337271773035'
        },
        {
            id: 3,
            title: '中颱杜蘇芮',
            description: '大自然才是老大，農夫只是僕人.',
            images: '../../images/news/3.jpg',
            link: 'https://www.facebook.com/photo?fbid=690225246450902&set=a.470337271773035'
        }
    ]
};

const carouselElement = document.querySelector('#carousel');
const gridGalleryElement = document.querySelector('#grid-gallery');
const galleryGridTextElement = document.querySelector('#gallery-grid-text');
const newsListElement = document.querySelector('#news-list');


function renderCarouselElement () {
    const firstItem = `<div class="item active">
        <img class="img-responsive" src="../../images/40.jpg" alt="First slide">
        <div class="container">
            <div class="carousel-caption">
                <h1 class="fs-headline">放眼望去，壯麗的自然風光美不勝收</h1>
                <p class="fs-headline__small space-4">鬍鬚農場包括多種動物生態，環保天然，有機果實與多種蔬菜</p>
                <p><a class="btn btn-lg btn-primary fs-20 space-1" href="#" role="button">更多...</a></p>
            </div>
        </div>
    </div>`;

    const carouselItems = Huxu_json['carousel-list'].map((items) => {
        return `
        <div class="item">
            <img class="img-responsive" src="${items.images}" alt="${items.name}">
            <div class="container">
                <div class="carousel-caption">
                    <h1 class="fs-headline">${items.headName}</h1>
                    <p class="fs-headline__small space-4">${items.description}</p>
                    <p><a class="btn btn-lg btn-primary fs-20 space-1" href="${items.link}" role="button">更多...</a></p>
                </div>
            </div>
        </div>`;
    }).join('');

    return carouselElement.innerHTML = firstItem + carouselItems;
}

function renderGalleryElement () {
    const galleryItems = Huxu_json['gallery-grid'].map((item) => `
        <a class="btn btn-transparent" role="button" data-toggle="collapse" href="#collapseExample${item.id}" aria-expanded="false" aria-controls="collapseExample">
            <img src="${item.images}" class="img-of__cover" width="200" height="150" alt="${item.name}" />
        </a>
    `).join('');

    gridGalleryElement.innerHTML = galleryItems;
}

function renderGalleryGridText () {
    let html = '';
    Huxu_json['gallery-grid'].forEach((item) => {
        if (item.length === 0 ) {
            html += 'Please Click images';
        } else {
            html += `
                <div class="collapse" id="collapseExample${item.id}">
                    <div class="well">
                        <h2 class="fs-headline">${item.name}</h2>
                        <p class="lead space-1 lh-18 fs-22">${item.description}</p>
                        <a href="${item.link}" class="btn btn-transparent space-1 lh-18 fs-22">更多閱讀</a>
                    </div>
                </div>
            `;
        }
    });
    galleryGridTextElement.innerHTML = html;
}

function renderNewList() {
    const fragment = document.createDocumentFragment();
    
    Huxu_json['new-list'].forEach((new_) => {
        const div = document.createElement('div');
        div.className = "swiper-slide";
        
        const view = document.createElement('div');
        view.className = "view mb-1";
        const img = document.createElement('img');
        img.decoding = "async";
        img.loading = "lazy";
        img.className = "d-block mx-auto w-100 img-fluid";
        img.src = new_.images;
        img.alt = new_.title;
        img.width = "140";
        img.height = "140";
        img.style.objectPosition = "center";
        img.style.objectFit = "cover";
        img.style.height = "340px";
        img.style.borderRadius = "8px"
        img.style.border = "1px solid #161616";

        view.appendChild(img);
        
        const h2 = document.createElement('h2');
        h2.className = "space-1 fs-32 text-start";
        h2.textContent = new_.title;
        
        const p1 = document.createElement('p');
        p1.className = "fs-18 lh-18 space-1 text-start mx-0";
        p1.textContent = new_.description;
        
        const div2 = document.createElement('div');
        div2.className = 'd-flex justify-content-start'

        const a = document.createElement('a');
        a.className = "btn btn-outline-dark space-1 fs-18 lh-18 text-start";
        a.href = new_.link;
        a.textContent = "更多閱讀";
        
        div.appendChild(view);
        div.appendChild(h2);
        div.appendChild(p1);
        div.appendChild(div2);
        div2.appendChild(a);
        
        fragment.appendChild(div);
    });
    
    newsListElement.innerHTML = '';
    newsListElement.appendChild(fragment);

    const swiper = new Swiper('.swiper', {
        slidesPerView: 2.5,
        spaceBetween: 30,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true
        }
    });

    return swiper;
}

carouselElement && renderCarouselElement();
gridGalleryElement && renderGalleryElement();
galleryGridTextElement && renderGalleryGridText();
newsListElement && renderNewList();


