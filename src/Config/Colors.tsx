declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      white: string;
      black: string;
      bgBlack: string;
      lightGrey: string;
      midGrey: string;
      darkGrey: string;
      darkBlue: string;
      purple: string;
      darkGreen: string;
      midGreen: string;
      lightGreen: string;
    }
    interface Theme {
      myOwnProperty: boolean;
    }
  }
}
export const Colors = {
  white: '#E7F3DB',
  black: '#080A05',
  bgBlack: '#040608',
  lightGrey: '#8E9B73',
  midGrey: '4A5648',
  darkGrey: '#3C3D41',
  darkBlue: '#282B92',
  purple: '#856A6B',
  darkGreen: '#005B00',
  midGreen: '#0B920B',
  lightGreen: '#5AAD5A',
};

// export const DarkColors = {
//   primary: '',
//   accent: '',
//   background: '',
//   surface: '',
//   text: '',
//   disabled: '',
//   placeholder: '',
//   backdrop: '',
//   onSurface: '',
//   notification: '',
// }

// primary: '',
// accent: '',
// background: '',
// surface: '',
// text: '',
// disabled: '',
// placeholder: '',
// backdrop: '',
// onSurface: '',
// notification: '',
// primary - primary color for your app, usually your brand color.
// accent - secondary color for your app which complements the primary color.
// background - background color for pages, such as lists.
// surface - background color for elements containing content, such as cards.
// text - text color for content.
// disabled - color for disabled elements.
// placeholder - color for placeholder text, such as input placeholder.
// backdrop - color for backdrops of various components such as modals.
// onSurface - background color for snackbars
// notification - background color for badges
