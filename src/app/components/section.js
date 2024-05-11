import styled from "styled-components";
import Subsection from "./subsection";
import convert from "color-convert";
import ButtonGroup from "./buttonGroup";

const hexToHSLString = (hex) =>
  convert.hex
    .hsl(hex)
    .map((value, index) =>
      index === 0 ? `hsl(${value}` : index === 2 ? `${value}%)` : `${value}%`
    )
    .join(",");

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 18vh 8rem;
  min-height: 100vh;
  width: 100%;
  background: ${(props) =>
    props?.$index === undefined
      ? "transparent"
      : props.$home
      ? props.theme.isDarkMode
        ? "black"
        : "white"
      : props.$index % 2 == 0
      ? props.theme.secondaryBackgroundColor
      : props.theme.primaryBackgroundColor};
  background-image: ${(props) =>
    props.$home
      ? `radial-gradient(
      at 1% 2%,
      ${hexToHSLString(props.theme.accentColor)} 0px,
      transparent 50%
    ),
    radial-gradient(at 99% 98%, ${hexToHSLString(
      props.theme.accentSecondaryColor
    )} 0px, transparent 50%)`
      : ""};
  background-size: cover;
  transition: all 0.5s;
  ${(props) =>
    props.$home
      ? `
        display: grid;
        place-items: center;
      `
      : ""}
  @media screen and (max-width: 768px) {
    padding: 18vh 1.5rem;
    background-size: 150% 150%;
    background-position: 50% 50%;
  }
`;

const StyledHeading = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 10rem 3rem;
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.secondaryTextColor};
  h1 {
    line-height: 3rem;
    font-size: ${(props) => (props.$home ? "4rem" : "2rem")};
  }
  p {
    font-size: ${(props) => (props.$home ? "2rem" : "1rem")};
  }
  @media screen and (max-width: 768px) {
    padding: 1rem;
    h1 {
      font-size: ${(props) => (props.$home ? "2.5rem" : "2rem")};
    }
    p {
      font-size: ${(props) => (props.$home ? "1.5rem" : "1rem")};
    }
  }
`;

const SubsectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
  gap: 3rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export default function Section({ data, $index }) {
  return (
    <section id={data.name}>
      <SectionWrapper $home={data.type === "home"} $index={$index}>
        <StyledHeading $home={data.type === "home"}>
          {data.heading && (
            <h1 dangerouslySetInnerHTML={{ __html: data.heading }}></h1>
          )}
          {data.description && (
            <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
          )}
        </StyledHeading>
        {data.subsections && (
          <SubsectionContainer $columns={data.columns ? data.columns : 1}>
            {data.subsections.map((subsection, idx) => (
              <Subsection
                key={`${data.name}_subsection_${idx}`}
                data={subsection}
              ></Subsection>
            ))}
          </SubsectionContainer>
        )}
        {data.buttons && (
          <ButtonGroup groupName={data.name} buttons={data.buttons} />
        )}
      </SectionWrapper>
    </section>
  );
}
