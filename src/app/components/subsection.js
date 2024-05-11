import styled from "styled-components";
import Badges from "./badges";
import MediaItem from "./mediaItem";
import HR from "./hr";
import ButtonGroup from "./buttonGroup";

const StyledSubsection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Heading = styled.div`
  h4 {
    line-height: 1;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.primaryTextColor}7f;
  }
`;

export default function Subsection({ data }) {
  return (
    <>
      {data.type === "default" ? (
        <StyledSubsection>
          <Heading>
            {data.heading && (
              <h3 dangerouslySetInnerHTML={{ __html: data.heading }}></h3>
            )}
            {data.meta && <h4>{data.meta}</h4>}
          </Heading>
          {data.content && (
            <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
          )}
          {data.badges && <Badges data={data.badges} />}
          {data.buttons && (
            <ButtonGroup groupName={data.name} buttons={data.buttons} />
          )}
          {data.subsections &&
            Array.isArray(data.subsections) &&
            data.subsections.map((subsection, idx) => (
              <Subsection
                key={`${data.name}_subsection_${idx}`}
                data={subsection}
              ></Subsection>
            ))}
        </StyledSubsection>
      ) : data.type === "media-item" ? (
        <MediaItem data={data} />
      ) : data.type === "hr" ? (
        <HR />
      ) : (
        <></>
      )}
    </>
  );
}
