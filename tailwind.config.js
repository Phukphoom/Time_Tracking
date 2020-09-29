module.exports = {
    future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: {
		mode: 'all',
		content: ['./src/**/*.js'],
	},
    theme: {
        extend: {},
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
        backgroundOpacity: ['responsive', 'hover', 'focus', 'active'],
        borderColor: ['responsive', 'hover', 'focus', 'active'],
        borderOpacity: ['responsive', 'hover', 'focus', 'active'],
        boxShadow: ['responsive', 'hover', 'focus', 'active'],
        fontWeight: ['responsive', 'hover', 'focus', 'active'],
        opacity: ['responsive', 'hover', 'focus', 'active'],
        placeholderColor: ['responsive', 'focus', 'active'],
        placeholderOpacity: ['responsive', 'focus', 'active'],
        textColor: ['responsive', 'hover', 'focus', 'active'],
        textOpacity: ['responsive', 'hover', 'focus', 'active'],
        textDecoration: ['responsive', 'hover', 'focus', 'active'],
        scale: ['responsive', 'hover', 'focus', 'active'],
        rotate: ['responsive', 'hover', 'focus', 'active'],
        translate: ['responsive', 'hover', 'focus', 'active'],
    },
    plugins: [],
};
