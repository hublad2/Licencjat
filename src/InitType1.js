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

function InitMultipleAnserwsFromThree(
  checkButtonId,
  checkBox1Id,
  checkBox2Id,
  checkBox3Id,
  greenMark1Id,
  redMark1Id,
  greenMark2Id,
  redMark2Id,
  greenMark3Id,
  redMark3Id
) {
  const checkButton = document.querySelector(checkButtonId);
  const checkbox1 = document.querySelector(checkBox1Id);
  const greenMark1 = document.querySelector(greenMark1Id);
  const redMark1 = document.querySelector(redMark1Id);
  const checkbox2 = document.querySelector(checkBox2Id);
  const greenMark2 = document.querySelector(greenMark2Id);
  const redMark2 = document.querySelector(redMark2Id);
  const checkbox3 = document.querySelector(checkBox3Id);
  const greenMark3 = document.querySelector(greenMark3Id);
  const redMark3 = document.querySelector(redMark3Id);

  const greenMarks = [greenMark1, greenMark2, greenMark3];
  const redMarks = [redMark1, redMark2, redMark3];

  checkButton.addEventListener("click", () => {
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
      greenMarks[1].classList.remove("inactive");
    } else {
      redMarks[1].classList.remove("inactive");
    }

    if (checkbox3.checked) {
      redMarks[2].classList.remove("inactive");
    } else {
      greenMarks[2].classList.remove("inactive");
    }
  });
}

function InitChooseTwo(
  checkBox1,
  checkBox2,
  answerButton,
  markGreenId,
  markRedId,
  display
) {
  const checkBox1Element = document.querySelector(checkBox1);
  const checkBox2Element = document.querySelector(checkBox2);
  const answerButtonElement = document.querySelector(answerButton);

  checkBox1Element.addEventListener("click", () => {
    if (checkBox2Element.checked) checkBox2Element.checked = false;
  });

  checkBox2Element.addEventListener("click", () => {
    if (checkBox1Element.checked) checkBox1Element.checked = false;
  });

  const greenMark = document.querySelector(markGreenId);
  const redMark = document.querySelector(markRedId);

  if (display) {
    answerButtonElement.addEventListener("click", () => {
      if (!greenMark.classList.contains("inactive"))
        greenMark.classList.add("inactive");

      if (!redMark.classList.contains("inactive"))
        redMark.classList.add("inactive");

      if (checkBox1Element.checked) {
        greenMark.classList.remove("inactive");
      }
      if (checkBox2Element.checked) {
        redMark.classList.remove("inactive");
      }
    });
  } else {
    answerButtonElement.addEventListener("click", () => {
      if (!greenMark.classList.contains("inactive-chekbox"))
        greenMark.classList.add("inactive-chekbox");

      if (!redMark.classList.contains("inactive-chekbox"))
        redMark.classList.add("inactive-chekbox");

      if (checkBox1Element.checked) {
        greenMark.classList.remove("inactive-chekbox");
      }
      if (checkBox2Element.checked) {
        redMark.classList.remove("inactive-chekbox");
      }
    });
  }
}

function InitChooseOneFromThree(
  checkBox1,
  checkBox2,
  checkBox3,
  answerButton,
  markGreenId,
  markRedId1,
  markRedId2,
  display
) {
  const checkBox1Element = document.querySelector(checkBox1);
  const checkBox2Element = document.querySelector(checkBox2);
  const checkBox3Element = document.querySelector(checkBox3);
  const answerButtonElement = document.querySelector(answerButton);

  checkBox1Element.addEventListener("click", () => {
    checkBox2Element.checked = false;
    checkBox3Element.checked = false;
  });

  checkBox2Element.addEventListener("click", () => {
    checkBox1Element.checked = false;
    checkBox3Element.checked = false;
  });

  checkBox3Element.addEventListener("click", () => {
    checkBox1Element.checked = false;
    checkBox2Element.checked = false;
  });

  const greenMark = document.querySelector(markGreenId);
  const redMark1 = document.querySelector(markRedId1);
  const redMark2 = document.querySelector(markRedId2);

  if (display) {
    answerButtonElement.addEventListener("click", () => {
      if (!greenMark.classList.contains("inactive"))
        greenMark.classList.add("inactive");

      if (!redMark1.classList.contains("inactive"))
        redMark1.classList.add("inactive");

      if (!redMark2.classList.contains("inactive"))
        redMark2.classList.add("inactive");

      if (checkBox1Element.checked) {
        redMark1.classList.remove("inactive");
      }
      if (checkBox2Element.checked) {
        redMark2.classList.remove("inactive");
      }
      if (checkBox3Element.checked) {
        greenMark.classList.remove("inactive");
      }
    });
  } else {
    answerButtonElement.addEventListener("click", () => {
      if (!greenMark.classList.contains("inactive-chekbox"))
        greenMark.classList.add("inactive-chekbox");

      if (!redMark1.classList.contains("inactive-chekbox"))
        redMark1.classList.add("inactive-chekbox");

      if (!redMark2.classList.contains("inactive-chekbox"))
        redMark2.classList.add("inactive-chekbox");

      if (checkBox1Element.checked) {
        redMark1.classList.remove("inactive-chekbox");
      }
      if (checkBox2Element.checked) {
        redMark2.classList.remove("inactive-chekbox");
      }
      if (checkBox3Element.checked) {
        greenMark.classList.remove("inactive-chekbox");
      }
    });
  }
}

function InitCheckValue(
  answerButtonId,
  inputId,
  valueMin,
  valueMax,
  markGreenId,
  markRedId,
  display
) {
  const answerButton = document.querySelector(answerButtonId);
  const input = document.querySelector(inputId);
  const markGreen = document.querySelector(markGreenId);
  const markRed = document.querySelector(markRedId);

  if (display) {
    answerButton.addEventListener("click", () => {
      if (!markGreen.classList.contains("inactive"))
        markGreen.classList.add("inactive");
      if (!markRed.classList.contains("inactive"))
        markRed.classList.add("inactive");
      if (input.value < valueMax && input.value > valueMin) {
        markGreen.classList.remove("inactive");
      } else {
        markRed.classList.remove("inactive");
      }
    });
  } else {
    answerButton.addEventListener("click", () => {
      if (!markGreen.classList.contains("inactive-chekbox"))
        markGreen.classList.add("inactive-chekbox");
      if (!markRed.classList.contains("inactive-chekbox"))
        markRed.classList.add("inactive-chekbox");
      if (input.value < valueMax && input.value > valueMin) {
        markGreen.classList.remove("inactive-chekbox");
      } else {
        markRed.classList.remove("inactive-chekbox");
      }
    });
  }
}

function initOnlyOpenAnswers(odpButtonArray, odpArray) {
  odpButtonArray.forEach((odp, i) => {
    ChangeClass(odp, odpArray[i]);
  });
}

function ChangeClass(buttonElement, showElement) {
  buttonElement.addEventListener("click", () => {
    if (showElement.classList.contains("inactive-chekbox")) {
      showElement.classList.remove("inactive-chekbox");
    } else {
      showElement.classList.add("inactive-chekbox");
    }
  });
}

export {
  initListenersType1,
  ChangeClass,
  initOnlyOpenAnswers,
  InitChooseTwo,
  InitCheckValue,
  InitChooseOneFromThree,
  InitMultipleAnserwsFromThree,
};
