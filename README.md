# Ellty Frontend Test Assignment

A pixel-perfect implementation of a checkbox component with multiple states and interactive dropdown functionality.

## 🎯 Features

- **Three Interactive Sections:**
  - Done button list (left panel)
  - Checkbox list with various states (middle panel)
  - Dropdown menu with page selection (right panel)

- **Full Interactivity:**
  - Clickable checkboxes with visual feedback
  - Dropdown menu with multi-select functionality
  - Smooth animations and transitions
  - Keyboard navigation support (Arrow keys, Enter, Space, Escape)

- **Accessibility:**
  - ARIA attributes for screen readers
  - Keyboard navigation
  - Focus management
  - Reduced motion support

- **Responsive Design:**
  - Mobile-friendly layout
  - Adapts to different screen sizes

## 🚀 Quick Start

1. **Clone or download this repository**

2. **Open the project:**
   - Simply open `index.html` in your browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js (http-server)
     npx http-server

     # Using VS Code Live Server extension
     Right-click on index.html → Open with Live Server
     ```

3. **View the component:**
   - Navigate to `http://localhost:8000` (or the appropriate port)

## 📁 Project Structure

```
first_assigment/
├── index.html          # Main HTML structure
├── styles.css          # All styling and layout
├── script.js           # Interactive functionality
└── README.md           # Documentation
```

## 🎨 Design Implementation

The component accurately replicates the Figma design with:

- **Color Palette:**
  - Primary Yellow: #F4C430
  - Primary Blue: #4A90E2
  - Gray tones for borders and backgrounds

- **Typography:**
  - System fonts for native look and feel
  - 15px base font size
  - Proper font weights and line heights

- **Spacing & Layout:**
  - Consistent spacing using CSS custom properties
  - Clean borders and border radius
  - Proper shadows for depth

## 💻 Code Quality

### HTML
- Semantic markup
- Proper ARIA attributes
- Accessible form controls

### CSS
- CSS custom properties (variables) for maintainability
- BEM-inspired naming convention
- Responsive design with media queries
- Organized with clear sections and comments

### JavaScript
- Object-oriented approach with classes
- Clean, modular code structure
- Comprehensive JSDoc comments
- Event delegation and proper event handling
- Keyboard navigation support

## 🧪 Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎯 Interactive Features

1. **Checkboxes (Middle Panel):**
   - Click to toggle checked/unchecked states
   - Visual feedback on interaction
   - Maintains different visual styles (blue fill vs. gray checkmark)

2. **Dropdown Menu (Right Panel):**
   - Click trigger to open/close
   - Select multiple pages
   - Click "Done" to confirm selection
   - Click outside to close
   - Keyboard navigation with Arrow keys, Enter, Space, Escape

3. **Done Buttons:**
   - Hover effects
   - Click animations
   - Consistent styling across all instances

## 🔧 Customization

All design tokens are defined as CSS custom properties in `styles.css`:

```css
:root {
    --primary-yellow: #F4C430;
    --primary-blue: #4A90E2;
    --spacing-lg: 16px;
    /* ... and more */
}
```

## 📝 Notes

- The component is built with vanilla HTML, CSS, and JavaScript
- No frameworks or libraries required
- Clean, maintainable code structure
- Professional code organization and comments
- Optimized for performance

## 👤 Author

Created for Ellty Frontend Assessment

## 📄 License

This project is created for assessment purposes.
