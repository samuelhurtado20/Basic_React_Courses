import React, { useState } from "react";

/* export default function Formularios() {
  const [name, setname] = useState("");
  const [typeJs, settypeJs] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terms, setterms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form was sent");
  };

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <p>Choose an option:</p>
        <input
          type="radio"
          id="vanilla"
          name="typeJs"
          value="vanilla"
          onChange={(e) => settypeJs(e.target.value)}
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="typeJs"
          value="react"
          onChange={(e) => settypeJs(e.target.value)}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="angular"
          name="typeJs"
          value="angular"
          onChange={(e) => settypeJs(e.target.value)}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="vue"
          name="typeJs"
          value="vue"
          onChange={(e) => settypeJs(e.target.value)}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="svelte"
          name="typeJs"
          value="svelte"
          onChange={(e) => settypeJs(e.target.value)}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Select..</p>
        <select
          name="lenguaje"
          onChange={(e) => setLenguaje(e.target.value)}
          defaultValue=""
        >
          <option value="">- - -</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terms">I accept terms and conditions </label>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={(e) => setterms(e.target.checked)}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
} */

export default function ExForm() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("The form was sent.");
  };

  return (
    <>
      <h2>Forms with react</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <p>Choose an option:</p>
        <input
          type="radio"
          id="vanilla"
          name="typeJs"
          value="vanilla"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="typeJs"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="angular"
          name="typeJs"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="vue"
          name="typeJs"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="svelte"
          name="typeJs"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Choose a programming language</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">- - -</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terms">I accept terms and conditions</label>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}