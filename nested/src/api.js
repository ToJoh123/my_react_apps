export const getLists = async () => {
  return {
    List: [
      {
        ID: 1,
        ListName: "Example Task List",
        Task: [
          {
            ID: 1,
            Text: "Example task 1",
            Status: "Incomplete",
          },
          {
            ID: 2,
            Text: "Example task 2",
            Status: "Complete",
          },
          {
            ID: 3,
            Text: "Example task 3",
            Status: "Incomplete",
          },
        ],
      },
      {
        ID: 2,
        ListName: "Second Example Task List",
        Task: [
          {
            ID: 4,
            Text: "Second example task 1",
            Status: "Complete",
          },
          {
            ID: 5,
            Text: "Second example task 2",
            Status: "Incomplete",
          },
          {
            ID: 6,
            Text: "Second example task 3",
            Status: "Complete",
          },
        ],
      },
      {
        ID: 3,
        ListName: "Third Example Task List",
        Task: [
          {
            ID: 7,
            Text: "Third example task 1",
            Status: "Incomplete",
          },
          {
            ID: 8,
            Text: "Third example task 2",
            Status: "Complete",
          },
          {
            ID: 9,
            Text: "Third example task 3",
            Status: "Incomplete",
          },
        ],
      },
    ],
    Friends: [
      {
        ID: 1,
        Name: "Friend 1",
        List: [
          {
            ID: 10,
            ListName: "Friend's Example Task List",
            Task: [
              {
                ID: 10,
                Text: "Friend's example task 1",
                Status: "Complete",
              },
              {
                ID: 11,
                Text: "Friend's example task 2",
                Status: "Incomplete",
              },
              {
                ID: 12,
                Text: "Friend's example task 3",
                Status: "Complete",
              },
            ],
          },
        ],
      },
      {
        ID: 2,
        Name: "Friend 2",
        List: [
          {
            ID: 11,
            ListName: "second Friend's Second Example Task List",
            Task: [
              {
                ID: 13,
                Text: "second Friend's second example task 1",
                Status: "Incomplete",
              },
              {
                ID: 14,
                Text: "second Friend's second example task 2",
                Status: "Complete",
              },
              {
                ID: 15,
                Text: "second Friend's second example task 3",
                Status: "Incomplete",
              },
            ],
          },
        ],
      },
    ],
  };
};

export const createList = async (list, task = null) => {
  return {
    ID: Math.random().toString(36).substring(2, 9),
    ListName: list,
    Task: [task],
  };
};
export const createTask = async (params) => {
  return {
    ID: Math.random().toString(36).substring(2, 9),
    Text: params,
    Status: "Incomplete",
  };
};
export const deleteList = async (params) => {
  return params;
};
export const deleteTask = async (params) => {
  return params;
};
