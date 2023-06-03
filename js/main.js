/////// Header Scroll
let nav = document.querySelector(".header");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

////// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const subject = form.querySelector('input[type="subject"]').value;
  const comment = form.querySelector('textarea').value;

  // Create a new comment element
  const newComment = document.createElement('div');
  newComment.classList.add('comment');

  // Create HTML markup for the comment
  newComment.innerHTML = `
    <h4>${name}</h4>
    <p>Email  : <i>${email}</i><br>
      Subject : <i>${subject}</i><br>
      Comment : <i>${comment}</i><br><br><hr><br>
    </p>
  `;

  //// Append the comment to the comment section
  const commentSection = document.querySelector('.comment-section');
  commentSection.appendChild(newComment);

  //// Reset the form values in comsec after submit
  form.reset();
});
