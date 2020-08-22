// **********  Liste des Argument nécéssaire ******** //
// Rn = rayonnement global en MJ/m²/j ou MJ/m²/h
// G = flux de chaleur dans le sol par conduction en MJ/m²/j ou MJ/m²/h
// Δ et γ = constantes en kPa/°C
// Cste = 900 pour un pas de temps journalier et 37 pour un pas de temps horaire
// T = température en °C (! Dans la méthode FA0, l'approximation Tsurface = Tatmosphère est effectuée)
// P = pression atmosphérique en kPa
// z (présent dans la formule de P) = altitude par rapport à la mer (m), pour la station Aston: 1781 mètres.
// es(T) = esat(T), la pression de vapeur saturante en kPa
// ea(T) = pression de vapeur actuelle en kPa = humidité relative * es / 100,
// u2 = vitesse du vent à 2 mètres du sol en m/s.

// TODO Trouver RN
// TODO 
function ET0(Vv10m, TempC, Rn, Altitude, DureeInsolationM, RayGlobal, Humidity){
    // Vv10m === U2 === La vitesse du vent à 10 mètres, en m/s.
    // TempC ===  T === La température en °C.
    // DureeInsolationM  === Les durées d'insolation en minutes.
    // RayGlobal === Rn*m-1 === Le rayonnement global en J/cm². (ensoleillement)
    // L'humidité relative en %.

    
    // manque esat
    let esatT = Math.pow(0.6108, ( (17,27 * TempC) / (TempC + 237.3) ));
    let delta = (4098 * esatT) / Math.pow((TempC + 237.3), 2); 

    let P = 101.3 * Math.pow(( 293 - (0.0065* Altitude)) / 293 , 5.26); 
    let y = Math.pow(0.665, 0.001) * P;
    
    let z = 10; // car Vv10m est la vitesse du vent a 10 mètres du sol.
    let U2 = Vv10m * ( 4.87 / (Math.log((67,8*z) - 5.42)) ); 
    

    let ea =  Humidity * esatT / 100;
    
    let G = 0.1 * Rn

    let ET0 = ( 0,408 * (delta * (Rn - G)) + (y *(cste / (TempC + 273)) * (U2 * (esatT - ea))) ) / delata + ( y * (1 + (0.34* U2)))  

    console.log(ET0);
    return ET0
}

ET0(); 

class ET0 {
    constructor()
}