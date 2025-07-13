# Royal Galkot - Taste of Himalaya | Restaurant Website

A modern, responsive restaurant website for "Royal Galkot - Taste of Himalaya" specializing in authentic momo with an integrated e-commerce style product management system.

## Features

### 🍽️ Customer Features
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Category Filtering**: Filter momo by Chicken, Vegetarian, Buff, and Frozen categories
- **Product Display**: Beautiful product cards with images, descriptions, and pricing
- **Availability Status**: Real-time availability indicators for each product
- **Order System**: Simple one-click ordering (simulated)
- **Smooth Animations**: Modern UI with fade-in animations and hover effects

### 🛠️ Admin Features
- **Product Management**: Add, edit, and delete products
- **Category Management**: Organize products by Chicken, Veg, Buff, and Frozen
- **Availability Control**: Toggle product availability on/off
- **Image Management**: Add product images via URL
- **Local Storage**: All changes are saved locally in the browser
- **Real-time Updates**: Changes reflect immediately on the website

## File Structure

```
restaurant-website/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## How to Use

### For Customers
1. **Browse Menu**: Scroll through the menu section to see all available momo
2. **Filter Products**: Use the category buttons to filter by Chicken, Vegetarian, or Buff
3. **Place Orders**: Click "Order Now" on any available product
4. **Contact**: Use the contact information to reach out for orders

### For Admin (Restaurant Owner)
1. **Access Admin Panel**: Click the "Admin" link in the navigation
2. **Add New Products**:
   - Fill in product name, category, price, description
   - Add image URL (use any online image)
   - Set availability status
   - Click "Add Product"
3. **Manage Existing Products**:
   - Toggle availability on/off
   - Delete products you no longer offer
4. **Real-time Updates**: All changes appear immediately on the website

## Product Categories

### 🍗 Chicken momo
- Traditional steamed chicken momo
- Chicken Kothey (pan-fried) momo
- Various chicken-based specialties

### 🌱 Vegetarian momo
- Fresh vegetable momo
- Paneer (cottage cheese) momo
- Plant-based options

### 🥩 Buff momo
- Traditional buff (water buffalo) momo
- Spicy buff variations
- Authentic Nepali flavors

### ❄️ Frozen momo
- **Frozen chicken momo**: $15 AUD for 20 pieces
- **Frozen vegetable momo**: $14 AUD for 20 pieces  
- **Frozen buff momo**: $15 AUD for 20 pieces
- Perfect for home cooking and bulk orders

## Technical Features

### Frontend Technologies
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with animations and responsive design
- **JavaScript**: Interactive functionality and product management
- **Bootstrap 5**: Responsive grid system and components
- **Font Awesome**: Professional icons

### Key JavaScript Functions
- `initializeApp()`: Sets up the application
- `displayProducts()`: Renders product cards
- `filterProducts()`: Handles category filtering
- `addNewProduct()`: Adds products to inventory
- `toggleAvailability()`: Controls product availability
- `deleteProduct()`: Removes products
- `orderProduct()`: Handles customer orders

### Data Storage
- **LocalStorage**: All product data is saved in the browser
- **Persistent Data**: Changes survive browser refreshes
- **No Database Required**: Simple file-based system

## Customization

### Adding New Products
1. Open the admin panel
2. Fill in all required fields:
   - **Product Name**: Descriptive name
   - **Category**: Choose from Chicken, Vegetarian, or Buff
   - **Price**: Set in dollars (e.g., 8.99)
   - **Image URL**: Use any online image URL
   - **Description**: Detailed product description
   - **Available**: Set to Yes/No

### Styling Changes
- Edit `styles.css` to modify colors, fonts, and layout
- Update hero section background in CSS
- Modify product card styling
- Adjust responsive breakpoints

### Content Updates
- Edit contact information in `index.html`
- Update restaurant description and about section
- Modify hero section text
- Change sample products in `script.js`

## Browser Compatibility
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Performance Features
- **Lazy Loading**: Images load as needed
- **Smooth Scrolling**: Enhanced navigation experience
- **Optimized Animations**: 60fps animations
- **Responsive Images**: Automatically sized for different screens

## Security Notes
- This is a frontend-only application
- No sensitive data is transmitted
- All data is stored locally in the browser
- No server-side processing required

## Future Enhancements
- Integration with payment gateways
- Real-time inventory management
- Customer reviews and ratings
- Online ordering system
- Delivery tracking
- Customer accounts
- Analytics dashboard

## Getting Started
1. Download all files to a folder
2. Open `index.html` in a web browser
3. Start customizing products through the admin panel
4. Update contact information and branding as needed

## Support
For technical support or customization requests, please refer to the code comments in each file for detailed explanations of functionality.

---

**Royal Galkot** - Taste of Himalaya - Serving authentic momo since 2020 