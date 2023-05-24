import axios from 'axios';  /* library which helps in making API calls*/


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

  

export const getPlacesData = async (sw, ne) => {
    try{
        const { data : { data }} = await axios.get(URL, {
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
                },
                headers: {
                  'X-RapidAPI-Key': 'e151793696msh524b9e50a2912c1p19bba6jsn30e6e10bafe4',
                  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
              }
              );

        return data;
    } catch(error){

    }
}