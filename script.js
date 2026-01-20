function setResult(id, value) {
  const el = document.getElementById(id);
  if (!el) return;

  if ("value" in el) el.value = value;
  else el.innerHTML = value;
}

function temperature() {
  const celsiusEl = document.getElementById("celsius");
  const c = parseFloat(celsiusEl?.value);

  if (Number.isNaN(c)) {
    setResult("fahrenheit", "");
    alert("Please enter a valid Celsius value.");
    return;
  }

  const f = (c * 9 / 5) + 32;
  setResult("fahrenheit", f);
}

function weight() {
  const kiloEl = document.getElementById("kilo");
  const kg = parseFloat(kiloEl?.value);

  if (Number.isNaN(kg)) {
    setResult("pounds", "");
    alert("Please enter a valid Kilograms value.");
    return;
  }

  const pounds = kg * 2.2;
  setResult("pounds", pounds);
}

function distance() {
  const kmEl = document.getElementById("km");
  const km = parseFloat(kmEl?.value);

  if (Number.isNaN(km)) {
    setResult("miles", "");
    alert("Please enter a valid Kilometers value.");
    return;
  }

  const miles = km * 0.62137;
  setResult("miles", miles);
}