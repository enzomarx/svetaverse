// Dummy data for posts
const posts = [
    { id: 1, title: "Poem One", content: "This is the first poem content. It is very interesting and inspiring...", category: "Poetry" },
    { id: 2, title: "Creative Piece", content: "This is a creative writing piece. It has a lot of imagination and creativity...", category: "Creative Writing" },
    { id: 3, title: "Inspirational Poem", content: "This is an inspirational poem. It will motivate and uplift you...", category: "Inspirational" },
    // Add more posts as needed
];

function renderPosts(posts) {
    const postGrid = document.getElementById('postGrid');
    postGrid.innerHTML = posts.map(post => `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.content.slice(0, 100)}...</p>
            <a href="#post" onclick="showPost(${post.id})">Read more</a>
        </div>
    `).join('');
}

function filterPosts(category) {
    if (category === 'all') {
        renderPosts(posts);
    } else {
        const filteredPosts = posts.filter(post => post.category === category);
        renderPosts(filteredPosts);
    }
}

function searchPosts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query));
    renderPosts(filteredPosts);
}

function showPost(id) {
    const post = posts.find(p => p.id === id);
    if (post) {
        document.getElementById('postContent').innerHTML = `
            <h1>${post.title}</h1>
            <p>${post.content}</p>
        `;
        showPage('post');
    }
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

document.getElementById('searchInput').addEventListener('input', searchPosts);

// Initial render
renderPosts(posts);
showPage('home'); // Show homepage by default
