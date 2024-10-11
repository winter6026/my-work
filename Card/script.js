// 移除 import，直接使用 posts 陣列
const cardContainer = document.getElementById('card-container');

// 動態生成卡片
posts.forEach(post => {
  const card = document.createElement('div');
  card.classList.add('card');

  // 動態生成 HTML
  const cardHTML = `
    <img src="images/${post.image}" alt="${post.name}" />
    <h2 class="card-title">${post.name}</h2>
    <p class="card-author">By ${post.author}</p>
    <p class="card-content">${post.content}</p>
  `;

  card.innerHTML = cardHTML;
  cardContainer.appendChild(card); // 添加卡片到容器中
});
