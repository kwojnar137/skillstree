const express = require('express');

const port = 9000;
const app = express();
app.get('/api/categories', (req, res) => res.json([
  {
    "name": "Szkoła",
    "id": 1,
    "parentId": null,
  },
  {
    "name": "Hobby",
    "id": 2,
    "parentId": null,
  },
  {
    "name": "Przedmioty ścisłe",
    "id": 100,
    "parentId": 1,
  },
  {
    "name": "Przedmioty humanistyczne",
    "id": 101,
    "parentId": 1,
  },
  {
    "name": "Przedmioty zawodowe",
    "id": 102,
    "parentId": 1,
  },
  {
    "name": "Teoria Muzyki",
    "id": 103,
    "parentId": 1,
  },
  {
    "name": "Inne",
    "id": 104,
    "parentId": 1,
  },
  {
    "name": "Elektronika",
    "id": 105,
    "parentId": 2,
  },
  {
    "name": "Kolarstwo",
    "id": 106,
    "parentId": 2,
  },
  {
    "name": "Fotografia",
    "id": 107,
    "parentId": 2,
  },
  {
    "name": "Rysunek",
    "id": 108,
    "parentId": 2,
  },
  {
    "name": "Inne",
    "id": 109,
    "parentId": 2,
  },
  {
    "name": "Matematyka",
    "id": 1000,
    "parentId": 100,
  },
  {
    "name": "Fizyka",
    "id": 1001,
    "parentId": 100,
  },
  {
    "name": "Astronomia",
    "id": 2000,
    "parentId": 1001,
  },
  {
    "name": "Fizyka kwantowa",
    "id": 2001,
    "parentId": 1001,
  },
  {
    "name": "Chemia",
    "id": 1002,
    "parentId": 100,
  },
  {
    "name": "Biologia",
    "id": 1003,
    "parentId": 100,
  },
  {
    "name": "J. Polski",
    "id": 1004,
    "parentId": 101,
  },
  {
    "name": "Gramatyka",
    "id": 1005,
    "parentId": 101,
  },
  {
    "name": "Literatura",
    "id": 1006,
    "parentId": 101,
  },
  {
    "name": "Historia",
    "id": 1007,
    "parentId": 101,
  },
  {
    "name": "J. angielski",
    "id": 1008,
    "parentId": 101,
  },
  {
    "name": "Muzyka",
    "id": 1009,
    "parentId": 101,
  },
  {
    "name": "Informatyka",
    "id": 1010,
    "parentId": 102,
  },
  {
    "name": "Mechatronika",
    "id": 1011,
    "parentId": 102,
  },
  {
    "name": "Podstawy Elektroniki",
    "id": 1012,
    "parentId": 105,
  },
  {
    "name": "Podstawy Arduino",
    "id": 1013,
    "parentId": 105,
  },
  {
    "name": "Rysunek techniczny",
    "id": 1014,
    "parentId": 108,
  },
  {
    "name": "Podstawy rysunku",
    "id": 1015,
    "parentId": 108,
  },
  {
    "name": "Gramatyka",
    "id": 2002,
    "parentId": 1004,
  },
  {
    "name": "Literatura",
    "id": 2003,
    "parentId": 1004,
  },
  {
    "name": "Starożytność",
    "id": 2004,
    "parentId": 1007,
  },


]));

app.get('/api/courses', (req, res) => res.json([
  {
    "title": "Klasyczny kurs z matematyki",
    "category": [
      {
        "name": "Matematyka",
        "id": 1000,
        "parentId": 100,
      },
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authors": [
      {
        "author": "Stefan Banach",
        "id": 1,
      },
    ],
    "rating": 9.21,
    "price": 299,
    "oldPrice": 399,
    "currency": "zł",
    "imgUrl": "https://cdn.galleries.smcloud.net/t/galleries/gf-Q7Ug-newU-9QE1_wzory-matematyczne-dla-osmoklasistow-i-nie-tylko-1920x1080-nocrop.jpg",
  },
  {
    "title": "nowoczesny kurs z matematyki na pełnej petardzie",
    "category": [
      {
        "name": "Matematyka",
        "id": 1000,
        "parentId": 100,
      },
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authors": [
      {
        "author": "Rajash",
        "id": 2,
      },
    ],
    "rating": 8.21,
    "price": 129,
    "currency": "zł",
    "imgUrl": "https://st-lento.pl/adpics/large/06_2019/18/b9512a-korepetycje-matematyka-fizyka-i-chemia-tychy-zdjecia.jpg",
  },
  {
    "title": "Fizyka dla nieogarniętych",
    "category": [
      {
        "name": "Fizyka",
        "id": 1001,
        "parentId": 100,
      },
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authors": [
      {
        "author": "Mad Max",
        "id": 3,
      },
    ],
    "rating": 5.4,
    "price": 73,
    "currency": "zł",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/ChP94_-_Fizyka_PL.svg/1200px-ChP94_-_Fizyka_PL.svg.png",
  },
  {
    "title": "Fizyka dla studentów",
    "category": [
      {
        "name": "Fizyka",
        "id": 1001,
        "parentId": 100,
      },
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authors": [
      {
        "author": "prof. Garneczek",
        "id": 4,
      },
    ],
    "rating": 8.1,
    "price": 54,
    "currency": "zł",
    "imgUrl": "https://cms-v1-files.superszkolna.pl/sites/525/wiadomosci/368356/fotos/orign/2724_napisy_sale_fizyka.jpg",
  },
  {
    "title": "Opowieść o planetach",
    "category": [
      {
        "name": "Astronomia",
        "id": 2000,
        "parentId": 1001,
      },
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authors": [
      {
        "author": "prof. Miećko",
        "id": 5,
      },
    ],
    "rating": 8.1,
    "price": 54,
    "currency": "zł",
    "imgUrl": "https://cms-v1-files.superszkolna.pl/sites/525/wiadomosci/368356/fotos/orign/2724_napisy_sale_fizyka.jpg",
  },
  {
    "title": "Teoria strun",
    "category": [
      {
        "name": "Fizyka kwantowa",
        "id": 2001,
        "parentId": 1001,
      },
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authors": [
      {
        "author": "prof. Garneczek",
        "id": 4,
      },
    ],
    "rating": 8.1,
    "price": 54,
    "currency": "zł",
    "imgUrl": "https://cms-v1-files.superszkolna.pl/sites/525/wiadomosci/368356/fotos/orign/2724_napisy_sale_fizyka.jpg",
  },
  {
    "title": "Matematyka w fizyce, chemii i biologi",
    "category": [
      {
        "name": "Matematyka",
        "id": 1000,
        "parentId": 100,
      },
      {
        "name": "Chemia",
        "id": 1002,
        "parentId": 100,
      },
      {
        "name": "Biologia",
        "id": 1003,
        "parentId": 100,
      },
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authors": [
      {
        "author": "prof. Miećko",
        "id": 5,
      },
    ],
    "rating": 8.1,
    "price": 54,
    "currency": "zł",
    "imgUrl": "https://cms-v1-files.superszkolna.pl/sites/525/wiadomosci/368356/fotos/orign/2724_napisy_sale_fizyka.jpg",
  },
  {
    "title": "Fizyka dla medyków",
    "category": [
      {
        "name": "Fizyka",
        "id": 1001,
        "parentId": 100,
      },
      {
        "name": "Biologia",
        "id": 1003,
        "parentId": 100,
      },
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authors": [
      {
        "author": "lek. Suchocki",
        "id": 6,
      },
    ],
    "rating": 8.1,
    "price": 54,
    "currency": "zł",
    "imgUrl": "https://cms-v1-files.superszkolna.pl/sites/525/wiadomosci/368356/fotos/orign/2724_napisy_sale_fizyka.jpg",
  },
  {
    "title": "Język polski, kurs gramatyki",
    "category": [
      {
        "name": "Gramatyka",
        "id": 2002,
        "parentId": 1004,
      },
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authors": [
      {
        "author": "prof. Miećko",
        "id": 5,
      },
    ],
    "rating": 9.21,
    "price": 299,
    "currency": "zł",
    "imgUrl": "https://cdn.galleries.smcloud.net/t/galleries/gf-Q7Ug-newU-9QE1_wzory-matematyczne-dla-osmoklasistow-i-nie-tylko-1920x1080-nocrop.jpg",
  },
  {
    "title": "Język polski, kurs litertury",
    "category": [
      {
        "name": "Literatura",
        "id": 2003,
        "parentId": 1004,
      },
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authors": [
      {
        "author": "lek. Suchocki",
        "id": 6,
      },
      {
        "author": "Mieczysław Gałczyk",
        "id": 7,
      },
    ],
    "rating": 8.21,
    "price": 129,
    "currency": "zł",
    "imgUrl": "https://i.ytimgUrl.com/vi/X5p0AafYztA/maxresdefault.jpg",
  },
  {
    "title": "Historia starożytna",
    "category": [
      {
        "name": "Starożytność",
        "id": 2004,
        "parentId": 1007,
      },

    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authors": [
      {
        "author": "Mieczysław Gałczyk",
        "id": 7,
      },
    ],
    "rating": 5.4,
    "price": 73,
    "currency": "zł",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/ChP94_-_Fizyka_PL.svg/1200px-ChP94_-_Fizyka_PL.svg.png",
  },
  {
    "title": "Historia po łebkach",
    "category": [
      {
        "name": "Historia",
        "id": 1007,
        "parentId": 101,
      },
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authors": [
      {
        "author": "Mieczysław Gałczyk",
        "id": 7,
      },
      {
        "author": "Mikołaj Filipow",
        "id": 8,
      },
    ],
    "rating": 8.1,
    "price": 54,
    "currency": "zł",
    "imgUrl": "https://cms-v1-files.superszkolna.pl/sites/525/wiadomosci/368356/fotos/orign/2724_napisy_sale_fizyka.jpg",
  },
  {
    "title": "Język angielski dla początkujących",
    "category": [
      {
        "name": "J. angielski",
        "id": 1008,
        "parentId": 101,
      },
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authors": [
      {
        "author": "Mikołaj Filipow",
        "id": 8,
      },
    ],
    "rating": 8.1,
    "price": 54,
    "currency": "zł",
    "imgUrl": "https://cms-v1-files.superszkolna.pl/sites/525/wiadomosci/368356/fotos/orign/2724_napisy_sale_fizyka.jpg",
  },
  {
    "title": "Język angielski metodami Memo",
    "category": [
      {
        "name": "J. angielski",
        "id": 1008,
        "parentId": 101,
      },
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authors": [
      {
        "author": "prof. Miećko",
        "id": 5,
      },
    ],
    "rating": 8.1,
    "price": 54,
    "currency": "zł",
    "imgUrl": "https://cms-v1-files.superszkolna.pl/sites/525/wiadomosci/368356/fotos/orign/2724_napisy_sale_fizyka.jpg",
  },
  {
    "title": "Teoria muzyki",
    "category": [
      {
        "name": "Teoria Muzyki",
        "id": 103,
        "parentId": 1,
      },
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authors": [
      {
        "author": "Artur Rojek",
        "id": 9,
      },
    ],
    "rating": 8.1,
    "price": 54,
    "currency": "zł",
    "imgUrl": 'https://www.kopernik.org.pl/typo3temp/_processed_/csm_Muzyka_w_bogactwie_zjawisk_dzwiekowych_46771e9f89.jpg',
  },
]

));

app.get('/api/authors', (req, res) => res.json([
  {
    "author": "Stefan Banach",
    "id": 1,
  },
  {
    "author": "Rajash",
    "id": 2,
  },
  {
    "author": "Mad Max",
    "id": 3,
  },
  {
    "author": "prof. Garneczek",
    "id": 4,
  },
  {
    "author": "prof. Miećko",
    "id": 5,
  },
  {
    "author": "lek. Suchocki",
    "id": 6,
  },
  {
    "author": "Mieczysław Gałczyk",
    "id": 7,
  },
  {
    "author": "Mikołaj Filipow",
    "id": 8,
  },
  {
    "author": "Artur Rojek",
    "id": 9,
  },

]));



app.get('/api/categoriesdata', (req, res) => res.json([
  {
    "category": "Szkoła",
    "subcategories": [
      {
        "name": "Nauki ścisłe",
        "howManyCourses": "35",
        "url": "/science",
        "subcategories": [
          {
            "name": "Matematyka",
            "url": "/math",
            "howManyCourses": "12",
          },
          {
            "name": "Fizyka",
            "url": "/physics",
            "howManyCourses": "10",
          },
          {
            "name": "Chemia",
            "url": "/chemistry",
            "howManyCourses": "12",
          },
          {
            "name": "Biologia",
            "url": "/biology",
            "howManyCourses": "10",
          },
        ]
      },
      {
        "name": "Nauki humanistyczne",
        "url": "/morecategories",
        "howManyCourses": "20",
        "subcategories": [
          {
            "name": "J. polski",
            "url": "/polish",
            "howManyCourses": "12",
          },
          {
            "name": "Gramatyka",
            "url": "/grammar",
            "howManyCourses": "10",
          },
          {
            "name": "Literatura",
            "url": "/literature",
            "howManyCourses": "12",
          },
          {
            "name": "Historia",
            "url": "/history",
            "howManyCourses": "10",
          },
          {
            "name": "J. angielski",
            "url": "/english",
            "howManyCourses": "10",
          },
          {
            "name": "Muzyka",
            "url": "/music",
            "howManyCourses": "10",
          },
        ]
      },
      {
        "name": "Przedmioty zawodowe",
        "howManyCourses": "20",
        "url": "/morecategories",
        "subcategories": [
          {
            "name": "Informatyka",
            "url": "/view",
            "howManyCourses": "10",
          },
          {
            "name": "mechatronika",
            "url": "/view",
            "howManyCourses": "10",
          },
        ]
      },
      {
        "name": "Inne",
        "url": "/view",
        "howManyCourses": "15",
      },
    ],
  },
  {
    "category": "Hobby",
    "url": "/morecategories",
    "subcategories": [
      {
        "name": "Elektronika",
        "howManyCourses": "35",
        "url": "/view",
        "subcategories": [
          {
            "name": "Podstawy elektroniki",
            "url": "/view",
            "howManyCourses": "12",
          },
          {
            "name": "Arduino",
            "url": "/view",
            "howManyCourses": "10",
          },
        ]
      },
      {
        "name": "Kolarstwo",
        "url": "/view",
        "howManyCourses": "35",
      },
      {
        "name": "Fotografia",
        "url": "/view",
        "howManyCourses": "20",
      },
      {
        "name": "Rysunek",
        "url": "/view",
        "howManyCourses": "22",
        "subcategories": [
          {
            "name": "Rysunek techniczny",
            "url": "/view",
            "howManyCourses": "12",
          },
          {
            "name": "Podstawy rysunku",
            "url": "/view",
            "howManyCourses": "10",
          },
        ]
      },
      {
        "name": "Inne",
        "url": "/view",
        "howManyCourses": "25",
      },
    ],
  },

]));



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))