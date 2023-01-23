const button = document.querySelector('button#button');


const verifyTheme = () =>
{
    let themeClass = document.querySelector('main')

    if(themeClass.classList.contains('white'))
    {
        themeClass.classList.remove('white');
        themeClass.classList.add('dark');    
    }
    else
    {
        themeClass.classList.remove('dark');
        themeClass.classList.add('white');
    }
}

const toggleButton = () =>
{
    let toggle = document.querySelector('button.button')

    toggle.classList.toggle('active');

}


const changeTheme = () =>{
    verifyTheme();
    toggleButton();
}

button.addEventListener('click', changeTheme);