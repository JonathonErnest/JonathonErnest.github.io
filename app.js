
        // Smooth scroll to sections when clicking on navigation links
        const navLinks = document.querySelectorAll('.nav-links ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Button click event to scroll to About Me section
        const learnMoreButton = document.getElementById('learn-more-button');
        learnMoreButton.addEventListener('click', () => {
            const aboutMeSection = document.getElementById('about-me');
            aboutMeSection.scrollIntoView({ behavior: 'smooth' });
        });

        // Dynamic project list
        const projectList = document.getElementById('project-list');
        const projects = ['Project 1', 'Project 2', 'Project 3'];

        projects.forEach(project => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = project;
            listItem.appendChild(link);
            projectList.appendChild(listItem);
        });
