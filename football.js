require("dotenv").config();

const axios = require('axios');
//const {createWriteStream} = require('fs');

(async ()=>{
    // appelle de l'api de la Nasa
    const response = await axios.get(process.env.API_URL_FOOTBALL_2,{
        /*params: {
            api_key : process.env.API_KEY,
            thumbs : true
        }*/
    });

    if(response.status != 200){
        console.error(response.status);
        return;
    }

    console.log(response.data);

/*  const imageURL = response.data.hdurl || response.data.thumbnail_url || response.data.url;
    downloadImage(imageURL,"./background.jpg");

    // envoi du message sur slack
    axios.post(process.env.SLACK,{
        text: response.data.explanation,
        blocks : [
            {
                type:"image",
                image_url:imageURL,
                alt_text : response.data.title,
                title : {
                    text : response.data.title,
                    type: "plain_text"
                }
            },
            {
                type:"section",
                text:{
                    text:response.data.explanation,
                    type: "plain_text"
                }
            }
        ]
    },
    {
        headers:{"Content-Type":"application/json"}
    });*/

})();

/*async function downloadImage(url,path){
    // téléchargement de l'image
    const imageResponse = await axios.get(url,{
        responseType : 'stream'
    });

    // création du fichier .jpg
    const writer = createWriteStream(path);
    imageResponse.data.pipe(writer);
}*/

module.exports = football;