class TechradarAddTechnology extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =
            '<div>\n' +
            '        <form id="add-tech-form">\n' +
            '            <label> Name\n' +
            '                <input type="text" name="name">\n' +
            '            </label>\n' +
            '            <label> Techniques\n' +
            '                <select name="category">\n' +
            '                    <option value="techniques">Techniques</option>\n' +
            '                    <option value="tools">Tools</option>\n' +
            '                    <option value="platforms">Platforms</option>\n' +
            '                </select>\n' +
            '            </label>\n' +
            '            <label> Ring\n' +
            '                <select name="ring">\n' +
            '                    <option value=\'Ring 0\'>Ring 0</option>\n' +
            '                    <option value=\'Ring 1\'>Ring 1</option>\n' +
            '                    <option value=\'Ring 2\'>Ring 2</option>\n' +
            '                </select>\n' +
            '            </label>\n' +
            '            <label> Description\n' +
            '                <input type="text" name="description">\n' +
            '            </label>\n' +
            '            <input type="submit">\n' +
            '        </form>\n' +
            '    </div>';
    }

    connectedCallback() {
        console.log('custom element added to page');
    }
}

window.customElements.define(
    'techradar-add-technology',
    TechradarAddTechnology,
);

class TechradarListTechnologies extends HTMLElement {
    constructor() {
        super();
        this.renderTechnologies();
    }

    async getTechnologies() {
        const response = await fetch(
            'https://65c1f652f7e6ea59682a27c8.mockapi.io/Technologies',
        );
        return response.json();
    }

    async renderTechnologies() {
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

    connectedCallback() {
    }
}

window.customElements.define(
    'techradar-list-technologies',
    TechradarListTechnologies,
);
