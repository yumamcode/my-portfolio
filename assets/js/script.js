document.addEventListener('DOMContentLoaded', () => {
  // フッターの年号を現在の年に更新
  const yearSpan = document.querySelector('footer p');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    // テキストの内容を置換（"2025" の部分を動的に）
    yearSpan.innerHTML = yearSpan.innerHTML.replace(/\d{4}/, currentYear);
  }

  // コンソールに挨拶を表示
  console.log('🖤 Welcome to My Portfolio Hub');
});

