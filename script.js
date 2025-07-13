// Global variables
let products = [];
let currentCategory = 'all';

// Sample products data
const initialProducts = [
    {
        id: 1,
        name: "Chicken momo",
        category: "chicken",
        price: 15.99,
        description: "Traditional steamed chicken momo with aromatic spices and herbs. Served with our signature dipping sauce.",
        image: "logo.png",
        available: true,
        ingredients: "Chicken, onion, ginger, garlic, spices, flour"
    },
    {
        id: 2,
        name: "Vegetable momo",
        category: "veg",
        price: 14.99,
        description: "Fresh vegetable momo filled with cabbage and green onions. Perfect for vegetarians.",
        image: "logo.png",
        available: true,
        ingredients: "Cabbage, carrot, onion, ginger, garlic, flour, spices"
    },
    {
        id: 3,
        name: "Buff momo",
        category: "buff",
        price: 15.99,
        description: "Spicy buff momo with traditional Nepali spices. A must-try for meat lovers.",
        image: "logo.png",
        available: true,
        ingredients: "Buffalo meat, onion, ginger, garlic, spices, flour"
    },
    {
        id: 4,
        name: "Chicken kothey momo",
        category: "chicken",
        price: 15.99,
        description: "Pan-fried chicken momo with crispy bottom and juicy filling. Our specialty dish.",
        image: "logo.png",
        available: true,
        ingredients: "Chicken, onion, ginger, garlic, spices, flour"
    },
    {
        id: 5,
        name: "Paneer momo",
        category: "veg",
        price: 14.99,
        description: "Cottage cheese momo with mild spices. A vegetarian delight with rich flavors.",
        image: "logo.png",
        available: true,
        ingredients: "Paneer, onion, ginger, garlic, flour, spices"
    },
    {
        id: 6,
        name: "Spicy buff momo",
        category: "buff",
        price: 15.99,
        description: "Extra spicy buff momo for those who love heat. Not for the faint-hearted!",
        image: "logo.png",
        available: false,
        ingredients: "Buffalo meat, chili, onion, ginger, garlic, spices, flour"
    },
    {
        id: 7,
        name: "Frozen chicken momo (20 pcs)",
        category: "frozen",
        price: 15.00,
        description: "Frozen chicken momo - 20 pieces per pack. Perfect for home cooking. Just steam or fry to enjoy authentic flavors.",
        image: "logo.png",
        available: true,
        ingredients: "Chicken, onion, ginger, garlic, spices, flour"
    },
    {
        id: 8,
        name: "Frozen vegetable momo (20 pcs)",
        category: "frozen",
        price: 14.00,
        description: "Frozen vegetable momo - 20 pieces per pack. Fresh vegetables wrapped in delicate dough. Ideal for vegetarians.",
        image: "logo.png",
        available: true,
        ingredients: "Cabbage, carrot, onion, ginger, garlic, flour, spices"
    },
    {
        id: 9,
        name: "Frozen buff momo (20 pcs)",
        category: "frozen",
        price: 15.00,
        description: "Frozen buff momo - 20 pieces per pack. Traditional Nepali buff meat with authentic spices. Freeze for later enjoyment.",
        image: "logo.png",
        available: true,
        ingredients: "Buffalo meat, onion, ginger, garlic, spices, flour"
    },
    {
        id: 10,
        name: "Chicken jhol momo",
        category: "chicken",
        price: 16.99,
        description: "Steamed chicken momo served in a spicy Nepali jhol (broth) sauce. A true Kathmandu favorite!",
        image: "momo.webp",
        available: true,
        ingredients: "Chicken, onion, ginger, garlic, Nepali spices, flour, jhol sauce"
    },
    {
        id: 11,
        name: "Buff jhol momo",
        category: "buff",
        price: 16.99,
        description: "Buff momo in a rich, spicy jhol (broth) sauce. Authentic street food taste from Nepal.",
        image: "momo.webp",
        available: true,
        ingredients: "Buffalo meat, onion, ginger, garlic, Nepali spices, flour, jhol sauce"
    },
    {
        id: 12,
        name: "Vegetable jhol momo",
        category: "veg",
        price: 15.99,
        description: "Vegetarian momo in a tangy, spicy jhol (broth) sauce. Perfect for momo lovers seeking something different.",
        image: "momo.webp",
        available: true,
        ingredients: "Cabbage, carrot, onion, ginger, garlic, flour, Nepali spices, jhol sauce"
    }
];

// Reviews data
const reviews = [
  { name: 'Suman Gurung', rating: 5, text: 'Best momo I have ever tasted! Reminds me of home.' },
  { name: 'Anita Sharma', rating: 5, text: 'Delicious and fresh. The buff momo is my favorite.' },
  { name: 'Bikash Thapa', rating: 4, text: 'Great taste and quick service. Will order again.' },
  { name: 'Rita Karki', rating: 5, text: 'Perfect for our family function. Everyone loved it!' },
  { name: 'Manish Shrestha', rating: 5, text: 'Authentic Nepali flavor. Highly recommend.' },
  { name: 'Sunita Lama', rating: 5, text: 'Vegetable momo was so tasty and soft.' },
  { name: 'Prakash Adhikari', rating: 5, text: 'The best place for momo in town!' },
  { name: 'Nirajan Bista', rating: 4, text: 'Loved the spicy sauce with the momo.' },
  { name: 'Sujata Poudel', rating: 5, text: 'Paneer momo was unique and delicious.' },
  { name: 'Ramesh KC', rating: 5, text: 'Ordered for a party, everyone was happy.' },
  { name: 'Kiran Maharjan', rating: 5, text: 'Buff momo is a must try here.' },
  { name: 'Sabina Rai', rating: 5, text: 'Great service and amazing taste.' },
  { name: 'Dipesh Khadka', rating: 4, text: 'Chicken momo was juicy and flavorful.' },
  { name: 'Mina Magar', rating: 5, text: 'Loved the frozen momo for home cooking.' },
  { name: 'Rajendra Basnet', rating: 5, text: 'Best momo in Chitwan!' },
  { name: 'Santoshi Ghimire', rating: 5, text: 'Very hygienic and tasty.' },
  { name: 'Bimal Subedi', rating: 5, text: 'The staff is friendly and momo is top notch.' },
  { name: 'Nisha Tamang', rating: 5, text: 'Highly recommend for big functions.' },
  { name: 'Sagar Neupane', rating: 4, text: 'Good value for money.' },
  { name: 'Puja Bhattarai', rating: 5, text: 'The momo chutney is amazing!' },
  { name: 'Rabin Shrestha', rating: 5, text: 'Tastes just like Kathmandu.' },
  { name: 'Sushma Gurung', rating: 5, text: 'Fresh and hot momo every time.' },
  { name: 'Bishal Pokhrel', rating: 5, text: 'Perfect for lunch and dinner.' },
  { name: 'Asmita Kharel', rating: 5, text: 'Loved the variety and taste.' },
  { name: 'Raju Chaudhary', rating: 5, text: 'Buff momo is the best here.' },
  { name: 'Sita Pandey', rating: 5, text: 'Great for family gatherings.' },
  { name: 'Kushal Bhatt', rating: 5, text: 'The frozen momo is so convenient.' },
  { name: 'Rina Shrestha', rating: 5, text: 'Very authentic and delicious.' },
  { name: 'Sandeep Lama', rating: 5, text: 'Highly recommended for momo lovers.' },
  { name: 'Bhawana Karki', rating: 5, text: 'The best momo I have had in years.' },
  { name: 'Sujan Raut', rating: 5, text: 'Great taste and portion size.' },
  { name: 'Nabina Magar', rating: 5, text: 'Loved the spicy buff momo.' },
  { name: 'Ramesh Thapa', rating: 5, text: 'Perfect for parties and events.' },
  { name: 'Sushil Shrestha', rating: 5, text: 'The momo is always fresh and tasty.' },
  { name: 'Pramila Gurung', rating: 5, text: 'Vegetarian momo is my favorite.' },
  { name: 'Bikram Adhikari', rating: 5, text: 'Great experience every time.' },
  { name: 'Sujata KC', rating: 5, text: 'The momo is soft and flavorful.' },
  { name: 'Rabin Basnet', rating: 5, text: 'Best place for momo in Bharatpur.' },
  { name: 'Niraj Shrestha', rating: 5, text: 'Loved the chicken momo.' },
  { name: 'Sushila Rai', rating: 5, text: 'Great for big orders.' },
  { name: 'Ramesh Karki', rating: 5, text: 'The momo is always fresh.' },
  { name: 'Sunil Lama', rating: 5, text: 'Amazing taste and quality.' },
  { name: 'Nisha Shrestha', rating: 5, text: 'The best momo in Nepal.' },
  { name: 'Bimal KC', rating: 5, text: 'Loved the frozen momo option.' },
  { name: 'Sushant Thapa', rating: 5, text: 'Great for home parties.' },
  { name: 'Rina Magar', rating: 5, text: 'The momo is always delicious.' },
  { name: 'Sagar Shrestha', rating: 5, text: 'Highly recommend for everyone.' },
  { name: 'Asmita Gurung', rating: 5, text: 'The momo is soft and tasty.' },
  { name: 'Rajendra KC', rating: 5, text: 'Best momo for big functions.' }
];

function renderReviews() {
  const reviewsGrid = document.getElementById('reviewsGrid');
  if (!reviewsGrid) return;
  reviewsGrid.innerHTML = '';
  reviews.forEach(review => {
    const card = document.createElement('div');
    card.className = 'col-md-4 review-card';
    card.innerHTML = `
      <div class="review-avatar">${review.name.split(' ').map(n=>n[0]).join('').toUpperCase()}</div>
      <div class="review-name">${review.name}</div>
      <div class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)} <span style="font-size:0.95em;color:#888;">(Overall)</span></div>
      <div class="review-text">${review.text}</div>
      <div class="small text-muted mb-1">Atmosphere: <span class="review-stars">${'★'.repeat(review.atmosphere||5)}${'☆'.repeat(5-(review.atmosphere||5))}</span></div>
      <div class="small text-muted mb-1">Parking: <span class="review-stars">${'★'.repeat(review.parking||5)}${'☆'.repeat(5-(review.parking||5))}</span></div>
      <div class="small text-muted mb-1">Food: <span class="review-stars">${'★'.repeat(review.food||5)}${'☆'.repeat(5-(review.food||5))}</span></div>
      <div class="small text-muted mb-1">Items: <span class="review-stars">${'★'.repeat(review.items||5)}${'☆'.repeat(5-(review.items||5))}</span></div>
      <div class="small text-muted mb-1">Quality of Service: <span class="review-stars">${'★'.repeat(review.service||5)}${'☆'.repeat(5-(review.service||5))}</span></div>
    `;
    reviewsGrid.appendChild(card);
  });
}

function showReviewModal() {
  const modal = new bootstrap.Modal(document.getElementById('reviewModal'));
  modal.show();
}

window.showReviewModal = showReviewModal;

function saveReviewsToStorage() {
  localStorage.setItem('royalgalkot_reviews', JSON.stringify(reviews));
}

function loadReviewsFromStorage() {
  const stored = localStorage.getItem('royalgalkot_reviews');
  if (stored) {
    try {
      const arr = JSON.parse(stored);
      if (Array.isArray(arr) && arr.length > 0) {
        reviews.length = 0;
        arr.forEach(r => reviews.push(r));
      }
    } catch {}
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadReviewsFromStorage();
    renderReviews();

    // Review form submission
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.onsubmit = function(e) {
            e.preventDefault();
            const name = document.getElementById('reviewerName').value.trim();
            const rating = parseInt(document.getElementById('reviewerRating').value);
            const text = document.getElementById('reviewerComment').value.trim();
            const atmosphere = parseInt(document.getElementById('reviewerAtmosphere').value);
            const parking = parseInt(document.getElementById('reviewerParking').value);
            const food = parseInt(document.getElementById('reviewerFood').value);
            const items = parseInt(document.getElementById('reviewerItems').value);
            const service = parseInt(document.getElementById('reviewerService').value);
            if (name && rating && text && atmosphere && parking && food && items && service) {
                reviews.unshift({ name, rating, text, atmosphere, parking, food, items, service });
                saveReviewsToStorage();
                renderReviews();
                // Reset form and close modal
                reviewForm.reset();
                bootstrap.Modal.getInstance(document.getElementById('reviewModal')).hide();
            }
        };
    }
});

function initializeApp() {
    // Load products from localStorage or use initial data
    const savedProducts = localStorage.getItem('nealbites_products');
    products = savedProducts ? JSON.parse(savedProducts) : initialProducts;
    
    // Initialize components
    setupEventListeners();
    displayProducts();
    updateCurrentProducts();
    
    // Add fade-in animation to sections
    addScrollAnimations();
}

function setupEventListeners() {
    // Category filter buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterProducts(category);
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Admin panel
    const adminLink = document.getElementById('adminLink');
    adminLink.addEventListener('click', function(e) {
        e.preventDefault();
        const adminModal = new bootstrap.Modal(document.getElementById('adminModal'));
        adminModal.show();
    });

    // Add product form
    const addProductForm = document.getElementById('addProductForm');
    addProductForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addNewProduct();
    });
}

function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(product => product.category === currentCategory);

    productsGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-4 fade-in-up';
    
    const availabilityClass = product.available ? 'available' : 'unavailable';
    const availabilityText = product.available ? 'Available' : 'Out of Stock';
    
    col.innerHTML = `
        <div class="card product-card h-100" style="cursor:pointer;" onclick="showProductModal(${product.id})">
            <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
            <div class="card-body product-info">
                <h5 class="card-title product-title">${product.name}</h5>
                <span class="product-category category-${product.category}">${product.category}</span>
                <span class="availability-badge ${availabilityClass}">${availabilityText}</span>
                <p class="card-text product-description">${product.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();orderProduct(${product.id})" ${!product.available ? 'disabled' : ''}>
                        <i class="fas fa-shopping-cart me-1"></i>Order Now
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    document.getElementById('productModalLabel').textContent = product.name;
    document.getElementById('productModalImage').src = product.image;
    document.getElementById('productModalDescription').textContent = product.description;
    // Ingredients as list
    const ingredientsList = document.getElementById('productModalIngredients');
    ingredientsList.innerHTML = '';
    if (product.ingredients) {
        product.ingredients.split(',').forEach(ing => {
            const li = document.createElement('li');
            li.textContent = ing.trim();
            ingredientsList.appendChild(li);
        });
    }
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

function filterProducts(category) {
    currentCategory = category;
    displayProducts();
}

function addNewProduct() {
    const form = document.getElementById('addProductForm');
    const formData = new FormData(form);
    
    const newProduct = {
        id: Date.now(), // Simple ID generation
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        price: parseFloat(document.getElementById('productPrice').value),
        description: document.getElementById('productDescription').value,
        image: document.getElementById('productImage').value,
        available: document.getElementById('productAvailable').value === 'true',
        ingredients: document.getElementById('productIngredients').value // Assuming ingredients are added via a textarea
    };
    
    // Add to products array
    products.push(newProduct);
    
    // Save to localStorage
    localStorage.setItem('nealbites_products', JSON.stringify(products));
    
    // Update displays
    displayProducts();
    updateCurrentProducts();
    
    // Show success message
    showToast('Product added successfully!', 'success');
    
    // Reset form
    form.reset();
}

function updateCurrentProducts() {
    const currentProductsContainer = document.getElementById('currentProducts');
    currentProductsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        
        const availabilityClass = product.available ? 'available' : 'unavailable';
        const availabilityText = product.available ? 'Available' : 'Out of Stock';
        
        productItem.innerHTML = `
            <h6>${product.name}</h6>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
            <p><strong>Status:</strong> <span class="availability-badge ${availabilityClass}">${availabilityText}</span></p>
            <div class="product-actions">
                <button class="btn btn-warning btn-sm me-1" onclick="toggleAvailability(${product.id})">
                    <i class="fas fa-toggle-on"></i> Toggle
                </button>
                <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        
        currentProductsContainer.appendChild(productItem);
    });
}

function toggleAvailability(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        product.available = !product.available;
        localStorage.setItem('nealbites_products', JSON.stringify(products));
        displayProducts();
        updateCurrentProducts();
        showToast(`Product ${product.available ? 'made available' : 'marked as unavailable'}`, 'info');
    }
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        products = products.filter(p => p.id !== productId);
        localStorage.setItem('nealbites_products', JSON.stringify(products));
        displayProducts();
        updateCurrentProducts();
        showToast('Product deleted successfully!', 'success');
    }
}

function orderProduct(productId) {
    // Show order modal with contact info
    const modalHtml = `
      <div class="modal fade" id="orderContactModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Place Your Order</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body text-center">
              <p class="mb-3">To place your order, please contact us directly:</p>
              <p class="fs-5 mb-2"><a href="tel:9806510066" class="fw-bold text-decoration-none"><i class="fas fa-phone me-2"></i>9806510066</a></p>
              <p class="fs-5"><a href="mailto:info@royalgalkot.com" class="fw-bold text-decoration-none"><i class="fas fa-envelope me-2"></i>info@royalgalkot.com</a></p>
              <p class="text-muted mt-3">We look forward to serving you!</p>
            </div>
          </div>
        </div>
      </div>
    `;
    // Remove any existing modal
    const existing = document.getElementById('orderContactModal');
    if (existing) existing.remove();
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('orderContactModal'));
    modal.show();
}

function showToast(message, type = 'info') {
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast show`;
    toast.innerHTML = `
        <div class="toast-header">
            <strong class="me-auto">Royal Galkot</strong>
            <button type="button" class="btn-close" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
        <div class="toast-body">
            ${message}
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 5000);
}

function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(33, 37, 41, 1)';
    }
});

// Export functions for global access
window.orderProduct = orderProduct;
window.toggleAvailability = toggleAvailability;
window.deleteProduct = deleteProduct; 
window.showProductModal = showProductModal; 