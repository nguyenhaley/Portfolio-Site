const projects = [
    {
        name: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects.",
        image_url: "https://example.com/portfolio-website.jpg",
    },
    {
        name: "Task Manager App",
        description: "A web application to manage daily tasks with to-do lists.",
        image_url: "https://example.com/task-manager-app.jpg",
    },
];

class projectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        const title = this.getAttribute('title') || 'Unknown title';
        const description = this.getAttribute('description') || 'Unknown description';
        const imageUrl = this.getAttribute('image-url') || '';

        this.innerHTML = '';
        this.innerHTML += `
            <div class="projectCard">
                <h2 class="title">${title}</h2>
                <picture>
                    <img src="${imageUrl}" alt="" >
                </picture>
                <p class="description">${description}</p>
                <a href=""> Read More </a>
            </div>
        `;

        //this.querySelector('.projectCard').addEventListener('click', () => this.doSomething());

    }

    /*
    doSomething() {
        const event = new CustomEvent('do-something', {
            bubbles: true
        });
        this.dispatchEvent(event);
    }
    */

}

window.addEventListener('DOMContentLoaded', async () => {
    console.log("triggered");

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const jsonData = await response.json();
        jsonData.record.forEach(project => {
            window.galleryItem = document.createElement("project-card");
            window.galleryItem.setAttribute("title", `${project.name}`);
            window.galleryItem.setAttribute("description", `${car.model}`);
            window.galleryItem.setAttribute("year", `${car.year}`);
            window.galleryItem.setAttribute("image-url", `${car.image_url}`);
            document.getElementById("gallery").appendChild(window.galleryItem);
            console.log(`${car.year} ${car.make} ${car.model}: ${car.image_url}`);
        });

    } catch (error) {
        console.error(error.message);
    }



    const allProjects = document.getElementById('allProjects');
    
    projects.forEach(project => {
        console.log('Creating card for:', project.name);
        let projectElement = document.createElement('project-card');
        projectElement.setAttribute('title', project.name);
        projectElement.setAttribute('description', project.description);
        projectElement.setAttribute('image-url', project.image_url);

        allProjects.appendChild(projectElement);
    });

});

/*
document.getElementById('allProjects').addEventListener('do-something', (event) => {
    let target = event.target;
    target.style.border = target.style.border == "" ? "5px solid black" : "";
});
*/

customElements.define('project-card', projectCard);