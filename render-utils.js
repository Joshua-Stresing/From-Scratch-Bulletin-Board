export function renderPost(post) {
    const div = document.getElementById('div');
    div.classList.add('post');

    const h2 = document.createElement('p');
    h2.textContent = post.name;

    const p1 = document.createElement('p');
    p1.textContent = post.date;
    
    const p2 = document.createElement('p');
    p2.textContent = post.info;

    const p3 = document.createElement('p');
    p3.textContent = post.contact;
    p3.classList.add('contact');

    div.append(h2, p1, p2, p3);

    return div;
}