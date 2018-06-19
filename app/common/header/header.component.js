export const HeaderComponent ={
    template: `
    <div class="container-fluid header">
        <div class="row">
            
            <h1 class="col-8">Web de series y peliculas</h1>
            <a href="#" class="col-4"><img src="./image/Luislogo.png" class="logo"></img></a>
        </div>
    </div>
   <nav class="navbar navbar-dark bg-dark">
        <li class="nav-item">
            <a ui-sref="films" class="nav-link">Películas</a>
        </li>
        <li class="nav-item"> 
            <a ui-sref ="series" class="nav-link">Series</a>
        </li>
   
    </nav>
    
    `
}