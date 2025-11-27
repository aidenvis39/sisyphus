
const TEXTS = {
    PROLOGUE: [
        "하늘은 오래전에 너를 잊었다.\n그러나 산과 돌은, 아직도 네 이름을 알고 있다.",
        "---\n\n한때 너는 에피라의 왕이었다.\n손님을 속여 피를 흘리게 했고,\n신들의 비밀을 팔아 이득을 챙겼으며,\n죽음조차 속여 쇠사슬에 묶어\n세상에서 아무도 죽지 못하게 만들었다.\n마침내 네 죽음이 왔을 때도\n저승의 여왕을 속여 다시 올라와\n오래, 아주 오래 삶을 누렸다.\n너의 죄는 하나였다.\n삶을 누구보다 사랑했으나,\n그 사랑은 끝없이 자기 자신만을 향해 있었다는 것.\n그래서 신들은 너에게 단 한 가지 형벌을 내렸다.\n끝이 없는 산.\n정상에 이르면 반드시 굴러 떨어지는 돌.\n그리고 그 돌을 다시 밀어 올리는 너의 두 손.",
        "---\n\n처음에는 분노였다.\n언젠가 또 한 번 속여 빠져나가리라 이를 갈며 산을 올랐다.\n그러나 수많은 해가 지나고 발자국이 산허리에 굳어갈수록\n분노도, 저주도, 체념도 아닌 것이 자라났다.\n형벌의 이름을 묻는 마음.\n\"만약 이것이 내 유일한 삶이라면,\n나는 이 삶을 어떻게 바라볼 것인가.\"",
        "---\n\n오늘도 산기슭에 익숙한 무게의 돌이 너를 기다리고 있다.\n수없이 올랐던 그 길, 수없이 내려갔던 그 비탈.\n오늘, 네가 다시 오른 이 산 위에서\n너는 또 한 번 묻게 될 것이다.\n\"이 끝없는 오르막 속에서, 나에게 '삶'이란 무엇인가.\"\n돌은 다시 네 손에 맡겨진다.\n산은 조용히 길을 내어 준다.\n발을 떼어라.\n오늘의 대답은, 오늘 올라가는 네 걸음 속에서 시작될 것이다."
    ],
    Q1: {
        text: `첫 돌을 겨우 정상까지 밀어 올린 순간, 돌은 아무 망설임도 없이 산 아래로 굴러 떨어졌다. 
숨을 고르며 너는 다시 그 비탈길을 내려간다. 돌은 이미 아래서 널 기다리고 있고, 이 오르막이 한 번으로 끝나지 않을 것도 안다. 
내려가는 발걸음 사이로, 방금의 오르막과 그 결말을 떠올리며 네 안에서 한 가지 생각이 또렷해진다.`,
        choices: [
            { id: 'a', text: "나는 내 몫을 다했다. 돌을 올렸고, 끝까지 밀어 올렸다. 잘못된 건 처음부터 이 형벌을 정한 신들과, 정상에 닿아도 아무것도 달라지지 않도록 짜 놓은 이 세계다." },
            { id: 'b', text: "모두 흩어졌지만, 방금 정상에서 마주한 바람과 숨 한 번의 높이는 분명히 내 것이었다. 그 한순간만으로도, 다시 오를 이유는 된다." },
            { id: 'c', text: "어디에서 돌이 미끄러지는지, 이 산은 아직 다 읽히지 않았다. 걸음과 손을 달리해, 더 능숙한 나로 다시 올라가야겠다." },
            { id: 'd', text: "“끝없는 오르막과 추락이라 해도 여기에는 분명 어떤 뜻이 숨어 있을 것이다. 나는 아직 그것을 이해하지 못했을 뿐, 언젠가 이 형벌의 이유를 알아내고 싶다.”" }
        ]
    },
    Q2: {
        text: `다섯 번의 오르막과 다섯 번의 추락. 산허리에는 네 발자국과 돌이 지나간 자리가 겹겹이 남아 있다. 
처음만큼 낯설지는 않은 이 형벌과 너를 지금 가장 잘 설명하는 문장은 어느 쪽인가?`,
        choices: [
            { id: 'a', text: "“언젠가부터 생각이 앞서지 않는다. 마음이 결심하기도 전에 몸이 먼저 돌 앞으로 걸어 나간다. 분명 내 발이지만, 내가 걷는다는 느낌은 점점 옅어지고 있다.”" },
            { id: 'b', text: "“다섯 번의 오르막은 어느 하나도 가볍지 않았다. 돌 위에 남은 상처보다, 그때마다 드러난 내 얼굴이 더 선명하다. 아직 이 형벌의 이유는 모른다. 다만 이 반복 속에서 내가 어떤 사람인지가 조금씩 보이기 시작했다.”" },
            { id: 'c', text: "“처음의 나는 이 산을 형벌로만 보았다. 그러나 다섯 번의 돌을 밀어 올리는 동안 숨이 버티는 법, 손이 미끄러지지 않는 각도를 몸이 배워 왔다. 이 산은 여전히 신들의 것이겠지만, 이 곳은 이제 나의 훈련장이다.”" },
            { id: 'd', text: "“다섯 번을 올려도 끝은 없다. 정상이 있어도 결말은 없고, 노력은 쌓여도 무엇 하나 바뀌지 않는다. 이 길은 처음부터 틀렸다. 다만 나는 너무 늦게 그것을 인정했을 뿐이다.”" }
        ]
    },
    Q3_VICTIM: {
        text: `바위는 다시 산 아래에 있다. 10번의 오르막 동안 신들은 한 번도 모습을 드러내지 않았다. 
숨만 거칠게 드나들 뿐, 이 형벌의 주인은 끝내 모습을 보이지 않는다. 너는 마음속으로 묻는다. 
이 끝없는 오르막은 누구의 잘못이라 말할 수 있겠는가?`,
        choices: [
            { id: 'a', text: "“이 형벌도, 이 산도, 이 돌도 모두 신들의 장난일 뿐이다. 나는 그저 끌려 들어온 희생자다.”" },
            { id: 'b', text: "형벌을 정한 것은 신들이다. 그러나 이 형벌이 나에게 닿게 된 길에는 분명 내가 저지른 꾀와 거짓, 넘지 말았어야 할 선들이 있었다. 신들은 지나치게 벌하고 있고, 나는 지나치게 즐겼다. 잘못은 나누어져 있다" },
            { id: 'c', text: "이 돌도, 이 산도, 이 형벌도 결국 내가 살아온 방식의 끝에 놓인 결과다. 신들의 심판이 과하다고 말할 수도 있겠지만, 약속을 어기고, 죽음을 속이고, 다른 이들의 삶을 내 재미와 이익에 쓴 것은 나다. 이 길을 고른 것도, 지금 이 돌을 다시 밀어 올리는 것도, 결국 전부 나의 몫이다." },
            { id: 'd', text: "어디까지가 나의 죄이고, 어디까지가 신들의 장난인지 이제는 선을 그을 수가 없다. 그때는 그것이 옳다고 믿었고, 신들도 자신들의 질서를 위해 나를 썼을 뿐이다. 이 형벌은 누가 더 많이 틀렸는지를 재는 저울이 아니라, 그저 이렇게 흘러와 버린 하나의 결과처럼 느껴진다." }
        ]
    },
    Q3_AGENT: {
        text: `신들은 네 위에 형벌을 얹었을 뿐이다. 그러나 10번의 오르막 동안 너는 알고 있다. 
바위를 붙잡는 손의 힘, 끝없이 이어지는 오르막과 추락 속에도 이 길 어딘가에는 
분명 어떤 뜻이 숨어 있다는 것을. 

너는 아직 그것을 이해하지 못했을 뿐, 언젠가 이 형벌의 이유를 알아내고 싶다고 
마음속으로 조용히 되뇌인다. 

걷기 시작하는 발걸음, 이를 악무는 순간들은 과연 누구의 것이었는지. 
만약 누군가 이 삶의 주인이 누구냐고 묻는다면, 지금의 너는 어떻게 대답하겠는가?`,
        choices: [
            { id: 'a', text: "“형벌을 내린 것은 신들이다. 그러나 이 형벌을 ‘나의 삶’이라 부를지 말지는 내가 정한다. 나는 이 오르막에 내 이름을 걸고 있다.”" },
            { id: 'b', text: "“돌도, 산도, 신들의 장난도 모두 내 삶으로 받아들인다. 이 길을 저주할 수도, 사랑할 수도 있는 것은 오직 나뿐이다. 그러니 이 삶의 책임 역시 온전히 나의 몫이다.”" },
            { id: 'c', text: "“선택이 내 몫이라는 말은 안다. 그러나 삶에 주체가 나라고 생각하는 순간 숨이 막힌다. 나는 그 무게와 친해지는 법을 아직 잘 모른다.”" }
        ]
    },
    Q3_MIXED: {
        text: `어느 날의 너는 “이 길은 신들의 잘못”이라 말했고, 또 어느 날의 너는 “그래도 바위를 미는 손은 내 것”이라 말했다. 
저주와 수용, 피해자와 선택하는 자, 두 얼굴이 한 몸 안에서 번갈아 숨 쉰다. 
네가 스스로를 바라볼 때, 지금의 너는 어느 쪽에 더 가까운가?`,
        choices: [
            { id: 'a', text: "“입으로는 선택을 말했지만, 마음 깊은 곳에서는 아직도 이 모든 것을 남의 잘못으로 여기고 있다.”" },
            { id: 'b', text: "“어떤 날은 신들을 저주하고, 어떤 날은 나 자신을 돌아본다. 아직 어느 쪽을 고르지 못한 채, 두 생각 사이를 오가고 있다.”" },
            { id: 'c', text: "“여전히 신들의 장난이 밉지만, 이 형벌을 나의 삶이라 부를지 말지는 결국 내가 정하고 싶다.”" }
        ]
    },
    Q3_NEUTRAL: {
        text: `열 번쯤의 오르막이 지나고, 이 길은 더 이상 처음처럼 낯설지 않다. 
누가 잘못했는가를 따지는 마음은 조금 옆으로 물러나 있고, 
대신 이 길 위에서 드러나는 ‘너 자신’이 더 또렷해지기 시작한다.

지금, 이 형벌과 너의 관계를 가장 가까이 설명하는 문장은 어느 쪽에 더 가깝겠는가?`,
        choices: [
            { id: 'a', text: "“이제 이 길은 그냥 나의 일과에 가깝다. 누가 잘못했는지, 왜 이런 형벌인지 따지기보다 오늘도 돌을 미는 것이 그저 해야 할 일처럼 느껴진다.”" },
            { id: 'b', text: "“오르막 하나하나가 여전히 힘들지만, 이제는 형벌 자체보다 그 속에서 드러나는 내 표정과 선택이 더 신경 쓰인다. 이 길은 나를 시험한다기보다, 나를 비추는 거울 같다.”" },
            { id: 'c', text: "“이 시간을 나 자신을 관찰하는 작은 실험실로 삼고 싶다. 어디에서 무너지고, 어디에서 다시 일어나는지, 이 형벌 속의 ‘나’를 끝까지 지켜보고 싶다.”" },
            { id: 'd', text: "“아직 이 반복을 뭐라고 불러야 할지 모르겠다. 옳다, 그르다, 성장이다, 부당함이다 어느 쪽에도 쉽게 이름 붙이고 싶지 않다. 지금은 그저 판단을 조금 미룬 채, 이 길과 거리를 두고 바라보고 있다.”" }
        ]
    },
    EXTRA_RESP: {
        text: `여러 번의 오르막 동안 너는 서로 다른 말을 해 왔다. 어떤 날에는 “이 길은 신들의 잘못”이라 말했고, 
또 어떤 날에는 “그래도 돌을 미는 손은 내 것”이라 말했다. 저주와 수용, 피해자와 선택하는 자. 
두 목소리가 한 몸 안에서 번갈아 숨을 쉰다. 아무에게도 들려주지 않는, 네 안의 진짜 이야기는 어느 쪽에 더 가까운가?`,
        choices: [
            { id: 'a', text: "“책임이 내 몫이라는 말을 들으면 숨이 더 무거워진다. 솔직히 말하면, 아직은 이 모든 것을 신들과 세계의 잘못이라고 부르고 싶다.”" },
            { id: 'b', text: "“신들이 형벌을 내렸다는 것도, 그 속에서 내가 선택하고 있다는 것도 모두 사실이라고 느낀다. 나는 그 두 말을 쉽게 하나로 줄이고 싶지 않다.”" },
            { id: 'c', text: "“신들을 원망하는 말은 입에 익은 옛 습관이다. 정직하게 말하자면, 이 형벌을 어떻게 부를지, 어떻게 걸어 나갈지는 결국 내가 정하고 싶다.”" }
        ]
    },
    EXTRA_MEANING: {
        text: `처음 몇 번의 오르막에서 너는 이 형벌 어딘가에 숨은 뜻이 있으리라 믿었다. 다섯 번째 오르막이 끝난 지금, 너는 이 길이 처음부터 잘못되었다고 말하고 있다. 그 사이에, 네 마음에서 가장 먼저 사라진 것은 무엇이었는가?`,
        choices: [
            { id: 'a', text: "“처음에는 이 형벌에도 어떤 의도나 가르침이 깃들어 있으리라 생각했다. 지금은 더 이상 그들이 무엇을 바라보는지 알고 싶지 않다.”" },
            { id: 'b', text: "“언젠가는 버티면 달라질 거라 믿었다. 그러나 같은 오르막이 계속될수록 나 스스로에 대한 믿음이 먼저 무너져 내렸다.”" },
            { id: 'c', text: "“이 고통과 반복도 언젠가 이야기로 묶일 거라 기대했다. 지금의 나는 이 끝없는 오르막이 아무 이야기도 만들어 주지 않을 수 있다는 생각에 조금씩 익숙해지고 있다.”" }
        ]
    },
    EXTRA_NUMBNESS: {
        text: `처음 이 산을 올랐을 때의 너는 분노와 두려움, 잠깐의 기쁨까지 품고 있었다. 
몇 번의 오르막과 추락이 지나며 감정들은 하나씩 가장자리로 밀려나기 시작했다. 
지금의 너를 바라볼 때, 이 형벌 속에서 가장 먼저 사라진 것은 어떤 감정이었는가?`,
        choices: [
            { id: 'a', text: "“처음에는 이 끝없는 반복이 두려웠다. 그러나 같은 길을 수없이 오르내리며 두려움은 점점 모서리를 잃었다. 이제는 낯선 공포보다 익숙한 피로가 더 남아 있다.”" },
            { id: 'b', text: "“정상을 밟는 짧은 찰나에도 예전에는 분명 기쁨이 있었다. 지금의 나는 돌이 굴러 떨어지는 소리를 듣기도 전에 그 기쁨부터 먼저 접어 둔다.”" },
            { id: 'c', text: "“한때는 신들을 저주하며 올랐다. 그러나 저주도 오래 품고 있으면 힘이 빠진다. 이제의 나는 화를 내기에는 너무 익숙해져 버렸다.”" }
        ]
    },
    Q4_AVOID: {
        text: `수없이 올랐고, 수없이 굴러 떨어졌다. 산허리에 남은 발자국은 깊어지고, 
돌이 지나간 자리는 점점 넓어지고, 어느 틈엔가 너의 시선은 더 이상 정상만을 보지 않는다. 
산기슭의 그늘, 돌을 내려놓고 잠시 앉을 수 있는 평평한 바닥, 바람이 조금만 덜 부는 쪽, 발목이 덜 상할 수 있는 길. 
이 형벌과 함께 남은 날들을 떠올리며, 오늘의 너는 이 오르막을 마음속으로 이렇게 부르고 있다.`,
        choices: [
            { id: 'a', text: "“이 산은 처음부터 내 길이 아니었다. 기회만 주어진다면 나는 주저 없이 이 오르막을 떠날 것이다.”" },
            { id: 'b', text: "“도망칠 용기도, 더 큰 형벌을 감당할 자신도 없다. 그래서 나는 다시 돌을 미는 것이지, 이 오르막을 내 삶이라고 믿어서가 아니다.”" },
            { id: 'c', text: "“한때는 이 바위와 이 산이 삶의 전부였다. 그러나 이제는 산기슭의 작은 쉼과 낮은 길들의 숨소리도 나의 몫이라 부르고 싶다. 이 오르막은 더 이상 나를 전부 삼켜서는 안 된다.”" }
        ]
    },
    Q4_GROWTH: {
        text: `수많은 오르막 끝에 이 산은 언젠가부터 형벌이자 훈련장이 되었다. 
너의 발은 예전보다 덜 미끄러지고, 숨은 오래 버티며, 손바닥의 굳은살은 작은 방패처럼 돌을 견딘다. 
가끔은 생각한다. 이 오르막이 끝나지 않는다면, 이 형벌이 네 생애의 전부라면, 
오늘의 너는 이 반복을 마음속으로 이렇게 받아들이고 있다.`,
        choices: [
            { id: 'a', text: "“이 길이 영원히 끝나지 않는다 해도 좋다. 나는 이 바위와 함께 조금씩 단단해지고 있다. 이것은 형벌이면서, 동시에 나를 벼리는 불이다.”" },
            { id: 'b', text: "“이 반복이 언젠가 나를 다른 곳으로 이끌거나, 누군가에게 작은 빛이라도 남겨 준다면 나는 더 버틸 수 있다. 그러나 아무런 흔적도 남지 않는다면 언젠가 나는 이 길을 멈추고 싶어질 것이다.”" },
            { id: 'c', text: "“입으로는 이 산을 훈련장이라 부르며 오른다. 그러나 마음 한편에서는 언젠가 바위를 놓고 싶다는 말이 조용히 자라나고 있다. 그 두 마음이 아직은 같은 몸 안에서 어색하게 공존하고 있다.”" }
        ]
    },
    Q4_MIXED: {
        text: `이 산은 여전히 무겁고, 여전히 낯설며, 동시에 너무도 익숙하다. 
너는 높이를 오르며 몇 번이고 숨이 끊어질 것 같았고, 산기슭에서 작은 바람과 햇빛과 타인의 얼굴을 떠올리며 몇 번이고 내려가고 싶었다.
네 삶이 이 형벌과 함께 이어진다고 가정할 때, 오늘의 너는 앞으로의 날들을 이렇게 정리하고 있다.`,
        choices: [
            { id: 'a', text: "“나는 이제 이 산이 아닌 곳에서의 삶을 더 많이 꿈꾸게 된다. 높이 대신 낮고 부드러운 날들을 나의 몫으로 삼고 싶다.”" },
            { id: 'b', text: "“두렵고 고되더라도, 거짓으로 편안한 길보다는 상처 난 손으로 오르는 이 길이 나에게 더 진실하다. 나는 아직 이 높이를 완전히 포기하고 싶지 않다.”" },
            { id: 'c', text: "“나는 이 산을 완전히 버릴 수도, 전부를 바칠 수도 없다. 어느 날에는 오르막을, 어느 날에는 산기슭의 숨을 나누어 가지며 이 형벌을 내 삶의 일부로 삼고 싶다.”" }
        ]
    },
    Q5_AGENT_GROWTH: {
        text: `오늘도 바위는 네가 알던 그 자리에서 묵묵히 기다리고 있다. 수많은 오르막 끝에 너는 안다. 
이 형벌은 신들이 내린 것이지만, 이 길을 오늘 다시 오를지 말지는 언제나 네가 정해 왔다는 것을. 
굳은살이 박인 손, 상처와 함께 단단해진 발, 수없이 쓰러지면서도 다시 바위를 붙잡으려 했던 그 모든 순간들이 
이제는 너의 얼굴을 닮아 있다. 산기슭의 숨을 깊게 들이마시며, 너는 앞으로 이어질 날들에 대해 자신에게 한마디 서약을 건다. 
오늘의 너에게 가장 가까운 서약은 이 가운데 하나다.`,
        choices: [
            { id: 'a', text: "“이 바위가 내 생애의 마지막 날까지 나와 함께한다 해도 좋다. 나는 이 형벌을 내 삶이라 부르기로 했다. 주어진 불 속에서 나는 끝까지 나를 벼려 가겠다.”" },
            { id: 'b', text: "“나는 이 길을 내 선택이라 부른다. 그러나 언젠가는 무릎이 꺾일 때도 있을 것이다. 그 날이 오더라도 나 자신을 과하게 저주하지 않겠다. 숨을 고른 뒤, 다시 한 번 바위를 밀어 올리는 쪽을 가능한 한 더 많이 택하겠다.”" },
            { id: 'c', text: "“나는 이 형벌을 나의 삶으로 받아들이되, 나에게도 멈추어 설 권리가 있음을 잊지 않겠다. 더는 견딜 수 없을 때는 바위를 내려놓는 나 자신을 비겁하다고 부르지 않겠다. 성장의 이름으로 나를 태워 없애지는 않겠다고 오늘의 나는 조용히 다짐한다.”" }
        ]
    },
    Q5_VICTIM_AVOID: {
        text: `신들은 이 산을 만들었고, 이 형벌을 네 어깨 위에 얹었다. 
너는 수많은 날들을 억울함과 분노, 그리고 이해할 수 없는 침묵 속에서 보냈다. 
돌은 늘 같은 곳으로 굴러 떨어지고, 너의 숨은 늘 비슷한 자리에서 거칠어지며, 
어느 순간부터 “왜 나인가”라는 질문은 “언제 끝나는가”라는 한숨으로 바뀌어 갔다. 
오늘, 산기슭에서 바위와 네 그림자를 마주 보고 서서 너는 마음속으로 이 형벌과 자기 자신을 이렇게 부르고 있다. 
아래의 말들 중, 오늘의 너와 가장 가까운 서약을 조용히 골라 마음속에 올려본다.`,
        choices: [
            { id: 'a', text: "“이 산과 이 바위는 여전히 나의 어깨를 짓누르겠지만, 나는 이 형벌을 더 이상 ‘나의 삶’이라 부르지 않겠다. 이것은 신들이 만든 잘못된 길이고, 나는 다만 그 길에 끌려온 한 사람일 뿐이다.”" },
            { id: 'b', text: "“나는 여전히 돌을 밀어 올릴 것이다. 도망칠 힘도, 다른 벌을 감당할 용기도 나에게는 없다. 그러나 이 형벌의 주인은 신들이지, 나 자신이 아니다. 나는 이 길을 따라가되, 나의 마음만큼은 끝까지 내어주지 않겠다.”" },
            { id: 'c', text: "“이 산과 이 형벌을 만든 책임은 여전히 신들에게 있다. 그러나 이 길 위에서 무엇을 두려워하고, 무엇을 미워하며, 무엇을 지키고 싶은지는 나의 몫일지도 모른다. 나는 이 부당한 형벌을 잊지 않되, 그 안에서만큼은 나에게 속한 것과 나에게 속하지 않은 것을 조금씩 가려 보기로 한다.”" }
        ]
    },
    Q5_MEANING_COLLAPSE: {
        text: `처음 이 산을 올랐을 때의 너는 이 형벌 어딘가에 숨은 뜻이 있으리라 믿었다. 
버티면 달라질 것 같았고, 언젠가는 이 오르막이 한 편의 이야기로 엮어지리라 생각했다. 
그러나 수많은 오르막과 추락이 지나간 지금, 너는 안다. 이 길은 아무것도 약속해 주지 않으며, 
네가 쏟아 올린 숨과 상처가 반드시 어떤 결말을 가져오는 것도 아니라는 것을. 
그럼에도 바위는 여전히 여기 있고, 너의 삶 또한 이 산기슭에 이어져 있다. 
오늘의 너는 의미에 대한 옛 기대가 무너진 이 자리에서 앞으로의 날들을 이렇게 불러 보기로 한다. 
아래의 말들 중, 지금의 너에게 가장 가까운 서약을 조용히 골라 마음속에 올려본다.`,
        choices: [
            { id: 'a', text: "“이 오르막에 더 이상 아무 뜻도 묻지 않겠다. 좋지도, 숭고하지도, 성장도 아니다. 그저 하루를 견디기 위해 돌을 밀고, 언덕 위에서 숨을 몰아쉴 뿐이다. 나는 이 반복을 빈 껍데기 그대로 받아들이겠다.”" },
            { id: 'b', text: "“이 형벌이 거대한 이야기나 구원을 가져다주지 않으리라는 사실을 인정하겠다. 대신, 오르막 사이사이 스치는 바람, 산기슭의 온기, 돌을 밀다 마주치는 사소한 호흡과 눈빛에 조용히 머무르겠다. 이 반복을 떠받칠 거창한 의미는 아니더라도, 손에 잡히는 작은 것들만은 놓치지 않겠다.”" },
            { id: 'c', text: "“지금의 나는 이 형벌에서 어떤 의미도 찾아낼 수 없다고 느낀다. 그러나 오늘 이 자리에서 의미를 완전히 죽였다고 선언하고 싶지는 않다. 나는 당장은 이 오르막을 그저 오르되, 언젠가 다시 ‘이 모든 것이 무엇이었는가’라고 조용히 물어볼 수 있는 미래의 나를 아주 조금 남겨 두겠다.”" }
        ]
    },
    Q5_MIXED_COMPROMISE: {
        text: `이 산에서의 날들은 하나의 말로 묶이기 어렵다. 
어떤 날에는 높이를 향한 발걸음이 분명한 선택처럼 느껴졌고, 또 어떤 날에는 산기슭의 짧은 평온이 더 진짜 삶에 가까워 보였다. 
너는 이 형벌을 완전히 사랑하지도, 완전히 미워하지도 못한 채, 오르막과 쉼터 사이를 오가며 오늘까지 걸어왔다. 
앞으로도 이 산과 함께 삶이 이어진다고 가정할 때, 오늘의 너는 자신의 마음에 이런 약속을 하나 남겨 둔다. 
아래의 말들 중, 지금의 너에게 가장 가까운 서약을 조용히 골라 마음속에 올려본다.`,
        choices: [
            { id: 'a', text: "“나는 여전히 산기슭의 평온을 좋아한다. 그러나 갈림길에서 망설이는 순간이 올 때마다, 아주 조금이라도 더 상처 난 손으로 오르는 쪽에 마음을 기울여 보겠다. 편안함을 버리지는 않되, 의미와 진실이 보이는 쪽을 한 걸음 더 자주 택하겠다.”" },
            { id: 'b', text: "“높이와 깊이를 완전히 포기하고 싶지는 않다. 그러나 갈등의 순간에 몸과 마음이 부서질 것 같다면, 나는 나 자신을 한 발짝 먼저 지키겠다. 성장이라는 이름으로 나를 소모하지 않겠다는 쪽에 조금 더 많이 손을 들어 주겠다.”" },
            { id: 'c', text: "“나는 이 산에서 하나의 답으로 나를 묶지 않겠다. 어떤 날에는 오르막을, 어떤 날에는 산기슭의 숨을 택하며, 높이와 평온을 조금씩 조절해 가는 사람으로 남겠다. 나의 삶은 하나의 극단이 아니라, 그 사이를 오가며 균형을 배워 가는 길이라 부르기로 한다.”" }
        ]
    },
    ENDINGS: {
        "1A": `이 산에 처음 끌려왔을 때의 너는 무슨 일이 일어난 것인지조차 알지 못한 채 바위를 밀어 올렸다.
시간이 흐르면서 분노는 자라났고, 억울함은 살갗 깊이 스며들었다.
너는 수없이 속으로 말했다. “이건 나의 잘못이 아니다.”
그러나 신들은 한 번도 대답하지 않았고, 형벌은 한 번도 멈추지 않았다.
어느 순간부터 너는 이 길을 바꾸려는 시도조차 서서히 내려놓기 시작했다.

오늘, 산기슭에서 너는 조용히 이렇게 정리한다.
이 산은 잘못 세워진 산이고, 이 형벌은 애초에 내 몫이 아니었다.
나는 이 오르막을 더 이상 나의 삶이라 부르지 않겠다.
내 이름은 이 형벌의 설계자들 곁에 적히지 않을 것이며, 나는 이 모든 일을 끝까지 타인의 잘못으로 남겨 두겠다.

내일 새벽, 네 발은 어쩌면 다시 바위를 향해 걸어갈 것이다.
하지만 그 발걸음 위에 붙어 있던 “내 선택”이라는 이름표는 오늘 이 자리에서 조용히 떼어내어 버려졌다.`,
        "1B": `오랫동안 너는 이 형벌을 부정할 힘조차 없이 밀려 다녔다.
도망칠 용기도, 더 큰 벌을 감당할 용기도 네게는 없었다.
그래서 너는 바위를 미는 일을 계속해 왔다.
처음의 너는 그것마저도 자신이 선택한 것처럼 말하려 했지만, 그 말은 점점 입 안에서 무거운 돌처럼 굳어 갔다.

오늘, 너는 인정한다. 이 형벌의 주인은 신들이지, 나 자신이 아니라고.
그리고 그 인정 위에서 너는 또 하나의 서약을 세운다.
나는 이 길을 따르되, 내 마음만큼은 끝까지 내 손 안에 두겠다.
바위는 내 몸을 끌고 다니겠지만, 내가 무엇을 두려워하고, 무엇을 사랑하며, 무엇을 미워하는지는 아직 아무도 강제로 정하지 못한다고.

내일 새벽, 너는 다시 바위를 밀어 올릴 것이다.
그러나 그 반복 속에서도 최소한 한 사람만큼은, 너 자신만큼은 너를 완전히 포기하지 못할 것이다.`,
        "1C": `너는 오랫동안 이 형벌의 모든 잘못을 신들과 세계에 돌려 왔다.
그 말은 거짓이 아니었다. 형벌을 정한 것도, 바위를 네 앞에 가져다 놓은 것도 분명 그들이었다.
그러나 수많은 오르막과 추락 속에서 너는 한 가지 사실을 부정하기 어려워졌다.
이 형벌의 책임은 그들에게 있어도, 이 형벌을 겪어 내는 방식은 온전히 너의 얼굴을 닮아 간다는 것.

오늘, 산기슭에서 너는 이렇게 서약한다.
이 산과 이 돌을 만든 책임은 여전히 신들의 몫이다.
그러나 이 길 위에서 무엇을 두려워하고, 무엇을 미워하며, 무엇을 지키고 싶은지는 나의 몫으로 남겨 두겠다.
나는 이 부당한 형벌을 잊지 않되, 그 안에서만큼은 내게 속한 것과 내게 속하지 않은 것을 조금씩 가려 보기로 한다.

내일 새벽, 네 발은 여전히 바위를 향해 나아가겠지만, 그 발걸음의 그림자 속에는 아주 작은 크기의 ‘나의 선택’이 함께 서 있을 것이다.`,
        "2A": `처음 이 산을 올랐을 때의 너는 이 형벌 어딘가에 숨은 뜻이 있으리라 믿었다.
신들이 이토록 무거운 짐을 얹었다면, 그 안에는 분명 어떤 가르침이나 계획이 숨어 있을 거라 스스로를 설득했다.
너는 한동안 “언젠가는 알게 되겠지”라는 말을 자신에게 반복하며 바위를 밀어 올렸다.
그러나 오르막은 이어졌고, 돌은 늘 같은 자리를 향해 굴러 떨어졌으며, 의미를 찾으려는 너의 시선은 산허리 어딘가에서 점점 힘을 잃어 갔다.

오늘, 너는 그 오래된 기대를 내려놓는다.
이 형벌에 거대한 뜻이 숨겨져 있다는 생각을 더 이상 붙들지 않겠다.
이 산은 잘못 올라탄 길이고, 나는 다만 그 위에 끌려온 한 사람일 뿐이다.
나는 이 오르막을 더 이상 나의 삶이라 부르지 않겠다.

내일 새벽, 바위는 여전히 그 자리에 있겠지만, 너는 더 이상 그 바위 속에서 구원을 찾아내려 애쓰지 않을 것이다.
그 자리를 떠나지 못하더라도, 최소한 잘못된 약속에 자신을 묶어 두지는 않겠다고 오늘의 너는 조용히 결론짓는다.`,
        "2B": `오랫동안 너는 이 형벌 속에서 어떤 의미를 찾아내려 애써 왔다.
신들이 이 무게를 얹었다면, 그 안에는 반드시 이유가 있으리라 믿었고, 그 이유를 발견하는 것이 자신에게 주어진 사명일지도 모른다고 생각한 적도 있었다.
그러나 수많은 오르막이 지나가는 동안, 바위는 답을 주지 않았고, 신들은 침묵을 풀지 않았다.

오늘, 너는 한 가지를 인정한다.
이 형벌의 주인은 신들이고, 이 길 위에서 삶을 설명할 언어를 반드시 찾아야 할 의무는 너에게만 있는 것이 아니라는 사실을.
너는 여전히 바위를 밀어 올릴 것이다.
그러나 그 반복을 해석해 내지 못했다는 이유만으로 자신을 모자라다고 부르지 않겠다.
이 길에 이름을 붙이지 못한 채 하루를 버텼다는 이유만으로 자신을 책망하지 않겠다.

내일 네가 다시 바위를 향해 걸어갈 때, 너는 어쩌면 여전히 의미를 찾지 못했을 것이다.
그럼에도 너는 그 자리에 서 있는 너 자신을 조금은 덜 미워하게 될 것이다.`,
        "2C": `이 산에서의 네 오르막은 대부분 “이유”를 찾기 위한 여정이었다.
왜 나인가, 왜 이런 무게인가, 이 고통이 언젠가 어떤 이야기로 묶일 수 있을까를 수없이 헤아리며 바위를 밀어 올렸다.
어떤 날의 너는 신들이 숨긴 뜻을 찾고 있다고 믿었고, 또 어떤 날의 너는 그 모든 것이 허상에 불과한 것 같다고 느꼈다.

오늘, 산기슭에서 너는 조금 다른 결론을 선택한다.
이 형벌을 만든 책임은 여전히 신들의 몫이다.
그러나 이 형벌 속에서 무엇을 기억하고, 무엇을 놓아 보내며, 무엇을 나의 언어로 남길지는 나의 몫일지 모른다.
거대한 의미를 찾아내지 못하더라도, 너는 이 길 위에서 너 자신의 마음을 바라보고, 너만의 문장을 조금씩 적어 나갈 수 있다.

내일 새벽, 바위는 다시 네 앞에 놓일 것이다.
그때의 너는 여전히 완전히 이해하지 못한 얼굴로, 그러나 어제보다 조금 더 “이 이야기는 어디까지가 나의 것인가”를 구분해 보려는 사람으로 그 바위를 마주 서게 될 것이다.`,
        "3A": `처음 이 산을 올랐을 때의 너는 이 형벌이 부당하다고 느끼면서도, 어느 순간부터 그 부당함마저 네 몫으로 껴안기 시작했다.
바위를 붙잡는 손의 힘은 신들이 준 것이 아니었고, 무너진 다리로 다시 일어서는 순간들은 누구의 명령도 아닌 너 자신의 결심이었다.
수많은 오르막 끝에 너는 이 형벌을 더 이상 타인의 이야기로 남겨 두지 않았다.

오늘, 산기슭에서 너는 조용히 이렇게 말한다.
이 산은 신들이 세웠으나, 이 길은 이제 나의 삶이다.
바위는 끝없이 굴러 떨어질 것이고, 너는 끝없이 다시 밀어 올릴 것이다.
그 반복 속에서 너는 자신을 깎아 없애는 대신, 불 속에 달궈지는 쇠처럼 스스로를 벼려 가기로 했다.

내일 새벽, 바위는 다시 네 손을 찾을 것이다.
그리고 그 순간, 너는 이 길을 또 한 번 “나의 선택”이라 부를 것이다.`,
        "3B": `너는 이 형벌을 오래전부터 자신의 몫으로 받아들여 왔다.
신들이 틀을 세웠다 해도, 그 안에서 숨을 몰아쉬며 바위를 올리는 손은 언제나 네 것이었다.
너는 수없이 넘어졌고, 수없이 다시 일어났다.
오늘의 너는 안다. 끝까지 버티겠다는 말이 때로는 허세가 될 수 있다는 것을, 넘어지는 자신을 한 번도 허용하지 않는 서약이 오히려 스스로를 부서뜨릴 수 있다는 것을.

그래서 너는 이렇게 다짐한다.
나는 이 길을 나의 선택이라 부르되, 쓰러지는 날이 오면 나 자신을 끝까지 저주하지 않겠다.
숨을 고르고, 상처를 어루만지고, 그럼에도 가능한 한 많은 날들에 다시 바위를 붙잡는 쪽을 선택해 보겠다고.

내일의 너는 완벽하지 않은 결심을 안고 또 한 번 산을 오를 것이다.
그 불완전함 속에서 이 길은 조금 더 인간의 얼굴을 닮아 갈 것이다.`,
        "3C": `너는 이 산을 훈련장이라 부르며 올라왔다.
고통은 너를 단단하게 만들고, 반복은 너를 능숙하게 만들 것이라 믿었다.
많은 부분에서 그 믿음은 틀리지 않았다.
그러나 어느 날, 너는 깨닫게 되었다.
불 속에서 단단해지는 쇠에도 견딜 수 있는 온도가 있고, 끝없이 달려가는 짐승에게도 멈추어 숨을 고를 시간이 필요하다는 것을.

오늘의 너는 이 형벌을 여전히 자신의 삶으로 받아들이되, 그 삶 속에 너의 한계와 연약함도 함께 데려가기로 한다.
더 이상 성장이라는 이름으로 자신을 소모하지 않겠다고, 멈추어 서야 할 순간의 너를 비겁하다고 부르지 않겠다고 조용히 서약한다.

내일 새벽, 바위는 다시 네 앞에 놓일 것이다.
그때의 너는 더 단단한 손과, 조금 더 너그러워진 마음으로 바위를 붙잡게 될 것이다.`,
        "4A": `처음 몇 번의 오르막에서 너는 이 산을 분명한 훈련장으로 보았다.
고통은 성장의 증거였고, 반복은 단련의 과정이었다.
그러나 오르막이 길어질수록 숨은 점점 더 거칠어졌고, 손바닥의 굳은살 사이로 미처 아물지 못한 상처들이 하나둘 늘어났다.
어느 순간부터 너는 이 질문을 품고 올랐다. ‘언제까지 이렇게 버틸 수 있을까.’

오늘, 너는 그 질문에 가장 가혹한 대답을 고른다.
이 바위가 내 생애 끝날까지 나와 함께한다 해도, 나는 이 형벌을 끝까지 나의 삶이라 부르겠다고.
기울어지는 몸과, 지쳐가는 마음을 알고도, 너는 스스로를 다시 불 속으로 밀어 넣는다.
이것은 영웅적인 결심이면서, 동시에 깊이 외로운 서약이다.

내일 새벽, 바위는 다시 네 어깨 위에 놓일 것이다.
그 무게가 언젠가 너를 무릎 꿇게 할지라도, 오늘의 너는 “그래도 나는 이 길을 택했다”고 말할 수 있을 것이다.`,
        "4B": `이 산은 오랫동안 너의 훈련장이었다.
네가 견딘 숨의 개수만큼 너는 단단해졌지만, 같은 숨의 개수만큼 너는 지쳐 오기도 했다.
어떤 날의 너는 이 길을 자랑스럽게 여겼고, 또 어떤 날의 너는 이 길이 끝나지 않을까 두려워했다.

오늘의 너는 자신에게 조금 더 정직해진 얼굴로 이 형벌을 바라본다.
나는 이 오르막을 나의 선택이라 부르겠다.
그러나 쓰러지는 순간이 오면 나를 부서뜨리듯 다그치지 않겠다.
잠시 바닥에 누워 하늘을 바라볼 권리를 나 자신에게 허락하겠다.
숨을 고른 뒤, 다시 바위를 붙잡을 수 있는 날이 아직 남아 있다면, 그 날들 안에서 나는 또 한 번 이 산을 나의 길이라 부를 것이다.

내일 새벽, 네 발걸음이 산기슭을 향해 나아올 때, 그 발걸음은 강요가 아니라 조금은 너그러운 결심 위에서 움직이고 있을 것이다.`,
        "4C": `네가 이 산을 처음 훈련장이라 불렀을 때, 그 말은 진심이었다.
너는 자신을 더 나은 존재로 만들고 싶었고, 고통을 견디는 법을 배우고 싶었다.
그러나 수많은 오르막 끝에 너는 다른 진실도 보게 되었다.
끊임없는 단련은 어느 순간부터 성장이 아니라 소모가 될 수 있다는 것, 자신을 벼리는 불이 언젠가는 자신을 태워 없앨 수도 있다는 것.

오늘 너는 이 형벌을 더 이상 순수한 훈련이라 부르지 않는다.
대신 이렇게 서약한다.
나는 이 길을 나의 삶 속 한 장면으로 받아들이되, 내 한계와 피로를 함께 데려가겠다.
더는 버틸 수 없을 때, 멈추어 서는 나 자신을 실패라고 부르지 않겠다.
스스로를 몰아붙이는 대신, 걸음의 속도를 조절하는 일을 새로운 훈련으로 삼겠다.

내일의 너는 여전히 이 산을 오를 수도, 잠시 산기슭에 머무를 수도 있다.
어느 쪽이든 그 선택들 속에서 너의 삶은 계속해서 조용히 자라나고 있을 것이다.`,
        "5A": `이 산에서의 너는 언제나 둘 사이에 서 있던 사람이다.
어떤 날에는 “이 길은 신들의 잘못”이라고 말했고, 또 어떤 날에는 “그래도 바위를 미는 손은 내 것”이라 말하며 스스로를 이 길의 주인으로 세우려 했다.
저주와 수용, 피해자와 선택하는 자. 두 목소리는 한 몸 안에서 번갈아 숨 쉬며 오늘의 너를 여기까지 데려왔다.
너는 어느 한쪽으로도 완전히 기울지 못했고, 그 우유부단함이 때로는 너를 부끄럽게 하기도 했다.

그러나 오늘, 산기슭에서 숨을 고르며 너는 이 양가성을 버리는 대신 아주 작은 기울기를 선택한다.
나는 여전히 산기슭의 평온을 좋아하고, 나를 여기까지 끌고 온 억울함과 원망도 함부로 버릴 수 없다.
하지만 갈림길 앞에서 망설이는 순간이 온다면, 아주 조금이라도 더 상처 난 손으로 오르는 쪽에 마음을 기울여 보겠다.
편안함을 버리지는 않되, 의미와 진실이 보이는 쪽을 한 걸음 더 자주 택하겠다고.

내일 새벽, 네가 다시 바위를 향해 나아갈 때, 그 발걸음은 여전히 망설임을 품고 있겠지만, 그 망설임 속에서 높이를 향한 마음이 아주 조금 더 무거운 쪽으로 저울을 기울이고 있을 것이다.`,
        "5B": `너의 마음은 오랫동안 두 극 사이에서 흔들려 왔다.
신들을 원망하며 자신을 피해자로 부르던 날도 있었고, 같은 입으로 “그래도 이 길을 택한 건 나”라고 말하며 스스로에게 책임을 씌우던 날도 있었다.
그 싸움은 네 안에서 서로를 갉아먹었고, 어느새 누구의 잘못인지보다 너 자신이 점점 소모되어 간다는 사실만 분명해졌다.

오늘, 산기슭에 선 너는 그 양가성을 부정하지 않는다.
다만, 갈등이 가장 거세게 몰아치는 순간에 어느 쪽을 먼저 붙들지 스스로에게 약속하려 한다.
나는 높이와 깊이를 완전히 포기하고 싶지는 않다.
그러나 내 몸과 마음이 부서져 버릴 것 같은 순간이라면, 나는 나 자신을 한 발짝 먼저 지키겠다.
성장이라는 이름으로 나를 끝없이 몰아붙이는 대신, 멈추어 서는 쪽, 숨을 고르는 쪽, 상처를 쓰다듬는 쪽에 조금 더 자주 손을 들어 주겠다.

내일의 너는 여전히 이 산을 오를 수도, 산기슭에 남을 수도 있다.
어느 쪽을 택하든, 그 선택의 한가운데에는 “나는 나를 부서지게 두지 않겠다”는 오늘의 서약이 함께 서 있을 것이다.`,
        "5C": `너는 이 산에서 하나의 답으로 자신을 묶어 두지 못한 채 오래 걸어왔다.
신들을 저주하던 날과, 자신을 탓하던 날이 같은 기억 속에 뒤섞여 있고, 편안함을 그리워하면서도 의미를 향해 발걸음을 옮기려 했던 순간들이 겹겹이 쌓여 있다.
누군가는 그 모습을 우유부단이라 부를지 모른다.

그러나 오늘, 너는 그 흔들림을 다른 이름으로 불러 보기로 한다.
나는 이 산에서 하나의 극단으로 나를 고정해 두지 않겠다.
어떤 날에는 오르막을 택하고, 어떤 날에는 산기슭의 숨을 택하며, 그 사이의 공간에서 스스로의 속도를 조절하는 사람으로 남겠다.
나의 삶은 한 줄의 정답이 아니라, 높이와 평온 사이를 오가며 균형을 배워 가는 길이라 부르기로 한다.

내일 새벽, 네 발걸음은 다시 갈림길 앞에 설 것이다.
그때의 너는 어느 쪽으로도 완전히 기울지 않은 채, 다만 오늘보다 조금 더 자신을 이해하는 사람으로 그 갈림길을 마주 서게 될 것이다.`,
        "6A": `처음 이 산을 올랐을 때의 너는 이 형벌 어딘가에 숨은 뜻이 있으리라 믿었다.
신들이 이토록 무거운 짐을 얹었다면, 그 안에는 분명 너에게 들려주고 싶은 이야기가 있을 거라 스스로를 설득하며 바위를 밀어 올렸다.
그러나 수많은 오르막이 지나가는 동안, 신들은 침묵했고, 바위는 늘 같은 자리로 굴러 떨어졌다.
한때 너를 버티게 했던 ‘언젠가는 알게 되겠지’라는 문장은 어느 순간부터 입 속에서 힘을 잃어 갔다.

오늘, 산기슭에서 너는 그 문장을 조용히 놓아 준다.
이 오르막이 너를 더 나은 사람으로 만들지도, 이 형벌이 언젠가 거대한 의미로 묶일지도 더 이상 묻지 않겠다.
좋지도, 숭고하지도, 성장도 아니다. 그저 하루를 견디기 위해 돌을 밀고, 언덕 위에서 숨을 몰아쉴 뿐이다.
한때는 이 길에서 무엇인가를 발견하려 애썼던 너는, 이제 이 반복을 빈 껍데기 그대로 받아들이기로 했다.

내일 새벽, 바위는 여전히 네 앞에 놓일 것이다.
그리고 그 앞에 선 너는 더 이상 이 길에게 아무 대답도 요구하지 않는 사람으로 돌을 떠밀게 될 것이다.`,
        "6B": `너는 오랫동안 이 형벌 속에서 하나의 커다란 의미를 찾으려 했다.
이 고통이, 이 반복이, 언젠가 하나의 이야기로 엮여 너에게 답을 줄 것이라 믿었기 때문이다.
그러나 여러 번의 오르막과 추락 끝에 너는 알게 되었다.
바위는 너의 노력을 기억하지 않고, 산은 너의 상처를 헤아리지 않으며, 이 길은 아무것도 약속해 주지 않는다는 것을.
한때 너를 지탱하던 믿음이 산허리 어딘가에서 부서져 나갈 때, 너는 함께 무너지는 자신을 느꼈다.

오늘, 너는 그 잔해 위에서 다른 선택을 한다.
이 형벌이 거대한 이야기나 구원을 가져다주지 않으리라는 사실을 인정하겠다.
대신, 오르막 사이사이 스쳐 가는 바람, 산기슭의 온기, 돌을 밀다 마주치는 사소한 호흡과 눈빛에 조용히 머무르겠다.
이 반복을 떠받칠 거창한 의미는 아니더라도, 손에 잡히는 작은 것들만은 놓치지 않겠다고.

내일 새벽, 네가 다시 바위를 떠밀 때, 이 길은 여전히 큰 이유를 주지 않을 것이다.
그러나 그 하루 속 어딘가에서 아주 작은 온기를 발견한 너는, 그 작은 것 하나 때문에 또 한 번 이 오르막을 견뎌낼지도 모른다.`,
        "6C": `이 산에서의 너는 오랫동안 ‘이유’를 향해 걸어왔다.
왜 나인가, 왜 지금인가, 이 고통이 언젠가 무엇이 될 수 있을까를 묻고 또 물었다.
그러다 어느 순간, 너는 그 질문에 아무 대답도 돌아오지 않는다는 사실을 받아들이게 되었다.
의미를 찾으려던 눈길은 서서히 힘을 잃었고, 한때는 너를 살게 했던 질문들이 이제는 너를 더 깊은 허무로 끌어내렸다.

오늘의 너는 솔직히 말해, 이 형벌에서 어떤 의미도 찾아낼 수 없다고 느낀다.
그럼에도 너는 한 걸음 더 나아가 완전한 부정을 선택하지는 않는다.
지금의 나는 이 모든 것을 이해하지 못하지만, 오늘 이 자리에서 의미라는 단어를 완전히 죽였다고 선언하고 싶지는 않다.
나는 당장은 이 오르막을 그저 오르되, 언젠가 다시 “이 모든 것이 무엇이었는가”라고 조용히 물어볼 수 있는 미래의 나를 아주 조금 남겨 두겠다.

내일 새벽, 바위는 다시 네 앞에 놓일 것이다.
그 앞에 서 있는 너는 아직도 답을 갖지 못한 사람으로, 그럼에도 질문을 영원히 포기하지 않은 사람으로 그 길을 오르게 될 것이다.`,
        "7A": `이 산에서의 네 삶은 처음부터 끝까지 오르막만으로 이루어져 있지 않았다.
너는 언젠가부터 이 형벌을 삶의 전부가 아니라 일부로 보기 시작했다.
바위를 미는 시간과, 산기슭에서 숨을 고르는 시간, 높이를 향한 걸음과, 낮고 부드러운 길 위를 걷는 시간이 모두 너의 몫이라 부를 수 있음을 어렴풋이 알게 되었다.
너는 이 모든 것을 한꺼번에 사랑하지는 못했고, 한꺼번에 버리지도 못한 채, “나누어 가진다”는 말로 스스로를 지탱해 왔다.

오늘, 산기슭에서 너는 조용히 작은 쏠림 하나를 허락한다.
나는 여전히 산기슭의 평온을 원한다.
그러나 갈림길에서 마음이 갈라지는 순간이 온다면, 아주 조금이라도 더 상처 난 손으로 오르는 쪽에 마음을 기울여 보겠다.
편안함이 나의 삶에서 사라지지는 않겠지만, 의미와 진실이 보이는 쪽을 한 걸음이라도 더 자주 선택해 보겠다고.

내일의 너는 여전히 오르막과 평지를 나누어 걷는 삶을 살 것이다.
다만 그 사이에서 높이를 향한 마음이 어제보다 조금 더 무게를 얻게 될 것이다.`,
        "7B": `너는 어느 순간부터 이 형벌과 자신의 삶을 분리해서 보기 시작했다.
이 산은 너에게 주어진 하나의 조건일 뿐, 네 삶의 모든 장면을 이 오르막 하나가 결정하도록 내버려 두지 않겠다는 생각이 자라났다.
그래서 너는 오르막과 쉼, 긴장과 이완, 바위를 미는 시간과 그 바위에서 잠시 눈을 돌리는 시간을 나누어 가지려 했다.
많은 날 동안 너는 이 균형을 어떻게 맞추어야 할지 헤아리며 걸어왔다.

오늘, 너는 그 저울의 한쪽에 조금 더 분명한 이름을 올려 둔다.
나는 내 삶 속에서 깊이와 높이를 포기하지 않겠다.
그러나 갈등의 순간에 내 몸과 마음이 한계에 다다랐다면, 나는 나를 지키는 쪽을 먼저 택하겠다.
성장이라는 이름으로 나를 갉아먹는 선택 대신, 회복과 안전을 향한 선택에 조금 더 많은 날들을 내어 주겠다.

내일의 너는 여전히 이 산을 오를 수도, 산기슭에 머무를 수도 있다.
그 모든 선택 속에서 “나는 나를 소모하지 않겠다”는 오늘의 서약이 조용히 맥박치고 있을 것이다.`,
        "7C": `이 산에서의 네 시간들은 처음부터 한 가지 색만으로 칠해지지 않았다.
오르막과 평지, 긴장과 쉼, 부당한 형벌과 그 안에서 어떻게든 삶을 짜 맞추려는 시도들이 얽혀 있었다.
너는 언젠가부터 이 형벌을 전부도, 전혀도 아닌 “일부”로 두려 했다.
이 산이 너를 온전히 규정하지 못하도록, 동시에 이 산에서의 시간을 완전히 부정하지도 못한 채, 너는 삶의 여러 조각들을 어떻게 배치해야 할지를 조심스럽게 고민해 왔다.

오늘, 너는 자신을 이렇게 부르기로 한다.
나는 이 산에서 하나의 극단으로 서지 않겠다.
어떤 날에는 오르막을 택하고, 어떤 날에는 산기슭의 숨을 택하며, 높이와 평온, 책임과 휴식 사이를 오가며 조절하는 사람으로 남겠다.
나의 삶은 어느 한쪽에 영원히 머무는 것이 아니라, 그 사이를 오가며 스스로에게 맞는 리듬을 찾아가는 길이라 부르겠다.

내일 새벽, 바위는 또 한 번 네 앞에 놓일 것이다.
그 앞에 선 너는 “나는 반드시 이쪽이어야 한다”는 강박 대신, 오늘의 몸과 마음이 감당할 수 있는 속도와 방향을 스스로 측정해 보는 사람으로 그 바위를 마주 서게 될 것이다.`,
        "8A": `이 산에 처음 올랐을 때, 너는 두려웠다.
끝이 보이지 않는 오르막, 굴러 떨어지는 바위, 이해할 수 없는 형벌의 이유들이 가슴을 죄어 왔다.
어느 날부터인가 두려움은 서서히 모서리를 잃었다.
같은 길을 수없이 오르내리며 공포는 익숙함으로, 분노는 피로로, 기쁨은 희미한 그림자로 변해 갔다.
너는 더 이상 크게 화를 내지도 않았고, 정상을 밟는 순간에도 예전만큼의 떨림을 느끼지 못했다.
의미를 찾으려던 시선이 먼저 지쳤고, 그다음에는 감정들이 하나씩 산기슭에 떨어져 나갔다.

오늘의 너는 빈손으로 바위를 바라본다.
이 오르막을 더 이상 숭고하다고도, 성장이라고도 부르지 않겠다.
좋지도, 나쁘지도 않은 하나의 동작. 그저 몸이 기억한 대로 바위를 떠밀고, 정해진 자리에 멈춰 설 뿐이다.
너는 의미도, 감정도 이 길 위에서 크게 기대하지 않기로 했다.

내일, 네 발이 다시 바위를 향해 나아갈 때, 그 발걸음은 더 이상 저항도, 열망도 아닌, 그저 살아 있는 몸이 내딛는 한 번의 움직임일 것이다.`,
        "8B": `너의 감정들은 이 산에서 하나씩 닳아 나갔다.
처음에는 두려움이 앞섰고, 그 다음에는 아무리 반복해도 익숙해지지 않을 것 같던 분노가 있었다.
어느 날부터는 그 두 감정마저 자리를 조금씩 내주기 시작했다.
정상을 밟는 순간의 기쁨은 언젠가부터 바위가 떨어지기도 전에 먼저 접혀 버렸고, 신들을 향한 저주는 더 이상 입 안에서 힘을 갖지 못했다.
감정이 사라진 자리에는 습관이 남았고, 의미가 사라진 자리에는 텅 빈 반복이 자리 잡았다.

오늘의 너는 그 빈자리를 바라보며 다른 선택을 하나 더한다.
이 형벌이 큰 이야기나 구원을 주지 않으리라는 사실을 인정하겠다.
대신, 감정이 희미해진 이 몸으로도 아직 느낄 수 있는 것들을 붙들겠다.
숨이 오르내리는 감각, 손바닥에 남은 미세한 온기, 산기슭에서 스치는 바람 한 줄과 잠깐의 무표정한 하늘을 그냥 있는 그대로 바라보겠다.

내일 네가 다시 기계처럼 바위를 밀어 올릴 때, 그 무표정 속 어딘가에 아직 완전히 식지 않은 작은 온기 하나쯤은 남아 있을지도 모른다.
오늘의 너는 그 작은 가능성만큼은 버리지 않기로 했다.`,
        "8C": `이 산에서 많은 것들이 차례로 사라졌다.
처음의 너는 이 형벌을 두려워했고, 그다음의 너는 신들을 향해 분노했다.
잠깐이나마 정상의 기쁨을 믿었던 날들도 있었다.
그러나 오르막과 추락이 같은 모양으로 겹쳐질수록, 두려움은 무뎌지고, 분노는 지치고, 기쁨은 희미해졌다.
감정이 옅어질수록 의미 또한 멀어졌고, 어느새 너는 바위를 미는 몸과 그 몸을 바라보는 마음 사이에 얇은 유리를 하나 세운 사람처럼 느껴지게 되었다.

오늘의 너는 이 길에서 당장 어떤 의미도 찾지 못한다.
이 반복이 무엇을 위해 존재하는지, 이 형벌이 무엇을 말하려 하는지 알고 있다고 말할 수 없다.
그럼에도 너는 마음 깊은 곳에서 하나의 문을 완전히 닫지는 않기로 한다.
지금은 그저 오르막을 오르되, 언젠가 다시, 감정이 조금 돌아오거나 다른 눈으로 이 길을 바라보게 되는 날이 온다면, 그때 조용히 “이 모든 것이 무엇이었는가”라고 다시 물어볼 수 있는 여지를 남겨 둔다.

내일 새벽, 바위는 평소와 다름없이 너를 기다릴 것이다.
그 앞에 선 너는 거의 아무 감정도 없이 돌을 밀어 올릴지 모르지만, 어디선가 아주 작은 질문 하나가 아직 완전히 꺼지지 않은 불씨처럼 남아 있을 것이다.
오늘의 너는 그 불씨 하나만큼은 아직 꺼졌다고 말하지 않기로 했다.`
    }
};

const IMAGES = {
    PROLOGUE: "images/prolouge.png", // Note: user's filename has typo
    Q1: "images/Q1.png",
    Q2: "images/Q2.png",
    Q3: "images/Q3.png",
    Q4: "images/Q4.png",
    Q5: "images/Q5.png",
    EXTRA: "images/extra_Q.png",
    ENDING: "images/Q5.png" // User didn't specify ending image, reusing Q5 or maybe Q5.png is ending? User said "Q5" in list. Let's assume Q5.png for Q5 stage and Ending for now or just Q5.
};

let state = {
    M: 0,
    R: 0,
    P: 0,
    flags: new Set(),
    stage: 'PROLOGUE',
    prologueIndex: 0
};


// ----------------- LOGIC FUNCTIONS -----------------

function compute_profiles(M, R, P) {
    const getState = (v) => {
        if (v <= -3) return "low";
        if (v >= 3) return "high";
        return "mid";
    };

    const M_state = getState(M);
    const R_state = getState(R);
    const P_state = getState(P);

    let M_profile, R_profile, P_profile;

    if (M_state === "low") M_profile = "given";
    else if (M_state === "high") M_profile = "constructed";
    else M_profile = "mixed";

    if (R_state === "low") R_profile = "victim";
    else if (R_state === "high") R_profile = "agent";
    else {
        if (R >= -1 && R <= 1) R_profile = "neutral";
        else R_profile = "ambivalent";
    }

    if (P_state === "low") P_profile = "avoidant";
    else if (P_state === "high") P_profile = "growth";
    else P_profile = "mixed";

    return { M_profile, R_profile, P_profile };
}

function refine_R_profile(R_profile, flags) {
    const victim_flags = new Set([
        "q1_world_blame", "q3_route_victim", "q3_victim_full_narrative",
        "q3_mixed_inner_victim", "q3_victim_cannot_judge", "extra_resp_world_fault"
    ].filter(f => flags.has(f)));

    const agent_flags = new Set([
        "q3_route_agent", "q3_agent_strong_responsibility", "q3_agent_grudge_responsibility",
        "q3_agent_overburdened", "q3_victim_self_blame_full", "extra_resp_self_fault",
        "q4_choose_truth", "q4_strong_growth"
    ].filter(f => flags.has(f)));

    if (flags.has("extra_resp_both")) {
        victim_flags.add("both_side");
        agent_flags.add("both_side");
    }

    if (["victim", "agent"].includes(R_profile)) return R_profile;

    if (["neutral", "ambivalent"].includes(R_profile)) {
        if (victim_flags.size > 0 && agent_flags.size > 0) return "ambivalent";
        if (victim_flags.size > 0 && agent_flags.size === 0) return "victim";
        if (agent_flags.size > 0 && victim_flags.size === 0) return "agent";
        return "neutral";
    }

    return R_profile;
}

function classify_override_type(M_profile, R_profile, P_profile, flags) {
    const hope_to_despair = flags.has("pattern_hope_to_despair");
    const growth_fatigue = flags.has("pattern_growth_fatigue");

    if (flags.has("extra_meaning_collapse_full")) return 6;
    if (hope_to_despair && M_profile === "given" && P_profile === "avoidant") return 6;
    if (growth_fatigue) return 4;

    const victim_narrative = flags.has("q3_route_victim") || flags.has("q3_victim_full_narrative") || flags.has("q3_mixed_inner_victim");
    const quit_desire = flags.has("q4_quit_desire") || flags.has("q4_forced_endure");
    const agent_traits = ["q3_agent_strong_responsibility", "q3_agent_grudge_responsibility", "extra_resp_self_fault", "q4_strong_growth", "q4_choose_truth"];
    const has_agent_traits = agent_traits.some(f => flags.has(f));

    if (flags.has("q1_world_blame") && victim_narrative && quit_desire && !has_agent_traits) return 1;

    const victim_transcend = flags.has("q3_victim_shared_fault") || flags.has("q3_victim_transcend");
    if (flags.has("q1_meaning_seeker") && flags.has("q3_route_victim") && victim_transcend && !quit_desire && !hope_to_despair) return 2;

    const growth_start = flags.has("q1_growth_oriented") || flags.has("q2_training_view");
    if (growth_start && flags.has("q3_agent_strong_responsibility") && flags.has("q4_strong_growth") && !growth_fatigue) return 3;

    const victim_side_flags = ["q1_world_blame", "q3_route_victim", "q3_victim_full_narrative", "q3_mixed_inner_victim", "q3_victim_cannot_judge", "extra_resp_world_fault"];
    const agent_side_flags = ["q3_route_agent", "q3_agent_strong_responsibility", "q3_agent_grudge_responsibility", "q3_agent_overburdened", "q3_victim_self_blame_full", "extra_resp_self_fault", "q4_choose_truth"];

    const has_victim_side = victim_side_flags.some(f => flags.has(f));
    const has_agent_side = agent_side_flags.some(f => flags.has(f));

    if (has_victim_side && has_agent_side && (flags.has("extra_resp_both") || flags.has("q4_balancer"))) return 5;

    if ((flags.has("q4_restructure_life") || flags.has("q4_balancer")) && !flags.has("q4_quit_desire") && !flags.has("q4_strong_growth") && !hope_to_despair && !growth_fatigue) return 7;

    const numb_comfort = flags.has("q2_numbness") && flags.has("extra_numb_habit") && flags.has("q4_choose_comfort");
    const strong_traits = ["q4_quit_desire", "q4_strong_growth", "q3_agent_strong_responsibility", "q3_victim_full_narrative"];
    const has_strong_traits = strong_traits.some(f => flags.has(f));

    if (numb_comfort && !hope_to_despair && !growth_fatigue && !has_strong_traits) return 8;

    return null;
}

function classify_type(M_profile, R_profile, P_profile, flags) {
    R_profile = refine_R_profile(R_profile, flags);
    const override = classify_override_type(M_profile, R_profile, P_profile, flags);
    if (override !== null) return override;

    if (R_profile === "victim" && M_profile === "given" && P_profile !== "avoidant") return 2;
    if (R_profile === "victim" && P_profile === "avoidant") return 1;
    if (R_profile === "agent" && P_profile === "growth") return 3;
    if (R_profile === "agent" && P_profile !== "growth") return 4;
    if (R_profile === "ambivalent") return 5;
    if (M_profile === "given" && ["avoidant", "mixed"].includes(P_profile) && !["victim", "agent"].includes(R_profile)) return 6;
    if (P_profile === "mixed") return 7;
    return 8;
}

function map_type_to_family(type_id) {
    if ([3, 4].includes(type_id)) return "AGENT_GROWTH";
    if ([1, 2].includes(type_id)) return "VICTIM_AVOID";
    if ([6, 8].includes(type_id)) return "MEANING_COLLAPSE";
    if ([5, 7].includes(type_id)) return "MIXED_COMPROMISE";
    return "UNKNOWN";
}

// ----------------- GAME ENGINE -----------------

function renderStage() {
    const textDisplay = document.getElementById('text-display');
    const choicesContainer = document.getElementById('choices-container');
    const sceneImage = document.getElementById('scene-image');
    const contentArea = document.querySelector('.content-area');

    // Layout Handling
    contentArea.classList.remove('center-layout', 'left-side');

    if (state.stage === 'PROLOGUE') {
        contentArea.classList.add('center-layout');
    } else if (['Q2', 'Q4', 'Q5'].some(prefix => state.stage.startsWith(prefix))) {
        contentArea.classList.add('left-side');
    } else if (state.stage === 'ENDING') {
        contentArea.classList.add('ending-layout');
    }

    // Reset animations
    textDisplay.style.animation = 'none';
    textDisplay.offsetHeight; /* trigger reflow */
    textDisplay.style.animation = 'fadeIn 1s forwards';

    choicesContainer.style.animation = 'none';
    choicesContainer.offsetHeight; /* trigger reflow */
    choicesContainer.style.animation = 'fadeIn 1s forwards 0.5s';

    // Image Handling
    let imgKey = state.stage;
    if (state.stage.startsWith('Q3')) imgKey = 'Q3';
    if (state.stage.startsWith('EXTRA')) imgKey = 'EXTRA';
    if (state.stage.startsWith('Q4')) imgKey = 'Q4';
    if (state.stage.startsWith('Q5')) imgKey = 'Q5';
    if (state.stage === 'ENDING') imgKey = 'ENDING';

    if (IMAGES[imgKey]) {
        sceneImage.src = IMAGES[imgKey];
        sceneImage.classList.remove('hidden');
    } else {
        // Keep previous image or hide if none
        // sceneImage.classList.add('hidden'); 
    }

    // Content Handling
    if (state.stage === 'PROLOGUE') {
        textDisplay.innerText = TEXTS.PROLOGUE[state.prologueIndex];
        choicesContainer.innerHTML = '';
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = (state.prologueIndex < TEXTS.PROLOGUE.length - 1) ? "다음" : "형벌 시작하기";
        btn.onclick = () => {
            if (state.prologueIndex < TEXTS.PROLOGUE.length - 1) {
                state.prologueIndex++;
                renderStage();
            } else {
                state.stage = 'Q1';
                renderStage();
            }
        };
        choicesContainer.appendChild(btn);
    } else if (state.stage === 'ENDING') {
        textDisplay.innerHTML = `<p>${state.endingText.replace(/\n/g, '<br>')}</p>`;

        const typeInfo = document.createElement('div');
        typeInfo.className = 'ending-type';
        typeInfo.innerText = `(TYPE = ${state.endingTypeKey})`;
        textDisplay.appendChild(typeInfo);

        choicesContainer.innerHTML = '';
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = "다시 시작하기";
        btn.onclick = () => location.reload();
        choicesContainer.appendChild(btn);
    } else {
        // Questions
        const data = TEXTS[state.stage];
        if (!data) {
            console.error("No data for stage:", state.stage);
            return;
        }
        textDisplay.innerText = data.text;
        choicesContainer.innerHTML = '';
        data.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.innerText = choice.text;
            btn.onclick = () => handleChoice(choice.id);
            choicesContainer.appendChild(btn);
        });
    }
}

function handleChoice(choiceId) {
    const s = state;
    const f = s.flags;

    if (s.stage === 'Q1') {
        if (choiceId === 'a') { s.M -= 1; s.R -= 2; s.P -= 1; f.add("q1_world_blame"); }
        else if (choiceId === 'b') { s.M += 1; s.R += 0; s.P += 1; f.add("q1_moment_enjoy"); }
        else if (choiceId === 'c') { s.M += 1; s.R += 1; s.P += 2; f.add("q1_growth_oriented"); }
        else if (choiceId === 'd') { s.M += 2; s.R += 0; s.P += 0; f.add("q1_meaning_seeker"); }
        s.stage = 'Q2';
    } else if (s.stage === 'Q2') {
        if (choiceId === 'a') { s.M -= 1; s.R -= 1; s.P -= 1; f.add("q2_numbness"); }
        else if (choiceId === 'b') { s.M += 1; s.R += 0; s.P += 0; f.add("q2_self_reflection"); }
        else if (choiceId === 'c') { s.M += 1; s.R += 1; s.P += 1; f.add("q2_training_view"); }
        else if (choiceId === 'd') { s.M -= 2; s.R -= 2; s.P -= 2; f.add("q2_disillusion_path"); }

        // Q3 Route Logic
        // 1순위: Q1 B/D + Q2 B → 책임 갈등이 아니라 '자기-관찰' 중립 루트
        const q1_bd = f.has("q1_moment_enjoy") || f.has("q1_meaning_seeker");
        if (q1_bd && f.has("q2_self_reflection")) {
            s.stage = 'Q3_NEUTRAL';
        } else {
            if (s.R <= -1) s.stage = 'Q3_VICTIM';
            else if (s.R >= 1) s.stage = 'Q3_AGENT';
            else s.stage = 'Q3_MIXED';
        }
    } else if (s.stage.startsWith('Q3')) {
        // Q3 Logic
        if (s.stage === 'Q3_VICTIM') {
            f.add("q3_route_victim");
            if (choiceId === 'a') { s.M -= 1; s.R -= 2; s.P -= 1; f.add("q3_victim_full_narrative"); }
            else if (choiceId === 'b') { s.M += 0; s.R -= 1; s.P += 0; f.add("q3_victim_shared_fault"); }
            else if (choiceId === 'c') { s.M += 0; s.R += 2; s.P += 0; f.add("q3_victim_self_blame_full"); }
            else if (choiceId === 'd') { s.M -= 1; s.R += 0; s.P += 0; f.add("q3_victim_cannot_judge"); }
        } else if (s.stage === 'Q3_AGENT') {
            f.add("q3_route_agent");
            if (choiceId === 'a') { s.M += 1; s.R += 2; s.P += 1; f.add("q3_agent_strong_responsibility"); }
            else if (choiceId === 'b') { s.M += 0; s.R += 1; s.P += 0; f.add("q3_agent_grudge_responsibility"); }
            else if (choiceId === 'c') { s.M += 0; s.R += 1; s.P -= 1; f.add("q3_agent_overburdened"); }
        } else if (s.stage === 'Q3_MIXED') {
            f.add("q3_route_mixed");
            if (choiceId === 'a') { s.M -= 1; s.R -= 1; s.P -= 1; f.add("q3_mixed_inner_victim"); }
            else if (choiceId === 'b') { s.M += 0; s.R += 0; s.P += 0; f.add("q3_mixed_keep_ambivalence"); }
            else if (choiceId === 'c') { s.M += 0; s.R += 1; s.P += 0; f.add("q3_mixed_lean_responsibility"); }
        } else if (s.stage === 'Q3_NEUTRAL') {
            f.add("q3_route_neutral");
            if (choiceId === 'a') { s.M += 0; s.R -= 1; s.P -= 1; f.add("q3_neutral_routine_view"); }
            else if (choiceId === 'b') { s.M += 1; s.R += 0; s.P += 0; f.add("q3_neutral_self_observe"); }
            else if (choiceId === 'c') { s.M += 1; s.R += 1; s.P += 1; f.add("q3_neutral_lab"); }
            else if (choiceId === 'd') { s.M += 0; s.R += 0; s.P -= 1; f.add("q3_neutral_suspend_judgment"); }
        }

        // Determine Next Stage (Extra or Q4)
        // Extra 1: Resp
        if (s.R >= -1 && s.R <= 1 && !f.has("extra_resp_done")) {
            s.stage = 'EXTRA_RESP';
            f.add("extra_resp_triggered");
            renderStage(); return;
        }
        checkExtraMeaning();
    } else if (s.stage === 'EXTRA_RESP') {
        f.add("extra_resp_done");
        if (choiceId === 'a') { s.M -= 1; s.R -= 1; f.add("extra_resp_world_fault"); }
        else if (choiceId === 'b') { f.add("extra_resp_both"); }
        else if (choiceId === 'c') { s.M += 1; s.R += 1; f.add("extra_resp_self_fault"); }
        checkExtraMeaning();
    } else if (s.stage === 'EXTRA_MEANING') {
        f.add("extra_meaning_done");
        if (choiceId === 'a') { s.M -= 2; f.add("extra_meaning_collapse_full"); f.add("pattern_hope_to_despair"); }
        else if (choiceId === 'b') { s.M -= 1; f.add("extra_meaning_self_doubt"); }
        else if (choiceId === 'c') { s.M -= 1; f.add("extra_meaning_accept_no_story"); }
        checkExtraNumbness();
    } else if (s.stage === 'EXTRA_NUMBNESS') {
        f.add("extra_numbness_done");
        if (choiceId === 'a') { s.P -= 1; f.add("extra_numb_pain"); }
        else if (choiceId === 'b') { s.P += 0; f.add("extra_numb_habit"); }
        else if (choiceId === 'c') { s.P += 1; f.add("extra_numb_peace"); }
        goToQ4();
    } else if (s.stage.startsWith('Q4')) {
        if (s.stage === 'Q4_AVOID') {
            if (choiceId === 'a') { s.M -= 1; s.R -= 1; s.P -= 2; f.add("q4_quit_desire"); }
            else if (choiceId === 'b') { s.M -= 1; s.R -= 2; s.P -= 1; f.add("q4_forced_endure"); }
            else if (choiceId === 'c') { s.M += 1; s.R += 1; s.P += 0; f.add("q4_restructure_life"); }
        } else if (s.stage === 'Q4_GROWTH') {
            if (choiceId === 'a') { s.M += 2; s.R += 1; s.P += 2; f.add("q4_strong_growth"); }
            else if (choiceId === 'b') { s.M += 1; s.R += 0; s.P += 1; f.add("q4_conditional_growth"); }
            else if (choiceId === 'c') { s.M += 0; s.R += 0; s.P -= 1; f.add("q4_growth_fatigue"); }
        } else if (s.stage === 'Q4_MIXED') {
            if (choiceId === 'a') { s.M += 0; s.R += 0; s.P -= 1; f.add("q4_choose_comfort"); }
            else if (choiceId === 'b') { s.M += 1; s.R += 1; s.P += 1; f.add("q4_choose_truth"); }
            else if (choiceId === 'c') { f.add("q4_balancer"); }
        }

        // Calculate Final Type
        calculateFinal();
    } else if (s.stage.startsWith('Q5')) {
        // Q5 is the final stance choice
        // The choice letter (A/B/C) + Type ID = Ending Key
        const stance = choiceId.toUpperCase();
        const typeKey = `${s.typeId}${stance}`;
        s.endingText = TEXTS.ENDINGS[typeKey] || "엔딩을 찾을 수 없습니다.";
        s.endingTypeKey = typeKey;
        s.stage = 'ENDING';
    }

    renderStage();
}

function checkExtraMeaning() {
    const s = state;
    const f = s.flags;
    if (f.has("extra_meaning_done")) { checkExtraNumbness(); return; }

    const hope_start = f.has("q1_meaning_seeker") || f.has("q1_growth_oriented");
    const despair_trigger = f.has("q2_disillusion_path") || f.has("q3_mixed_inner_victim") || f.has("q3_victim_full_narrative") || f.has("q3_victim_cannot_judge");

    if (hope_start && despair_trigger) {
        s.stage = 'EXTRA_MEANING';
        f.add("extra_meaning_triggered");
        renderStage();
    } else {
        checkExtraNumbness();
    }
}

function checkExtraNumbness() {
    const s = state;
    const f = s.flags;
    if (f.has("extra_numbness_done")) { goToQ4(); return; }

    if (f.has("q2_numbness")) {
        s.stage = 'EXTRA_NUMBNESS';
        f.add("extra_numbness_triggered");
        renderStage();
    } else {
        goToQ4();
    }
}

function goToQ4() {
    const s = state;
    const { P_profile } = compute_profiles(s.M, s.R, s.P);

    if (P_profile === "avoidant") s.stage = 'Q4_AVOID';
    else if (P_profile === "growth") s.stage = 'Q4_GROWTH';
    else s.stage = 'Q4_MIXED';

    renderStage();
}

function calculateFinal() {
    const s = state;
    const f = s.flags;

    // Pattern Flags
    const hope_start = f.has("q1_meaning_seeker") || f.has("q1_growth_oriented") || f.has("q2_training_view");
    const strong_despair = f.has("q2_disillusion_path") || f.has("q4_quit_desire") || f.has("q4_forced_endure") || f.has("extra_meaning_collapse_full");

    if (hope_start && strong_despair) f.add("pattern_hope_to_despair");

    const growth_oriented = f.has("q1_growth_oriented") || f.has("q2_training_view");
    if (growth_oriented && f.has("q4_growth_fatigue")) f.add("pattern_growth_fatigue");

    // Compute Final Profiles
    const { M_profile, R_profile: R_raw, P_profile } = compute_profiles(s.M, s.R, s.P);
    const R_profile = refine_R_profile(R_raw, f);
    const type_id = classify_type(M_profile, R_profile, P_profile, f);
    const family = map_type_to_family(type_id);

    s.typeId = type_id;
    s.family = family;

    // Go to Q5 based on family
    s.stage = `Q5_${family}`;
}

// Start Game
renderStage();

