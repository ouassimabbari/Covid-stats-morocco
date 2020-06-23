<template>
  <nav>
    <h1>Covid-19 Morocco</h1>
    <ul>
      <li>
        <a href="#">News</a>
      </li>
      <li>
        <a href="#">World</a>
      </li>
    </ul>
  </nav>
</template>

<style type="text/css">
nav {
  background-color: var(--primary-color);
  min-height: 10vh;
  justify-content: space-around;
  align-items: center;
  display: flex;
  color: white;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
  text-underline-position: under;
}

nav ul {
  list-style-type: none;
  display: flex;
}

nav ul li {
  margin-right: 6em;
}
</style>