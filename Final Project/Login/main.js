const users = [
    {
        name: 'u1',
        password: 'p1',
        computers: [
            {
                id: 1,
                mark: 'Acer',
                img: 'https://www.soliton.az/images/articles/2021/08/31/thumb20210831113057630.jpg',
                cpu: 'Intel Core I5',
                gpu: 'Geforce GTX 1060ti',
            }
        ],
    },
];

if(!localStorage.getItem('users')){
    localStorage.setItem('users', JSON.stringify(users))
}

const allInputs = document.querySelectorAll('input')
const btn = document.querySelector('#button')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let users = JSON.parse(localStorage.getItem('users'))

    let userAvaiable = users.some(user => user.name == allInputs[0].value && user.password == allInputs[1].value)

    if(userAvaiable){
        location.href = '../Main/index.html'
        localStorage.setItem('loggeduser', allInputs[0].value)
    } else {
        alert('This user does not exist!')
    }
})