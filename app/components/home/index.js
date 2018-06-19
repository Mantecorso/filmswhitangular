import angular from 'angular';
import FilmsService from './films/films.service';
import {FilmsListComponent}
from "./films/films-list/films-list.component";
import SeriesService from './series/series.service';
import {seriesListComponent} from "./series/series-list/series-list.component";
import {FilmItemComponent} from "./films/film-item/film-item.component";
import {SeriesItemComponent} from "./series/series-item/series-item.component";
import {HomeComponent} from "./inicio/home.component"


const home = angular
.module('home',[])
.service('FilmsService', FilmsService)
.service('SeriesService', SeriesService)
.component ('filmsList', FilmsListComponent)
.component ('filmsItem', FilmItemComponent)
.component ('seriesList', seriesListComponent)
.component ('seriesItem', SeriesItemComponent)
.component ('inicio', HomeComponent)
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
        .state('inicio', {
            url: '/',
            component: 'inicio'
        });
    $urlRouterProvider.otherwise('/')
    })
    .name

export default home
