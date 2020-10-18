let commentForm = document.querySelector('.article-form');
let commentList = document.querySelector('.article-comments-box');
let commentField = document.querySelector('.article-form-textarea');
let submitButton = document.querySelector('.btn-article-form');
commentForm.onsubmit = function (evt) {
  evt.preventDefault();

    let newComment = document.createElement('div');
    newComment.classList.add('article-comment');
    newComment.textContent = 'Новый комментарий';
    newComment.textContent = commentField.value;
    commentField.value = '';
    commentList.append(newComment);
};

commentField.oninput = function () {
/*
  if (commentField.value.length < 5) {
    commentForm.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentForm.classList.remove('warning');
    submitButton.disabled = false;
 }  */ 


  if (commentField.value.length > 20) {
    commentForm.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentForm.classList.remove('warning');
    submitButton.disabled = false;
    }
};

