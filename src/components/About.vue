<template>
    <div class="about-frame app-frame">
        <h1 class="fw100 color4">About</h1>
        <h2 class="author fw100 color0">
            Made by
            <a class="link fw700 color5 serif" href="https://github.com/rafaelfagundes">Rafael Fagundes</a>
            in <a class="link fw700 color5 serif" href="https://en.wikipedia.org/wiki/S%C3%A3o_Jo%C3%A3o_del_Rei">São João del Rei - MG</a>
        </h2>
        <span class="techs">
            <h3 class="fw700 color7 serif italic">With</h3>
            <p class="fw300 color0"><a class="link color3" href="https://vuejs.org/">Vue.js</a></p>
            <p class="fw300 color0"><a class="link color3" href="https://nodejs.org/">Node.js</a></p>
            <p class="fw300 color0"><a class="link color3" href="http://expressjs.com/">Express</a></p>
            <p class="fw300 color0"><a class="link color3" href="https://webpack.js.org/">webpack</a></p>
            <p class="fw300 color0"><a class="link color3" href="https://babeljs.io/">Babel</a></p>
            <p class="fw300 color0"><a class="link color3" href="https://eslint.org/">ESLint</a></p>
        </span>
        <span class="credits">
            <h3 class="fw700 color7 serif italic">Credits</h3>
            <p class="fw300 color3 ">
                Icons designed by
                <a class="link fw400 color4" href="https://icon54.com/">Pixel Perfect</a>
                from
                <a class="link fw400 color4" href="https://www.flaticon.com/">Flaticon</a>.
            </p>
            <p class="fw300 color3 ">
                Weather is provided by
                <a class="link fw400 color4" href="https://openweathermap.org/">
                OpenWeatherMap</a>.
            </p>
        </span>
        <div class="back-button">
            <img src="static/img/clear.svg" alt="">
            <router-link to="/" class="text fw400 color7 link">back</router-link>
        </div>
    </div>
</template>
<script></script>
<style src="./About.css"></style>
