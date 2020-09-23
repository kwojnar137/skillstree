import { findChildrensId } from './utils'


test('return childrens of object with id 201 and this object', () => {
  expect(findChildrensId([
    {
      id: 1,
      childrens: [
        {
          id: 10,
          childrens: [],
        },
        {
          id: 20,
          childrens: [
            {
              id: 200,
              childrens: [],
            },
            {
              id: 201,
              childrens: [
                {
                  id: 2001,
                  childrens: []
                },
                {
                  id: 2002,
                  childrens: []
                }
              ]
            },
          ]
        }
      ]
    },
    {
      id: 2,
      childrens: [
        {
          id: 30,
          childrens: [],
        },
        {
          id: 40,
          childrens: [
            {
              id: 400,
              childrens: [],
            },
            {
              id: 401,
              childrens: [
                {
                  id: 4001,
                  childrens: [],
                },
                {
                  id: 4002,
                  childrens: [],
                }
              ]
            },
          ]
        }
      ]
    }
  ], 201)).toEqual([201, 2001, 2002])
}) 