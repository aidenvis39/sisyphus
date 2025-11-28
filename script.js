const TEXTS = {
  PROLOGUE: [
    "하늘은 오래전에 너를 잊었다.\n그러나 산과 돌은 아직도 네 이름을 알고 있다.\n\n오늘도 너는 이 산 아래에 서 있다.\n여기서부터 네 형벌이, 또 한 번 시작된다.",

    "---\n\n한때 너는 에피라의 왕이었다.\n손님을 속이고, 신들의 비밀을 팔아 이득을 챙겼다.\n죽음마저 속여 쇠사슬에 묶어, 세상에서 아무도 죽지 못하게 만들었다.\n\n그래서 신들은 한 가지 형벌을 내렸다.\n\n영원한 반복.\n\n정상에 올리면 다시 굴러 떨어지는 돌,\n그리고 그 돌을 다시 밀어 올리는 너.",

    "---\n\n처음에는 분노뿐이었다.\n언젠가 또 한 번 속여 빠져나가리라 이를 갈며 산을 올랐다.\n그러나 발자국이 산허리에 굳어 갈수록,\n분노도, 저주도, 체념도 아닌 것이 마음속에 자라났다.\n\n만약 이것이 내 유일한 삶이라면,\n나는 이 삶을 어떻게 바라볼 것인가.",    

    "---\n\n오늘도 산기슭에 익숙한 무게의 돌이 너를 기다리고 있다.\n네 안에서 질문이 떠오른다.\n\"이 끝없는 오르막 속에서, 나에게 '삶'이란 무엇인가.\"\n\n돌은 네 손에 맡겨지고,\n산은 조용히 길을 내어 준다.\n발을 떼어라.\n오늘의 대답은, 오늘 올라가는 네 걸음 속에서 시작될 것이다."
  ],

  Q1: {
    text: `손끝이 돌에서 떨어지는 순간, 정상의 바람이 얼굴을 스쳤다. 
해냈다고 생각했다. 그런데 돌은 이미 저 아래로 굴러 내려가고 있었다.

비탈길을 내려가는 발걸음이 무겁다. 저 아래 평지에 돌이 보인다.`,
    choices: [
      { id: 'a', text: "내가 뭘 잘못했나. 돌을 끝까지 밀었는데. 애초에 이런 걸 시킨 신들이 미친 거 아냐." },
      { id: 'b', text: "그래도... 정상에서 느낀 바람은 진짜였어. 그 몇 초만으로도 다시 올라갈 이유는 되는 것 같은데." },
      { id: 'c', text: "어디쯤에서 돌이 미끄러졌더라. 저기 저 돌 튀어나온 곳. 다음엔 거길 조심해야겠어." },
      { id: 'd', text: "이게 그냥 벌칙일 리가 없는데. 신들이 뭔가 원하는 게 있을 거야. 아직 내가 모를 뿐." }
    ]
  },

  Q2: {
    text: `다섯 번째 추락이었다. 산허리에 내 발자국과 돌이 지나간 자리가 얼룩처럼 남아있다.
숨을 고르다가 문득, 이상한 걸 느꼈다.`,
    choices: [
      { id: 'a', text: "내 발이 알아서 돌 쪽으로 걸어가고 있다. 생각보다 몸이 먼저 움직인다. 이게... 나인가?" },
      { id: 'b', text: "다섯 번 다 달랐어. 어떨 때는 화났고, 어떨 때는 담담했고. 이 산이 날 보여주고 있는 건가." },
      { id: 'c', text: "손바닥에 굳은살이 생겼다. 숨 쉬는 타이밍도 알겠어. 이 산을 배우고 있어, 나." },
      { id: 'd', text: "10번을 해도 끝은 없겠지. 정상이 있어도 끝은 없어. 이건... 잘못된 거야. 처음부터." }
    ]
  },

  Q3_VICTIM: {
    text: `열 번째 돌을 밀어 올렸다. 신들은 한 번도 나타나지 않았다.
산 아래에서 돌과 마주 보고 서 있는데, 갑자기 웃음이 나왔다.`,
    choices: [
      { id: 'a', text: "얘들이 날 가지고 노는 거야. 난 그냥 끌려온 건데. 내가 뭘 어쩌라고." },
      { id: 'b', text: "신들이 너무했지. 근데 나도... 그때 약속 깨고, 죽음까지 속였잖아. 우리 둘 다 망친 거지 뭐." },
      { id: 'c', text: "결국 다 내가 한 짓이긴 해. 신들한테 한 소리 하고 싶지만, 이 길 고른 건 나야." },
      { id: 'd', text: "누가 잘못했는지 이제 모르겠어. 그냥... 이렇게 된 거지. 선 긋기엔 너무 복잡해." }
    ]
  },

  Q3_AGENT: {
    text: `열 번을 올렸다. 신들이 이 형벌을 줬지만, 
매번 다시 돌을 잡기로 한 건 나였다. 매번 오르막을 선택한 것도.

문득 손바닥의 굳은살을 본다. 이건 누구 거지?`,
    choices: [
      { id: 'a', text: "형벌은 신들이 만들었어. 근데 이걸 내 '삶'이라고 부를지는... 내가 정할 수 있겠지." },
      { id: 'b', text: "이 돌도, 이 산도, 다 내 거야. 저주하든 사랑하든 그건 내 맘이고. 그럼 책임도 내 거겠지." },
      { id: 'c', text: "선택이 내 거라는 거 알아. 근데 이 무게가... 진짜 무거워. 아직 잘 모르겠어." }
    ]
  },

  Q3_MIXED: {
    text: `어제는 신들을 욕했고, 오늘은 내 손으로 돌을 집었다.
저 위를 올려다본다. 오늘은 어떤 기분이지?`,
    choices: [
      { id: 'a', text: "입으로는 '내 선택'이라고 하는데, 속으론 아직도 '얘들이 날 이렇게 만든 거야' 하고 있어." },
      { id: 'b', text: "오늘은 내 탓 같고, 어제는 남 탓 같고. 아직 모르겠어. 둘 다 진짜 같아." },
      { id: 'c', text: "억울한 건 맞는데... 그래도 이걸 어떻게 걸어갈지는 내가 정하고 싶긴 해." }
    ]
  },

  Q3_NEUTRAL: {
    text: `열 번쯤 오르니까 이제 낯설지는 않다. 
'누가 날 여기 보냈나' 보다 '나 왜 이러고 있나'가 더 궁금해진다.

돌을 보다가, 내 얼굴이 비친 물웅덩이를 발견했다.`,
    choices: [
      { id: 'a', text: "이제 그냥 할 일이야. '오늘도 돌 밀어야지' 이 정도? 특별한 감정은 없어." },
      { id: 'b', text: "힘든 건 힘든데, 그것보다 이 과정에서 내가 어떤 표정 짓는지가 더 신경 쓰여." },
      { id: 'c', text: "이 산에서 내가 어떻게 무너지고 일어서는지 실험해보고 싶어. 끝까지 보고 싶어, 나를." },
      { id: 'd', text: "이게 맞는 건지, 틀린 건지 아직 모르겠어. 지금은 판단 안 하고 그냥 보고만 있어." }
    ]
  },

  EXTRA_RESP: {
    text: `"신들이 잘못했어"와 "내가 선택했어" 사이를 왔다갔다한다.
아무도 안 들을 때, 진짜 내 마음은 어디 있지?`,
    choices: [
      { id: 'a', text: "솔직히... 아직도 전부 다 남 탓이야. 세상이, 신들이 날 이렇게 만든 거라고." },
      { id: 'b', text: "둘 다 맞는 것 같은데. 신들도 잘못했고, 나도 선택하고 있고. 하나만 고를 수가 없어." },
      { id: 'c', text: "'신들 탓이야'는 그냥 습관처럼 하는 말이야. 진짜는... 이걸 어떻게 걸을지 내가 정하고 싶어." }
    ]
  },

  EXTRA_MEANING: {
    text: `처음엔 '이 고통에도 뭔가 의미가 있겠지' 했다.
지금은 '이건 그냥 잘못된 길이야' 하고 있다.

그 사이에 뭐가 사라졌을까.`,
    choices: [
      { id: 'a', text: "신들이 날 시험하는 건가, 가르치려는 건가 궁금했었어. 이제 알고 싶지도 않아." },
      { id: 'b', text: "버티면 뭔가 달라질 줄 알았어. 근데 뭐가 달라졌나. 나한테 대한 믿음부터 무너졌어." },
      { id: 'c', text: "언젠가 이게 의미 있는 이야기가 될 거라고 기대했었나봐. 근데 아무 이야기도 안 만들어지네." }
    ]
  },

  EXTRA_NUMBNESS: {
    text: `처음엔 화도 나고 무섭기도 하고 신기하기도 했다.
요즘은 그런 것들이 잘 안 느껴진다.

제일 먼저 무뎌진 게 뭘까.`,
    choices: [
      { id: 'a', text: "두려움. 처음엔 '이게 끝이 없으면 어쩌지' 무서웠는데. 이제는 그냥 그래." },
      { id: 'b', text: "기쁨. 정상 밟을 때 짜릿했었는데. 요즘은 정상 밟아도 '또 떨어지겠지' 이게 먼저야." },
      { id: 'c', text: "분노. 처음엔 신들한테 진짜 화났었는데. 화내는 것도 힘들어. 너무 익숙해졌어." }
    ]
  },

  Q4_AVOID: {
    text: `수십 번을 올랐다. 이제 정상보다 다른 게 더 잘 보인다.
저기 그늘, 저기 평평한 바닥, 바람 안 부는 곳.

발걸음이 자꾸 그쪽으로 기운다.`,
    choices: [
      { id: 'a', text: "이건 내 길이 아니었어. 기회만 되면... 진짜 떠나고 싶어." },
      { id: 'b', text: "도망칠 용기도 없고, 더 큰 벌 받기도 싫어서 그냥 밀고 있어. 이게 내 삶이라서가 아니야." },
      { id: 'c', text: "바위만 전부일 필요는 없잖아. 산기슭에서 잠깐 쉬는 것도 내 삶이라고 불러도 되지 않을까." }
    ]
  },

  Q4_GROWTH: {
    text: `수십 번을 올랐다. 어느새 이 산이 훈련장처럼 느껴진다.
손바닥 굳은살, 단단해진 발목, 더 길어진 숨.

이게 영원히 끝나지 않는다면.`,
    choices: [
      { id: 'a', text: "그래도 괜찮아. 나 이 산에서 강해지고 있어. 형벌이면서 동시에 날 벼리는 불이야." },
      { id: 'b', text: "이게 언젠가 의미를 남기거나, 누군가한테 도움이 된다면 버틸 수 있어. 근데 아무것도 안 남으면... 멈추고 싶을 것 같아." },
      { id: 'c', text: "입으로는 '훈련장'이라고 하는데, 솔직히 언젠가 이 돌 놓고 싶다는 생각이 자라고 있어." }
    ]
  },

  Q4_MIXED: {
    text: `이 산은 무겁고, 낯설고, 익숙하고, 모든 게 다다.
오르고 싶기도 하고 내려가고 싶기도 하다.

앞으로 어떻게 살지.`,
    choices: [
      { id: 'a', text: "요즘 산 아래 삶을 더 많이 상상해. 낮고 평온한 날들. 그게 더 좋아 보여." },
      { id: 'b', text: "힘들어도, 거짓으로 편한 것보다 진짜인 이 길이 나은 것 같아. 아직 못 놓겠어." },
      { id: 'c', text: "어떤 날은 올라가고, 어떤 날은 쉬면서 살고 싶어. 하나만 선택하기 싫어." }
    ]
  },

  Q5_AGENT_GROWTH: {
    text: `오늘도 돌은 저기 있다. 
형벌을 준 건 신들이지만, 매번 다시 오르기로 한 건 나였다.

손바닥의 굳은살을 본다. 상처들, 다시 일어선 흔적들.
이게 다 내 얼굴을 닮아간다.

내일도 오를까? 내일도, 모레도, 계속?`,
    choices: [
      { id: 'a', text: "응. 마지막 날까지 이 바위랑 함께할 거야. 이게 내 삶이니까." },
      { id: 'b', text: "무릎 꺾이는 날도 있겠지. 근데 가능하면 다시 일어서는 쪽을 택할게. 최대한." },
      { id: 'c', text: "받아들이되, 멈출 권리도 있다는 거 잊지 않을게. '성장'으로 나를 태워 없애진 않을 거야." }
    ]
  },

  Q5_VICTIM_AVOID: {
    text: `신들이 만든 산이다. 
처음엔 "왜 나야?"였고, 지금은 "언제 끝나?"가 됐다.

손에 쥔 돌이 차갑다. 오늘도 올릴까? 이걸 계속?`,
    choices: [
      { id: 'a', text: "이건 '내 삶'이 아니야. 나 그냥 끌려온 사람이야. 이 산은 내 거 아냐." },
      { id: 'b', text: "도망갈 힘은 없으니까 밀겠지. 근데 내 마음까지 주진 않아. 몸만 빌려주는 거야." },
      { id: 'c', text: "부당한 건 맞아. 근데... 그 안에서 뭐가 내 거고 뭐가 남의 건지는 구분해보고 싶어." }
    ]
  },

  Q5_MEANING_COLLAPSE: {
    text: `처음엔 '이 고통에 뭔가 뜻이 있겠지' 믿었다.
지금은 안다. 이 길은 아무것도 약속 안 한다.

의미가 무너진 자리에 서 있다. 
그래도 돌은 저기 있고, 내 발은 여전히 산에 있다.`,
    choices: [
      { id: 'a', text: "의미 같은 거 이제 안 찾아. 그냥 오늘 하루 견디는 거지 뭐. 그게 다야." },
      { id: 'b', text: "거창한 의미는 모르겠어. 근데 스치는 바람, 잠깐의 햇빛, 이런 건 놓치고 싶지 않아." },
      { id: 'c', text: "지금은 모르겠어. 근데 나중에 언젠가 '그때가 뭐였지?' 물어볼 여지는 남겨두고 싶어." }
    ]
  },

  Q5_MIXED_COMPROMISE: {
    text: `어떤 날은 오르막이 선택처럼 느껴졌고,
어떤 날은 산기슭의 평온이 진짜 삶처럼 느껴졌다.

둘 사이를 오가며 여기까지 왔다.
앞으로도 그럴 것 같다.

나는 어떤 쪽으로 기울고 싶을까.`,
    choices: [
      { id: 'a', text: "평온도 좋은데, 갈림길에서는 좀 더 의미 있어 보이는 쪽을 택하고 싶어. 조금만 더." },
      { id: 'b', text: "높이도 좋은데, 몸 부서질 것 같으면 나를 먼저 챙길 거야. 성장으로 나를 죽이진 않아." },
      { id: 'c', text: "하나만 선택하기 싫어. 오르막도 쉼터도 다 내 거야. 오가면서 균형 찾고 싶어." }
    ]
  },

  ENDINGS: {
    "1A": `이 산은 잘못 세워졌고, 이 형벌은 애초에 내 몫이 아니었다.
나는 이 오르막을 더 이상 나의 삶이라 부르지 않겠다.
내일 다시 바위를 밀더라도, 이 길의 잘못은 끝까지 신에게 남겨 두겠다.`,
    "1B": `나는 여전히 이 형벌을 따라갈 뿐, 그 주인은 신들이지 나 자신이 아니다.
그래도 무엇을 두려워하고 사랑하고 미워할지는 끝까지 내 몫으로 남겨 두겠다.
내일도 바위를 밀겠지만, 나는 나 자신만큼은 끝내 포기하지 않겠다.`,
    "1C": `이 산과 이 돌을 만든 책임은 여전히 신들의 몫이다.
그러나 이 길 위에서 무엇을 두려워하고 무엇을 지킬지는 분명 나의 선택이다.
나는 이 부당한 형벌 속에서도, 조금씩 ‘나의 몫’을 남겨 두기로 했다.`,
    "2A": `처음엔 이 형벌 어딘가에 숨은 뜻이 있으리라 믿었지만, 오르막을 거듭할수록 그 믿음은 힘을 잃어 갔다.
이제 나는 이 산을 잘못된 길, 나는 그 위에 끌려온 한 사람일 뿐이라고 인정한다.
이 형벌을 더 이상 나의 삶이라 부르지 않고, 그 안에서 구원을 찾아내려 애쓰지 않겠다.`,

    "2B": `나는 오랫동안 이 형벌 속에서 의미를 찾아내려 했지만, 바위도 신들도 끝내 아무 대답을 주지 않았다.
그래도 이 길에 의미를 찾지 못했다는 이유만으로 나 자신을 탓하진 않겠다.
내일도 바위를 밀어 올리겠지만, 의미를 찾지 못한 나를 예전만큼 미워하지는 않을 것이다.`,

    "2C": `이 산에서의 오르막은 대부분 ‘왜’라는 질문을 좇는 여정이었지만, 답은 끝내 단순하지 않았다.
형벌을 만든 책임은 여전히 신들의 몫이지만, 무엇을 기억하고 어떤 말로 남길지는 나의 몫이다.
나는 거대한 뜻을 찾지 못하더라도, 이 길 위에서 내 마음을 바라보고 나만의 문장을 조금씩 적어 가기로 했다.`,

    "3A": `이 산은 신들이 세웠지만, 이 길을 오늘 다시 오를지 말지는 내가 정해 왔다.
바위는 끝없이 굴러 떨어지겠지만, 나는 그 반복 속에서 나를 깎아 없애는 대신 불 속의 쇠처럼 스스로를 벼려 가겠다.
내일 새벽 바위를 붙잡는 순간, 나는 이 길을 또 한 번 나의 선택이라 부를 것이다.`,

    "3B": `나는 오래전부터 이 형벌을 나의 몫으로 받아들여 왔지만, 끝까지 버티겠다는 말이 때로는 나를 부서뜨릴 수 있다는 것도 안다.
그렇기에 쓰러지는 날이 오더라도 나 자신을 저주하지 않기로 했다.
숨을 고른 뒤 가능한 한 많은 날들에 다시 바위를 붙잡는 쪽을 선택하겠다고, 그렇게 돌을 민다.`,

    "3C": `나는 이 형벌을 통해 여전히 나아가려 하지만, 그 안에 나의 한계와 힘듦도 함께 인정하기로 했다.
성장이라는 이름으로 나를 채찍질하지 않고, 멈추어 서야 할 순간의 나를 비겁하다고 부르지 않겠다.
내일 다시 바위를 붙잡을 때, 나는 조금 더 단단한 손과 조금 더 너그러워진 마음을 함께 데려갈 것이다.`,

    "4A": `나는 이 형벌을 끝까지 성장이라 부르겠다고, 생의 끝날까지 이 바위와 함께하겠다고 선택했다.
몸이 기울고 마음이 지쳐가도, 그래도 이 길을 택한 건 나였다고 끝까지 말할 수 있기를 바란다.
언젠가 이 무게가 나를 무릎 꿇게 하더라도, 오늘의 나는 스스로 다시 한 번 돌을 밀어 올린다.`,

    "4B": `돌을 밀어올리는 것은 나의 선택이고, 이제 나는 쓰러지는 나를 미워하지 않기로 했다.
넘어지는 날에는 잠시 바닥에 누워 하늘을 볼 시간을 나 자신에게 허락하겠다.
숨을 고른 뒤 다시 바위를 붙잡을 수 있는 날이 남아 있다면, 그때 또 한 번 이 길을 나의 길이라 부르겠다.`,

    "4C": `나는 더 이상 이 산을 순수한 성장이라 부르지 않고, 그 안에 나의 한계와 피로도 함께 인정하기로 했다.
더는 버틸 수 없을 때 멈추어 서는 나 자신을 실패라고 부르지 않겠다.
스스로를 몰아붙이기보다, 걸음의 속도를 조절하는 일을 이제 나의 새로운 과제로 삼겠다.`,

    "5A": `신들 탓인지 내 탓인지는 여전히 모르겠다. 어떤 날은 이쪽, 어떤 날은 저쪽.
그래도 다음 갈림길에서는, 편한 쪽보다 진짜 같은 쪽을 조금 더 자주 택해보려 한다.
완전히 갈아 넣지는 않되, 의미 있는 쪽으로 아주 조금씩 기울어가는 사람으로 남고 싶다.`,

    "5B": `책임이 내 거라는 말에 숨이 막히고, 남 탓이라는 말엔 찝찝함이 남는다. 아직도 그 사이를 오간다.
하지만 한 가지는 분명해졌다. 높이를 향해 가더라도, 내가 부서질 것 같으면 멈추겠다는 것.
성장이라는 이름으로 나를 태워 없애지 않겠다고, 이 갈등 한가운데에서 조용히 선을 긋는다.`,

    "5C": `내가 이 형벌의 피해자인지 아닌지, 솔직히 아직도 왔다갔다한다. 하나로 정하고 싶지 않다.
어떤 날은 오르막을, 어떤 날은 쉼터를 택하며 그때그때 다르게 살아도 괜찮다고 생각한다.
균형이란 한 점에 고정되는 게 아니라, 기울면서도 넘어지지 않는 것이기에.`,

    "6A": `나는 한때 이 형벌 어딘가에 숨은 뜻이 있으리라 믿었지만, 이제 그 믿음을 조용히 놓아 주었다.
이 오르막은 더 이상 성장도, 가르침도 아니다. 그저 하루를 버티기 위해 돌을 밀고 숨을 몰아쉴 뿐이다.
내일도 바위를 떠밀겠지만, 나는 이 길에게 더 이상 어떤 대답도 요구하지 않겠다.`,

    "6B": `나는 이 반복이 언젠가 하나의 이야기로 엮여 줄 거라 믿었지만, 이 길은 아무것도 약속해 주지 않는다는 것을 알게 되었다.
그래도 거대한 의미 대신, 오르막 사이의 바람과 산기슭의 온기 같은 작은 것들만은 놓치지 않기로 했다.
내일 다시 바위를 밀어 올릴 때, 아마도 그 작은 온기 하나 때문에 또 한 번 이 오르막을 견뎌 낼지도 모른다.`,

    "6C": `지금의 나는 이 형벌에서 어떤 의미도 찾지 못하지만, 그렇다고 의미라는 말을 완전히 죽였다고 선언하고 싶지는 않다.
당장은 그저 이 오르막을 오르되, 언젠가 다시 ‘이 모든 것이 무엇이었는가’를 물어볼 미래의 나를 조금 남겨 두겠다.
내일도 답은 없겠지만, 질문만은 끝까지 버리지 않는 사람으로 이 길을 걷고자 한다.`,

    "7A": `이 형벌은 이제 삶의 전부가 아니라 일부이고, 나는 오르막과 산기슭의 숨을 함께 나누어 가진다.
여전히 평온을 원하지만, 갈림길 앞에서는 조금이라도 편한 쪽보다 진짜 같은 쪽을 조금 더 자주 택해보려 한다.
편안함을 지우지 않으면서도, 의미가 보이는 선택에 한 걸음 더 자주 손을 들어 주기로 했다.`,

    "7B": `이 산은 내 삶의 모든 것을 결정하지 않고, 여러가지 중 하나일 뿐이라는 것을 이제 안다.
나는 형벌을 포기하지 않겠지만, 한계에 다다른 순간에는 나를 지키는 쪽을 먼저 택하겠다.
포기하지 않음으로 나를 갉아먹기보다, 회복과 안전을 향한 선택에 조금 더 많은 날들을 내어 주기로 했다.`,

    "7C": `나는 이 형벌을 전부가 아닌 일부로 여기며, 오르막과 산기슭 사이를 오가며 살기로 했다.
어떤 날엔 오르막을, 어떤 날엔 숨을 택하며, 높이와 평온 사이에서 나에게 맞는 리듬을 조절하는 사람으로 남고자 한다.
한 방향에 고정되기보다, 오늘의 몸과 마음이 감당할 수 있는 속도와 방향을 스스로 정하는 삶을 선택했다.`,

    "8A": `처음엔 두려움이었다, 수없이 오르내리는 동안 공포와 분노, 기쁨까지 차례로 잃어 갔다.
이제 이 오르막은 더 이상 숭고함도 성장도 아닌, 그저 몸이 기억한 대로 바위를 떠미는 하나의 동작일 뿐이다.
내일 다시 바위를 향해 걸어갈 때, 그 발걸음은 저항도 열망도 아닌, 살아 있는 몸이 내딛는 한 번의 움직이다.`,

    "8B": `두려움, 분노, 기쁨이 하나씩 닳아 나간 자리에는 습관과 텅 빈 반복만이 남았다.
그래도 나는 이 형벌이 큰 이야기나 구원을 주지 않으리라는 사실을 인정하는 대신, 아직 느낄 수 있는 작은 감각들만은 붙들기로 했다.
숨의 오르내림, 손바닥의 온기, 산기슭의 바람 한 줄기만큼은 그냥 있는 그대로 바라보며 살아가겠다.`,

    "8C": `감정이 옅어지고 의미가 멀어지면서, 나는 바위를 미는 몸과 그것을 바라보는 마음 사이에 얇은 유리를 세운 사람처럼 남게 되었다.
지금은 이 반복이 무엇을 위한 것인지 알지 못하지만, 의미에 대한 문을 완전히 닫지는 않겠다.
오늘은 그저 오르막을 오르되, 언젠가 다시 ‘이 모든 것이 무엇이었는가’를 물어볼 작은 불씨 하나만은 남겨 두기로 했다.`,
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









