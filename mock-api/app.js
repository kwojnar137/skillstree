const express = require('express');

const port = 9000;
const app = express();
app.get('/api/categories', (req, res) => res.json([
  {
    "name": "Szkoła",
    "id": 1,
    "parentid": null,
  },
  {
    "name": "Hobby",
    "id": 2,
    "parentid": null,
  },
  {
    "name": "Przedmioty ścisłe",
    "id": 100,
    "parentid": 1,
  },
  {
    "name": "Przedmioty humanistyczne",
    "id": 101,
    "parentid": 1,
  },
  {
    "name": "Przedmioty zawodowe",
    "id": 102,
    "parentid": 1,
  },
  {
    "name": "Teoria Muzyki",
    "id": 103,
    "parentid": 1,
  },
  {
    "name": "Inne",
    "id": 104,
    "parentid": 1,
  },
  {
    "name": "Elektronika",
    "id": 105,
    "parentid": 2,
  },
  {
    "name": "Kolarstwo",
    "id": 106,
    "parentid": 2,
  },
  {
    "name": "Fotografia",
    "id": 107,
    "parentid": 2,
  },
  {
    "name": "Rysunek",
    "id": 108,
    "parentid": 2,
  },
  {
    "name": "Inne",
    "id": 109,
    "parentid": 2,
  },
  {
    "name": "Matematyka",
    "id": 1000,
    "parentid": 100,
  },
  {
    "name": "Fizyka",
    "id": 1001,
    "parentid": 100,
  },
  {
    "name": "Astronomia",
    "id": 2000,
    "parentid": 1001,
  },
  {
    "name": "Fizyka kwantowa",
    "id": 2001,
    "parentid": 1001,
  },
  {
    "name": "Chemia",
    "id": 1002,
    "parentid": 100,
  },
  {
    "name": "Biologia",
    "id": 1003,
    "parentid": 100,
  },
  {
    "name": "J. Polski",
    "id": 1004,
    "parentid": 101,
  },
  {
    "name": "Gramatyka",
    "id": 1005,
    "parentid": 101,
  },
  {
    "name": "Literatura",
    "id": 1006,
    "parentid": 101,
  },
  {
    "name": "Historia",
    "id": 1007,
    "parentid": 101,
  },
  {
    "name": "J. angielski",
    "id": 1008,
    "parentid": 101,
  },
  {
    "name": "Muzyka",
    "id": 1009,
    "parentid": 101,
  },
  {
    "name": "Informatyka",
    "id": 1009,
    "parentid": 102,
  },
  {
    "name": "Mechatronika",
    "id": 1009,
    "parentid": 102,
  },
  {
    "name": "Podstawy Elektroniki",
    "id": 1010,
    "parentid": 104,
  },
  {
    "name": "Podstawy Arduino",
    "id": 1011,
    "parentid": 104,
  },
  {
    "name": "Rysunek techniczny",
    "id": 1010,
    "parentid": 107,
  },
  {
    "name": "Podstawy rysunku",
    "id": 1011,
    "parentid": 107,
  },
  {
    "name": "Gramatyka",
    "id": 2002,
    "parentid": 1004,
  },
  {
    "name": "Literatura",
    "id": 2003,
    "parentid": 1004,
  },
  {
    "name": "Starożytność",
    "id": 2004,
    "parentid": 1007,
  },


]));

app.get('/api/courses', (req, res) => res.json([
  {
    "title": "klasyczny kurs z matematyki",
    "categoryMember": [1, 100, 1000],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authorsIDs": [1],
    "rating": 9.21,
    "price": 299,
    "imgUrl": "https://cdn-lubimyczytac.pl/upload/books/61000/61086/352x500.jpg",
  },
  {
    "title": "nowoczesny kurs z matematyki na pełnej petardzie",
    "categoryMember": [1, 100, 1000],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authorsIDs": [2],
    "rating": 8.21,
    "price": 129,
    "imgUrl": "https://i.ytimgUrl.com/vi/X5p0AafYztA/maxresdefault.jpg",
  },
  {
    "title": "Fizyka dla nieogarniętych",
    "categoryMember": [1, 100, 1001],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authorsIDs": [3],
    "rating": 5.4,
    "price": 73,
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/ChP94_-_Fizyka_PL.svg/1200px-ChP94_-_Fizyka_PL.svg.png",
  },
  {
    "title": "Fizyka dla studentów",
    "categoryMember": [1, 100, 1001],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authorsIDs": [4],
    "rating": 8.1,
    "price": 54,
    "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
  },
  {
    "title": "Opowieść o planetach",
    "categoryMember": [1, 100, 1001, "Astronomia"],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authorsIDs": [4],
    "rating": 8.1,
    "price": 54,
    "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
  },
  {
    "title": "Teoria strun",
    "categoryMember": [1, 100, 1001, "Fizyka kwantowa"],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authorsIDs": [4],
    "rating": 8.1,
    "price": 54,
    "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
  },
  {
    "title": "Matematyka w fizyce, chemii i biologi",
    "categoryMember": [1, 100, 1001, 1000, 1001, 1001],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authorsIDs": [5],
    "rating": 8.1,
    "price": 54,
    "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
  },
  {
    "title": "Fizyka dla medyków",
    "categoryMember": [1, 100, 1001, 1001],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authorsIDs": [6],
    "rating": 8.1,
    "price": 54,
    "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
  },
  {
    "title": "Język polski, kurs gramatyki",
    "categoryMember": [1, 100, 1004, 2002],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authorsIDs": [5],
    "rating": 9.21,
    "price": 299,
    "imgUrl": "https://cdn-lubimyczytac.pl/upload/books/61000/61086/352x500.jpg",
  },
  {
    "title": "Język polski, kurs litertury",
    "categoryMember": [1, 100, 1004, 2003],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authorsIDs": [6, 7],
    "rating": 8.21,
    "price": 129,
    "imgUrl": "https://i.ytimgUrl.com/vi/X5p0AafYztA/maxresdefault.jpg",
  },
  {
    "title": "Historia starożytna",
    "categoryMember": [1, 100, 1007, 2004],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authorsIDs": [7],
    "rating": 5.4,
    "price": 73,
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/ChP94_-_Fizyka_PL.svg/1200px-ChP94_-_Fizyka_PL.svg.png",
  },
  {
    "title": "Historia po łebkach",
    "categoryMember": [1, 100, 1007],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authorsIDs": [7, 8],
    "rating": 8.1,
    "price": 54,
    "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
  },
  {
    "title": "Język angielski dla początkujących",
    "categoryMember": [1, 100, 1008],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authorsIDs": [8],
    "rating": 8.1,
    "price": 54,
    "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
  },
  {
    "title": "Język angielski metodami Memo",
    "categoryMember": [1, 100, 1008],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authorsIDs": [5],
    "rating": 8.1,
    "price": 54,
    "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
  },
  {
    "title": "Teoria muzyki",
    "categoryMember": [1, 100, 103],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "authorsIDs": [9],
    "rating": 8.1,
    "price": 54,
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

app.get('/api/science', (req, res) => res.json([
  {
    "title": "klasyczny kurs z matematyki",
    "category": ["Matematyka"],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "author": "Stefan Banach ",
    "rating": "9.21",
    "price": "299zł",
    "imgUrl": "https://cdn-lubimyczytac.pl/upload/books/61000/61086/352x500.jpg",
  },
  {
    "title": "nowoczesny kurs z matematyki na pełnej petardzie",
    "category": ["Matematyka"],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "author": "Rajash",
    "rating": "8.21",
    "price": "129zł",
    "imgUrl": "https://i.ytimgUrl.com/vi/X5p0AafYztA/maxresdefault.jpg",
  },
  {
    "title": "Fizyka dla nieogarniętych",
    "category": ["Fizyka"],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "author": "Mad Max",
    "rating": "5.4",
    "price": "73zł",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/ChP94_-_Fizyka_PL.svg/1200px-ChP94_-_Fizyka_PL.svg.png",
  },
  {
    "title": "Fizyka dla studentów",
    "category": ["Fizyka"],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "author": "prof. Garneczek",
    "rating": "8.1",
    "price": "54zł",
    "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
  },
  {
    "title": "Matematyka w fizyce, chemii i biologi",
    "category": ["Fizyka", "Matematyka", "Biologia", "Chemia"],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "author": "prof. Miećko",
    "rating": "8.1",
    "price": "54zł",
    "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
  },
  {
    "title": "Fizyka dla medyków",
    "category": ["Fizyka", "Biologia"],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "author": "lek. Suchocki",
    "rating": "8.1",
    "price": "54zł",
    "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
  },
]));

app.get('/api/humanites', (req, res) => res.json([
  {
    "title": "Język polski, kurs gramatyki",
    "category": ["J. polski", "Gramatyka"],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "author": "Stefan Banach ",
    "rating": "9.21",
    "price": "299zł",
    "imgUrl": "https://cdn-lubimyczytac.pl/upload/books/61000/61086/352x500.jpg",
  },
  {
    "title": "Język polski, kurs litertury",
    "category": ["J. Polski", "Literatura"],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "author": "Rajash",
    "rating": "8.21",
    "price": "129zł",
    "imgUrl": "https://i.ytimgUrl.com/vi/X5p0AafYztA/maxresdefault.jpg",
  },
  {
    "title": "Historia starożytna",
    "category": ["Historia", "Starożytność"],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "autor": "Mieczysław Gałczyk",
    "rating": "5.4",
    "price": "73zł",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/ChP94_-_Fizyka_PL.svg/1200px-ChP94_-_Fizyka_PL.svg.png",
  },
  {
    "title": "Historia po łebkach",
    "category": ["Historia"],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "autor": "Mieczysław Gałczyk",
    "rating": "8.1",
    "price": "54zł",
    "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
  },
  {
    "title": "Język angielski dla początkujących",
    "category": ["J. Angielski"],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "autor": "Mieczysław Gałczyk",
    "rating": "8.1",
    "price": "54zł",
    "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
  },
  {
    "title": "Język angielski metodami Memo",
    "category": ["J. Angielski"],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "author": "Mikołaj Filipow",
    "rating": "8.1",
    "price": "54zł",
    "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
  },
  {
    "title": "Teoria muzyki",
    "category": ["Muzyka"],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "author": "Artur Rojek",
    "rating": "8.1",
    "price": "54zł",
    "imgUrl": 'https://www.kopernik.org.pl/typo3temp/_processed_/csm_Muzyka_w_bogactwie_zjawisk_dzwiekowych_46771e9f89.jpg',
  },
]));



app.get('/api/fake', (req, res) => res.json({ "fake": "foo" }));
app.get('/api/cat', (req, res) => res.json([
  {
    'categories': "Szkoła",
    "subcategories": ["Nauki ścisłe", "Nauki humanistyczne", { "Przedmioty zawodowe": ["Informatyka", "mechatronika"] }, "Wychowanie fizyczne", "Inne"]
  },
  {
    'categories': "Hobby",
    "subcategories": [{ "Elektronika": ["Podstawy", "Arduino", "Raspberry Pi"] }, "Fotografia", { "Rysunek": ["Rysunek techniczny", "Podstawy rysunku"] }, "Kolarstwo", "Inne"]
  },
]));

app.get('/api/courses', (req, res) => res.json([
  {
    "categories": "szkoła",
    "subcategorie": "przedmioty_ścisłe",
    "title": "klasyczny kurs z matematyki",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "author": "Stefan Banach ",
    "rating": "9.21",
    "price": "299zł",
    "imgUrl": "https://cdn-lubimyczytac.pl/upload/books/61000/61086/352x500.jpg",
  },
  {
    "categories": "szkoła",
    "subcategorie": "przedmioty_ścisłe",
    "title": "klasyczny kurs z matematyki",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "author": "Stefan Banach ",
    "rating": "9.21",
    "price": "299zł",
    "imgUrl": "https://cdn-lubimyczytac.pl/upload/books/61000/61086/352x500.jpg",
  },
  {
    "categories": "szkoła",
    "subcategorie": "przedmioty_ścisłe",
    "title": "klasyczny kurs z matematyki",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
    "author": "Stefan Banach ",
    "rating": "9.21",
    "price": "299zł",
    "imgUrl": "https://cdn-lubimyczytac.pl/upload/books/61000/61086/352x500.jpg",
  },

]));


app.get('/api/courses2', (req, res) => res.json([{
  "szkoła": {
    "przedmioty_ścisłe": {
      "klasyczny kurs z matematyki": {
        "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
        "autor": "Stefan Banach ",
        "ocena": "10",
        "cena": "299zł",
        "imgUrl": "https://cdn-lubimyczytac.pl/upload/books/61000/61086/352x500.jpg",
      },
      "nowoczesny kurs z matematyki na pełnej petardzie": {
        "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
        "autor": "Rajash",
        "ocena": "8.21",
        "cena": "129zł",
        "imgUrl": "https://i.ytimgUrl.com/vi/X5p0AafYztA/maxresdefault.jpg",
      },
      "Fizyka dla nieogarniętych": {
        "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
        "autor": "Mad Max",
        "ocena": "5.4",
        "cena": "73zł",
        "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/ChP94_-_Fizyka_PL.svg/1200px-ChP94_-_Fizyka_PL.svg.png",
      },
      "Fizyka dla studentów": {
        "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
        "autor": "prof. Garneczek",
        "ocena": "8.1",
        "cena": "54zł",
        "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
      },
      "Matematyka w fizyce, chemii i biologi": {
        "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
        "autor": "prof. Miećko",
        "ocena": "8.1",
        "cena": "184zł",
        "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
      },
      "Fizyka dla medyków": {
        "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
        "autor": "lek. Suchocki",
        "ocena": "8.25.",
        "cena": "199zł",
        "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
      }
    },
    "przedmioty_humanistyczne": {
      "Język polski, kurs gramatyki": {
        "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
        "autor": "mgr Ewa Drabczyk",
        "ocena": "8.25.",
        "cena": "199zł",
        "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
      },
      "Język polski, kurs litertury": {
        "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
        "autor": "mgr Ewa Drabczyk",
        "ocena": "8.25.",
        "cena": "199zł",
        "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
      },
      "Historia starożytna": {
        "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
        "autor": "Mieczysław Gałczyk",
        "ocena": "8.25.",
        "cena": "199zł",
        "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
      },
      "Historia po łebkach": {
        "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
        "autor": "Maria Feduniewicz",
        "ocena": "8.25.",
        "cena": "199zł",
        "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
      },
      "Język angielski dla początkujących ": {
        "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
        "autor": "Marcin Grabczyk",
        "ocena": "8.25.",
        "cena": "199zł",
        "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
      },
      "Język angielski metodami Memo ": {
        "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
        "autor": "Mikołaj Filipow",
        "ocena": "8.25.",
        "cena": "199zł",
        "imgUrl": "https://www.uw.edu.pl/wp-content/uploads/2014/02/ochota-fizyka-879x300.jpg",
      },
      "Teoria muzyki": {
        "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales diam elit, eu dictum velit dictum et. Nam maximus accumsan leo, ac elementum purus porta ac. Morbi suscipit in quam malesuada rutrum. Nullam quis sem turpis. Etiam fringilla varius lorem id sagittis. Nulla volutpat laoreet metus. Nulla facilisi. Cras in lacus pulvinar, varius metus sit amet, auctor libero. Nunc in fringilla lorem, et hendrerit dui. Mauris blandit eu mi non eleifend. Sed eu mauris eu mauris dignissim luctus. Ut mi massa, volutpat id porta congue, congue at justo.",
        "autor": "Artur Rojek",
        "ocena": "8.25.",
        "cena": "199zł",
        "imgUrl": 'https://www.kopernik.org.pl/typo3temp/_processed_/csm_Muzyka_w_bogactwie_zjawisk_dzwiekowych_46771e9f89.jpg',
      },
    },
  },
}]));


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))