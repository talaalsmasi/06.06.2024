
    document.addEventListener('DOMContentLoaded', function() {
        const textElement = document.getElementById('text');
        const fontFamilySelect = document.getElementById('font_family');
        const fontSizeSelect = document.getElementById('font_size');
        const italicCheckbox = document.getElementById('font_italic');
        const boldCheckbox = document.getElementById('font_bold');
        const underlineCheckbox = document.getElementById('font_underline');

        function updateTextStyles() {
            textElement.style.fontFamily = fontFamilySelect.value;
            textElement.style.fontSize = fontSizeSelect.value;
            textElement.style.fontStyle = italicCheckbox.checked ? 'italic' : 'normal';
            textElement.style.fontWeight = boldCheckbox.checked ? 'bold' : 'normal';
            textElement.style.textDecoration = underlineCheckbox.checked ? 'underline' : 'none';
        }

        fontFamilySelect.addEventListener('change', updateTextStyles);
        fontSizeSelect.addEventListener('change', updateTextStyles);
        italicCheckbox.addEventListener('change', updateTextStyles);
        boldCheckbox.addEventListener('change', updateTextStyles);
        underlineCheckbox.addEventListener('change', updateTextStyles);
    });
