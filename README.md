# Project Fil Rouge Groupe 1 
Melvin Debot développeur front end

### Technologie Utilisé 

- React Map Gl
  - C'est une libraire qui facilite l'utilisation de map box gl dans les composant react et d'avoir plusieurs choix de personalisation de carte, mais aussi de pouvoir gérér la longitude et l'atitude avec les données de notre api 
  ```React
  <MapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://sprites/mapbox/light-v10"
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          
        >
  ```
- Nivo
  - Elle permet de génère un camembert à partir d'un ensemble de données, chaque donnée doit avoir un identifiant et une propriété de valeur. Nivo a plusieur alternative de composant pour notre datavisualisation nous avions utilisé le composant ResponsivePie et qui permet de géré le responsive 
  
- React Bar Chart
  - C'est une extension de canvas Js donc elle permet d'afficher un diagramme basée sur un tableau d'objet avec des valeurs précises (Couleur, Valeur, Id)
  


