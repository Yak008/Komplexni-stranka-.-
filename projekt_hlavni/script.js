/**
 * Responzivní webová stránka.
 *
 * @author Jáchym Kahanec
 * @version 1.1
 */

/**funkce umožňuje pomocí tlačítka měnit ze světlé do tmavé kompozice a zpět */

const colorModeChange = () => {
  const modeButton = document.querySelector(".color-mode");
  const body = document.querySelector("body");

  modeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });
};

/**Funkce rozbaluje hamburger menu*/

const burgerMenuOpening = () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const desktopMenu = document.querySelector(".menu");

  burgerMenu.addEventListener("click", () => {
    desktopMenu.classList.toggle("menu-phone");
  });
};

/**Funkce porovnává shodnost hodnoty zadaných hesel do inputu*/

const passwordComparison = () => {
  const form = document.querySelector("form");
  const password1 = document.querySelector(".password1");
  const password2 = document.querySelector(".password2");
  const notSamePassword = document.querySelector(".notificationPassword");
  form.addEventListener("input", (event) => {
    event.preventDefault();

    if (password1.value !== password2.value) {
      notSamePassword.classList.add("block");
      notSamePassword.classList.remove("none");
    } else {
      notSamePassword.classList.add("none");
      notSamePassword.classList.remove("block");
    }
  });
};

/**Funkce kontroluje správnost zadaného emailu na základě regulárního výrazu*/

const emailVerification = () => {
  const form = document.querySelector("form");
  const email = document.querySelector(".email");
  const notEmail = document.querySelector(".notificationEmail");
  const emailValue = email.value;
  const pattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = email.value;

    if (emailValue.match(pattern)) {
      notEmail.classList.add("none");
      notEmail.classList.remove("block");
    } else {
      notEmail.classList.add("block");
      notEmail.classList.remove("none");
    }
  });
};

/**Funkce umožňuje pomocí tláčítka odscrollovat zpět na vršek stránky*/

const scrollToTopButton = () => {
  const scrollBtn = document.querySelector(".scroll-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      scrollBtn.classList.add("visible");
      scrollBtn.classList.remove("invisible");
    } else {
      scrollBtn.classList.add("invisible");
      scrollBtn.classList.remove("visible");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

/**Volání funkcí*/

scrollToTopButton();
emailVerification();
passwordComparison();
colorModeChange();
burgerMenuOpening();
