export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Pyare Lal",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "3",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Pyare Lal",
    _id: "2",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "3",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Pyare Lal",
    _id: "4",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "5",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Pyare Lal",
    _id: "6",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "7",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Pyare Lal",
    _id: "8",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Pyare Lal",
    _id: "9",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Pyare Lal",
    },
    _id: "2",
  },
];

export const sampleMessages = [
  {
    attatchments: [],
    content: "some Messages",
    _id: "alskdfj;dlsfja;lsdk",
    sender: {
      _id: "user._id",
      name: "Pyare lal",
    },
    chat: "chatId",
    createdAt: "2023-02-12T10:41:30.630Z",
  },
  {
    attatchments: [
      {
        url: "https://www.w3schools.com/howto/img_avatar.png",
        public_id: "id_2",
      },
    ],
    content: "",
    _id: "alskdfj;dlsfja;lsdk1",
    sender: {
      _id: "user._id2",
      name: "Pyare lal2",
    },
    chat: "chatId",
    createdAt: "2023-03-12T10:41:30.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "John Doe",
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Pyare Lal",
      _id: "2",
      username: "pyare_lal",
      friends: 10,
      groups: 9,
    },
  ],
  chats: [
    {
      name: "Group 1",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: true,
      members: [
        {
          _id: "1",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          _id: "2",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Group 2",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        {
          _id: "1",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          _id: "2",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Pyare Lal",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],

  messages: [
    {
      attatchments: [],
      content: "some Messages",
      _id: "alskdfj;dlsfja;lsdk",
      sender: {
        _id: "user._id",
        name: "Pyare lal",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
      chat: "chatId",
      groupChat:false,
      createdAt: "2023-02-12T10:41:30.630Z", 
    },
    {
      attatchments: [
        {
          url: "https://www.w3schools.com/howto/img_avatar.png",
          public_id: "id_2",
        },
      ],
      content: "",
      _id: "alskdfj;dlsfja;lsdk1",
      sender: {
        _id: "user._id2",
        name: "Pyare lal2",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
      chat: "chatId",
      groupChat:true,
      createdAt: "2023-03-12T10:41:30.630Z",
    },
  ],
};
