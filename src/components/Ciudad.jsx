// import React from 'react';

// export default function Ciudad({city}){
    
//     return (
//         <div className="ciudad">
//                 <div className="container">
//                     <h2>{city.name}</h2>
//                     <div className="info">
//                         <div>Temperatura: {city.temp} ºC</div>
//                         <div>Clima: {city.weather}</div>
//                         <div>Viento: {city.wind} km/h</div>
//                         <div>Cantidad de nubes: {city.clouds}</div>
//                         <div>Latitud: {city.latitud}º</div>
//                         <div>Longitud: {city.longitud}º</div>
//                     </div>
//             </div>
//         </div>
//     )
// }

import React from "react";
import "./Ciudad.css"

export default function Ciudad({city}) {
   if (city){
    return (
        <div>
            <div className="ciudadCard">
                    <h2 className = "titulo">{city.name}</h2>
                    <div>
                        <div>Temperature: {city.temp}°C</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>

                       
                         <div>Clouds: {city.clouds}</div> 
                        <div>Latitude: {city.latitud}º</div>
                        <div>Longitude: {city.longitud}º</div> 
                    </div>
            </div>
        </div>
    )

}
else return "";
}
 