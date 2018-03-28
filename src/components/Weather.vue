<template>
  <div class="weather-frame app-frame">
    <div>
      <form @submit.prevent="weather">
      <input id="city-name" type="text" placeholder="Enter city name..."
             v-model="searchQuery" class="color0"/>
      <button type="submit" class="btn-search" :disabled="!searchQuery">
        <i class="material-icons md-48">search</i>
      </button>
    </form>
    </div>
    <Spinner v-if="showSpinner"></Spinner>
    <div class="error color5" v-if="errorMsg">
      Seach for "{{ searchQuery }}": {{ errorMsg }}
    </div>
    <div class="weather-result" v-if="showWeatherResult">
      <h1 class="color4">
        {{ serverData.name }}
        <small class="color5">{{ serverData.sys.country }}</small>
      </h1>
      <div class="temperature">
        <div class="temp-value color7">
          {{ Math.ceil(Number(serverData.main.temp)) }}<span class="temp-unit">°C</span>
        </div>
        <img v-if="Number(serverData.weather[0].id) === 800"
             class="weather-icon"
             src="/static/img/clear.svg" />
        <img v-if="Number(serverData.weather[0].id) === 801"
             class="weather-icon"
             src="/static/img/few-clouds.svg" />
        <img v-if="Number(serverData.weather[0].id) >= 200
                   && Number(serverData.weather[0].id) < 300"
             class="weather-icon"
             src="/static/img/thunderstorm.svg" />
        <img v-if="Number(serverData.weather[0].id) >= 300
                   && Number(serverData.weather[0].id) <= 321"
             class="weather-icon"
             src="/static/img/drizzle.svg" />
        <img v-if="Number(serverData.weather[0].id) >= 500
                   && Number(serverData.weather[0].id) <= 531"
             class="weather-icon"
             src="/static/img/rain.svg" />
        <img v-if="Number(serverData.weather[0].id) >= 600
                   && Number(serverData.weather[0].id) <= 622"
             class="weather-icon"
             src="/static/img/snow.svg" />
        <img v-if="Number(serverData.weather[0].id) >= 701
                   && Number(serverData.weather[0].id) < 772"
             class="weather-icon"
             src="/static/img/mist.svg" />
        <img v-if="Number(serverData.weather[0].id) > 801
                   && Number(serverData.weather[0].id) <= 804"
             class="weather-icon"
             src="/static/img/clouds.svg" />
      </div>
      <span class="color8 bold">~</span>
      <div>
        <div class="desc color0">{{ serverData.weather[0].description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherService from '@/services/WeatherService';
import Spinner from './Spinner';

export default {
  name: 'Weather',
  data() {
    return {
      searchQuery: '',
      serverData: '',
      showSpinner: false,
      showWeatherResult: false,
      errorMsg: '',
      responseCode: 0,
    };
  },
  watch: {
    searchQuery() {
      this.errorMsg = '';
    },
  },
  methods: {
    async weather() {
      this.showSpinner = true;
      this.showWeatherResult = false;
      const response = await WeatherService.weather({
        query: this.searchQuery,
      });
      this.serverData = response.data;
      this.showWeatherResult = true;

      this.responseCode = Number(response.data.cod);

      if (this.responseCode === 200) {
        this.showSpinner = false;
        this.showWeatherResult = true;
      }
      if (this.responseCode === 404) {
        this.showSpinner = false;
        this.showWeatherResult = false;
        this.errorMsg = response.data.message;
      }
    },
  },
  components: {
    Spinner,
  },
};
</script>

<style src='./Weather.css'></style>
