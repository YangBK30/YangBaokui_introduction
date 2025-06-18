let dark = false;
let lang = 'zh';
function toggleTheme() {
  dark = !dark;
  document.body.classList.toggle('dark', dark);
}
function toggleLanguage() {
  lang = lang === 'zh' ? 'en' : 'zh';
  document.getElementById('name').innerText = lang === 'zh' ? '你好，我是张三' : "Hello, I'm Zhang San";
  document.getElementById('intro').innerText = lang === 'zh' ? '陶艺创作者 | 艺术探索者' : 'Ceramic Artist | Artistic Explorer';
  document.getElementById('contact').innerText = lang === 'zh' ? '联系我：zhangsan@example.com | 版权所有 © 2025 张三' : 'Contact: zhangsan@example.com | © 2025 Zhang San';
  document.querySelectorAll('[data-zh]').forEach(el => {
    el.innerText = el.getAttribute(`data-${lang}`);
  });
}
