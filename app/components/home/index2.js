import angular from 'angular';
import SeriesService from './series/series.service';
import {SeriesListComponent} from "./series/series-list/series-list.component";



const home = angular
.module('home',[])
.service('SeriesService', SeriesService)
.component ('seriesList', SeriesListComponent)
    .config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
        .state('series', {
            url: '/series',
            component: 'seriesList'
        });
    $urlRouterProvider.otherwise('/')
    })
    .name

export default home
