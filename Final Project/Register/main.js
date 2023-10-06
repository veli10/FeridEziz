const allInputs = document.querySelectorAll('input')
const btn = document.querySelector('#button')
const loggeduser = localStorage.getItem('loggeduser')

const users = JSON.parse(localStorage.getItem('users'))

btn.addEventListener('click', (e) => {
    if(allInputs[1].checkValidity()){
        e.preventDefault();
        let newUser = {
            name: allInputs[0].value,
            password: allInputs[1].value,
            phone: allInputs[2].value,
            computers: []
        };

        let userAvaiable = users.some(user => user.name == allInputs[0].value)

        if(!userAvaiable){
            users.push(newUser);

            localStorage.setItem('users', JSON.stringify(users))
    
            location.href = '../Login/index.html'
        } else {
            alert('This user already exist')
        }
    } else {
        alert('Password is incorrect!')
    }
})