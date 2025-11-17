
class CheckboxComponent {
    constructor() {
        this.dropdownContainer = document.querySelector('.dropdown-container');
        this.dropdownTrigger = document.querySelector('.dropdown-trigger');
        this.dropdownMenu = document.querySelector('.dropdown-menu');
        this.dropdownItems = document.querySelectorAll('.dropdown-item');
        this.dropdownDoneButton = document.querySelector('.dropdown-done');

        this.init();
    }

  
    init() {
        this.setupDropdownToggle();
        this.setupDropdownItems();
        this.setupDropdownDone();
        this.setupOutsideClick();
        this.setupKeyboardNavigation();
    }

    setupDropdownToggle() {
        this.dropdownTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleDropdown();
        });
    }

    toggleDropdown() {
        const isActive = this.dropdownContainer.classList.contains('active');

        if (isActive) {
            this.closeDropdown();
        } else {
            this.openDropdown();
        }
    }

    openDropdown() {
        this.dropdownContainer.classList.add('active');
        this.dropdownTrigger.setAttribute('aria-expanded', 'true');
        setTimeout(() => {
            const firstItem = this.dropdownItems[0];
            if (firstItem) {
                firstItem.focus();
            }
        }, 100);
    }

    closeDropdown() {
        this.dropdownContainer.classList.remove('active');
        this.dropdownTrigger.setAttribute('aria-expanded', 'false');
    }

    setupDropdownItems() {
        this.dropdownItems.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleItemSelection(item);
            });
            item.setAttribute('tabindex', '0');
        });
    }

    toggleItemSelection(item) {
        item.classList.toggle('selected');

        const isSelected = item.classList.contains('selected');
        item.setAttribute('aria-selected', isSelected);

        this.addSelectionFeedback(item);
    }

    addSelectionFeedback(item) {
        const checkbox = item.querySelector('.dropdown-item-checkbox');
        checkbox.style.transform = 'scale(1.1)';

        setTimeout(() => {
            checkbox.style.transform = 'scale(1)';
        }, 150);
    }
    setupDropdownDone() {
        this.dropdownDoneButton.addEventListener('click', (e) => {
            e.stopPropagation();
            this.handleDoneAction();
        });
    }

    handleDoneAction() {
        const selectedItems = Array.from(this.dropdownItems)
            .filter(item => item.classList.contains('selected'))
            .map(item => item.querySelector('.dropdown-item-label').textContent);
        console.log('Selected items:', selectedItems);
        this.closeDropdown();
        this.showCompletionFeedback(selectedItems);
    }

    
    showCompletionFeedback(selectedItems) {
        if (selectedItems.length > 0) {
            console.log(`✓ ${selectedItems.length} page(s) selected`);
        }
    }

  
    setupOutsideClick() {
        document.addEventListener('click', (e) => {
            if (!this.dropdownContainer.contains(e.target)) {
                this.closeDropdown();
            }
        });
    }

   
    setupKeyboardNavigation() {

        this.dropdownItems.forEach((item, index) => {
            item.addEventListener('keydown', (e) => {
                switch(e.key) {
                    case 'Enter':
                    case ' ':
                        e.preventDefault();
                        this.toggleItemSelection(item);
                        break;
                    case 'ArrowDown':
                        e.preventDefault();
                        this.focusNextItem(index);
                        break;
                    case 'ArrowUp':
                        e.preventDefault();
                        this.focusPreviousItem(index);
                        break;
                    case 'Escape':
                        e.preventDefault();
                        this.closeDropdown();
                        this.dropdownTrigger.focus();
                        break;
                }
            });
        });

 
        this.dropdownTrigger.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeDropdown();
            }
        });


        this.dropdownDoneButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.handleDoneAction();
            }
        });
    }

    focusNextItem(currentIndex) {
        const nextIndex = (currentIndex + 1) % this.dropdownItems.length;
        this.dropdownItems[nextIndex].focus();
    }

    focusPreviousItem(currentIndex) {
        const prevIndex = currentIndex === 0
            ? this.dropdownItems.length - 1
            : currentIndex - 1;
        this.dropdownItems[prevIndex].focus();
    }
}

class CheckboxList {
    constructor() {
        this.checkboxes = document.querySelectorAll('.custom-checkbox');
        this.init();
    }

    init() {
        this.checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', (e) => {
                this.handleCheckboxChange(e.target);
            });
        });
    }

    handleCheckboxChange(checkbox) {
        const isChecked = checkbox.checked;
        const label = checkbox.nextElementSibling;

        // Add visual feedback
        if (label) {
            const checkboxVisual = label.querySelector('.checkbox-visual');
            if (checkboxVisual) {
                checkboxVisual.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    checkboxVisual.style.transform = 'scale(1)';
                }, 150);
            }
        }

        console.log(`Checkbox ${checkbox.id} is now ${isChecked ? 'checked' : 'unchecked'}`);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    new CheckboxComponent();
    new CheckboxList();

    console.log('✓ Checkbox component initialized');
});
