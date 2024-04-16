const express = require('express');
const path = require('path');
const app = express();
const PORT = 8081;


app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', async(req, res) => {
    

    const imagePath = path.join(__dirname, 'images', 'first.jpg');
    
    // Construct the localhost URL for the image
    const babaValii_mage = `http://localhost:${PORT}/images/babavali.webp`;
    const vali_image = `http://localhost:${PORT}/images/vali.jpg`;
    const lillyImage = `http://localhost:${PORT}/images/lilly.jpg`;
    const aryanImage = `http://localhost:${PORT}/images/aryan.jpg`;
    const babyImage= `http://localhost:${PORT}/images/baby.webp`;
    const rafiImage = `http://localhost:${PORT}/images/rafi.jpg`;

    
    const jsonobject = {"employee" : [
    { 
        "id" : "1",
        "name" : "Baba vali",
        "profession" : "software",
        "profile_icon" : babaValii_mage
        
    },

    { 
        "id" : "2",
        "name" : "Shaik valibabu",
        "profession" : "software",
        "profile_icon" : vali_image
        
    } , 

    { 
        "id" : "2",
        "name" : "lilly",
        "profession" : "software",
        "profile_icon" : lillyImage
        
    } , 

    { 
        "id" : "4",
        "name" : "Aryan",
        "profession" : "software",
        "profile_icon" : aryanImage
        
    },
    { 
        "id" : "5",
        "name" : "Rafi",
        "profession" : "Agriculture",
        "profile_icon" : rafiImage
        
    },
    { 
        "id" : "6",
        "name" : "Baby",
        "profession" : "Doctor",
        "profile_icon" : babyImage
        
    }

]
}
    res.send(jsonobject)
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

 