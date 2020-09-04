import { makeFamilly } from './utils'


test('make familly object with nested childrens', () => {
  expect(makeFamilly([
    {
      parentId: null,
      id: 1
    },
    {
      parentId: 1,
      id: 2
    },
  ])).toStrictEqual([
    {
      "childrens": [{ "childrens": [], "id": 2, "parentId": 1 }],
      "id": 1,
      "parentId": null
    }]
  );
});
