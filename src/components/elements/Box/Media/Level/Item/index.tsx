import styled from 'styled-components'
import Level from '../index'

const LevelItem = styled.a`
${Level} :not(:last-child) {
  margin-bottom: 0;
  margin-right: 0.75rem;
}

${Level}  :not(.is-narrow) {
  flex-grow: 1;
}

@media screen and (min-width: 769px), print {
  ${Level}  > :not(.is-narrow) {
    flex-grow: 1;
  }
}

  align-items: center;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;

// .level-item .title,
// .level-item .subtitle {
//   margin-bottom: 0;
// }

@media screen and (max-width: 768px) {
  :not(:last-child) {
    margin-bottom: 0.75rem;
  }
}

// .level-left .level-item.is-flexible,
// .level-right .level-item.is-flexible {
//   flex-grow: 1;
// }

@media screen and (min-width: 769px), print {
  ${Level} :not(:last-child),
  ${Level} :not(:last-child) {
    margin-right: 0.75rem;
  }
}
`

export default LevelItem
