const DB = {
  books: [
    {
      id: 1,
      title: "Clean Code",
      authorId: 1,
      categoryId: 1,
      price: 35.99,
      stock: 10,
      rating: 4.8,
      publishedYear: 2008,
      description: "A Handbook of Agile Software Craftsmanship",
    },
    {
      id: 2,
      title: "The Pragmatic Programmer",
      authorId: 2,
      categoryId: 1,
      price: 39.99,
      stock: 7,
      rating: 4.7,
      publishedYear: 1999,
      description: "Your Journey to Mastery",
    },
    {
      id: 3,
      title: "Atomic Habits",
      authorId: 3,
      categoryId: 2,
      price: 29.99,
      stock: 15,
      rating: 4.9,
      publishedYear: 2018,
      description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    },
  ],

  authors: [
    { id: 1, name: "Robert C. Martin" },
    { id: 2, name: "Andrew Hunt & David Thomas" },
    { id: 3, name: "James Clear" },
  ],

  categories: [
    { id: 1, name: "Programming" },
    { id: 2, name: "Self-Help" },
    { id: 3, name: "Fiction" },
  ],

  users: [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      password: "hashedpassword123",
      role: "customer",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      password: "hashedpassword456",
      role: "customer",
    },
  ],

  orders: [
    {
      id: 1,
      userId: 1,
      books: [
        { bookId: 1, quantity: 1 },
        { bookId: 3, quantity: 2 },
      ],
      total: 95.97,
      status: "completed",
      createdAt: "2025-07-14T10:15:00Z",
    },
    {
      id: 2,
      userId: 2,
      books: [{ bookId: 2, quantity: 1 }],
      total: 39.99,
      status: "processing",
      createdAt: "2025-07-15T08:20:00Z",
    },
  ],
};

module.exports = DB;
