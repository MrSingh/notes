class SearchFilter {
    constructor() {
        this.searchInput = document.getElementById('searchInput');
        this.searchClear = document.getElementById('searchClear');
        this.resultsInfo = document.getElementById('resultsInfo'); // Make sure this element exists in your HTML
        this.noResults = document.getElementById('noResults');     // Make sure this element exists in your HTML
        this.noteItems = document.querySelectorAll('.note-item');
        this.totalItems = this.noteItems.length;

        // Create search index for faster searching
        this.searchIndex = this.createSearchIndex();

        // Debounce search to improve performance
        this.searchTimeout = null;

        this.init();
    }

    init() {
        this.searchInput.addEventListener('input', this.handleSearch.bind(this));
        this.searchClear.addEventListener('click', this.clearSearch.bind(this));

        // Ensure resultsInfo and noResults elements exist before trying to use them
        if (!this.resultsInfo || !this.noResults) {
            console.warn("SearchFilter: 'resultsInfo' or 'noResults' elements not found. Please add them to your HTML.");
            // Create dummy elements to prevent errors if they are truly missing
            if (!this.resultsInfo) {
                this.resultsInfo = document.createElement('div');
                this.resultsInfo.id = 'resultsInfo';
            }
            if (!this.noResults) {
                this.noResults = document.createElement('div');
                this.noResults.id = 'noResults';
                this.noResults.textContent = 'No results found.';
                this.noResults.classList.add('hidden');
            }
        }

        // Initial results info
        this.updateResultsInfo(this.totalItems);
    }

    createSearchIndex() {
        return Array.from(this.noteItems).map((item, index) => {
            const title = item.querySelector('h3')?.textContent.toLowerCase() || '';
            const description = item.querySelector('p')?.textContent.toLowerCase() || '';
            const tags = item.getAttribute('data-tags')?.toLowerCase() || '';
            const searchContent = item.getAttribute('data-search-content')?.toLowerCase() || ''; // Not present in your HTML
            const date = item.querySelector('.item-date')?.textContent.toLowerCase() || '';

            // Store original HTML for reliable highlight removal
            const originalHTML = item.innerHTML;

            return {
                element: item,
                index: index,
                originalHTML: originalHTML, // Store original HTML
                searchText: `${title} ${description} ${tags} ${searchContent} ${date}`.replace(/\s+/g, ' ').trim()
            };
        });
    }

    handleSearch(e) {
        const query = e.target.value.trim();

        // Show/hide clear button
        this.searchClear.classList.toggle('visible', query.length > 0);

        // Debounce search
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            this.performSearch(query);
        }, 150);
    }

    performSearch(query) {
        // Always remove previous highlights before a new search
        this.removeAllHighlights();

        if (!query) {
            this.showAllItems();
            return;
        }

        const searchTerms = query.toLowerCase().split(/\s+/).filter(term => term.length > 0);
        const results = this.searchIndex.filter(item => {
            return searchTerms.every(term => item.searchText.includes(term));
        });

        this.displayResults(results, query);
    }

    displayResults(results, query) {
        const visibleCount = results.length;

        // Hide all items and remove highlights
        this.searchIndex.forEach(itemData => {
            itemData.element.classList.add('hidden');
            // No need to remove highlight here, performSearch already calls removeAllHighlights
        });

        // Show matching items and apply highlights
        results.forEach(result => {
            result.element.classList.remove('hidden');
            this.highlightText(result.element, query); // Re-enable highlighting
        });

        // Update UI
        this.updateResultsInfo(visibleCount);
        this.noResults.classList.toggle('hidden', visibleCount > 0);
    }

    showAllItems() {
        this.searchIndex.forEach(itemData => {
            itemData.element.classList.remove('hidden');
            // Restore original HTML to remove highlights
            itemData.element.innerHTML = itemData.originalHTML;
        });

        this.updateResultsInfo(this.totalItems);
        this.noResults.classList.add('hidden');
    }

    highlightText(element, query) {
        if (!query) return;

        const searchTerms = query.toLowerCase().split(/\s+/).filter(term => term.length > 0);
        const textElements = element.querySelectorAll('h3, p');

        textElements.forEach(el => {
            let originalContent = this.searchIndex.find(item => item.element === element)?.originalHTML;
            // Restore original content for the specific h3/p element before highlighting
            // This is crucial for correct re-highlighting without nested spans
            if (originalContent) {
                // Find the specific h3 or p's original text within the stored originalHTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = originalContent;
                const originalEl = tempDiv.querySelector(el.tagName.toLowerCase() + (el.className ? '.' + el.className.split(' ').join('.') : ''));
                if (originalEl) {
                    el.textContent = originalEl.textContent; // Restore only text content to avoid re-parsing HTML
                }
            }


            let currentText = el.textContent;
            let highlightedText = currentText;

            searchTerms.forEach(term => {
                const regex = new RegExp(`(${this.escapeRegExp(term)})`, 'gi');
                highlightedText = highlightedText.replace(regex, '<span class="highlight">$1</span>');
            });

            if (highlightedText !== currentText) {
                el.innerHTML = highlightedText;
            }
        });
    }

    // New method to remove all highlights by restoring original HTML
    removeAllHighlights() {
        this.searchIndex.forEach(itemData => {
            itemData.element.innerHTML = itemData.originalHTML;
        });
    }

    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    clearSearch() {
        this.searchInput.value = '';
        this.searchClear.classList.remove('visible');
        this.showAllItems();
        this.searchInput.focus();
    }

    updateResultsInfo(count) {
        if (count === this.totalItems) {
            this.resultsInfo.textContent = `Showing all ${count} posts`;
        } else {
            this.resultsInfo.textContent = `Showing ${count} of ${this.totalItems} posts`;
        }
    }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SearchFilter();
});