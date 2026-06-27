// This list conains all writing posts for the website.
// Newest posts appear first because the code sorts them by date.
const posts = [
    {
        title: "The Brave New World We Chose | An essay",
        excerpt: "In the 21st century, we're not waiting for dystopia. We are already there...",
        link: "brave-new-world.html",
        date: "2026-06-23",
        category: "essays"
    },
    {
        title: "Sonder II",
        excerpt: "I walk my dog at night. There's an apartment building just around the bend...",
        link: "sonder-ii.html",
        date: "2026-06-22",
        category: "poetry"
    },
    {
        title: "Dina Derboven Part 1: The Crown | An Interview",
        excerpt: "Dina Derboven, Miss Environment Belgium 2025, is more than her title...",
        link: "dina-derboven.html",
        date: "2026-06-21",
        category: "interviews"
    },
    {
        title: "Moonlight",
        excerpt: "Like the moon shines at night, enlightening the well, where dreams shine bright...",
        link: "moonlight.html",
        date: "2026-06-20",
        category: "poetry"
    },
    {
        title: "Tensions | An Excerpt from The Mirror of Melodies",
        excerpt: "The week went by swiftly, with classes running as usual...",
        link: "tensions.html",
        date: "2026-06-19",
        category: "excerpts"
    },
    {
        title: "Alone",
        excerpt: "I sing and sing, and from within I wish and wish for a mate to come...",
        link: "alone.html",
        date: "2026-06-18",
        category: "poetry"
    }
];

// This looks for the <main id="post-grid"> area in the HTML
const postGrid = document.querySelector("#post-grid");
// Only run the post code if this page actually has a post grid.
if (postGrid) {

    // Make a copy of the posts and sort them form newest to oldest.
    const sortedPosts = [...posts].sort((firstPost, secondPost) => {
        return new Date(secondPost.date) - new Date(firstPost.date);
    });

    // Read data- limit from the HTML. Home has a limit, Writing does not.
    const limit = Number(postGrid.dataset.limit);

    // If there is a limit, show only that many posts. Otherwise, show all posts.
    const visiblePosts = limit
        ? sortedPosts.slice(0, limit)
        : sortedPosts;

    // Turn every post object into HTML and place it inside the page.
    postGrid.innerHTML = visiblePosts
        .map((post) => {
            return `
            <article class="writing-card">
                <h2>${post.title}</h2>
                <p>${post.excerpt}</p>
                <a href="${post.link}">Continue reading</a>
            </article>
            `;
        })
        .join("");
}