const container = document.querySelector('.technologies');

async function postTechnology(technology) {
  const response = await fetch(
    'https://65c1f652f7e6ea59682a27c8.mockapi.io/Technologies',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(technology),
    },
  );
  return response.json();
}

const form = document.getElementById('add-tech-form');

async function addTechnology(event) {
  event.preventDefault();

  const data = new FormData(form);

  const technology = {
    name: data['name'],
    category: data['category'],
    ring: data['ring'],
    description: data['description'],
  };

  const result = await postTechnology(technology);
}

form.addEventListener('submit', (event) => addTechnology(event));
