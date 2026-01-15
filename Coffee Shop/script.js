const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent =
    document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll('.item').forEach((item) => {
    const name = item.dataset.name.toLowerCase();
    item.style.display = name.includes(term) ? '' : 'none';
  });
});

const items = document.querySelectorAll('.item');
const orderList = document.getElementById('orderList');
const totalDisplay = document.getElementById('total');
const clearOrder = document.getElementById('clearOrder');

let total = 0;

items.forEach((item) => {
  item.addEventListener('click', () => {
    const name = item.dataset.name;
    const price = parseFloat(item.dataset.price);
    total += price;
    
    const li = document.createElement('li');
    li.textContent = `${name} - $${price.toFixed(2)}`;
    orderList.appendChild(li);
    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    
    // Visual feedback: brief highlight animation
    item.style.backgroundColor = 'rgba(0, 128, 0, 0.2)';
    setTimeout(() => {
      item.style.backgroundColor = '';
    }, 200);
  });
});

clearOrder.addEventListener('click', () => {
  orderList.innerHTML = '';
  total = 0;
  totalDisplay.textContent = 'Total: $0.00';
});
