import controller from film-item.controller

export const FilmItemComponent = {
    binding: {
        data: '<'
    },
    controller,
    template:`
    <h1> Listado de peliculas </h1>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4" ng-repeat="film in $ctrl.filmsResult">
                 <div class="card center" style="width: 18rem">
                    <img class="card-image-top " src="https://image.tmdb.org/t/p/w400{{film.poster_path}}"></img>
                    <div class="card-body">
                        <h5 class="card-title"> {{film.title}}</h5>
                        <p class="card-text">{{film.overview}}</p>
                    </div>
                </div>
                {{film.title}}
            </div>
        </div>
    </div>
    
    `
//film-item es hijo de film-list. 
}