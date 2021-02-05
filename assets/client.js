const createBurgerBtn = document.getElementById("addBurger");

if (createBurgerBtn) {
  createBurgerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("ive been clicked");

    const newBurger = {
      name: document.getElementById("burgerName").value,
    };
    fetch("/api/burger", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBurger),
    }).then(() => {
      document.getElementById("burgerName").value = "";

      console.log("Created a new cat!");
      location.reload();
    });
  });
}

const changeSleepBtns = document.querySelectorAll(".btn-sm");
if (changeSleepBtns) {
  changeSleepBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-burger");
      console.log(id);

      fetch(`/api/burger/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.ok) {
          console.log(response);
          location.reload('/');
        } else {
          alert("something went wrong!");
        }
      });
    });
  });
}
