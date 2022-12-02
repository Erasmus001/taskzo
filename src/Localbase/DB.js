export const User = [
  {
    username: "Eras",
    email: "eras@eras.com",
    password: "123456",
    userTasks: [
      {
        id: "Col 1",
        name: "Todo",
        tasks: [
          {
            taskId: 1,
            taskTitle: "Introduction to HTML5",
            taskCategory: "High",
            taskDesc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quidem accusamus, sunt vero, hic dolorum dolorem recusandae obcaecati reiciendis, dolore soluta placeat sequi nam beatae!",
            taskCreatedAt: new Date(),
            taskDueDate: "Saturday, 19 November 2022",
            subTasks: [],
            tasksNotes: [],
            taskImgUrl: "",
          },
          {
            taskId: 2,
            taskTitle: "Introduction to HTML5",
            taskCategory: "High",
            taskDesc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quidem accusamus, sunt vero, hic dolorum dolorem recusandae obcaecati reiciendis, dolore soluta placeat sequi nam beatae!",
            taskCreatedAt: new Date(),
            taskDueDate: "Saturday, 19 November 2022",
            subTasks: [],
            tasksNotes: [],
            taskImgUrl: "",
          },
          {
            taskId: 3,
            taskTitle: "Introduction to HTML5",
            taskCategory: "High",
            taskDesc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quidem accusamus, sunt vero, hic dolorum dolorem recusandae obcaecati reiciendis, dolore soluta placeat sequi nam beatae!",
            taskCreatedAt: new Date(),
            taskDueDate: "Saturday, 19 November 2022",
            subTasks: [],
            tasksNotes: [],
            taskImgUrl: "",
          },
        ],
      },
      {
        id: "Col 2",
        name: "In Progress",
        tasks: [
          {
            taskId: 1,
            taskTitle: "Introduction to HTML5",
            taskCategory: "Medium",
            taskDesc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quidem accusamus, sunt vero, hic dolorum dolorem recusandae obcaecati reiciendis, dolore soluta placeat sequi nam beatae!",
            taskCreatedAt: new Date(),
            taskDueDate: "Saturday, 19 November 2022",
            subTasks: [],
            tasksNotes: [],
            taskImgUrl: "",
          },
          {
            taskId: 2,
            taskTitle: "Introduction to JS",
            taskCategory: "Low",
            taskDesc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quidem accusamus, sunt vero, hic dolorum dolorem recusandae obcaecati reiciendis, dolore soluta placeat sequi nam beatae!",
            taskCreatedAt: new Date(),
            taskDueDate: "Saturday, 19 November 2022",
            subTasks: [],
            tasksNotes: [],
            taskImgUrl: "",
          },
        ],
      },
      {
        id: "Col 3",
        name: "Stuck",
        tasks: [
          {
            taskId: 1,
            taskTitle: "Introduction to HTML5",
            taskCategory: "Low",
            taskDesc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quidem accusamus, sunt vero, hic dolorum dolorem recusandae obcaecati reiciendis, dolore soluta placeat sequi nam beatae!",
            taskCreatedAt: new Date(),
            taskDueDate: "Saturday, 19 November 2022",
            subTasks: [],
            tasksNotes: [],
            taskImgUrl: "",
          },
        ],
      },
      {
        id: "Col 4",
        name: "Completed",
        tasks: [
          {
            taskId: 1,
            taskTitle: "Introduction to HTML5",
            taskCategory: "High",
            taskDesc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quidem accusamus, sunt vero, hic dolorum dolorem recusandae obcaecati reiciendis, dolore soluta placeat sequi nam beatae!",
            taskCreatedAt: new Date(),
            taskDueDate: "Saturday, 19 November 2022",
            subTasks: [],
            tasksNotes: [],
            taskImgUrl: "",
          },
        ],
      },
    ],
  },
];

export const categories = [
  {
    id: "001",
    category: "Todo",
    tasks: [
      {
        taskId: 1,
        taskTitle: "Introduction to HTML5",
        taskCategory: "High",
        taskDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quidem accusamus, sunt vero, hic dolorum dolorem recusandae obcaecati reiciendis, dolore soluta placeat sequi nam beatae!",
        taskCreatedAt: new Date(),
        taskDueDate: "Saturday, 19 November 2022",
        subTasks: [],
        tasksNotes: [],
        taskImgUrl: "",
      },
    ],
  },
  {
    id: "002",
    category: "In Progress",
    tasks: [],
  },
  {
    id: "003",
    category: "Stuck",
    tasks: [],
  },
  {
    id: "004",
    category: "Completed",
    tasks: [],
  },
];

// Mini exports...
export const userTasks = User[0]?.userTasks;

const user = User[0];

export const userCred = {
  userEmail: user.email,
  userName: user.username,
  userPassword: user.password,
};
