const usersDB = [
  {
    name: "Nguyễn Văn A",
    age: 20,
    address: "Đà Nẵng",
    email: "nguyenvana@gmail.com",
    username: "Test",
    status: true,
  },
  {
    name: "Nguyễn Văn B",
    age: 20,
    address: "Đà Nẵng",
    email: "nguyenvana@gmail.com",
    username: "Test",
    status: true,
  },
  {
    name: "Nguyễn Văn C",
    age: 20,
    address: "Đà Nẵng",
    email: "nguyenvana@gmail.com",
    username: "Test",
    status: true,
  },
];

const manager = [
  { username: "Admin 1", role: "1", historyWork: [] },
  { username: "Admin 1", role: "1", historyWork: [] },
];

const tableUser = [
  { title: "#", key: "" },
  { title: "user name", key: "username" },
  { title: "email", key: "email" },
  { title: "full name", key: "name" },
  { title: "address", key: "address" },
  { title: "status", key: "status" },
  { title: "action", key: "" },
];

const actionUser = ["view", "block"];
