export const users = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Admin', status: 'Active', joined: '2024-01-15' },
  { id: 2, name: 'Michael Chen', email: 'michael@example.com', role: 'Editor', status: 'Active', joined: '2024-02-20' },
  { id: 3, name: 'Emma Wilson', email: 'emma@example.com', role: 'Viewer', status: 'Inactive', joined: '2024-03-10' },
  { id: 4, name: 'James Brown', email: 'james@example.com', role: 'Editor', status: 'Active', joined: '2024-03-22' },
  { id: 5, name: 'Olivia Davis', email: 'olivia@example.com', role: 'Admin', status: 'Active', joined: '2024-04-05' },
  { id: 6, name: 'William Martinez', email: 'william@example.com', role: 'Viewer', status: 'Active', joined: '2024-04-18' },
  { id: 7, name: 'Sophia Anderson', email: 'sophia@example.com', role: 'Editor', status: 'Inactive', joined: '2024-05-01' },
  { id: 8, name: 'Daniel Taylor', email: 'daniel@example.com', role: 'Viewer', status: 'Active', joined: '2024-05-14' },
  { id: 9, name: 'Isabella Thomas', email: 'isabella@example.com', role: 'Editor', status: 'Active', joined: '2024-06-02' },
  { id: 10, name: 'Alexander Lee', email: 'alex@example.com', role: 'Admin', status: 'Active', joined: '2024-06-20' },
  { id: 11, name: 'Mia Garcia', email: 'mia@example.com', role: 'Viewer', status: 'Active', joined: '2024-07-08' },
  { id: 12, name: 'Ethan Robinson', email: 'ethan@example.com', role: 'Editor', status: 'Inactive', joined: '2024-07-25' },
  { id: 13, name: 'Ava Clark', email: 'ava@example.com', role: 'Viewer', status: 'Active', joined: '2024-08-11' },
  { id: 14, name: 'Lucas Hall', email: 'lucas@example.com', role: 'Editor', status: 'Active', joined: '2024-08-29' },
  { id: 15, name: 'Charlotte White', email: 'charlotte@example.com', role: 'Admin', status: 'Active', joined: '2024-09-15' },
];

export const products = [
  { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 89.99, stock: 145, status: 'In Stock' },
  { id: 2, name: 'Leather Backpack', category: 'Accessories', price: 129.99, stock: 52, status: 'In Stock' },
  { id: 3, name: 'Smart Watch Pro', category: 'Electronics', price: 299.99, stock: 0, status: 'Out of Stock' },
  { id: 4, name: 'Running Shoes', category: 'Footwear', price: 119.99, stock: 78, status: 'In Stock' },
  { id: 5, name: 'Organic Coffee Beans', category: 'Food', price: 24.99, stock: 200, status: 'In Stock' },
  { id: 6, name: 'Yoga Mat Premium', category: 'Sports', price: 49.99, stock: 15, status: 'Low Stock' },
  { id: 7, name: 'Bluetooth Speaker', category: 'Electronics', price: 69.99, stock: 0, status: 'Out of Stock' },
  { id: 8, name: 'Desk Lamp LED', category: 'Home', price: 39.99, stock: 88, status: 'In Stock' },
  { id: 9, name: 'Water Bottle Insulated', category: 'Sports', price: 29.99, stock: 120, status: 'In Stock' },
  { id: 10, name: 'Mechanical Keyboard', category: 'Electronics', price: 159.99, stock: 33, status: 'In Stock' },
  { id: 11, name: 'Canvas Tote Bag', category: 'Accessories', price: 19.99, stock: 8, status: 'Low Stock' },
  { id: 12, name: 'Plant Pot Ceramic', category: 'Home', price: 34.99, stock: 45, status: 'In Stock' },
];

export const orders = [
  { id: 'ORD-001', customer: 'Sarah Johnson', items: 3, total: 289.97, status: 'Completed', date: '2024-09-15' },
  { id: 'ORD-002', customer: 'Michael Chen', items: 1, total: 129.99, status: 'Processing', date: '2024-09-14' },
  { id: 'ORD-003', customer: 'Emma Wilson', items: 2, total: 179.98, status: 'Shipped', date: '2024-09-14' },
  { id: 'ORD-004', customer: 'James Brown', items: 5, total: 449.95, status: 'Completed', date: '2024-09-13' },
  { id: 'ORD-005', customer: 'Olivia Davis', items: 1, total: 299.99, status: 'Cancelled', date: '2024-09-13' },
  { id: 'ORD-006', customer: 'William Martinez', items: 2, total: 94.98, status: 'Processing', date: '2024-09-12' },
  { id: 'ORD-007', customer: 'Sophia Anderson', items: 4, total: 339.96, status: 'Completed', date: '2024-09-12' },
  { id: 'ORD-008', customer: 'Daniel Taylor', items: 1, total: 49.99, status: 'Shipped', date: '2024-09-11' },
  { id: 'ORD-009', customer: 'Isabella Thomas', items: 3, total: 224.97, status: 'Processing', date: '2024-09-11' },
  { id: 'ORD-010', customer: 'Alexander Lee', items: 2, total: 159.98, status: 'Completed', date: '2024-09-10' },
  { id: 'ORD-011', customer: 'Mia Garcia', items: 1, total: 89.99, status: 'Shipped', date: '2024-09-10' },
  { id: 'ORD-012', customer: 'Ethan Robinson', items: 3, total: 274.97, status: 'Completed', date: '2024-09-09' },
];

export const notifications = [
  { id: 1, title: 'New user registered', description: 'Sarah Johnson just created a new account.', time: '5 min ago', read: false, type: 'info' },
  { id: 2, title: 'Order completed', description: 'Order #ORD-004 has been delivered successfully.', time: '15 min ago', read: false, type: 'success' },
  { id: 3, title: 'Payment failed', description: 'Payment for Order #ORD-005 was declined.', time: '1 hour ago', read: false, type: 'danger' },
  { id: 4, title: 'Low stock alert', description: 'Yoga Mat Premium is running low on stock (15 remaining).', time: '2 hours ago', read: true, type: 'warning' },
  { id: 5, title: 'New review received', description: 'Wireless Headphones received a 5-star review.', time: '3 hours ago', read: true, type: 'info' },
  { id: 6, title: 'Server maintenance', description: 'Scheduled maintenance on Sept 20, 2024 at 2:00 AM.', time: '5 hours ago', read: true, type: 'warning' },
  { id: 7, title: 'Report ready', description: 'Monthly sales report for August is ready to download.', time: '1 day ago', read: true, type: 'info' },
  { id: 8, title: 'New team member', description: 'Alexander Lee was added to the admin team.', time: '2 days ago', read: true, type: 'success' },
];

export const activities = [
  { id: 1, user: 'Sarah Johnson', action: 'created a new order', target: '#ORD-012', time: '5 min ago' },
  { id: 2, user: 'Michael Chen', action: 'updated product', target: 'Wireless Headphones', time: '12 min ago' },
  { id: 3, user: 'Emma Wilson', action: 'left a review on', target: 'Smart Watch Pro', time: '30 min ago' },
  { id: 4, user: 'James Brown', action: 'completed order', target: '#ORD-004', time: '1 hour ago' },
  { id: 5, user: 'Olivia Davis', action: 'updated her profile', target: '', time: '2 hours ago' },
];

export const chartData = {
  revenue: [4200, 3800, 5100, 4800, 5500, 6200, 5800, 7100, 6500, 7400, 8200, 7800],
  users: [120, 150, 180, 210, 195, 230, 260, 290, 310, 340, 380, 420],
  orders: [45, 52, 48, 61, 55, 70, 65, 78, 82, 90, 95, 88],
};
