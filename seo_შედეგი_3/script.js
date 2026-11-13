const detailsButton = document.getElementById("details-toggle");
const meetingInfo = document.getElementById("meeting-info");

detailsButton.addEventListener("click", function () {
  meetingInfo.hidden = !meetingInfo.hidden;
  detailsButton.textContent = meetingInfo.hidden ? "დეტალების ნახვა" : "დეტალების დამალვა";
  detailsButton.setAttribute("aria-expanded", String(!meetingInfo.hidden));
});
