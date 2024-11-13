// src/mock/mockData.js
const carData = [
  {
    id: 1,
    name: 'Mercedes-Benz A32',
    addedDate: 5,
    viewedCount: 10,
    price: 25000,
    testRequestCount: 2,
    image: '/src/mock/car.png', // Adjust this path according to your project structure
  },
  {
    id: 2,
    name: 'BMW M3',
    addedDate: 2,
    viewedCount: 15,
    price: 45000,
    testRequestCount: 3,
    image: '/src/mock/car.png', // Adjust this path according to your project structure
  },
  {
    id: 3,
    name: 'Audi Q5',
    addedDate: 10,
    viewedCount: 5,
    price: 35000,
    testRequestCount: 1,
    image: '/src/mock/car.png', // Adjust this path according to your project structure
  },
  // Add more car objects as needed
];

const soldCarData = [
  {
    id: 1,

    image: 'src/mock/car.png', // Replace with your image URL
    name: 'Ford Explorer 2023',
    duration: '10 Months',
    price: '35,000',
  },
  {
    id: 2,

    image: 'src/mock/car.png', // Replace with your image URL
    name: 'Ford Explorer 2023',
    duration: '10 Months',
    price: '35,000',
  },
  {
    id: 3,

    image: 'src/mock/car.png', // Replace with your image URL
    name: 'Ford Explorer 2023',
    duration: '10 Months',
    price: '35,000',
  },
  {
    id: 4,

    image: 'src/mock/car.png', // Replace with your image URL
    name: 'Ford Explorer 2023',
    duration: '10 Months',
    price: '35,000',
  },
  {
    id: 5,

    image: 'src/mock/car.png', // Replace with your image URL
    name: 'Ford Explorer 2023',
    duration: '10 Months',
    price: '35,000',
  },
  {
    id: 6,

    image: 'src/mock/car.png', // Replace with your image URL
    name: 'Ford Explorer 2023',
    duration: '10 Months',
    price: '35,000',
  },
  {
    id: 7,

    image: 'src/mock/car.png', // Replace with your image URL
    name: 'Ford Explorer 2023',
    duration: '10 Months',
    price: '35,000',
  },
  {
    id: 8,

    image: 'src/mock/car.png', // Replace with your image URL
    name: 'Ford Explorer 2023',
    duration: '10 Months',
    price: '35,000',
  },
];
const mockUserData = [
  {
    id: 1,
    image: '/images/user1.jpg', // Replace with the actual image path
    name: 'Dinh Trung Kien',
    requestedTime: '5 hours ago',
    phone: '+88-123456789',
    location: 'Ha Noi',
  },
  {
    id: 2,
    image: '/images/user2.jpg',
    name: 'Nguyen Van A',
    requestedTime: '2 hours ago',
    phone: '+88-987654321',
    location: 'Ho Chi Minh City',
  },
  {
    id: 3,
    image: '/images/user3.jpg',
    name: 'Le Thi B',
    requestedTime: '1 day ago',
    phone: '+88-123123123',
    location: 'Da Nang',
  },
  {
    id: 4,
    image: '/images/user4.jpg',
    name: 'Pham Van C',
    requestedTime: '3 days ago',
    phone: '+88-321321321',
    location: 'Can Tho',
  },
];
export { carData, soldCarData, mockUserData };
