export const items = [
  {
    name: "Story Telling Malayalam (1 and 2)",
    category: "lp",
    isPublished: true,
    students: [
      {
        name: "Fathima Shilza v",
        chestNo: "167",
        place: 3,
        class: 2,
        division: "A"
      },
      {
        name: "Ashmil KK",
        chestNo: "175",
        place: 2,
        class: 2,
        division: "C"
      },
      {
        name: "Fathima Rifa PT",
        chestNo: "168",
        place: 1,
        class: 2,
        division: "A"
      },
      {
        name: "ruhi rasheen",
        chestNo: "179",
        place: 3,
        class: 1,
        division: "C"
      },
      {
        name: "yuvan raghav midhun",
        chestNo: "134",
        place: null,
        class: 1,
        division: "b"
      },
      {
        name: "Fathima Sanfa K",
        chestNo: "170",
        place: null,
        class: 2,
        division: "b"
      },
      {
        name: "Souparnika",
        chestNo: "174",
        place: null,
        class: 2,
        division: "c"
      },
      {
        name: "fathima meshwa",
        chestNo: "180",
        place: null,
        class: 2,
        division: "c"
      },
      {
        name: "sreenandh",
        chestNo: "181",
        place: null,
        class: 2,
        division: "c"
      },
      {
        name: "niranjana s",
        chestNo: "172",
        place: null,
        class: 1,
        division: "a"
      },
    ]
  },
  {
    name: "Action Song English",
    category: "lp",
    isPublished: false,
    students: [{
      name: "Fathima Rifa PT",
      chestNo: "001",
      place: 1,
      grade: "A",
      class: 2,
      division: "A"
    }]
  },
  {
    name: "Action Song Malayalam",
    category: "lp",
    isPublished: true,
    students: [{
      name: "Fathima Rifa PT",
      chestNo: "001",
      place: 1,
      grade: "A",
      class: 2,
      division: "A"
    }]
  },
]

export interface Items {
  name: string;
  category: string;
  isPublished: boolean;
  students: {
    name: string;
    chestNo: string;
    place: number | null;
    grade: string;
    class: number;
    division: string;
  }[];
}