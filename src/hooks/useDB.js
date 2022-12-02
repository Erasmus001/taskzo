import Localbase from "localbase";

export const tasks = [
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
];

export const db = new Localbase("taskzoDB");
