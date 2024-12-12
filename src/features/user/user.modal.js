export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static getAll() {
    return users;
  }
  static signIn(email, password) {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      return user; //Assuming validation passes
    } else {
      return false; //Assuming validation fails
    }
  }
  static signUp(name, email, password) {
    const user = users.find((u) => u.email === email);
    if (user) {
      return false;
    } else {
      const newUser = new UserModel(users.length + 1, name, email, password);

      users.push(newUser);
      console.log("User added to the database: ", newUser);
      return true;
    }
  }
}

let users = [
  {
    id: 1,
    name: "Seller User",
    email: "seller@ecom.com",
    password: "Password1",
  },
];
