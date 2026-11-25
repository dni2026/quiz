# 데이터 과학 형성평가

GitHub Pages로 여는 형성평가 페이지 모음입니다. 학생 점수는 Google Apps Script를 거쳐 구글 시트에 평가별 탭으로 쌓입니다.

| 경로 | 내용 |
| --- | --- |
| `index.html` | 평가 목록 |
| `quiz1/` | 1차 데이터 분석 방법 (35문항) |
| `assets/collector.js` | 모든 평가가 함께 쓰는 점수 전송 모듈. 웹 앱 URL을 여기에 한 번만 넣음 |
| `apps-script/Code.gs` | 구글 시트에 붙일 수집 코드 (GitHub에 올리지 않아도 됨) |

새 평가를 추가할 때는 `quiz2/index.html`처럼 폴더를 만들고, 페이지의 `QUIZ` 이름만 바꾸면 시트에 새 탭이 자동으로 생깁니다.
