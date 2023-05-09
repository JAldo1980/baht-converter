let currencyArr = [];

// Render out JS to the DOM
document.getElementById("container").innerHTML = `

<header>
<img class="logo" src="/images/Screenshot 2023-05-08 at 20.45.21.png" alt="bangkok-bankroll-logo">
<p><em>Get a rough conversion value of your Baht or Pounds, quick!</em></p>
</header>

<legend><h4>Select Currency To Convert:</h4>

<div class="select-currency">
<div>
<label for="baht">🇹🇭 Thai Baht</label>
<input type="radio" name="convert" id="baht" />
</div>
</legend>

<div>
<label for="pound">🇬🇧 Pound Sterling</label>
<input type="radio" name="convert" id="pound" />
</div>
</div>

<div class="input-currency-value">
<label for="currency">Input Currency Amount:</label>
<input type="number" name="currency" id="currency-input" placeholder="Enter amount here..."/>
</div>

<button id="btn" class="submit-btn" type="submit">CONVERT</button>

<div class="output-currency-conversion">
<div id="currency-output"></div>
</div>
`;

const bahtRadio = document.getElementById("baht");
const poundRadio = document.getElementById("pound");
const currencyInput = document.getElementById("currency-input");

// event listener for button conversion "click"

document.getElementById("btn").addEventListener("click", () => {
  // push array function
  function pushArr() {
    currencyArr.push(currencyInput.value);
  }

  // if / else currency check
  if (bahtRadio.checked === true) {
    pushArr();
    let bahtCurrencyArr = currencyArr.map((num) => (num / 40).toFixed(2));
    document.getElementById("currency-output").innerHTML = `
    <p>Your ${currencyInput.value} Thai Baht is worth:</p>
    <h3>£ ${bahtCurrencyArr}</h3>
    <p class="disclaimer">* This is a rough estimate, please check exchange rates for more acurate results</p>
    `;
  } else if (poundRadio.checked === true) {
    pushArr();
    let poundCurrencyArr = currencyArr.map((num) => (num * 40).toFixed(2));
    document.getElementById("currency-output").innerHTML = `
    <p>Your £${currencyInput.value} Pound Sterling is worth:</p>
    <h3>THB ${poundCurrencyArr}</h3>
    <p class="disclaimer">* This is a rough estimate, please check exchange rates for more acurate results</p>
    `;
  }
  resetValues();
});

function resetValues() {
  currencyArr = [];
  currencyInput.value = "";
  // Uncheck radio buttons
  bahtRadio.checked = false;
  poundRadio.checked = false;
}

function clearOutputs() {
  document.getElementById("currency-output").innerHTML = ``;
}
