const createBurgerBtn = document.getElementById('addBurger');

if (createBurgerBtn) {
  createBurgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("ive been clicked")

    const newBurger = {
      name: document.getElementById('burgerName').value,
    };
    fetch('/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBurger),
      }).then(() => {
        document.getElementById('burgerName').value = '';

        console.log('Created a new cat!');
        location.reload();
      });
  })
}
