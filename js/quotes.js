const quotes = [
    {
        quote : "바다는, 크레파스보다 진한, 푸르고 육중한 비늘을 무겁게 뒤채면서, 숨을 쉰다.",
        author : "광장, 최인훈", 
    },
    {
        quote : "버스가 산모퉁이를 돌아갈 때 나는 무진 Mujin 10km 라는 이정비를 보았다. 그것은 옛날과 똑같은 모습으로 길가의 잡초 속에서 튀어나와 있었다.",
        author : "무진기행, 김승옥", 
    },
    {
        quote : "모든 아이들은 자란다. 한 사람만 빼고.",
        author : "피터 팬, 제임스 M 베리", 
    },
    {
        quote : "어느 날 아침, 그레고르 잠자가 편치 않은 꿈에서 깨어났을 때, 그는 자신이 침대 속에서 한 마리의 엄청나게 큰 갑충으로 변해 있다는 걸 깨달았다.",
        author : "변신, 프란츠 카프카", 
    },
    {
        quote : "비행기 아래로는 벌써 황금빛 석양 속으로 구름의 그림자가 짙어져 밭고랑을 지듯 펼쳐졌고, 들판은 오래도록 쓰러지지 않을 빛으로 환하게 밝았다.",
        author : "야간 비행, 앙투안 드 생텍쥐페리", 
    },
    {
        quote : "In a hole, In the ground, there lived a hobbit",
        author : "호빗, J.R.R 톨킨", 
    },
    {
        quote : "오늘, 엄마가 죽었다. 아니 어쩌면 어제. 잘 모르겠다.",
        author : "이방인, 알베르 카뮈", 
    },
    {
        quote : "부끄러움 많은 생애를 보냈습니다. 저는 인간의 삶이라는 것을 도무지 이해할 수 없습니다.",
        author : "인간실격, 다자이 오사무", 
    },
    {
        quote : "항구의 하늘은 방송이 끝난 텔레비전 색이었다.",
        author : "뉴로맨서, 윌리엄 깁슨", 
    },
    {
        quote : "여름장이란 애시당초에 글러서 해는 아직 중천에 있건만 장판은 벌써 쓸쓸하고 더운 햇발이 벌려 놓은 전시장 밑으로 등줄기를 훅훅 볶는다.",
        author : "메밀꽃 필 무렵, 이효석", 
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quotelength = quotes.length;
const todaysQuote = quotes[Math.floor(Math.random()*quotelength)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
