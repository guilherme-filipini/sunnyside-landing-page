const buttonHamburger = document.querySelector('.navbar-toggler')

buttonHamburger.addEventListener('click', (event) => {
    event.preventDefault();

    const navBarHamburger = document.getElementById('navBarHamburger')
    const btnHeader = document.getElementById('btn-header')
    const sectionHeader = document.querySelector('.section-header')
    const navLink = document.querySelector('.nav-link')
    const linkServices = document.getElementById('linkServices');
    const linkProjects = document.getElementById('linkProjects');
    

    if (window.innerWidth == 375) {
        navBarHamburger.style.backgroundColor = 'hsl(0, 0%, 100%)'
        navBarHamburger.style.marginTop = '10px'
        navBarHamburger.style.padding = '10px'

        navLink.style.color = 'hsl(210, 4%, 67%)'
        linkServices.style.color = 'hsl(210, 4%, 67%)'
        linkProjects.style.color = 'hsl(210, 4%, 67%)'

        if (sectionHeader.style.display === 'none') {
            sectionHeader.style.display = 'block'; // Mostra a section novamente
        } else {
            sectionHeader.style.display = 'none'; // Esconde a section
        }
        btnHeader.style.backgroundColor = 'hsl(51, 100%, 49%)'
    }

    window.addEventListener('resize', () => {

        const btnHeader = document.getElementById('btn-header');
    
        if (window.innerWidth !== 375) {
            navBarHamburger.style.backgroundColor = ''
            navBarHamburger.style.marginTop = '10px'
            navBarHamburger.style.padding = '10px'

            navLink.style.color = ''
            linkServices.style.color = ''
            linkProjects.style.color = ''

            btnHeader.style.backgroundColor = '';  // Remove a cor de fundo do botão
            sectionHeader.style.display = 'block'
        }
    });
})