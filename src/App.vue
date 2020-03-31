<template>
  <div id="app">
    <nav class="nav">
      <div class="nav-container">
        <div class="nav-left">
          <h1>Recipe Finder</h1>
        </div>
        <div class="nav-right">
          <router-link to="/home">Home</router-link>
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </nav>

    <main class="main">
      <div class="search-area">
        <form>
          <input
            type="text"
            class="search-field"
            name="search"
            id="search-field"
            placeholder="Search on keyword"
          />
          <button class="search-btn" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </main>
  </div>
</template>
