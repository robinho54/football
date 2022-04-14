require("dotenv").config();
const path = require('path');

const axios = require('axios');
const mainController = {


    
    async homePage(req, res) {
        
        (async ()=>{

            const responses = await axios.get(`${process.env.API_URL_FOOTBALL_1}/eng.1/seasons`);
        
            if(responses.status != 200){
                //console.error(responses.status);
                return;
            }
        
            //console.log(responses.data.data.seasons);
            res.render('home',{responses : responses.data.data.seasons});
        })();
                

        
    },
    async homeSeason(req, res) {
        const year = req.params.season; 
        console.log(year);
        
        //console.log(process.env.API_URL_FOOTBALL_1,'ok')
        //console.log(`${process.env.API_URL_FOOTBALL_1}/standings?season=${year}&sort=asc`);
        
        (async ()=>{
            
            const responses = await axios.get(`${process.env.API_URL_FOOTBALL_1}/eng.1/standings?season=${year}&sort=asc`);
            const responsesYear = await axios.get(`${process.env.API_URL_FOOTBALL_1}/eng.1/seasons`);
            //console.log(responsesSeasons.data.data.seasons)        
            if(responses.status != 200){
                //console.error(responses.status);
                return;
            }
        
            console.log(responses.data.data.standings[8].team.logos);
            res.render('classement',{responses : responses.data.data.standings, year : year, responsesYear : responsesYear.data.data.seasons})
        })();
                

        
    },
}



module.exports = mainController;