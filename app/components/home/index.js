import angular from 'angular';
import FilmsService from './films/films.service';
import {FilmsListComponent}
from "./films/films-list/films-list.component";
import SeriesService from './series/series.service';
import {seriesListComponent} from "./series/series-list/series-list.component";
import {FilmItemComponent} from "./films/film-item/films-item.component";

const home = angular
.module('home',[])
.service('FilmsService', FilmsService)
.service('SeriesService', SeriesService)
.component ('filmsList', FilmsListComponent)
.component ('filmsItem', FilmItemComponent)
.component ('seriesList', seriesListComponent)
    .config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
        .state('films', {
            url: '/films',
            component: 'filmsList'
        })
        .state('series', {
            url: '/series',
            component: 'seriesList'
        });
    $urlRouterProvider.otherwise('/')
    })
    .name

export default home
