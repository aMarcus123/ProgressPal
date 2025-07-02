export const themes = {
    blues: {
        name: 'blues',
        primary: '#1f3864',
        background: '#2f5288',
        text: '#e6e6e6',
        fontSizes: {
            heading: 45,
            large: 35,
            medium: 20,
            small: 15,
        },


    },

    cappuccino: {
        name: 'cappuccino',
        primary: '#4b3832',
        background: '#be9b7b',
        text: '#fff4e6',
        fontSizes: {
            heading: 45,
            large: 35,
            medium: 20,
            small: 15,
        },

    },

    purple: {
        name: 'purple',
        primary: '#d896ff',
        background: '#efbbff',
        text: '#fffeb3',
        fontSizes: {
            heading: 45,
            large: 35,
            medium: 20,
            small: 15,
        },
    }

}

export type ThemeName = keyof typeof themes;
export type Theme = typeof themes.cappuccino;