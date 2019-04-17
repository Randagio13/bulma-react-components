export default interface Props {
  componentType: 'a' | 'button' | 'reset' | 'submit'
  colors?: 'white' | 'light' | 'dark' | 'black' | 'text' |
           'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger'
  className?: string
  children?: React.ReactChild
  theme?: {
    primary: {
      main: {
        background: string,
        color: string
      },
      hover: {
        background: string,
        color: string
      }
    },
    link: {
      main: {
        background: string,
        color: string
      },
      hover: {
        background: string,
        color: string
      }
    },
    info: {
      main: {
        background: string,
        color: string
      },
      hover: {
        background: string,
        color: string
      }
    },
    success: {
      main: {
        background: string,
        color: string
      },
      hover: {
        background: string,
        color: string
      }
    },
    warning: {
      main: {
        background: string,
        color: string
      },
      hover: {
        background: string,
        color: string
      }
    },
    danger: {
      main: {
        background: string,
        color: string
      },
      hover: {
        background: string,
        color: string
      }
    }
  }
  size: 'small' | 'normal' | 'medium' | 'large'
}
