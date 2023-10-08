const cs66_blogList = document.getElementById("cs66_blog-list");
const cs66_addBlogButton = document.getElementById("cs66_add-blog");

function cs66_renderBlogs() {
  cs66_blogList.innerHTML = "";
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  blogs.forEach((blog, index) => {
    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-entry");
    blogDiv.innerHTML = `<div class="cs66_card">
                            <div class="cs66_card-head">
                                <div class="cs66_btn-div">
                                    <button class="cs66_edit-blog">
                                        <img src="./cs66_edit-icon.png" class="cs66_edit-i" data-index="${index}">
                                        </img>
                                    </button>
                                    <button class="cs66_delete-blog" >
                                        <img src="./cs66_delete-icon.png" class="cs66_delete-i" data-index="${index}">
                                        </img>
                                    </button>
                                </div>
                                <h2 class="cs66_card-title">${blog.title}</h2>
                            </div>
                            <p class="cs66_card-content">${blog.content}</p>
                        </div>`;
    cs66_blogList.appendChild(blogDiv);
  });
}

function cs66_addBlog(title, content) {
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  blogs.push({ title, content });
  localStorage.setItem("blogs", JSON.stringify(blogs));
  cs66_renderBlogs();
}

function cs66_deleteBlog(index) {
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  blogs.splice(index, 1);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  cs66_renderBlogs();
}
function cs66_editBlog(index, title, content) {
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  blogs[index] = { title, content };
  localStorage.setItem("blogs", JSON.stringify(blogs));
  cs66_renderBlogs();
}
cs66_addBlogButton.addEventListener("click", function () {
  window.location.href = "./blog.html";
});

cs66_blogList.addEventListener("click", function (e) {
  if (e.target.classList.contains("cs66_delete-i")) {
    const index = e.target.dataset.index;
    cs66_deleteBlog(index);
  }
  if (e.target.classList.contains("cs66_edit-i")) {
    const index = e.target.dataset.index;
    window.location.href = `./blog.html?index=${index}`;
  }
});
document.addEventListener("DOMContentLoaded", function () {
  cs66_renderBlogs();
});
