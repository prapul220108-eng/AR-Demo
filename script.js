const messageEl = document.getElementById('message');
const loadBtn = document.getElementById('loadBtn');

async function loadData() {
  messageEl.textContent = 'Loading...';
  try {
    const response = await fetch('/api/hello');
    const data = await response.json();
    messageEl.textContent = data.message;
  } catch (err) {
    messageEl.textContent = 'Could not reach the server. Is it running?';
    console.error(err);
  }
}

loadBtn.addEventListener('click', loadData);
loadData();