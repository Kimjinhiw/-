document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.nav-tags span');
    const mainContentBox = document.querySelector('.main-content-box');

    // 프로젝트 아이템을 생성하는 함수
    function createProjectItem(project) {
        return `
            <div class="project">
                <div class="project-header">
                    <div class="profile-image" style="background-color: ${project.profileColor};">${project.profileInitial}</div>
                    <div>
                        <h2>${project.title}</h2>
                        ${project.description.map(line => `<p>${line}</p>`).join('')}
                    </div>
                </div>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // 각 태그에 대한 콘텐츠
    const tagContents = {
        '스프': [
            {
                profileColor: '#87CEEB',
                profileInitial: '도',
                title: '🌟[패스트캠퍼스] 프론트엔드&백엔드 오픈세미나 참여 안내🌟',
                description: [
                        'Kernel360 X 데브캠프 부트캠프 과정이 함께하는 오픈세미나가 개최될 예정입니다. IT 분야로 취업을 희',
                        '망하시는 분들이라면 관심을 가지실 만한 알찬 주제로 함께할 예정이니 많은 관심과 참여 부탁드립니',
                        '다. 🔎 오픈세미나란?Kernel360 X 데브캠프 부트캠프 수강생들이 학습한 내용을 발표를 통해 공유하...'
                ],
                tags: ['Java','백엔드','React']
            },
            {
                profileColor: '#32CD32',
                profileInitial: '꿈',
                title: '자신없는 이력서, [무료로] 고쳐드려요!',
                description: [
                        '부트캠프는 수료했지만, 취업 준비는 여전히 막막한가요?이력서를 넣는 곳마다 탈락하고 이유를 모르겠나',
                        '요?네카라(Naver, Kakao, 라인) 출신 개발자 멘토의 코칭을 통해이력서 작성부터 피드백까지 완벽하게',
                        '준비할 수 있습니다.무료 이력서 스터디에서 1주일 만에 자신 있는 이력서를 완성하세요.🎯 스터디 진행...'
                ],
                tags: ['스터디','Go']
            },
            {
                profileColor: '#FF6347',
                profileInitial: '예',
                title: '[충청/무료] 빅테크 기업 연계 디지털 역량 강화 프로그램',
                description: [
                        '혼자 취준하는 충청도 취준핑을 위해 마련한 취업 고속도로! 빅테크 기업이 준비한 고속도로 타고 취업하자',
                        '🌟 탐방, 특강 네트워킹부터 기업 연계 교육까지! 원하는 것만 쏙쏙 골라 듣는 프로그램!▶ 모집 대상: 디지',
                        '털 역량 강화에 관심있는 충청권 누구나▶ 모집 기간: 24.09.23.(월) ~24.10.28.(월) 13:00 *각 과정별...'
                ],
                tags: ['AI/머신러닝']
            },
            {
                profileColor: '#FFB6C1',
                profileInitial: '프',
                title: '🥰 LLM을 활용한 회고 관리 서비스에서 백엔드 개발자를 찾고 있습니다!',
                description: [
                        '모집 내용현재 팀 구성 : 백엔드(1명), 프론트(2명), PM(1명), 프로덕트 디자이너(1명), 데이터 사이언티스',
                        '트_객원(1명)저희는 백엔드 개발자를 찾고 있습니다.MVP를 함께 개발하고 스터디하며 고도화까지 같이',
                        '하실 분이면 좋을 것 같습니다.합류에 관심이 많다면 모집 포지션이 없더라도 언제든 연락주세요![공통]...'
                ],
                tags: ['Spring','Python','스터디']
            }
        ],

        '인프런': [
            {
                profileColor: '#D1CCFB',
                profileInitial: '준',
                title: '콜럼버스 스터디 8기 모집 중!',
                description: [
                    '여러분은 몇 단계인가요? [ 1단계 ] 비전공자 혹은 자료구조/알고리즘을 공부한 적이 없습니다.',
                    '브론즈)🥉[ 2단계 ] 자료구조/알고리즘을 학습해 봤고, 기초 문제는 풀 수 있습니다. (백준 🥈실버4 ~',
                    '🥈실버2) [ 3단계 ] 자료구조/알고리즘에 대한 이해도가 있고, 중급 문제를 풀 수 있습니다...'
                ],
                tags: ['기획','스터디','Vue']
            },
            {
                profileColor: '#FDF5D0',
                profileInitial: '아',
                title: '(강남역) 리액트 스터디(5주차~8주차) 현업 프론트 개발자 2분 모집',
                description: [
                        '안녕하세요, 리액트에 관심 있는 여러분! 리액트 스터디 그룹을 모집합니다. 한 달 동안 함께 리액트의',
                        '세계로 빠져들 준비가 되셨나요? 😎 스터디 개요 기간: 4주 (한 달) 2024.10.12 ~ 2024.11.02 시간:',
                        '강남역 토요일 3시~6시 보증금: 2만원 모집 인원: 열정 가득한 현업 프론트 개발자 2명 모집 스터디 내...'
                ],
                tags: ['스터디','Vue','프로젝트']
            },
            {
                profileColor: '#D1CCFB',
                profileInitial: '라',
                title: '평일 저녁 강남 모각코 모집합니다!',
                description: [
                        '[개발 스터디 모집 내용 예시] 스터디 주제 : 모각코 스터디 목표 : 평일 저녁 꾸준하게 공부 예상 스터디',
                        '일정(횟수) : 월화수목 예상 커리큘럼 간략히 : 예상 모집인원 : 2 스터디 소개와 개설 이유 : 꾸준하게',
                        '같이 공부하실 분을 구하고 있어요! 혼자 하면 어렵기도 해서 스터디 관련 주의사항 : 스터디에 지원할...'
                ],
                tags: ['스터디']
            },
            {
                profileColor: '#FDF5D0',
                profileInitial: '이',
                title: '우테코 7기 백엔드',
                description: [
                        '[개발 스터디 모집 내용 예시] 스터디 주제 : 우테코 스터디 목표 : 우테코 합격 예상 스터디 일정(횟수) : 주',
                        '1회 ~ 2회 예상 모집인원 : 0명 스터디 소개와 개설 이유 : 스터디 처음이라 함께 만들어가요 스터디 관련',
                        '주의사항 : 간절한 사람만 들어와주세요. 톡 답장이나, 그냥 얻기만 한 사람은 같이 하고 싶지 않아요. 10월...'
                ],
                tags: ['스터디','백엔드']
            }
        ],

        'OKKY': [
            {
                profileColor: '#D6FED0',
                profileInitial: '지',
                title: '파이썬 스터디',
                description: [
                        '파이썬 스터디 모집합니다 댓글 달아주세요 참여인원보고 상세내용 정하겠습니다',
                ],
                tags: ['Python','스터디']
            },
            {
                profileColor: '#FDF2D0',
                profileInitial: '아',
                title: '우테코 7기 함께 뿌실 분 구합니다',
                description: [
                        '스터디 주제 : 우테코 스터디 목표 : 우테코 합격 예상 스터디 일정(횟수) : 주 1회 ~ 2회 예상 모집인원',
                        ': 0명 스터디 소개와 개설 이유 : 스터디 처음이라 함께 만들어가요 스터디 관련 주의사항 : 간절한 사람만',
                        '들어 와주세요. 이런 분들은 같이하기 싫어요 : 톡 답장이나, 그냥 얻기만 한 사람은 같이 하고 싶지 않아...'
                ],
                tags: ['스터디']
            },
            {
                profileColor: '#D6FED0',
                profileInitial: '오',
                title: '[사이드 프로젝트] 스터디 종합 플랫폼 스피너에서 기획자와 디자이너를 모집합니다',
                description: [
                        '스피너에서 함께 사이드 프로젝트를 진행할 기획자 1명 디자이너 1명을 모집합니다. ##스피너는?## 스피',
                        '너는 무한히 돌아가는 스피너처럼 끊임없는 성장과 학습을 상징하는 스터디 종합 플랫폼입니다. 스터디 생',
                        '성부터, 일정 관리, 커리큘럼 작성, 공부 시간 체크까지 스터디에 필요한 기능을 담은 서비스를 개발하고자...'
                ],
                tags: ['스터디','Go','모바일']
            },
            {
                profileColor: '#D6FED0',
                profileInitial: 'H',
                title: '[교육 스타트업 창업 멤버를 모집합니다!]',
                description: [
                        '[교육 스타트업 - 창업 멤버 모집] 대입 수시 학생부종합전형 준비를 위한 ① Open AI를 활용한 탐구보고',
                        '서 데이터 생성 판매 ②설탭 & 콴다 유형의 비교과 수업 강사 학생 매칭 플랫폼 사업을 준비중인 서울대학',
                        '교 학생입니다. 단순한 탐구주제 제시가 아니라, 10년동안 대치동 TOP 하이엔드 수시종합전형 전문 연구...'
                ],
                tags: ['기획','서비스','모바일']
            }
        ],

        '캠퍼스픽': [
            {
                profileColor: '#F1FED1',
                profileInitial: '인',
                title: '현직자와 함께하는 Spring Boot 입문 스터디',
                description: [
                        'System.out.println();만 1년째… Spring의 높은 장벽때문에 뭐부터 시작해야할지 모르겠는 당신을 위해',
                        'Java 웹 개발의 핵심, Spring Boot 입문 스터디를 진행합니다! 백엔드 개발자라면 꼭 알고 있어야하는 Sp',
                        'ring Boot. 그러나 혼자 배우기는 쉽지 않습니다. 저도 비전공자 출신으로 독학하는 과정에서 제가 제대로...'
                ],
                tags: ['Spring','스터디','Java']
            },
            {
                profileColor: '#D6FEFA',
                profileInitial: '서',
                title: '프로젝트 팀원 모집합니다',
                description: [
                        '이제 막 졸업한 백엔드 취준생입니다 개인적으로 공부는 진행하고 있지만 많이 부족한 감이 있어 함께 성장',
                        '해 나가실 분들을 모집합니다 3월부터는 진행을 해서 4월말~5월초에 마무리로 생각중입니다 프론트 : 2 -',
                        '기술스택은 추후 두분이 맞추면 될 것 같습니다(react, vue 등 사용 가능하신 분) 1. 진행내용 : 가장 주목...'
                ],
                tags: ['기획','Vue','프로젝트']
            },
            {
                profileColor: '#D1E4FC',
                profileInitial: '성',
                title: '컴활 2급 공부 같이 하실분!',
                description: [
                        '자격증 지금 급한데 혼자서는 죽어도 안 해서 같이 강제적으로 좀 할 장치가 필요합니다. 서로 모르는 부분',
                        '이 있으면 대화 나누면서 같이 공부 하실 분 있나요? 같이 자격증 꼭 땁시다!'
                ],
                tags: ['스터디']
            },
            {
                profileColor: '#F9DECE',
                profileInitial: '가',
                title: '같이 자격증',
                description: [
                        '같이 대면이나 줌으로 스터디 할 사람을 구합니다! 편한 시간대 맞춰서 조금이라도 집중할 수 있게 같이 스',
                        '터디 할 수 있었으면 좋겠습니다! 톡디 써주시면 연락드릴게요!'
                ],
                tags: ['스터디']
            }
        ],

        'Hola': [
            {
                profileColor: '#FAE5CF',
                profileInitial: '김',
                title: '[Be Brave, Make Wave: 창업경진대회 팀원 리크루팅 공고문]',
                description: [
                        '저희 팀의 목표는 자기 이해와 관리에 관심이 많은 20-30대 현대인들을 대상으로, 맞춤형 건강 관리 루틴',
                        '을 제공하는 디지털 헬스케어 플랫폼을 개발하는 것입니다. 현대 사회에서 개인의 건강과 생활 루틴을 관리',
                        '하는 데 어려움을 겪는 이들이 많습니다. 특히, 검증되지 않은 루틴을 무작정 따라하다가 실질적인 개선을...'
                ],
                tags: ['서비스']
            },
            {
                profileColor: '#DBFED0',
                profileInitial: '링',
                title: '[여행 스타트업] 매출 발생 中, 평균 70% 성장 / 콘텐츠 마케팅 인턴을 모집합니다.',
                description: [
                        '트래블마켓 - 현지거주 N년차 여행전문가와 만들어가는 1:1 맞춤 플래닝 플랫폼 트래블마켓에서 콘텐츠',
                        '마케팅 인턴을 찾습니다! 초개인화된 맞춤 여행을 위한 플래닝 플랫폼, 여행 시장에서 트래블마켓의',
                        '혁신이 시작되고 있습니다. 트래블마켓과 함께 여행 시장의 패러다임을 바꿔나갈 분을 모십니다. 우리...'
                ],
                tags: ['서비스']
            },
            {
                profileColor: '#CDD1FB',
                profileInitial: 'D',
                title: '[EatToFit] 사이드 프로젝트 구인합니다. (iOS/기획자/디자이너)',
                description: [
                        '안녕하세요. EatToFit 프로젝트를 개발하고 있는 백엔드 개발자 입니다. EatToFit 프로젝트는 음식을 분석',
                        '하여 적절한 운동 플랜을 생성 (내부적으로 ChatGPT 이용)해주고, 그에 따른 운동을 진행할 수 있도록 해',
                        '주는 서비스입니다. 대학교 졸업 프로젝트로 시작한 프로젝트이며, 동상을 수상했었는데 이것을 앱스토어...'
                ],
                tags: ['기획','서비스','모바일']
            },
            {
                profileColor: '#DBFED0',
                profileInitial: 'U',
                title: '와린이를 위한 와인 어플 FE, BE 개발자를 모집합니다 :)',
                description: [
                        '모집 인원 프론트엔드 (FE) - 1명 백엔드 (BE) - 2명 현재 팀원 기획/디자이너 - 1 (주니어 기획자) 기획/프',
                        '론트엔드 - 1 (전 임베디드 개발자, 현 기획 취준생) 진행 상황 전반적인 컨셉 결정 및 화면 설계서 작성 9',
                        '0% 완료. 개발을 위한 회의 및 스케줄링 필요. 프로젝트 소개 ‘와린이’를 위한 와인 어플을 만들고자 합니...'
                ],
                tags: ['기획','프로젝트','백엔드']
            }
        ]
    };

    function updateContent(tagName) {
        if (tagContents[tagName]) {
            mainContentBox.innerHTML = tagContents[tagName].map(createProjectItem).join('');
        }

        // 선택된 태그 스타일 변경
        tags.forEach(t => t.style.color = '');
        Array.from(tags).find(t => t.textContent === tagName).style.color = '#ff7f00';
    }

    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            updateContent(this.textContent);
        });
    });

    // 페이지 로드 시 '스프' 태그를 기본으로 선택
    updateContent('스프');
});