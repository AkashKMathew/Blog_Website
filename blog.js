document.addEventListener("DOMContentLoaded", function () {
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const urlParams = new URLSearchParams(window.location.search);
  const blogIndex = urlParams.get("index");
  const blogToEdit = blogs[blogIndex];
  if (blogToEdit) {
    document.getElementById("cs66_title").value = blogToEdit.title;
    document.getElementById("cs66_content").value = blogToEdit.content;
  }

  document
    .getElementById("cs66_sub-btn")
    .addEventListener("click", function (event) {
      const title = document.getElementById("cs66_title").value;
      const content = document.getElementById("cs66_content").value;
      if (title && content) {
        if (blogIndex !== null) {
          console.log(blogIndex);
          cs66_editBlog(blogIndex, title, content);
        } else {
          cs66_addBlog(title, content);
        }

        document.getElementById("cs66_blog-form").submit();
      }else{
        event.preventDefault();      }
    });
});
