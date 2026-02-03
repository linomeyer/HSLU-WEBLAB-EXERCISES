const form = document.getElementById('add-tech-form');
form.addEventListener('submit', (event) => addTechnology(event));

async function postTechnology(technology) {
    const response = await fetch(
        'https://65c1f652f7e6ea59682a27c8.mockapi.io/Technologies',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(technology),
        },
    );
    return response.json();
}


async function addTechnology(event) {
    event.preventDefault();
    const data = new FormData(form);

    const technology = {}

    for (let [key, value] of data.entries()) {
        technology[key] = value
    }
    const result = await postTechnology(technology);

    if (result) {
        await renderTechnologies()
    }
}

async function getTechnologies() {
    const response = await fetch(
        'https://65c1f652f7e6ea59682a27c8.mockapi.io/Technologies',
    );
    return response.json();
}

async function renderTechnologies() {
    const technologies = await this.getTechnologies();
    technologies.forEach((technology) => {
        this.innerHTML +=
            `    <div>\n
                <article>\n
                    <header class="name">${technology.name}</header>\n
                    <p class="category">${technology.category}</p>\n
                    <p class="ring">${technology.ring}</p>\n
                    <p class="description">${technology.description}</p>\n
                </article>\n
            </div>`;
    });
}
