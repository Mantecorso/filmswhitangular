import angular from 'angular';
import FilmsService from './films/films.service';
import {FilmsListComponent}
from "./films/films-list/films-list.component";
import SeriesService from './series/series.service';
import {seriesListComponent} from "./series/series-list/series-list.component";
import {FilmItemComponent} from "./films/film-item/film-item.component";
import {SeriesItemComponent} from "./series/series-item/series-item.component";
import {HomeComponent} from "./inicio/home.component";
import {CuatroErrorComponent} from "./cuatrocerocuatro/cuatro-error.component";

const home = angular
.module('home',[])
.service('FilmsService', FilmsService)
.service('SeriesService', SeriesService)
.component ('filmsList', FilmsListComponent)
.component ('filmsItem', FilmItemComponent)
.component ('seriesList', seriesListComponent)
.component ('seriesItem', SeriesItemComponent)
.component ('inicio', HomeComponent)
.component ('cuatroError', CuatroErrorComponent)
    .config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
        .state('films', {
            url: '/films',
            component: 'filmsList'
        })
        .state('series', {
            url: '/series',
            component: 'seriesList'
        })
        .state('error', {
            url: '/cuatrocerocuatro',
            component: 'cuatroError'
        })
        .state('inicio', {
            url: '/',
            component: 'inicio'
        });
    $urlRouterProvider.otherwise('/cuatrocerocuatro')
    })
    .name

export default home
