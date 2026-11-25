/* 모든 형성평가 페이지가 함께 쓰는 점수 전송 모듈.
   Apps Script를 배포한 뒤 나오는 웹 앱 URL을 아래 따옴표 안에 붙여 넣으세요. */
window.Collector = (() => {
  const URL = 'https://script.google.com/a/macros/senedu.kr/s/AKfycbxyaaAEgIiCtitApuN1X_JEnjg9_XqEZc19ehdEc09O7eAAqkUPd5jdVA80yKej2OzH/exec';
  const ready = () => URL.startsWith('https://script.google.com/');
  const attempt = quiz => {
    let n = 1;
    try { n = (+localStorage.getItem('dsq-try-' + quiz) || 0) + 1; localStorage.setItem('dsq-try-' + quiz, n); } catch (e) {}
    return n;
  };
  async function send(payload) {
    if (!ready()) throw new Error('수집 주소가 아직 설정되지 않았어요.');
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 15000);
    try {
      const r = await fetch(URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload), signal: ctl.signal });
      let j = null;
      try { j = await r.json(); } catch (e) {}
      if (!r.ok || !j) throw new Error('저장 서버가 응답하지 않았어요. 잠시 후 다시 보내세요.');
      if (!j.ok) throw new Error('저장하지 못했어요. 다시 보내세요.');
      return true;
    } finally { clearTimeout(timer); }
  }
  return { send, attempt, ready };
})();
