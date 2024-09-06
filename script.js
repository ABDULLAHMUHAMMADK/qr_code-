function gen() {
  let qr_code = document.getElementById("qr_code");
  let txt = document.getElementById("text").value;

  if (!txt) {
    alert("please enter text or Url");
  } else {
    qr_code.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${txt}`;
  }
}
function cl() {
  let qr_code = (document.getElementById("qr_code").src = "");
}
