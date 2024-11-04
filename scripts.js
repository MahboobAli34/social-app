// scripts.js

// Function to handle signup
async function signup() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phonenumber").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:3000/signUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, phone, password }),
    });

    const data = await response.json();
    alert(data.message);
    
    if (response.ok) {
        // Hide signup form and show login form after successful signup
        document.getElementById("signup-form").style.display = "none";
        document.getElementById("login-form").style.display = "block";
    }
}

// Function to handle login
async function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    alert(data.message);

    if (response.ok) {
        // Store the JWT token for authenticated requests
        localStorage.setItem("token", data.token);
        // Redirect to the user dashboard or another page after successful login
        window.location.href = "/dashboard"; // Update the path as needed
    }
}
// Function to create a new post
async function createPost() {
    const content = document.getElementById("post-content").value;
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
        },
        body: JSON.stringify({ content }),
    });

    const data = await response.json();
    alert(data.message);
    if (response.ok) {
        fetchPosts(); // Refresh the posts list
    }
}

// Function to fetch all posts
async function fetchPosts() {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:3000/posts", {
        method: "GET",
        headers: { "Authorization": token },
    });

    const data = await response.json();
    const postsContainer = document.getElementById("posts-container");
    postsContainer.innerHTML = ""; // Clear previous posts

    data.posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
            <p>${post.content}</p>
            <button onclick="updatePost('${post._id}')">Edit</button>
            <button onclick="deletePost('${post._id}')">Delete</button>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Function to update a post
async function updatePost(id) {
    const content = prompt("Enter new content:");
    const token = localStorage.getItem("token");

    const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
        },
        body: JSON.stringify({ content }),
    });

    const data = await response.json();
    alert(data.message);
    if (response.ok) {
        fetchPosts();
    }
}

// Function to delete a post
async function deletePost(id) {
    const token = localStorage.getItem("token");

    const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
        headers: { "Authorization": token },
    });

    const data = await response.json();
    alert(data.message);
    if (response.ok) {
        fetchPosts();
    }
}
