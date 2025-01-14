# use client

<br />
<br />

* 클라이언트 컴포넌트? 서버 컴포넌트?

```
React가 19 버전에서 정식으로 서버 컴포넌트를 지원하게 됐다.
서버 컴포넌트는 말 그대로 서버에서만 작업하는 컴포넌트이다.

그러므로 SSR을 사용할 수 있게 됐다.
(만세!라고 할 필요는 없는 게 Next에서는 더 많은 렌더링을 지원했기에..)

그럼 어떤 컴포넌트가 "서버"이고 "클라이언트"가 되는지 알아보자.
```

<br />
<br />
<br />
<br />


1. 서버 컴포넌트 (Server component)

```
Next 최신 버전에서는 (현재 기준 15) 기본적으로 모든 컴포넌트가 "서버 컴포넌트"이다.

Next는 빌드 타임에 사전 렌더링을 하는데, 이때 렌더링을 한번 진행하고,
추후에 Hydration을 진행하기 전 JS Bundle을 받아 한 번 더 렌더링을 한다.

총 두 번의 렌더링이 발생하는 것인데,
이때의 JS Bundle에는 모든 컴포넌트가 딸려온다.
(이 부분에서 낭비가 시작)

무슨 얘기냐 하면, 빌드 타임에 사전 렌더링이 진행된 컴포넌트에는
분명 JS와의 연결이 필요없는 정적인 페이지도 존재하기 때문에,
해당 컴포넌트는 Hydration을 진행하는 데 필요하지 않다.

하지만 그것과 상관없이 JS Bundle에는 모든 컴포넌트가 포함되어 있어,
JS Bundle의 용량이 커지고 Hydration의 시간이 길어지게 된다.
(이러한 문제는 TTI (Time To Interactive)까지 떨어뜨린다.)

이 문제를 해결하기 위해 Next는 서버컴포넌트를 서버에서 사전 렌더링을 할 때,
모든 렌더링을 끝내고, client와의 상호작용이 필요한 컴포넌트를
분리하여 해당하는 JS Bundle만을 브라우저에게 보내고,
Hydration을 진행할 수 있도록 변경되었다.

(최신 버전의 Next는 기본 컴포넌트가 React와 달리 서버 컴포넌트이다.)
```

<br />
<br />
<br />

2. 클라이언트 컴포넌트 (Client component)

```
컴포넌트 최상단에 'use client" 라는 지시어를 사용하면,
클라이언트 컴포넌트로 인식하고,
useState(), useEffect() 등의 훅을 사용할 수 있다.

기존의 리액트를 떠올리면 쉬우나 Next의 클라이언트 컴포넌트 또한
사전 렌더링을 진행하기 때문에,
굉장히 빠른 FCP (First Contentful Paint)를 갖는다.
```
