import { makeFamilly } from './utils'


// const Familly = {
//   parentId: null,
//   id: 1,
// }


// const categories = [
//   {
//     parentId: null,
//     id: 1
//   },
//   {
//     parentId: 1,
//     id: 2
//   },
// ]

const FamillyExpected = [{ "childrens": [{ "childrens": [], "id": 2, "parentId": 1 }], "id": 1, "parentId": null }]
// const FamillyExpected = [
//   {
//     parentId: null,
//     id: 1,
//     childrens: [
//       {
//         parentId: 1,
//         id: 2,
//       },
//     ]
//   },
// ]

const Familly2 = [
  {
    parentId: null,
    id: 1
  },
  {
    parentId: 1,
    id: 2
  },
  {
    parentId: 2,
    id: 3
  },
  {
    parentId: 3,
    id: 4
  },
]

const FamillyExpected2 = [
  {
    parentId: null,
    id: 1,
    childrens: [
      {
        parentId: 1,
        id: 2,
        childrens: [
          {
            parentId: 2,
            id: 3,
            childrens: [
              {
                parentId: 3,
                id: 4
              },
            ]
          },
        ]
      },
    ]
  },
]

test('make familly object with nested childrens', () => {
  expect(makeFamilly(
    [
      {
        parentId: null,
        id: 1
      },
      {
        parentId: 1,
        id: 2
      },
    ]
  )).toStrictEqual([
    {
      "childrens": [{ "childrens": [], "id": 2, "parentId": 1 }],
      "id": 1,
      "parentId": null
    }]
  );
});