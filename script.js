const popupContainer = document.getElementById("popups");

const popupBtn = document.getElementById("toast-it");

const toastTitle = document.getElementById("toast-title");

const toastDesc = document.getElementById("toast-desc");

let deleteTime = 4000;

const deletePopup = (timeout, target) => {
  clearTimeout(timeout);
  popupContainer.removeChild(target);
};

const makePopup = (title, content) => {
  let popupDiv = document.createElement("div");
  popupDiv.classList.add("popup");
  let popupTitle = document.createElement("h3");
  popupTitle.classList.add("popup-title");
  let popupDesc = document.createElement("p");
  popupDesc.classList.add("popup-desc");
  let popupBtn = document.createElement("button");
  popupBtn.classList.add("close-popup");
  let popupTimer = document.createElement("div");
  popupTimer.classList.add("popup-timer");

  popupTitle.textContent = title;
  popupDesc.textContent = content;
  popupBtn.textContent = "✖";

  popupDiv.appendChild(popupTitle);
  popupDiv.appendChild(popupDesc);
  popupDiv.appendChild(popupBtn);
  popupDiv.appendChild(popupTimer);

  let keyframes = {
    right: "0",
    opacity: "1",
  };

  popupContainer.appendChild(popupDiv);
  popupDiv.animate(keyframes, {
    duration: 200,
    fill: "forwards",
  });

  let keyframesTimer = {
    width: 0,
  };

  popupTimer.animate(keyframesTimer, {
    duration: deleteTime,
  });

  let timeout = setTimeout(() => {
    popupContainer.removeChild(popupDiv);
  }, deleteTime);

  popupBtn.addEventListener("click", (e) => {
    deletePopup(timeout, e.target.parentElement);
  });
};

popupBtn.addEventListener("click", () => {
  let title = toastTitle.value,
    desc = toastDesc.value;
  if (title) {
    makePopup((title = toastTitle.value), (content = toastDesc.value));
  } else if (desc) {
    makePopup("Error", "No Title Given for the Popup");
  } else {
    console.log("Enter title for Toast!!");
  }
});
