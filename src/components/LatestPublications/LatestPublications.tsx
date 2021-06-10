import { FC } from "react";
import styled from "styled-components";
import { Publication } from "../../entities/Publication";
import { FakePublicaitonsRepository } from "../../repositories/FakePublicationsRepository";
import { Repository } from "../../repositories/Repository";
import { Colors } from "../../styledHelpers/Colors";

const LatestPublicationsWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 1px 3px ${Colors.gray2};
  margin: 20px 0px;
  background-color: ${Colors.white};
`;

const LatestPublicationFeatured = styled.div`
  position: relative;
  background-image: url("./placeholder350.png");
  background-size: auto;
  background-repeat: no-repeat;
  background-size: 430px;
  width: 430px;
  height: 430px;
`;

const LatestPublicationFeaturedFooter = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
`;

const LatestPublicationsRest = styled.div`
  margin: 15px 0 15px 15px;
  width: 50%;
`;

const PublicationCard = styled.div`
  display: flex;
  margin: 15px 0px;

  div {
    display: block;
  }
`;

const Title = styled.p`
  color: ${Colors.blue3};
  font-size: 20px;
`;

const CardDetails = styled.div`
  display: table-cell;
  position: relative;
  padding: 10px;
  width: 100%;
`;

const CardFooter = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Icon = styled.img`
  width: 15px;
  vertical-align: middle;
  margin: 0 5px;
`;

function publications(): Publication[] {
  let data: Repository<Publication> = new FakePublicaitonsRepository();
  return data.getAll();
}

export const LatestPublications: FC = () => {
  return (
    <LatestPublicationsWrapper>
      <LatestPublicationFeatured>
        <LatestPublicationFeaturedFooter>
          {
            <div>
              <Title>{publications()[0].title}</Title>
              {publications()[0].date}
              <Icon src="./media/icons/people.svg" />
              {publications()[0].userName}
            </div>
          }
        </LatestPublicationFeaturedFooter>
      </LatestPublicationFeatured>
      <LatestPublicationsRest>
        <Title>Latest Publications</Title>
        {publications().map((p, i) => (
          <PublicationCard>
            <Image src="./placeholder350.png" />
            <CardDetails>
              <Title>{p.title}</Title>
              <CardFooter>
                <p>
                  <Icon src="./media/icons/entities.png" />
                  {p.date} &bull; {p.userName}
                </p>
              </CardFooter>
            </CardDetails>
          </PublicationCard>
        ))}
        <Title>See more publications</Title>
      </LatestPublicationsRest>
    </LatestPublicationsWrapper>
  );
};

export default LatestPublications;
