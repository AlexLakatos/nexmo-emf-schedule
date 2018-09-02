<template>
    <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title"><a href="/">EMF Camp Schedule</a></span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link mdl-layout--large-screen-only" href="/">Home</a>
          <a href="https://developer.nexmo.com" target="_blank" class="love">made with 💙 by <br> <img src="https://dashboard.nexmo.com/resources/img/nexmo-logo-w-vonage.svg" /></a>
        </nav>
      </div>
    </header>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<style>
a.love {
  margin-bottom: 0;
  line-height: 18px;
  margin-left: 14px;
}

.love img {
  width: 100px;
}

@media (max-width: 479px) {
  .mdl-layout-title {
    font-size: 18px;
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.mdl-layout__header-row .mdl-navigation__link{
  padding: 0 0 0 24px;
}

.mdl-layout__header-row {
  padding: 0 16px;
}

.mdl-layout-title img {
  margin-top: -8px;
  margin-right: 10px;
}

.mdl-layout__header a {
  color: #ffffff;
  text-decoration: none;
}
</style>
