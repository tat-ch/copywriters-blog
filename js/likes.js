let like = document.querySelector('.article-like');
let likesNumber = document.querySelector('.article-like-number');

like.onclick = function () {
    if ( 
        like.classList.contains('added')) { 
            likesNumber.textContent--;
      } else { 
        likesNumber.textContent++;
        }
    
        like.classList.toggle('added');
};
