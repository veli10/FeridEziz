const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'coverflow',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const h1 = document.querySelector('.nameh1')
  const logout = document.querySelector('#logout')
  const login = document.querySelector('#login')
  const register = document.querySelector('#register')
  const computers = document.querySelector('#computers')
  const loggeduser = localStorage.getItem('loggeduser')

  if(localStorage.getItem('loggeduser')){
    h1.innerHTML += localStorage.getItem('loggeduser')
    if(localStorage.getItem('loggeduser') != ''){
      logout.style.display = 'inline'
      login.style.display = 'none'
      register.style.display = 'none'
    }
  }

logout.addEventListener('click', () => {
  localStorage.setItem('loggeduser', '')
  logout.style = 'display: none'
  login.style = 'display: inline-block'
  register.style = 'display: inline-block'
  h1.innerHTML = 'User: '
})