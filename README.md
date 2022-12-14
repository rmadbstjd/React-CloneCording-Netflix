<h1>https://bejewelled-bombolone-3e166d.netlify.app/</h1>
<h1>넷플릭스 클론 코딩을 해보자!</h1>
<p>사용 라이브러리</p>
<p>React, Redux toolkit, React-bootstrap, React-router-domy</p>
<p>API</p>
<p>https://www.themoviedb.org/?language=ko</p>
<p>개발 기능 리스트</p>
<p>1. 3개의 페이지가 필요(메인 페이지, 영화 페이지, 영화 상세 페이지)</p>
<p>2. 메인 페이지에서 배너를 볼 수 있고, 인기순, 평점순, 상영 예정순으로 세 가지의 카테고리를 슬라이드로 볼 수 있다.</p>
<P>2-1. 각 카테고리의 영화를 슬라이드 기능으로 옆으로 넘길 수 있다.</P>
<P>3. 각 슬라이드의 카드에 마우스를 올려놓으면 영화의 제목, 장르, 평점, 인기도, 나이제한 등을 보여준다.</P>
<P>4. 카드 안의 영화를 누르면 영화 상세 페이지로 이동하며 영화의 상세 정보를 보여준다(포스터, 제목, 줄거리, 평점, 나이제한, 예산, 손익분기점, 러닝타임 등).</P>
<P>4-1. 트레일러 버튼을 누르면 영화의 트레일러를 보여준다.</P>
<P>4-2. 리뷰 보기 버튼을 누르면 영화의 리뷰를 보여준다.</P>
<P>4-3. 관련 영화 보기 버튼을 누르면 관련된 영화를 보여준다.</P>
<P>5. 영화 검색 기능을 통해 영화를 검색할 수 있다.</P>
<P>5-1. 검색된 영화들을 정렬및 필터링을 할 수 있다.</P>

<h1></h1>
<p>await을 병렬적으로 처리해보자!</p>

![image](https://user-images.githubusercontent.com/58474431/201094995-bc20403d-5479-4601-8e42-426992a6bf76.png)

<p>위의 코드를 보면 동작하는데 아무 문제가 없어보인다. 하지만 코드를 자세히보면 await을 사용함으로써 각 코드들이 순차적으로 진행되는 것을 볼 수 있다.</p>
<p>물론, 순차적으로 실행해도 큰 문제는 없지만 퍼포먼스적인 측면에서는 약간 성능이 떨어질 수 있다. 세 개의 코드를 보면 첫 번째는 인기있는 순으로 영화의 데이터를 불러오는 API이고,</p>
<p>두 번째는 평점 순으로, 세 번째는 최신 개봉 예정순으로 불러오는 API이다. 즉, 세 개의 API가 의존성이 없어보인다. 이럴 때는 굳이 하나 씩 기다리는 것 보단</p>
<p>Promise.all()을 사용하여 api 요청을 병렬적으로 처리하는 것이 좀 더 효율적일 것 같다는 생각이 든다.</p>

![image](https://user-images.githubusercontent.com/58474431/201095841-6b2bf9f0-3765-48ee-840c-8a45fd515633.png)

<p>위의 코드처럼 작성하면 딱 한 번만 await을 사용함으로써 배열 안에 있는 API 요청을 병렬적으로 진행하고, 모든 API의 요청에 대한 응답이 올 때 까지 기다린다.</p>
