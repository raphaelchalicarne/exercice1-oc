import { Stuff } from '../models/Stuff';

export class StuffService {
  cdList: Stuff[] = [
    {
      name: 'Break syndical',
      description: [
        'Auteur: Les Cowboys Fringants',
        'Titres: 14',
        'Année: 2009'
      ],
      isLended: true
    },
    {
      name: 'Sur un air de déjà vu',
      description: [
        'Auteur: Les Cowboys Fringants',
        'Titres: 16',
        'Année: 2009'
      ],
      isLended: false
    },
    {
      name: 'Pamplemousse Mécanique',
      description: [
        'Auteur: Les Fatals Picards',
        'Titres: 18',
        'Année: 2007'
      ],
      isLended: false
    }
  ];
    
  bookList: Stuff[] = [
    {
      name: 'Tobie Lolness - Tome 1 : La vie suspendue',
      description: [
        'Auteur: Timothée de Fombelle',
        'Genre: Roman',
        'Année: 2006'
      ],
      isLended: false
    },
    {
      name: "Tobie Lolness - Tome 2 : Les yeux d'Elisha",
      description: [
        'Auteur: Timothée de Fombelle',
        'Genre: Roman',
        'Année: 2007'
      ],
      isLended: false
    },
    {
      name: 'Pour une transition écologique citoyenne',
      description: [
        'Auteur: Marcel Jollivet',
        'Année: 2015'
      ],
      isLended: true
    },
    {
      name: "Les quinze premières vies d'Harry August",
      description: [
        'Auteur: Catherine Webb',
        'Genre: Roman',
        'Année: 2014'
      ],
      isLended: false
    }
  ];
}