@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
:root {
  --primary-color: rgb(17, 86, 102);
  --primary-color-darker: rgb(9, 48, 56);
}

* {
  box-sizing: border-box;
  outline: 0;
}

body {
  margin: 0;
  padding: 0;
  background: var(--primary-color);
  font-family: 'Open sans', sans-serif;
  font-size: 1.3em;
  line-height: 1.5em;
}

.container {
  max-width: 640px;
  margin: 50px auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}

form input, form label, form button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

form input {
  font-size: 24px;
  height: 50px;
  padding: 0 20px;
}

form input:focus {
  outline: 1px solid var(--primary-color);
}

form button {
  border: none;
  background: var(--primary-color);
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  height: 50px;
  cursor: pointer;
  margin-top: 30px;
}

form button:hover {
  background: var(--primary-color-darker);
}

.senha-gerada {
  font-size: 2em;
  color: var(--primary-color);
  margin: 40px 0;
}

input[type="checkbox"] {
  width: 25px;
  height: 25px;
}

button {
  display: block;
  margin: 40px 0;
  font-size: 1em;
}