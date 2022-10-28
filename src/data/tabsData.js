import product01 from '../asset/products/product01.jpeg'
import product02 from '../asset/products/product02.jpeg'
import product03 from '../asset/products/product03.jpeg'
import product04 from '../asset/products/product04.jpeg'
import product05 from '../asset/products/product05D.jpeg'
import product06 from '../asset/products/product06D.jpeg'
import product07 from '../asset/products/product07.jpeg'
import product08 from '../asset/products/product08MT.jpeg'
import product09 from '../asset/products/product09MT.jpeg'

import homme01 from '../asset/author/homme01.jpg'
import homme02 from '../asset/author/homme02.jpg'
import homme03 from '../asset/author/homme03.jpg'
import homme04 from '../asset/author/homme04.jpg'
import homme05 from '../asset/author/homme05.jpg'
import homme06 from '../asset/author/homme06.jpg'
import femme01 from '../asset/author/femme01.jpg'
import femme02 from '../asset/author/femme02.jpg'
import femme03 from '../asset/author/femme03.jpg'

import baner01 from '../asset/banner/baner01.png'
import baner02 from '../asset/banner/baner02.png'
import baner03 from '../asset/banner/baner03.jpg'
import baner04 from '../asset/banner/baner04.jpg'
import baner05 from '../asset/banner/baner05.jpg'
import baner06 from '../asset/banner/baner06.jpg'
import baner07 from '../asset/banner/baner07.png'
import baner08 from '../asset/banner/baner08.jpg'
import baner09 from '../asset/banner/baner09.png'

const users = [
    
]

const data = [
    {
        "id": 1,
        "name": "Black Maria Style",
        "image": product01,
        "price": 0.1,
        "tags": [
            {
                "id": 1,
                "name": "Trending"
            }
        ],
        "user_id": 1,
        "type": "Neon",
        "author": {
            "id": 1,
            "name": "Keny marsh",
            "photo": homme01,
            "banner": baner01,
            "story" : "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée." 
        }
    },

    {
        "id": 2,
        "name": "Pinky Metallium",
        "image": product02,
        "price": 0.99,
        "tags": [
            {
                "id": 2,
                "name": "Best Seller"
            }
        ],
        "user_id": 2,
        "type": "Neon",
        "author": {
            "id": 2,
            "name": "Mary Salman",
            "photo": femme01,
            "banner": baner02,
            "story" : "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée." 
        }
    },

    {
        "id": 3,
        "name": "Neo Violet",
        "image": product03,
        "price": 0.06,
        "tags": [
            {
                "id": 1,
                "name": "Trending"
            }
        ],
        "user_id": 3,
        "type": "Neon",
        "author": {
            "id": 3,
            "name": "Diga almond",
            "photo": homme02,
            "banner": baner03,
            "story" : "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée." 
        }
    },
    {
        "id": 4,
        "name": "Neo Violet",
        "image": product04,
        "price": 0.09 ,
        "tags": [
            {
                "id": 2,
                "name": "Best Seller"
            }
        ],
        "user_id": 4,
        "type": "Neon",
        "author": {
            "id": 4,
            "name": "Bilo Alphonse",
            "photo": homme03,
            "banner": baner04,
            "story" : "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée." 
        }
    },
    {
        "id": 5,
        "name": "Neo Violet",
        "image": product05,
        "price": 1.66,
        "tags": [
            {
                "id": 1,
                "name": "Trending"
            }
        ],
        "user_id": 5,
        "type": "Dark",
        "author": {
            "id": 5,
            "name": "Dianna Filma",
            "photo": femme02,
            "banner": baner05,
            "story" : "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée." 
        }
    },
    {
        "id": 6,
        "name": "Neo Violet",
        "image": product06,
        "price": 1.20,
        "tags": [
            {
                "id": 2,
                "name": "Best Seller"
            }
        ],
        "user_id": 6,
        "type": "Dark",
        "author": {
            "id": 6,
            "name": "Antonyo Thomas",
            "photo": homme04,
            "banner": baner06,
            "story" : "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée." 
        }
    },
    {
        "id": 7,
        "name": "Neo Violet",
        "image": product07,
        "price": 0.66,
        "tags": [
            {
                "id": 2,
                "name": "Best Seller"
            }
        ],
        "user_id": 7,
        "type": "Neon",
        "author": {
            "id": 7,
            "name": "Daz Mario",
            "photo": homme05,
            "banner": baner07,
            "story" : "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée." 
        }
    },
    {
        "id": 8,
        "name": "Neo Violet",
        "image": product08,
        "price": 1.66,
        "tags": [
            {
                "id": 2,
                "name": "Best Seller"
            }
        ],
        "user_id": 8,
        "type": "Modern-Tech",
        "author": {
            "id": 8,
            "name": "Afnor Marge",
            "photo": femme03,
            "banner": baner08,
            "story" : "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée." 
        }
    },
    {
        "id": 9,
        "name": "Neo Violet",
        "image": product09,
        "price": 2.06,
        "tags": [
            {
                "id": 1,
                "name": "Trending"
            }
        ],
        "user_id": 9,
        "type": "Modern-Tech",
        "author": {
            "id": 9,
            "name": "William Salisa",
            "photo": homme06,
            "banner": baner09,
            "story" : "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée." 
        }
    }
    
]

export default data;