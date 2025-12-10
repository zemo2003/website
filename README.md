# Yalla! Durham Food Truck Website

## Overview
This is the individual food truck location website for Yalla! Durham. It's designed to be specific to the Durham location while remaining generic enough to serve as a template for future locations.

## Features
- **Responsive Design**: Mobile-first, professional layout matching the franchise website style
- **Menu Display**: Complete menu with high-quality images and pricing
- **DoorDash Integration**: Direct ordering links to DoorDash for pickup orders
- **Location Information**: Hours, location details, and contact information
- **About Section**: Kosher certification and food quality information
- **Contact Form**: Customer inquiry form

## File Structure
```
primary/
├── index.html              # Main website file
├── assets/
│   ├── css/
│   │   └── styles.css      # Stylesheet (based on franchise template)
│   └── js/
│       └── main.js          # JavaScript for menu and DoorDash integration
└── README.md               # This file
```

## Menu Items
The menu includes:
- **Main Entrees**: Falafel, Shawarma, Schnitzel (available as Pita, Bowl, or Plate)
- **Special**: Roasted Veggies Hummus Bowl
- **Sides**: French Fries (Small/Large), Salads/Pickles, Hummus
- **Drinks**: Limonana, Soda, Water Bottle
- **Combo**: Add fries + drink for $6

## DoorDash Integration
- Store ID: 36399175
- Store URL: https://www.doordash.com/store/yalla!-durham-durham-36399175/81499175/
- All "Order Now" buttons link directly to DoorDash
- Menu items have individual order buttons that open DoorDash

## Customization for New Locations
To adapt this website for a new location:

1. **Update Location-Specific Content**:
   - Change "Durham" to new city/location name
   - Update address and location details
   - Modify hours if different
   - Update contact information

2. **Update DoorDash Integration**:
   - Replace DoorDash store ID and URL in `index.html` and `main.js`
   - Update the `orderOnDoorDash()` function with new store URL

3. **Update Images**:
   - Replace menu item images if location-specific photos are available
   - Update hero image and gallery images

4. **Update Contact Information**:
   - Change email addresses (info@yalladurham.com → info@yalla[location].com)
   - Update phone number
   - Modify location-specific details

## Design Notes
- Uses the same color scheme and design language as the franchise website
- Maintains brand consistency with Yalla! branding
- Responsive design works on all devices
- Professional, modern aesthetic

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements
- Google Maps integration for location map
- Online ordering form (alternative to DoorDash)
- Social media feed integration
- Customer reviews/testimonials section
- Newsletter signup
- Event calendar for special locations/times


