// Simple function to handle the mockup login
function login() {
    document.getElementById('login-view').classList.remove('active');
    document.getElementById('app-view').classList.add('active');
}

// Simple function to handle logout
function logout() {
    document.getElementById('app-view').classList.remove('active');
    document.getElementById('login-view').classList.add('active');
}

// Function to handle switching between pages in the main app
function navigate(pageId, element) {
    // 1. Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // 2. Remove active state from all sidebar links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));

    // 3. Show the selected page
    document.getElementById(pageId).classList.add('active');

    // 4. Highlight the clicked sidebar link
    element.classList.add('active');
}