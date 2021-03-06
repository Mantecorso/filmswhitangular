import controller from './film-item.controller';

export const FilmItemComponent = {
    bindings: {
        data: '<'
    },
    controller,
    template:`
                 <div class="card center fondo" style="width: 18rem">
                    <img class="card-image-top " src="https://image.tmdb.org/t/p/w400{{$ctrl.data.poster_path}}"></img>
                    <div class="card-body">
                        <h5 class="card-title"> {{$ctrl.data.title}}</h5>
                        <p class="card-text">{{$ctrl.data.overview}}</p>
                    </div>
                </div>
    `
//film-item es hijo de film-list. 
}