function initListenersType1(
  zad11Id,
  zad111Id,
  zad112Id,
  zad113Id,
  Zad12Id,
  Odp12Id
) {
  const zad11 = document.querySelector(zad11Id);

  zad11.addEventListener("click", () => {
    const checkbox1 = document.querySelector(zad111Id);
    const checkbox2 = document.querySelector(zad112Id);
    const checkbox3 = document.querySelector(zad113Id);

    const greenMarks = document.querySelectorAll(".mark-check-green");
    const redMarks = document.querySelectorAll(".mark-check-red");

    greenMarks.forEach((greenMark) => {
      if (!greenMark.classList.contains("inactive"))
        greenMark.classList.add("inactive");
    });

    redMarks.forEach((redMark) => {
      if (!redMark.classList.contains("inactive"))
        redMark.classList.add("inactive");
    });

    if (checkbox1.checked) {
      greenMarks[0].classList.remove("inactive");
    } else {
      redMarks[0].classList.remove("inactive");
    }

    if (checkbox2.checked) {
      redMarks[1].classList.remove("inactive");
    } else {
      greenMarks[1].classList.remove("inactive");
    }

    if (checkbox3.checked) {
      redMarks[2].classList.remove("inactive");
    } else {
      greenMarks[2].classList.remove("inactive");
    }
  });

  const zad12 = document.querySelector(Zad12Id);
  const odp12 = document.querySelector(Odp12Id);
  ChangeClass(zad12, odp12);
}

function initOnlyOpenAnswers(odpButtonArray, odpArray) {
  odpButtonArray.forEach((odp, i) => {
    ChangeClass(odp, odpArray[i]);
  });
}

function ChangeClass(buttonElement, showElement) {
  buttonElement.addEventListener("click", () => {
    if (showElement.classList.contains("inactive"))
      showElement.classList.remove("inactive");
  });
}

export { initListenersType1, ChangeClass, initOnlyOpenAnswers };
