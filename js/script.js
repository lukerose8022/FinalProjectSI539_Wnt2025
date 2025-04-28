// Code for Accessibility Button
const button = document.getElementById("accessibility-button");
const options = document.getElementById("accessibility-options");
const darkModeButton = options.querySelector("li:nth-child(1) button");
const monochromeButton = options.querySelector("li:nth-child(2) button");
const viewAltTextButton = options.querySelector("li:nth-child(3) button");


button.addEventListener("click", function (event) {
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", !isExpanded);
  options.hidden = isExpanded;
  event.stopPropagation();
});

document.addEventListener("click", function (event) {
  if (!button.contains(event.target) && !options.contains(event.target)) {
    button.setAttribute("aria-expanded", "false");
    options.hidden = true;
  }
});

button.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    button.click();
  }
});

darkModeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  darkModeButton.classList.toggle("active");

  if (document.body.classList.contains("dark-mode")) {
    darkModeButton.textContent = "Turn Off Dark Mode";
    document.body.classList.remove("monochrome-mode");
    monochromeButton.classList.remove("active");
    monochromeButton.textContent = "Monochrome Mode";
  } else {
    darkModeButton.textContent = "Dark Mode";
  }
});

monochromeButton.addEventListener("click", function () {
  document.body.classList.toggle("monochrome-mode");
  monochromeButton.classList.toggle("active");

  if (document.body.classList.contains("monochrome-mode")) {
    monochromeButton.textContent = "Turn Off Monochrome";
    document.body.classList.remove("dark-mode");
    darkModeButton.classList.remove("active");
    darkModeButton.textContent = "Dark Mode";
  } else {
    monochromeButton.textContent = "Monochrome Mode";
  }
});


viewAltTextButton.addEventListener("click", function () {
  document.body.classList.toggle("show-alt-text");
  viewAltTextButton.classList.toggle("active");

  if (document.body.classList.contains("show-alt-text")) {
    viewAltTextButton.textContent = "Hide Alt Text";
  } else {
    viewAltTextButton.textContent = "View Alt Text";
  }
});

const persons = document.querySelectorAll('.person');

persons.forEach(person => {
  person.addEventListener('click', () => {
    persons.forEach(otherPerson => {
      if (otherPerson !== person) {
        otherPerson.classList.remove('open');
      }
    });
    person.classList.toggle('open');
  });
  person.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      person.click();
    }
  });
});

document.querySelectorAll('.exit-button').forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const person = button.closest('.person');
      person.classList.remove('open');
    });
  });

document.getElementById("year").textContent = new Date().getFullYear();
