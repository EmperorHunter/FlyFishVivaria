let search = document.querySelector('.searchbar');


document.querySelector('#sear').onclick = () => {
  search.classList.toggle('active');
  wishlist.classList.remove('active');
  checkout.classList.remove('active');
  login.classList.remove('active');
}



let wishlist = document.querySelector('.wishlist');

document.querySelector('#wish').onclick = () => {
  wishlist.classList.toggle('active');
  search.classList.remove('active');
  checkout.classList.remove('active');
  login.classList.remove('active');
}





let checkout = document.querySelector('.checkout');

document.querySelector('#check').onclick = () => {
  checkout.classList.toggle('active');
  search.classList.remove('active');
  wishlist.classList.remove('active');
  login.classList.remove('active');
}



let login = document.querySelector('.login');

document.querySelector('#user').onclick = () => {
  login.classList.toggle('active');
  search.classList.remove('active');
  wishlist.classList.remove('active');
  checkout.classList.remove('active');

}

window.onscroll = () => {
  search.classList.remove('active');
  wishlist.classList.remove('active');
  checkout.classList.remove('active');
  login.classList.remove('active');
}