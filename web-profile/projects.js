// ── PROJECT CODE DATA ──
const projects = {
  quiz: {
    title: '🧠 Quiz App',
    tree: [
      { type: 'folder', label: '📁 quiz-app' },
      { type: 'file',   id: 'quiz-html',  label: '📄 index.html' },
      { type: 'file',   id: 'quiz-css',   label: '🎨 style.css' },
      { type: 'file',   id: 'quiz-js',    label: '⚡ script.js' },
    ],
    files: {
      'quiz-html': {
        name: '📄 index.html',
        code: `<span class="cm">&lt;!-- quiz-app/index.html --&gt;</span>
<span class="tg">&lt;!DOCTYPE html&gt;</span>
<span class="tg">&lt;html</span> <span class="at">lang</span>=<span class="str">"id"</span><span class="tg">&gt;</span>
<span class="tg">&lt;head&gt;</span>
  <span class="tg">&lt;meta</span> <span class="at">charset</span>=<span class="str">"UTF-8"</span><span class="tg">/&gt;</span>
  <span class="tg">&lt;meta</span> <span class="at">name</span>=<span class="str">"viewport"</span> <span class="at">content</span>=<span class="str">"width=device-width, initial-scale=1.0"</span><span class="tg">/&gt;</span>
  <span class="tg">&lt;title&gt;</span>Quiz App<span class="tg">&lt;/title&gt;</span>
  <span class="tg">&lt;link</span> <span class="at">rel</span>=<span class="str">"stylesheet"</span> <span class="at">href</span>=<span class="str">"style.css"</span><span class="tg">/&gt;</span>
<span class="tg">&lt;/head&gt;</span>
<span class="tg">&lt;body&gt;</span>
  <span class="tg">&lt;div</span> <span class="at">class</span>=<span class="str">"container"</span><span class="tg">&gt;</span>

    <span class="cm">&lt;!-- Start Screen --&gt;</span>
    <span class="tg">&lt;div</span> <span class="at">id</span>=<span class="str">"start-screen"</span> <span class="at">class</span>=<span class="str">"screen"</span><span class="tg">&gt;</span>
      <span class="tg">&lt;h1&gt;</span>🧠 Quiz App<span class="tg">&lt;/h1&gt;</span>
      <span class="tg">&lt;p&gt;</span>Uji pengetahuanmu dengan 5 soal pilihan ganda!<span class="tg">&lt;/p&gt;</span>
      <span class="tg">&lt;button</span> <span class="at">id</span>=<span class="str">"start-btn"</span><span class="tg">&gt;</span>Mulai Quiz<span class="tg">&lt;/button&gt;</span>
    <span class="tg">&lt;/div&gt;</span>

    <span class="cm">&lt;!-- Quiz Screen --&gt;</span>
    <span class="tg">&lt;div</span> <span class="at">id</span>=<span class="str">"quiz-screen"</span> <span class="at">class</span>=<span class="str">"screen hidden"</span><span class="tg">&gt;</span>
      <span class="tg">&lt;div</span> <span class="at">class</span>=<span class="str">"quiz-header"</span><span class="tg">&gt;</span>
        <span class="tg">&lt;span</span> <span class="at">id</span>=<span class="str">"question-counter"</span><span class="tg">&gt;&lt;/span&gt;</span>
        <span class="tg">&lt;span</span> <span class="at">id</span>=<span class="str">"timer"</span> <span class="at">class</span>=<span class="str">"timer"</span><span class="tg">&gt;</span>⏱ <span class="tg">&lt;span</span> <span class="at">id</span>=<span class="str">"time"</span><span class="tg">&gt;</span>15<span class="tg">&lt;/span&gt;</span>s<span class="tg">&lt;/span&gt;</span>
      <span class="tg">&lt;/div&gt;</span>
      <span class="tg">&lt;div</span> <span class="at">class</span>=<span class="str">"progress-bar"</span><span class="tg">&gt;&lt;div</span> <span class="at">id</span>=<span class="str">"progress"</span><span class="tg">&gt;&lt;/div&gt;&lt;/div&gt;</span>
      <span class="tg">&lt;h2</span> <span class="at">id</span>=<span class="str">"question-text"</span><span class="tg">&gt;&lt;/h2&gt;</span>
      <span class="tg">&lt;div</span> <span class="at">id</span>=<span class="str">"options"</span> <span class="at">class</span>=<span class="str">"options"</span><span class="tg">&gt;&lt;/div&gt;</span>
      <span class="tg">&lt;div</span> <span class="at">id</span>=<span class="str">"feedback"</span> <span class="at">class</span>=<span class="str">"feedback hidden"</span><span class="tg">&gt;&lt;/div&gt;</span>
      <span class="tg">&lt;button</span> <span class="at">id</span>=<span class="str">"next-btn"</span> <span class="at">class</span>=<span class="str">"hidden"</span><span class="tg">&gt;</span>Soal Berikutnya →<span class="tg">&lt;/button&gt;</span>
    <span class="tg">&lt;/div&gt;</span>

    <span class="cm">&lt;!-- Result Screen --&gt;</span>
    <span class="tg">&lt;div</span> <span class="at">id</span>=<span class="str">"result-screen"</span> <span class="at">class</span>=<span class="str">"screen hidden"</span><span class="tg">&gt;</span>
      <span class="tg">&lt;h2&gt;</span>🎉 Quiz Selesai!<span class="tg">&lt;/h2&gt;</span>
      <span class="tg">&lt;div</span> <span class="at">class</span>=<span class="str">"score-box"</span><span class="tg">&gt;</span>
        <span class="tg">&lt;span</span> <span class="at">id</span>=<span class="str">"final-score"</span><span class="tg">&gt;&lt;/span&gt;</span>
      <span class="tg">&lt;/div&gt;</span>
      <span class="tg">&lt;p</span> <span class="at">id</span>=<span class="str">"result-msg"</span><span class="tg">&gt;&lt;/p&gt;</span>
      <span class="tg">&lt;button</span> <span class="at">id</span>=<span class="str">"restart-btn"</span><span class="tg">&gt;</span>🔄 Ulangi<span class="tg">&lt;/button&gt;</span>
    <span class="tg">&lt;/div&gt;</span>

  <span class="tg">&lt;/div&gt;</span>
  <span class="tg">&lt;script</span> <span class="at">src</span>=<span class="str">"script.js"</span><span class="tg">&gt;&lt;/script&gt;</span>
<span class="tg">&lt;/body&gt;</span>
<span class="tg">&lt;/html&gt;</span>`
      },
      'quiz-css': {
        name: '🎨 style.css',
        code: `<span class="cm">/* quiz-app/style.css */</span>
<span class="tg">*</span> { <span class="at">box-sizing</span>: <span class="vl">border-box</span>; <span class="at">margin</span>: <span class="nm">0</span>; <span class="at">padding</span>: <span class="nm">0</span>; }

<span class="tg">body</span> {
  <span class="at">font-family</span>: <span class="str">'Segoe UI'</span>, sans-serif;
  <span class="at">background</span>: <span class="vl">linear-gradient</span>(<span class="nm">135deg</span>, <span class="nm">#667eea</span>, <span class="nm">#764ba2</span>);
  <span class="at">min-height</span>: <span class="nm">100vh</span>;
  <span class="at">display</span>: <span class="vl">flex</span>;
  <span class="at">align-items</span>: <span class="vl">center</span>;
  <span class="at">justify-content</span>: <span class="vl">center</span>;
}

<span class="tg">.container</span> {
  <span class="at">background</span>: <span class="nm">#fff</span>;
  <span class="at">border-radius</span>: <span class="nm">20px</span>;
  <span class="at">padding</span>: <span class="nm">2.5rem</span>;
  <span class="at">width</span>: <span class="nm">100%</span>;
  <span class="at">max-width</span>: <span class="nm">520px</span>;
  <span class="at">box-shadow</span>: <span class="nm">0 20px 60px</span> <span class="vl">rgba</span>(<span class="nm">0,0,0,.2</span>);
}

<span class="tg">.screen</span> { <span class="at">text-align</span>: <span class="vl">center</span>; }
<span class="tg">.hidden</span> { <span class="at">display</span>: <span class="vl">none</span> <span class="nm">!important</span>; }

<span class="tg">h1</span> { <span class="at">font-size</span>: <span class="nm">2rem</span>; <span class="at">margin-bottom</span>: <span class="nm">.5rem</span>; <span class="at">color</span>: <span class="nm">#4c1d95</span>; }

<span class="tg">button</span> {
  <span class="at">background</span>: <span class="vl">linear-gradient</span>(<span class="nm">135deg</span>, <span class="nm">#667eea</span>, <span class="nm">#764ba2</span>);
  <span class="at">color</span>: <span class="nm">#fff</span>;
  <span class="at">border</span>: <span class="vl">none</span>;
  <span class="at">padding</span>: <span class="nm">.8rem 2rem</span>;
  <span class="at">border-radius</span>: <span class="nm">50px</span>;
  <span class="at">font-size</span>: <span class="nm">1rem</span>;
  <span class="at">cursor</span>: <span class="vl">pointer</span>;
  <span class="at">margin-top</span>: <span class="nm">1.5rem</span>;
  <span class="at">transition</span>: <span class="vl">transform</span> <span class="nm">.2s</span>;
}
<span class="tg">button:hover</span> { <span class="at">transform</span>: <span class="vl">translateY</span>(<span class="nm">-2px</span>); }

<span class="tg">.quiz-header</span> {
  <span class="at">display</span>: <span class="vl">flex</span>;
  <span class="at">justify-content</span>: <span class="vl">space-between</span>;
  <span class="at">margin-bottom</span>: <span class="nm">1rem</span>;
  <span class="at">font-size</span>: <span class="nm">.85rem</span>;
  <span class="at">color</span>: <span class="nm">#6b7280</span>;
}
<span class="tg">.timer</span> { <span class="at">color</span>: <span class="nm">#ef4444</span>; <span class="at">font-weight</span>: <span class="vl">bold</span>; }

<span class="tg">.progress-bar</span> {
  <span class="at">height</span>: <span class="nm">6px</span>; <span class="at">background</span>: <span class="nm">#e5e7eb</span>;
  <span class="at">border-radius</span>: <span class="nm">10px</span>; <span class="at">overflow</span>: <span class="vl">hidden</span>;
  <span class="at">margin-bottom</span>: <span class="nm">1.25rem</span>;
}
<span class="tg">#progress</span> {
  <span class="at">height</span>: <span class="nm">100%</span>;
  <span class="at">background</span>: <span class="vl">linear-gradient</span>(<span class="nm">90deg</span>, <span class="nm">#667eea</span>, <span class="nm">#764ba2</span>);
  <span class="at">transition</span>: <span class="vl">width</span> <span class="nm">.4s</span>;
}

<span class="tg">h2</span> { <span class="at">font-size</span>: <span class="nm">1.1rem</span>; <span class="at">text-align</span>: <span class="vl">left</span>; <span class="at">margin-bottom</span>: <span class="nm">1.25rem</span>; <span class="at">line-height</span>: <span class="nm">1.5</span>; }

<span class="tg">.options</span> { <span class="at">display</span>: <span class="vl">flex</span>; <span class="at">flex-direction</span>: <span class="vl">column</span>; <span class="at">gap</span>: <span class="nm">.6rem</span>; }

<span class="tg">.option-btn</span> {
  <span class="at">background</span>: <span class="nm">#f9fafb</span>; <span class="at">color</span>: <span class="nm">#1f2937</span>;
  <span class="at">border</span>: <span class="nm">2px</span> <span class="vl">solid</span> <span class="nm">#e5e7eb</span>;
  <span class="at">padding</span>: <span class="nm">.75rem 1rem</span>;
  <span class="at">border-radius</span>: <span class="nm">10px</span>;
  <span class="at">font-size</span>: <span class="nm">.9rem</span>;
  <span class="at">text-align</span>: <span class="vl">left</span>;
  <span class="at">margin-top</span>: <span class="nm">0</span>;
  <span class="at">transition</span>: <span class="vl">border-color</span> <span class="nm">.2s</span>, <span class="vl">background</span> <span class="nm">.2s</span>;
}
<span class="tg">.option-btn:hover</span> { <span class="at">border-color</span>: <span class="nm">#667eea</span>; <span class="at">transform</span>: <span class="vl">none</span>; }
<span class="tg">.option-btn.correct</span> { <span class="at">background</span>: <span class="nm">#d1fae5</span>; <span class="at">border-color</span>: <span class="nm">#10b981</span>; <span class="at">color</span>: <span class="nm">#065f46</span>; }
<span class="tg">.option-btn.wrong</span>   { <span class="at">background</span>: <span class="nm">#fee2e2</span>; <span class="at">border-color</span>: <span class="nm">#ef4444</span>; <span class="at">color</span>: <span class="nm">#991b1b</span>; }

<span class="tg">.feedback</span> {
  <span class="at">margin-top</span>: <span class="nm">1rem</span>; <span class="at">padding</span>: <span class="nm">.75rem</span>;
  <span class="at">border-radius</span>: <span class="nm">10px</span>; <span class="at">font-weight</span>: <span class="vl">600</span>;
  <span class="at">font-size</span>: <span class="nm">.9rem</span>;
}
<span class="tg">.feedback.benar</span> { <span class="at">background</span>: <span class="nm">#d1fae5</span>; <span class="at">color</span>: <span class="nm">#065f46</span>; }
<span class="tg">.feedback.salah</span> { <span class="at">background</span>: <span class="nm">#fee2e2</span>; <span class="at">color</span>: <span class="nm">#991b1b</span>; }

<span class="tg">.score-box</span> {
  <span class="at">font-size</span>: <span class="nm">3.5rem</span>; <span class="at">font-weight</span>: <span class="vl">800</span>;
  <span class="at">color</span>: <span class="nm">#4c1d95</span>; <span class="at">margin</span>: <span class="nm">1rem 0</span>;
}`
      },
      'quiz-js': {
        name: '⚡ script.js',
        code: `<span class="cm">// quiz-app/script.js</span>

<span class="kw">const</span> questions = [
  {
    question: <span class="str">"Apa kepanjangan dari HTML?"</span>,
    options: [<span class="str">"Hyper Text Markup Language"</span>, <span class="str">"High Text Machine Language"</span>,
              <span class="str">"Hyper Transfer Markup Logic"</span>, <span class="str">"Home Tool Markup Language"</span>],
    answer: <span class="nm">0</span>
  },
  {
    question: <span class="str">"Selector CSS untuk elemen dengan id 'header' adalah?"</span>,
    options: [<span class="str">".header"</span>, <span class="str">"*header"</span>, <span class="str">"#header"</span>, <span class="str">"&header"</span>],
    answer: <span class="nm">2</span>
  },
  {
    question: <span class="str">"Fungsi print() pada Python digunakan untuk?"</span>,
    options: [<span class="str">"Mencetak dokumen"</span>, <span class="str">"Menampilkan output ke layar"</span>,
              <span class="str">"Menyimpan file"</span>, <span class="str">"Membuat variabel"</span>],
    answer: <span class="nm">1</span>
  },
  {
    question: <span class="str">"Manakah tipe data yang benar di JavaScript?"</span>,
    options: [<span class="str">"String, Number, Boolean"</span>, <span class="str">"Char, Int, Float"</span>,
              <span class="str">"Text, Digit, Logic"</span>, <span class="str">"Word, Num, Bool"</span>],
    answer: <span class="nm">0</span>
  },
  {
    question: <span class="str">"Tag HTML untuk membuat tautan adalah?"</span>,
    options: [<span class="str">"&lt;link&gt;"</span>, <span class="str">"&lt;url&gt;"</span>, <span class="str">"&lt;a&gt;"</span>, <span class="str">"&lt;href&gt;"</span>],
    answer: <span class="nm">2</span>
  }
];

<span class="kw">let</span> currentQ = <span class="nm">0</span>, score = <span class="nm">0</span>, timer, timeLeft;

<span class="kw">const</span> startScreen   = <span class="fn">document.getElementById</span>(<span class="str">'start-screen'</span>);
<span class="kw">const</span> quizScreen    = <span class="fn">document.getElementById</span>(<span class="str">'quiz-screen'</span>);
<span class="kw">const</span> resultScreen  = <span class="fn">document.getElementById</span>(<span class="str">'result-screen'</span>);

<span class="fn">document.getElementById</span>(<span class="str">'start-btn'</span>).addEventListener(<span class="str">'click'</span>, startQuiz);
<span class="fn">document.getElementById</span>(<span class="str">'next-btn'</span>).addEventListener(<span class="str">'click'</span>, nextQuestion);
<span class="fn">document.getElementById</span>(<span class="str">'restart-btn'</span>).addEventListener(<span class="str">'click'</span>, () => {
  currentQ = <span class="nm">0</span>; score = <span class="nm">0</span>;
  resultScreen.classList.add(<span class="str">'hidden'</span>);
  <span class="fn">startQuiz</span>();
});

<span class="kw">function</span> <span class="fn">startQuiz</span>() {
  startScreen.classList.add(<span class="str">'hidden'</span>);
  quizScreen.classList.remove(<span class="str">'hidden'</span>);
  <span class="fn">loadQuestion</span>();
}

<span class="kw">function</span> <span class="fn">loadQuestion</span>() {
  <span class="kw">const</span> q = questions[currentQ];
  <span class="fn">document.getElementById</span>(<span class="str">'question-counter'</span>).textContent =
    <span class="str">\`Soal \${currentQ + 1} / \${questions.length}\`</span>;
  <span class="fn">document.getElementById</span>(<span class="str">'progress'</span>).style.width =
    <span class="str">\`\${((currentQ) / questions.length) * 100}%\`</span>;
  <span class="fn">document.getElementById</span>(<span class="str">'question-text'</span>).textContent = q.question;

  <span class="kw">const</span> optDiv = <span class="fn">document.getElementById</span>(<span class="str">'options'</span>);
  optDiv.innerHTML = <span class="str">''</span>;
  q.options.<span class="fn">forEach</span>((opt, i) => {
    <span class="kw">const</span> btn = <span class="fn">document.createElement</span>(<span class="str">'button'</span>);
    btn.className = <span class="str">'option-btn'</span>;
    btn.textContent = opt;
    btn.addEventListener(<span class="str">'click'</span>, () => <span class="fn">selectAnswer</span>(i, btn));
    optDiv.<span class="fn">appendChild</span>(btn);
  });

  <span class="fn">document.getElementById</span>(<span class="str">'feedback'</span>).classList.add(<span class="str">'hidden'</span>);
  <span class="fn">document.getElementById</span>(<span class="str">'next-btn'</span>).classList.add(<span class="str">'hidden'</span>);
  <span class="fn">startTimer</span>();
}

<span class="kw">function</span> <span class="fn">startTimer</span>() {
  timeLeft = <span class="nm">15</span>;
  <span class="fn">clearInterval</span>(timer);
  <span class="fn">document.getElementById</span>(<span class="str">'time'</span>).textContent = timeLeft;
  timer = <span class="fn">setInterval</span>(() => {
    timeLeft--;
    <span class="fn">document.getElementById</span>(<span class="str">'time'</span>).textContent = timeLeft;
    <span class="kw">if</span> (timeLeft <= <span class="nm">0</span>) { <span class="fn">clearInterval</span>(timer); <span class="fn">selectAnswer</span>(<span class="nm">-1</span>, null); }
  }, <span class="nm">1000</span>);
}

<span class="kw">function</span> <span class="fn">selectAnswer</span>(index, btnEl) {
  <span class="fn">clearInterval</span>(timer);
  <span class="kw">const</span> correct = questions[currentQ].answer;
  <span class="kw">const</span> feedback = <span class="fn">document.getElementById</span>(<span class="str">'feedback'</span>);
  <span class="fn">document.querySelectorAll</span>(<span class="str">'.option-btn'</span>).<span class="fn">forEach</span>(b => b.disabled = <span class="kw">true</span>);
  <span class="fn">document.querySelectorAll</span>(<span class="str">'.option-btn'</span>)[correct].classList.add(<span class="str">'correct'</span>);

  <span class="kw">if</span> (index === correct) {
    score++;
    btnEl.classList.add(<span class="str">'correct'</span>);
    feedback.textContent = <span class="str">'✅ Benar!'</span>;
    feedback.className = <span class="str">'feedback benar'</span>;
  } <span class="kw">else</span> {
    <span class="kw">if</span> (btnEl) btnEl.classList.add(<span class="str">'wrong'</span>);
    feedback.textContent = <span class="str">\`❌ Salah! Jawaban: \${questions[currentQ].options[correct]}\`</span>;
    feedback.className = <span class="str">'feedback salah'</span>;
  }
  feedback.classList.remove(<span class="str">'hidden'</span>);
  <span class="fn">document.getElementById</span>(<span class="str">'next-btn'</span>).classList.remove(<span class="str">'hidden'</span>);
}

<span class="kw">function</span> <span class="fn">nextQuestion</span>() {
  currentQ++;
  <span class="kw">if</span> (currentQ < questions.length) {
    <span class="fn">loadQuestion</span>();
  } <span class="kw">else</span> {
    quizScreen.classList.add(<span class="str">'hidden'</span>);
    resultScreen.classList.remove(<span class="str">'hidden'</span>);
    <span class="fn">document.getElementById</span>(<span class="str">'final-score'</span>).textContent =
      <span class="str">\`\${score} / \${questions.length}\`</span>;
    <span class="kw">const</span> pct = (score / questions.length) * <span class="nm">100</span>;
    <span class="fn">document.getElementById</span>(<span class="str">'result-msg'</span>).textContent =
      pct === <span class="nm">100</span> ? <span class="str">'🏆 Sempurna!'</span> :
      pct >= <span class="nm">60</span>  ? <span class="str">'👍 Bagus, terus belajar!'</span> :
                   <span class="str">'💪 Jangan menyerah, coba lagi!'</span>;
  }
}`
      }
    }
  },

  calc: {
    title: '🐍 Kalkulator Python',
    tree: [
      { type: 'folder', label: '📁 kalkulator-python' },
      { type: 'file',   id: 'calc-py',  label: '🐍 kalkulator.py' },
    ],
    files: {
      'calc-py': {
        name: '🐍 kalkulator.py',
        code: `<span class="cm"># kalkulator-python/kalkulator.py</span>
<span class="cm"># Kalkulator Sederhana — Gema Ramadhan</span>

<span class="kw">def</span> <span class="fn">tampilkan_menu</span>():
    <span class="fn">print</span>(<span class="str">"\n============================="</span>)
    <span class="fn">print</span>(<span class="str">"   🧮 KALKULATOR SEDERHANA   "</span>)
    <span class="fn">print</span>(<span class="str">"============================="</span>)
    <span class="fn">print</span>(<span class="str">"1. Penjumlahan  ( + )"</span>)
    <span class="fn">print</span>(<span class="str">"2. Pengurangan  ( - )"</span>)
    <span class="fn">print</span>(<span class="str">"3. Perkalian    ( × )"</span>)
    <span class="fn">print</span>(<span class="str">"4. Pembagian    ( ÷ )"</span>)
    <span class="fn">print</span>(<span class="str">"5. Keluar"</span>)
    <span class="fn">print</span>(<span class="str">"-----------------------------"</span>)

<span class="kw">def</span> <span class="fn">input_angka</span>(prompt):
    <span class="kw">while</span> <span class="kw">True</span>:
        <span class="kw">try</span>:
            <span class="kw">return</span> <span class="fn">float</span>(<span class="fn">input</span>(prompt))
        <span class="kw">except</span> ValueError:
            <span class="fn">print</span>(<span class="str">"⚠️  Masukkan angka yang valid!"</span>)

<span class="kw">def</span> <span class="fn">hitung</span>(op, a, b):
    <span class="kw">if</span>   op == <span class="str">'1'</span>: <span class="kw">return</span> a + b, <span class="str">'+'</span>
    <span class="kw">elif</span> op == <span class="str">'2'</span>: <span class="kw">return</span> a - b, <span class="str">'-'</span>
    <span class="kw">elif</span> op == <span class="str">'3'</span>: <span class="kw">return</span> a * b, <span class="str">'×'</span>
    <span class="kw">elif</span> op == <span class="str">'4'</span>:
        <span class="kw">if</span> b == <span class="nm">0</span>:
            <span class="kw">return</span> <span class="kw">None</span>, <span class="str">'÷'</span>
        <span class="kw">return</span> a / b, <span class="str">'÷'</span>

<span class="kw">def</span> <span class="fn">main</span>():
    <span class="fn">print</span>(<span class="str">"Selamat datang di Kalkulator Sederhana!"</span>)
    <span class="kw">while</span> <span class="kw">True</span>:
        <span class="fn">tampilkan_menu</span>()
        pilihan = <span class="fn">input</span>(<span class="str">"Pilih operasi (1-5): "</span>).strip()

        <span class="kw">if</span> pilihan == <span class="str">'5'</span>:
            <span class="fn">print</span>(<span class="str">"\nTerima kasih! Sampai jumpa 👋"</span>)
            <span class="kw">break</span>

        <span class="kw">if</span> pilihan <span class="kw">not in</span> [<span class="str">'1'</span>, <span class="str">'2'</span>, <span class="str">'3'</span>, <span class="str">'4'</span>]:
            <span class="fn">print</span>(<span class="str">"❌ Pilihan tidak valid!"</span>)
            <span class="kw">continue</span>

        a = <span class="fn">input_angka</span>(<span class="str">"Masukkan angka pertama  : "</span>)
        b = <span class="fn">input_angka</span>(<span class="str">"Masukkan angka kedua    : "</span>)

        hasil, simbol = <span class="fn">hitung</span>(pilihan, a, b)

        <span class="kw">if</span> hasil <span class="kw">is</span> <span class="kw">None</span>:
            <span class="fn">print</span>(<span class="str">"⚠️  Error: Tidak bisa dibagi nol!"</span>)
        <span class="kw">else</span>:
            <span class="cm"># Format: tampilkan int jika hasil bulat</span>
            fmt = <span class="fn">int</span>(hasil) <span class="kw">if</span> hasil == <span class="fn">int</span>(hasil) <span class="kw">else</span> <span class="fn">round</span>(hasil, <span class="nm">4</span>)
            <span class="fn">print</span>(<span class="fn">f</span><span class="str">"\n✅ {a} {simbol} {b} = {fmt}"</span>)

<span class="kw">if</span> __name__ == <span class="str">"__main__"</span>:
    <span class="fn">main</span>()`
      }
    }
  },

  todo: {
    title: '✅ To-Do App',
    tree: [
      { type: 'folder', label: '📁 todo-app' },
      { type: 'file',   id: 'todo-html', label: '📄 index.html' },
      { type: 'file',   id: 'todo-css',  label: '🎨 style.css' },
      { type: 'file',   id: 'todo-js',   label: '⚡ script.js' },
    ],
    files: {
      'todo-html': {
        name: '📄 index.html',
        code: `<span class="cm">&lt;!-- todo-app/index.html --&gt;</span>
<span class="tg">&lt;!DOCTYPE html&gt;</span>
<span class="tg">&lt;html</span> <span class="at">lang</span>=<span class="str">"id"</span><span class="tg">&gt;</span>
<span class="tg">&lt;head&gt;</span>
  <span class="tg">&lt;meta</span> <span class="at">charset</span>=<span class="str">"UTF-8"</span><span class="tg">/&gt;</span>
  <span class="tg">&lt;title&gt;</span>To-Do App<span class="tg">&lt;/title&gt;</span>
  <span class="tg">&lt;link</span> <span class="at">rel</span>=<span class="str">"stylesheet"</span> <span class="at">href</span>=<span class="str">"style.css"</span><span class="tg">/&gt;</span>
<span class="tg">&lt;/head&gt;</span>
<span class="tg">&lt;body&gt;</span>
  <span class="tg">&lt;div</span> <span class="at">class</span>=<span class="str">"app"</span><span class="tg">&gt;</span>
    <span class="tg">&lt;h1&gt;</span>✅ To-Do App<span class="tg">&lt;/h1&gt;</span>
    <span class="tg">&lt;p</span> <span class="at">class</span>=<span class="str">"subtitle"</span><span class="tg">&gt;</span>Kelola tugasmu hari ini<span class="tg">&lt;/p&gt;</span>

    <span class="tg">&lt;div</span> <span class="at">class</span>=<span class="str">"input-row"</span><span class="tg">&gt;</span>
      <span class="tg">&lt;input</span> <span class="at">type</span>=<span class="str">"text"</span> <span class="at">id</span>=<span class="str">"task-input"</span>
             <span class="at">placeholder</span>=<span class="str">"Tambah tugas baru..."</span><span class="tg">/&gt;</span>
      <span class="tg">&lt;button</span> <span class="at">id</span>=<span class="str">"add-btn"</span><span class="tg">&gt;</span>+ Tambah<span class="tg">&lt;/button&gt;</span>
    <span class="tg">&lt;/div&gt;</span>

    <span class="tg">&lt;div</span> <span class="at">class</span>=<span class="str">"filters"</span><span class="tg">&gt;</span>
      <span class="tg">&lt;button</span> <span class="at">class</span>=<span class="str">"filter-btn active"</span> <span class="at">data-filter</span>=<span class="str">"all"</span><span class="tg">&gt;</span>Semua<span class="tg">&lt;/button&gt;</span>
      <span class="tg">&lt;button</span> <span class="at">class</span>=<span class="str">"filter-btn"</span> <span class="at">data-filter</span>=<span class="str">"active"</span><span class="tg">&gt;</span>Aktif<span class="tg">&lt;/button&gt;</span>
      <span class="tg">&lt;button</span> <span class="at">class</span>=<span class="str">"filter-btn"</span> <span class="at">data-filter</span>=<span class="str">"done"</span><span class="tg">&gt;</span>Selesai<span class="tg">&lt;/button&gt;</span>
    <span class="tg">&lt;/div&gt;</span>

    <span class="tg">&lt;ul</span> <span class="at">id</span>=<span class="str">"task-list"</span><span class="tg">&gt;&lt;/ul&gt;</span>
    <span class="tg">&lt;p</span> <span class="at">id</span>=<span class="str">"empty-msg"</span> <span class="at">class</span>=<span class="str">"empty"</span><span class="tg">&gt;</span>Belum ada tugas 🎉<span class="tg">&lt;/p&gt;</span>
    <span class="tg">&lt;div</span> <span class="at">class</span>=<span class="str">"footer-info"</span><span class="tg">&gt;</span>
      <span class="tg">&lt;span</span> <span class="at">id</span>=<span class="str">"task-count"</span><span class="tg">&gt;&lt;/span&gt;</span>
    <span class="tg">&lt;/div&gt;</span>
  <span class="tg">&lt;/div&gt;</span>
  <span class="tg">&lt;script</span> <span class="at">src</span>=<span class="str">"script.js"</span><span class="tg">&gt;&lt;/script&gt;</span>
<span class="tg">&lt;/body&gt;</span>
<span class="tg">&lt;/html&gt;</span>`
      },
      'todo-css': {
        name: '🎨 style.css',
        code: `<span class="cm">/* todo-app/style.css */</span>
<span class="tg">*</span> { <span class="at">box-sizing</span>: <span class="vl">border-box</span>; <span class="at">margin</span>: <span class="nm">0</span>; <span class="at">padding</span>: <span class="nm">0</span>; }

<span class="tg">body</span> {
  <span class="at">font-family</span>: <span class="str">'Segoe UI'</span>, sans-serif;
  <span class="at">background</span>: <span class="nm">#f0f9ff</span>;
  <span class="at">min-height</span>: <span class="nm">100vh</span>;
  <span class="at">display</span>: <span class="vl">flex</span>;
  <span class="at">align-items</span>: <span class="vl">center</span>;
  <span class="at">justify-content</span>: <span class="vl">center</span>;
  <span class="at">padding</span>: <span class="nm">1rem</span>;
}

<span class="tg">.app</span> {
  <span class="at">background</span>: <span class="nm">#fff</span>;
  <span class="at">border-radius</span>: <span class="nm">20px</span>;
  <span class="at">padding</span>: <span class="nm">2rem</span>;
  <span class="at">width</span>: <span class="nm">100%</span>; <span class="at">max-width</span>: <span class="nm">480px</span>;
  <span class="at">box-shadow</span>: <span class="nm">0 8px 40px</span> <span class="vl">rgba</span>(<span class="nm">0,0,0,.1</span>);
}

<span class="tg">h1</span> { <span class="at">font-size</span>: <span class="nm">1.6rem</span>; <span class="at">color</span>: <span class="nm">#0f172a</span>; }
<span class="tg">.subtitle</span> { <span class="at">color</span>: <span class="nm">#94a3b8</span>; <span class="at">font-size</span>: <span class="nm">.85rem</span>; <span class="at">margin-bottom</span>: <span class="nm">1.5rem</span>; }

<span class="tg">.input-row</span> { <span class="at">display</span>: <span class="vl">flex</span>; <span class="at">gap</span>: <span class="nm">.5rem</span>; <span class="at">margin-bottom</span>: <span class="nm">1rem</span>; }

<span class="tg">input</span> {
  <span class="at">flex</span>: <span class="nm">1</span>; <span class="at">padding</span>: <span class="nm">.7rem 1rem</span>;
  <span class="at">border</span>: <span class="nm">2px</span> <span class="vl">solid</span> <span class="nm">#e2e8f0</span>;
  <span class="at">border-radius</span>: <span class="nm">10px</span>; <span class="at">font-size</span>: <span class="nm">.9rem</span>;
  <span class="at">outline</span>: <span class="vl">none</span>; <span class="at">transition</span>: <span class="vl">border-color</span> <span class="nm">.2s</span>;
}
<span class="tg">input:focus</span> { <span class="at">border-color</span>: <span class="nm">#38bdf8</span>; }

<span class="tg">#add-btn</span> {
  <span class="at">background</span>: <span class="nm">#38bdf8</span>; <span class="at">color</span>: <span class="nm">#fff</span>;
  <span class="at">border</span>: <span class="vl">none</span>; <span class="at">padding</span>: <span class="nm">.7rem 1.2rem</span>;
  <span class="at">border-radius</span>: <span class="nm">10px</span>; <span class="at">font-weight</span>: <span class="vl">600</span>;
  <span class="at">cursor</span>: <span class="vl">pointer</span>; <span class="at">transition</span>: <span class="vl">background</span> <span class="nm">.2s</span>;
}
<span class="tg">#add-btn:hover</span> { <span class="at">background</span>: <span class="nm">#0284c7</span>; }

<span class="tg">.filters</span> { <span class="at">display</span>: <span class="vl">flex</span>; <span class="at">gap</span>: <span class="nm">.4rem</span>; <span class="at">margin-bottom</span>: <span class="nm">1rem</span>; }
<span class="tg">.filter-btn</span> {
  <span class="at">padding</span>: <span class="nm">.3rem .85rem</span>; <span class="at">border</span>: <span class="nm">1px</span> <span class="vl">solid</span> <span class="nm">#e2e8f0</span>;
  <span class="at">border-radius</span>: <span class="nm">20px</span>; <span class="at">background</span>: <span class="nm">#fff</span>;
  <span class="at">color</span>: <span class="nm">#64748b</span>; <span class="at">cursor</span>: <span class="vl">pointer</span>;
  <span class="at">font-size</span>: <span class="nm">.8rem</span>; <span class="at">font-weight</span>: <span class="vl">500</span>;
  <span class="at">transition</span>: <span class="vl">all</span> <span class="nm">.2s</span>;
}
<span class="tg">.filter-btn.active</span> {
  <span class="at">background</span>: <span class="nm">#0f172a</span>; <span class="at">color</span>: <span class="nm">#fff</span>;
  <span class="at">border-color</span>: <span class="nm">#0f172a</span>;
}

<span class="tg">ul</span> { <span class="at">list-style</span>: <span class="vl">none</span>; <span class="at">display</span>: <span class="vl">flex</span>; <span class="at">flex-direction</span>: <span class="vl">column</span>; <span class="at">gap</span>: <span class="nm">.5rem</span>; }

<span class="tg">.task-item</span> {
  <span class="at">display</span>: <span class="vl">flex</span>; <span class="at">align-items</span>: <span class="vl">center</span>;
  <span class="at">gap</span>: <span class="nm">.75rem</span>; <span class="at">padding</span>: <span class="nm">.75rem 1rem</span>;
  <span class="at">border</span>: <span class="nm">1px</span> <span class="vl">solid</span> <span class="nm">#e2e8f0</span>;
  <span class="at">border-radius</span>: <span class="nm">10px</span>; <span class="at">transition</span>: <span class="vl">all</span> <span class="nm">.2s</span>;
  <span class="at">animation</span>: <span class="vl">slideIn</span> <span class="nm">.2s</span> <span class="vl">ease</span>;
}
<span class="tg">@keyframes slideIn</span> { <span class="kw">from</span> { <span class="at">opacity</span>:<span class="nm">0</span>; <span class="at">transform</span>:<span class="vl">translateY</span>(<span class="nm">-8px</span>); } }
<span class="tg">.task-item.done span</span> { <span class="at">text-decoration</span>: <span class="vl">line-through</span>; <span class="at">color</span>: <span class="nm">#94a3b8</span>; }

<span class="tg">.task-check</span> { <span class="at">width</span>: <span class="nm">18px</span>; <span class="at">height</span>: <span class="nm">18px</span>; <span class="at">cursor</span>: <span class="vl">pointer</span>; <span class="at">accent-color</span>: <span class="nm">#38bdf8</span>; }
<span class="tg">.task-text</span> { <span class="at">flex</span>: <span class="nm">1</span>; <span class="at">font-size</span>: <span class="nm">.9rem</span>; }
<span class="tg">.delete-btn</span> {
  <span class="at">background</span>: <span class="vl">none</span>; <span class="at">border</span>: <span class="vl">none</span>;
  <span class="at">color</span>: <span class="nm">#cbd5e1</span>; <span class="at">cursor</span>: <span class="vl">pointer</span>;
  <span class="at">font-size</span>: <span class="nm">1rem</span>; <span class="at">padding</span>: <span class="nm">0</span>; <span class="at">margin-top</span>: <span class="nm">0</span>;
  <span class="at">transition</span>: <span class="vl">color</span> <span class="nm">.2s</span>;
}
<span class="tg">.delete-btn:hover</span> { <span class="at">color</span>: <span class="nm">#ef4444</span>; }

<span class="tg">.empty</span> { <span class="at">text-align</span>: <span class="vl">center</span>; <span class="at">color</span>: <span class="nm">#cbd5e1</span>; <span class="at">font-size</span>: <span class="nm">.9rem</span>; <span class="at">padding</span>: <span class="nm">1.5rem 0</span>; }
<span class="tg">.footer-info</span> { <span class="at">text-align</span>: <span class="vl">right</span>; <span class="at">font-size</span>: <span class="nm">.78rem</span>; <span class="at">color</span>: <span class="nm">#94a3b8</span>; <span class="at">margin-top</span>: <span class="nm">.75rem</span>; }`
      },
      'todo-js': {
        name: '⚡ script.js',
        code: `<span class="cm">// todo-app/script.js</span>

<span class="kw">let</span> tasks = [];
<span class="kw">let</span> filter = <span class="str">'all'</span>;

<span class="kw">const</span> input     = <span class="fn">document.getElementById</span>(<span class="str">'task-input'</span>);
<span class="kw">const</span> addBtn    = <span class="fn">document.getElementById</span>(<span class="str">'add-btn'</span>);
<span class="kw">const</span> taskList  = <span class="fn">document.getElementById</span>(<span class="str">'task-list'</span>);
<span class="kw">const</span> emptyMsg  = <span class="fn">document.getElementById</span>(<span class="str">'empty-msg'</span>);
<span class="kw">const</span> taskCount = <span class="fn">document.getElementById</span>(<span class="str">'task-count'</span>);

addBtn.addEventListener(<span class="str">'click'</span>, addTask);
input.addEventListener(<span class="str">'keydown'</span>, e => { <span class="kw">if</span> (e.key === <span class="str">'Enter'</span>) <span class="fn">addTask</span>(); });

<span class="fn">document.querySelectorAll</span>(<span class="str">'.filter-btn'</span>).<span class="fn">forEach</span>(btn => {
  btn.addEventListener(<span class="str">'click'</span>, () => {
    filter = btn.dataset.filter;
    <span class="fn">document.querySelectorAll</span>(<span class="str">'.filter-btn'</span>)
      .<span class="fn">forEach</span>(b => b.classList.remove(<span class="str">'active'</span>));
    btn.classList.add(<span class="str">'active'</span>);
    <span class="fn">render</span>();
  });
});

<span class="kw">function</span> <span class="fn">addTask</span>() {
  <span class="kw">const</span> text = input.value.<span class="fn">trim</span>();
  <span class="kw">if</span> (!text) <span class="kw">return</span>;
  tasks.<span class="fn">push</span>({ id: <span class="fn">Date.now</span>(), text, done: <span class="kw">false</span> });
  input.value = <span class="str">''</span>;
  <span class="fn">render</span>();
}

<span class="kw">function</span> <span class="fn">toggleTask</span>(id) {
  <span class="kw">const</span> t = tasks.<span class="fn">find</span>(t => t.id === id);
  <span class="kw">if</span> (t) t.done = !t.done;
  <span class="fn">render</span>();
}

<span class="kw">function</span> <span class="fn">deleteTask</span>(id) {
  tasks = tasks.<span class="fn">filter</span>(t => t.id !== id);
  <span class="fn">render</span>();
}

<span class="kw">function</span> <span class="fn">render</span>() {
  <span class="kw">const</span> filtered = tasks.<span class="fn">filter</span>(t =>
    filter === <span class="str">'all'</span>  ? <span class="kw">true</span> :
    filter === <span class="str">'done'</span> ? t.done : !t.done
  );

  taskList.innerHTML = <span class="str">''</span>;
  emptyMsg.style.display = filtered.length ? <span class="str">'none'</span> : <span class="str">'block'</span>;

  filtered.<span class="fn">forEach</span>(t => {
    <span class="kw">const</span> li = <span class="fn">document.createElement</span>(<span class="str">'li'</span>);
    li.className = <span class="str">\`task-item \${t.done ? 'done' : ''}\`</span>;
    li.innerHTML = <span class="str">\`
      &lt;input type="checkbox" class="task-check" \${t.done ? 'checked' : ''}&gt;
      &lt;span class="task-text"&gt;\${t.text}&lt;/span&gt;
      &lt;button class="delete-btn" title="Hapus"&gt;🗑&lt;/button&gt;
    \`</span>;
    li.<span class="fn">querySelector</span>(<span class="str">'.task-check'</span>)
      .addEventListener(<span class="str">'change'</span>, () => <span class="fn">toggleTask</span>(t.id));
    li.<span class="fn">querySelector</span>(<span class="str">'.delete-btn'</span>)
      .addEventListener(<span class="str">'click'</span>, () => <span class="fn">deleteTask</span>(t.id));
    taskList.<span class="fn">appendChild</span>(li);
  });

  <span class="kw">const</span> remaining = tasks.<span class="fn">filter</span>(t => !t.done).length;
  taskCount.textContent = <span class="str">\`\${remaining} tugas tersisa\`</span>;
}`
      }
    }
  }
};

// ── MODAL LOGIC ──
let activeProject = null;
let activeFileId  = null;

function openModal(projectKey) {
  activeProject = projects[projectKey];
  const titleEl = document.getElementById('modalTitle');
  const parts = activeProject.title.split(' ');
  titleEl.innerHTML = '<span>' + parts[0] + '</span> ' + parts.slice(1).join(' ');

  // Build file tree
  const treeEl = document.getElementById('fileTree');
  treeEl.innerHTML = '<div class="tree-section-label">Struktur Folder</div>';
  activeProject.tree.forEach(item => {
    const el = document.createElement('div');
    if (item.type === 'folder') {
      el.className = 'tree-folder';
      el.textContent = item.label;
    } else {
      el.className = 'tree-file';
      el.textContent = item.label;
      el.dataset.id = item.id;
      el.addEventListener('click', () => selectFile(item.id));
    }
    treeEl.appendChild(el);
  });

  // Select first file by default
  const firstFile = activeProject.tree.find(i => i.type === 'file');
  if (firstFile) selectFile(firstFile.id);

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectFile(fileId) {
  activeFileId = fileId;
  const file = activeProject.files[fileId];
  document.querySelectorAll('.tree-file').forEach(el => {
    el.classList.toggle('active', el.dataset.id === fileId);
  });
  document.getElementById('codeFilename').textContent = file.name;
  document.getElementById('codeBlock').innerHTML = file.code;
  // Reset copy button
  const btn = document.getElementById('copyBtn');
  btn.textContent = '📋 Salin Kode';
  btn.className = 'copy-btn';
}

function copyCode() {
  const pre = document.getElementById('codeBlock');
  const text = pre.innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.textContent = '✅ Tersalin!';
    btn.className = 'copy-btn copied';
    setTimeout(() => {
      btn.textContent = '📋 Salin Kode';
      btn.className = 'copy-btn';
    }, 2000);
  });
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target.id === 'modalOverlay') closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });