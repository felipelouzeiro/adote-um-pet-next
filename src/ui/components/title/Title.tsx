import { SubTitle, TitleStyled } from './Title.style'

interface ITitleProps {
  title: string
  subtitle?: string | JSX.Element
}

export const Title = (props: ITitleProps) => {
  return (
    <>
      <TitleStyled>{props.title}</TitleStyled>
      <SubTitle>{props.subtitle}</SubTitle>
    </>
  )
}
