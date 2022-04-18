const app = document.getElementById("app");

// functions
const createPost = (title, content, titleColor) => {
    const postElement = document.createElement("div");
    const titleElement = document.createElement("h2");
    const contentElement = document.createElement("p");

    titleElement.textContent = title;
    contentElement.textContent = content;
    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);

    titleElement.style.color = titleColor;

    return postElement;
};

const render = (element) => app.appendChild(element);

// request api
const response = fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
        posts.forEach((post) => {
            render(createPost(post.title, post.body, "red"));
        });
    })
    .catch((err) => console.error(err));

// resolução usando IIFE
(async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();
        posts.forEach((post) =>
            render(createPost(post.title, post.body, "blue"))
        );
    } catch (err) {
        console.error(err);
    }
})();
