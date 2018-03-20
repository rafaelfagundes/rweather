<template>
  <div id="weather">
    <router-view/>
    <div class="z-depth-2">
      <div class="row">
        <div class="col s12">
          <div class="input-field col s9 center-align">
            <input id="search" type="search" class="validate">
            <label for="search">Search</label>
          </div>
          <div class="input-field col s3 center-align">
            <a class="waves-effect waves-light btn">
              <i class="material-icons">search</i>
            </a>
            <a class="waves-effect waves-light btn">
              <i class="material-icons">location_searching</i>
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data() {
    return {
      serverData: {
        cod: '200',
        message: 0.0052,
        cnt: 40,
        list: [
          {
            dt: 1521493200,
            main: {
              temp: 26.69,
              temp_min: 26.69,
              temp_max: 27.72,
              pressure: 912.5,
              sea_level: 1020.75,
              grnd_level: 912.5,
              humidity: 46,
              temp_kf: -1.03,
            },
            weather: [
              {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d',
              },
            ],
            clouds: {
              all: 92,
            },
            wind: {
              speed: 1.47,
              deg: 217.501,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-19 21:00:00',
          },
          {
            dt: 1521504000,
            main: {
              temp: 23.69,
              temp_min: 23.69,
              temp_max: 24.46,
              pressure: 913.78,
              sea_level: 1022.55,
              grnd_level: 913.78,
              humidity: 64,
              temp_kf: -0.77,
            },
            weather: [
              {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04n',
              },
            ],
            clouds: {
              all: 64,
            },
            wind: {
              speed: 0.27,
              deg: 218.002,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-20 00:00:00',
          },
          {
            dt: 1521514800,
            main: {
              temp: 22.98,
              temp_min: 22.98,
              temp_max: 23.5,
              pressure: 914.01,
              sea_level: 1023.21,
              grnd_level: 914.01,
              humidity: 68,
              temp_kf: -0.51,
            },
            weather: [
              {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04n',
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 1.18,
              deg: 75.002,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-20 03:00:00',
          },
          {
            dt: 1521525600,
            main: {
              temp: 22.53,
              temp_min: 22.53,
              temp_max: 22.78,
              pressure: 913.54,
              sea_level: 1023.05,
              grnd_level: 913.54,
              humidity: 63,
              temp_kf: -0.26,
            },
            weather: [
              {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04n',
              },
            ],
            clouds: {
              all: 76,
            },
            wind: {
              speed: 1.87,
              deg: 43.5016,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-20 06:00:00',
          },
          {
            dt: 1521536400,
            main: {
              temp: 20.43,
              temp_min: 20.43,
              temp_max: 20.43,
              pressure: 914.66,
              sea_level: 1024.46,
              grnd_level: 914.66,
              humidity: 74,
              temp_kf: 0,
            },
            weather: [
              {
                id: 801,
                main: 'Clouds',
                description: 'few clouds',
                icon: '02n',
              },
            ],
            clouds: {
              all: 24,
            },
            wind: {
              speed: 2.04,
              deg: 5.50046,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-20 09:00:00',
          },
          {
            dt: 1521547200,
            main: {
              temp: 26.36,
              temp_min: 26.36,
              temp_max: 26.36,
              pressure: 916.32,
              sea_level: 1025.48,
              grnd_level: 916.32,
              humidity: 57,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '02d',
              },
            ],
            clouds: {
              all: 8,
            },
            wind: {
              speed: 2.88,
              deg: 328.504,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-20 12:00:00',
          },
          {
            dt: 1521558000,
            main: {
              temp: 29.88,
              temp_min: 29.88,
              temp_max: 29.88,
              pressure: 915.15,
              sea_level: 1023.63,
              grnd_level: 915.15,
              humidity: 49,
              temp_kf: 0,
            },
            weather: [
              {
                id: 802,
                main: 'Clouds',
                description: 'scattered clouds',
                icon: '03d',
              },
            ],
            clouds: {
              all: 48,
            },
            wind: {
              speed: 2.67,
              deg: 299.501,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-20 15:00:00',
          },
          {
            dt: 1521568800,
            main: {
              temp: 30.58,
              temp_min: 30.58,
              temp_max: 30.58,
              pressure: 913.39,
              sea_level: 1021.45,
              grnd_level: 913.39,
              humidity: 42,
              temp_kf: 0,
            },
            weather: [
              {
                id: 802,
                main: 'Clouds',
                description: 'scattered clouds',
                icon: '03d',
              },
            ],
            clouds: {
              all: 48,
            },
            wind: {
              speed: 1.96,
              deg: 291.001,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-20 18:00:00',
          },
          {
            dt: 1521579600,
            main: {
              temp: 28.57,
              temp_min: 28.57,
              temp_max: 28.57,
              pressure: 913.68,
              sea_level: 1022.19,
              grnd_level: 913.68,
              humidity: 43,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 92,
            },
            wind: {
              speed: 0.56,
              deg: 0.50177,
            },
            rain: {
              '3h': 0.005,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-20 21:00:00',
          },
          {
            dt: 1521590400,
            main: {
              temp: 25.28,
              temp_min: 25.28,
              temp_max: 25.28,
              pressure: 914.95,
              sea_level: 1024.15,
              grnd_level: 914.95,
              humidity: 65,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 1.06,
              deg: 113.501,
            },
            rain: {
              '3h': 0.315,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-21 00:00:00',
          },
          {
            dt: 1521601200,
            main: {
              temp: 22.99,
              temp_min: 22.99,
              temp_max: 22.99,
              pressure: 915.66,
              sea_level: 1025.37,
              grnd_level: 915.66,
              humidity: 82,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 92,
            },
            wind: {
              speed: 0.86,
              deg: 210.507,
            },
            rain: {
              '3h': 1.45,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-21 03:00:00',
          },
          {
            dt: 1521612000,
            main: {
              temp: 22.05,
              temp_min: 22.05,
              temp_max: 22.05,
              pressure: 915.13,
              sea_level: 1025.02,
              grnd_level: 915.13,
              humidity: 82,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 88,
            },
            wind: {
              speed: 0.56,
              deg: 88.003,
            },
            rain: {
              '3h': 0.26,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-21 06:00:00',
          },
          {
            dt: 1521622800,
            main: {
              temp: 20.09,
              temp_min: 20.09,
              temp_max: 20.09,
              pressure: 915.91,
              sea_level: 1025.89,
              grnd_level: 915.91,
              humidity: 89,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 56,
            },
            wind: {
              speed: 1.21,
              deg: 52.0007,
            },
            rain: {
              '3h': 0.0050000000000003,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-21 09:00:00',
          },
          {
            dt: 1521633600,
            main: {
              temp: 23.86,
              temp_min: 23.86,
              temp_max: 23.86,
              pressure: 916.48,
              sea_level: 1025.96,
              grnd_level: 916.48,
              humidity: 76,
              temp_kf: 0,
            },
            weather: [
              {
                id: 802,
                main: 'Clouds',
                description: 'scattered clouds',
                icon: '03d',
              },
            ],
            clouds: {
              all: 44,
            },
            wind: {
              speed: 2.21,
              deg: 18.5005,
            },
            rain: {

            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-21 12:00:00',
          },
          {
            dt: 1521644400,
            main: {
              temp: 28.51,
              temp_min: 28.51,
              temp_max: 28.51,
              pressure: 914.96,
              sea_level: 1023.64,
              grnd_level: 914.96,
              humidity: 57,
              temp_kf: 0,
            },
            weather: [
              {
                id: 802,
                main: 'Clouds',
                description: 'scattered clouds',
                icon: '03d',
              },
            ],
            clouds: {
              all: 36,
            },
            wind: {
              speed: 3.91,
              deg: 323.501,
            },
            rain: {

            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-21 15:00:00',
          },
          {
            dt: 1521655200,
            main: {
              temp: 25.86,
              temp_min: 25.86,
              temp_max: 25.86,
              pressure: 913.69,
              sea_level: 1022.01,
              grnd_level: 913.69,
              humidity: 75,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 32,
            },
            wind: {
              speed: 4.02,
              deg: 288.505,
            },
            rain: {
              '3h': 2.8,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-21 18:00:00',
          },
          {
            dt: 1521666000,
            main: {
              temp: 26.03,
              temp_min: 26.03,
              temp_max: 26.03,
              pressure: 913.15,
              sea_level: 1022.13,
              grnd_level: 913.15,
              humidity: 63,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 88,
            },
            wind: {
              speed: 1.46,
              deg: 270.001,
            },
            rain: {
              '3h': 0.395,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-21 21:00:00',
          },
          {
            dt: 1521676800,
            main: {
              temp: 19.57,
              temp_min: 19.57,
              temp_max: 19.57,
              pressure: 915.12,
              sea_level: 1024.65,
              grnd_level: 915.12,
              humidity: 97,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: 'Rain',
                description: 'moderate rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 64,
            },
            wind: {
              speed: 1.17,
              deg: 260.501,
            },
            rain: {
              '3h': 4.34,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-22 00:00:00',
          },
          {
            dt: 1521687600,
            main: {
              temp: 18.41,
              temp_min: 18.41,
              temp_max: 18.41,
              pressure: 915.01,
              sea_level: 1025.02,
              grnd_level: 915.01,
              humidity: 98,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: 'Rain',
                description: 'moderate rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 48,
            },
            wind: {
              speed: 1.35,
              deg: 42.5027,
            },
            rain: {
              '3h': 3.7,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-22 03:00:00',
          },
          {
            dt: 1521698400,
            main: {
              temp: 17.79,
              temp_min: 17.79,
              temp_max: 17.79,
              pressure: 914.02,
              sea_level: 1024.03,
              grnd_level: 914.02,
              humidity: 99,
              temp_kf: 0,
            },
            weather: [
              {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04n',
              },
            ],
            clouds: {
              all: 68,
            },
            wind: {
              speed: 1.41,
              deg: 32.0049,
            },
            rain: {

            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-22 06:00:00',
          },
          {
            dt: 1521709200,
            main: {
              temp: 18.1,
              temp_min: 18.1,
              temp_max: 18.1,
              pressure: 914.37,
              sea_level: 1024.42,
              grnd_level: 914.37,
              humidity: 99,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 76,
            },
            wind: {
              speed: 1.61,
              deg: 122,
            },
            rain: {
              '3h': 1.27,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-22 09:00:00',
          },
          {
            dt: 1521720000,
            main: {
              temp: 21.55,
              temp_min: 21.55,
              temp_max: 21.55,
              pressure: 916.11,
              sea_level: 1025.77,
              grnd_level: 916.11,
              humidity: 95,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 68,
            },
            wind: {
              speed: 1.86,
              deg: 70.0018,
            },
            rain: {
              '3h': 0.010000000000002,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-22 12:00:00',
          },
          {
            dt: 1521730800,
            main: {
              temp: 26.01,
              temp_min: 26.01,
              temp_max: 26.01,
              pressure: 915.13,
              sea_level: 1024.31,
              grnd_level: 915.13,
              humidity: 82,
              temp_kf: 0,
            },
            weather: [
              {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04d',
              },
            ],
            clouds: {
              all: 68,
            },
            wind: {
              speed: 2.56,
              deg: 308.501,
            },
            rain: {

            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-22 15:00:00',
          },
          {
            dt: 1521741600,
            main: {
              temp: 26.26,
              temp_min: 26.26,
              temp_max: 26.26,
              pressure: 913.22,
              sea_level: 1022.17,
              grnd_level: 913.22,
              humidity: 72,
              temp_kf: 0,
            },
            weather: [
              {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04d',
              },
            ],
            clouds: {
              all: 64,
            },
            wind: {
              speed: 3.66,
              deg: 318,
            },
            rain: {

            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-22 18:00:00',
          },
          {
            dt: 1521752400,
            main: {
              temp: 21.2,
              temp_min: 21.2,
              temp_max: 21.2,
              pressure: 914.21,
              sea_level: 1023.32,
              grnd_level: 914.21,
              humidity: 97,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: 'Rain',
                description: 'moderate rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 88,
            },
            wind: {
              speed: 0.61,
              deg: 119.001,
            },
            rain: {
              '3h': 4.68,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-22 21:00:00',
          },
          {
            dt: 1521763200,
            main: {
              temp: 18.67,
              temp_min: 18.67,
              temp_max: 18.67,
              pressure: 916.03,
              sea_level: 1025.86,
              grnd_level: 916.03,
              humidity: 99,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: 'Rain',
                description: 'moderate rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 88,
            },
            wind: {
              speed: 1.68,
              deg: 89.0013,
            },
            rain: {
              '3h': 5.67,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-23 00:00:00',
          },
          {
            dt: 1521774000,
            main: {
              temp: 18.49,
              temp_min: 18.49,
              temp_max: 18.49,
              pressure: 916.24,
              sea_level: 1026.22,
              grnd_level: 916.24,
              humidity: 99,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: 'Rain',
                description: 'moderate rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 92,
            },
            wind: {
              speed: 2.01,
              deg: 84.0045,
            },
            rain: {
              '3h': 5.98,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-23 03:00:00',
          },
          {
            dt: 1521784800,
            main: {
              temp: 18.34,
              temp_min: 18.34,
              temp_max: 18.34,
              pressure: 915.25,
              sea_level: 1025.29,
              grnd_level: 915.25,
              humidity: 99,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: 'Rain',
                description: 'moderate rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 92,
            },
            wind: {
              speed: 1.93,
              deg: 90.0009,
            },
            rain: {
              '3h': 7.86,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-23 06:00:00',
          },
          {
            dt: 1521795600,
            main: {
              temp: 18.12,
              temp_min: 18.12,
              temp_max: 18.12,
              pressure: 915.22,
              sea_level: 1025.33,
              grnd_level: 915.22,
              humidity: 98,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: 'Rain',
                description: 'moderate rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 80,
            },
            wind: {
              speed: 3.33,
              deg: 95.0006,
            },
            rain: {
              '3h': 5.35,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-23 09:00:00',
          },
          {
            dt: 1521806400,
            main: {
              temp: 19.76,
              temp_min: 19.76,
              temp_max: 19.76,
              pressure: 916.78,
              sea_level: 1026.7,
              grnd_level: 916.78,
              humidity: 100,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 92,
            },
            wind: {
              speed: 2.85,
              deg: 63.0034,
            },
            rain: {
              '3h': 2.55,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-23 12:00:00',
          },
          {
            dt: 1521817200,
            main: {
              temp: 20.17,
              temp_min: 20.17,
              temp_max: 20.17,
              pressure: 916.78,
              sea_level: 1026.2,
              grnd_level: 916.78,
              humidity: 100,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: 'Rain',
                description: 'moderate rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 92,
            },
            wind: {
              speed: 2.32,
              deg: 13.0008,
            },
            rain: {
              '3h': 7.36,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-23 15:00:00',
          },
          {
            dt: 1521828000,
            main: {
              temp: 21.59,
              temp_min: 21.59,
              temp_max: 21.59,
              pressure: 914.97,
              sea_level: 1024.03,
              grnd_level: 914.97,
              humidity: 99,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: 'Rain',
                description: 'moderate rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 68,
            },
            wind: {
              speed: 2.31,
              deg: 42.0044,
            },
            rain: {
              '3h': 7.8,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-23 18:00:00',
          },
          {
            dt: 1521838800,
            main: {
              temp: 21.68,
              temp_min: 21.68,
              temp_max: 21.68,
              pressure: 914.84,
              sea_level: 1024.19,
              grnd_level: 914.84,
              humidity: 94,
              temp_kf: 0,
            },
            weather: [
              {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04d',
              },
            ],
            clouds: {
              all: 68,
            },
            wind: {
              speed: 1.52,
              deg: 70.5001,
            },
            rain: {

            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-23 21:00:00',
          },
          {
            dt: 1521849600,
            main: {
              temp: 19.59,
              temp_min: 19.59,
              temp_max: 19.59,
              pressure: 916.63,
              sea_level: 1026.5,
              grnd_level: 916.63,
              humidity: 95,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 68,
            },
            wind: {
              speed: 2.06,
              deg: 92.0007,
            },
            rain: {
              '3h': 0.030000000000001,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-24 00:00:00',
          },
          {
            dt: 1521860400,
            main: {
              temp: 18.33,
              temp_min: 18.33,
              temp_max: 18.33,
              pressure: 917.45,
              sea_level: 1027.45,
              grnd_level: 917.45,
              humidity: 98,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: 'Rain',
                description: 'moderate rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 92,
            },
            wind: {
              speed: 3.06,
              deg: 81.5039,
            },
            rain: {
              '3h': 3.69,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-24 03:00:00',
          },
          {
            dt: 1521871200,
            main: {
              temp: 18.26,
              temp_min: 18.26,
              temp_max: 18.26,
              pressure: 916.32,
              sea_level: 1026.45,
              grnd_level: 916.32,
              humidity: 98,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: 'Rain',
                description: 'moderate rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 92,
            },
            wind: {
              speed: 2.43,
              deg: 82.5053,
            },
            rain: {
              '3h': 4.52,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-24 06:00:00',
          },
          {
            dt: 1521882000,
            main: {
              temp: 18.73,
              temp_min: 18.73,
              temp_max: 18.73,
              pressure: 917.08,
              sea_level: 1027.38,
              grnd_level: 917.08,
              humidity: 98,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 88,
            },
            wind: {
              speed: 2.76,
              deg: 62.007,
            },
            rain: {
              '3h': 0.14999999999999,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2018-03-24 09:00:00',
          },
          {
            dt: 1521892800,
            main: {
              temp: 21.01,
              temp_min: 21.01,
              temp_max: 21.01,
              pressure: 918.18,
              sea_level: 1028.1,
              grnd_level: 918.18,
              humidity: 95,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 56,
            },
            wind: {
              speed: 3.82,
              deg: 51.5048,
            },
            rain: {
              '3h': 0.030000000000001,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-24 12:00:00',
          },
          {
            dt: 1521903600,
            main: {
              temp: 23.97,
              temp_min: 23.97,
              temp_max: 23.97,
              pressure: 917.46,
              sea_level: 1026.77,
              grnd_level: 917.46,
              humidity: 88,
              temp_kf: 0,
            },
            weather: [
              {
                id: 802,
                main: 'Clouds',
                description: 'scattered clouds',
                icon: '03d',
              },
            ],
            clouds: {
              all: 36,
            },
            wind: {
              speed: 4.03,
              deg: 57.5001,
            },
            rain: {

            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-24 15:00:00',
          },
          {
            dt: 1521914400,
            main: {
              temp: 25.12,
              temp_min: 25.12,
              temp_max: 25.12,
              pressure: 915.92,
              sea_level: 1024.93,
              grnd_level: 915.92,
              humidity: 81,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 8,
            },
            wind: {
              speed: 3.93,
              deg: 60.5024,
            },
            rain: {
              '3h': 0.030000000000001,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2018-03-24 18:00:00',
          },
        ],
        city: {
          id: 3448879,
          name: 'Sao Joao del Rei',
          coord: {
            lat: -21.1356,
            lon: -44.2617,
          },
          country: 'BR',
        },
      },
    };
  },

};
</script>

<style>
#weather {
}
</style>
