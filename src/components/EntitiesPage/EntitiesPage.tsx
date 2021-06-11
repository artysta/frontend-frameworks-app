import { FC, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { Workspace } from "../../entities/Workspace";
import { FakeWorkspacesRepository } from "../../repositories/FakeWorkspacesRepository";
import { Repository } from "../../repositories/Repository";
import { Filters } from "../Filters/Filters";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { ITodoReducer } from "../../reducers/todoReducers";

const Wrapper = styled.div`
  width: 100%;
  margin: 20px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Header = styled.div`
  color: ${Colors.blue1};
  display: flex;
  justify-content: center;
  font-size: 22px;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 15px;
  margin-top: 20px;

  &.list {
    display: block;
  }
`;

const Card = styled.div`
  display: flex;
  box-shadow: 0px 1px 3px ${Colors.gray2};
  padding: 20px;
  border-radius: 5px;
  background-color: ${Colors.white};

  div {
    display: block;
  }
`;

const Title = styled.p`
  color: ${Colors.blue6};
  font-size: 20px;
`;

const CardDetails = styled.div`
  display: table-cell;
  position: relative;
  padding: 10px;
  width: 100%;
  color: ${Colors.gray1};
`;

const CardFooter = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

const Select = styled.div`
  padding: 10px 15px 10px 10px;
  border: 0px;
  border-radius: 3px;
  background-color: ${Colors.aqua1};
  color: ${Colors.blue3};
  display: flex;
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`;

const SelectBorder = styled(Select)`
  border: 2px solid ${Colors.blue6};
  background-color: ${Colors.white};
  border-radius: 3px;
`;

const SelectLeft = styled(Select)`
  margin: 0;
  background-color: ${Colors.blue4};
`;

const Icon = styled.img`
  width: 20px;
  margin: auto 10px;

  :hover {
    cursor: pointer;
  }
`;

const SmallIcon = styled.img`
  width: 10px;
  margin: auto 10px;
`;

const MosaicButton = styled.div`
  padding: 10px 15px 10px 10px;
  border: 0px;
  border-radius: 3px;
  background-color: ${Colors.blue4};
  color: ${Colors.blue3};
  display: flex;
  justify-content: center;
  margin-left: auto;
  transition: 0.1s;

  :hover {
    cursor: pointer;
    background-color: ${Colors.gray3};
    transition: 0.1s;
  }
`;

const ListButton = styled.div`
  padding: 10px 15px 10px 10px;
  border: 0px;
  border-radius: 3px;
  background-color: ${Colors.blue4};
  color: ${Colors.blue3};
  display: flex;
  justify-content: right;
  transition: 0.1s;

  :hover {
    cursor: pointer;
    background-color: ${Colors.gray4};
    transition: 0.1s;
  }
`;

const VerticalLine = styled.div`
  border-left: 1px solid ${Colors.gray2};
  height: 30px;
  margin: 0px 10px;
`;

const Search = styled.input`
  padding: 10px;
  border: 1px solid ${Colors.gray2};
  border-radius: 5px;
  margin-left: auto;
`;

function workspaces(): Workspace[] {
  let data: Repository<Workspace> = new FakeWorkspacesRepository();
  return data.getAll();
}

const FiltersContainer = styled.div`
  max-height: 0;
  transition: 0.1s;

  &.open {
    transition: 0.1s;
    max-height: 230px;
  }
`;

export const EntitiesPage: FC = () => {
  const todos = useSelector<IState, ITodoReducer>((state) => ({
    ...state.todos,
  }));

  const [filters, setFilters] = useState(false);
  const [list, setList] = useState(false);

  const showFilters = () => {
    setFilters(function changeValue(value) {
      return !value;
    });
  };

  const useList = () => {
    setList(function changeValue() {
      return true;
    });
  };

  const useMosaic = () => {
    setList(function changeValue() {
      return false;
    });
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>Entities</Header>
        <Icon src="../media/icons/settings2.svg"></Icon>
        <MosaicButton onClick={useMosaic}>
          <Icon src="../media/icons/mosaic.svg"></Icon>
          Mosaic
        </MosaicButton>
        <ListButton>
          <Icon onClick={useList} src="../media/icons/list.svg"></Icon>
        </ListButton>
      </HeaderWrapper>
      <HeaderWrapper>
        <SelectLeft>
          <Icon src="../media/icons/signal.svg"></Icon>
          All
          <SmallIcon src="../media/icons/arrow-down.svg"></SmallIcon>
        </SelectLeft>
        <Icon src="../media/icons/more.svg"></Icon>
        <VerticalLine />
        <Icon src="../media/icons/sort.svg"></Icon>
        <span>Sort</span>
        <Icon onClick={showFilters} src="../media/icons/filter.svg"></Icon>
        <span>Filters</span>
        <VerticalLine />
        <Icon src="../media/icons/expand.svg"></Icon>
        <VerticalLine />
        <Icon src="../media/icons/share.svg"></Icon>
        <span>Share</span>
        <Search placeholder="Search..."></Search>
        <VerticalLine />
        <SelectBorder>
          <Icon src="../media/icons/signal.svg"></Icon>
          Followed
          <SmallIcon src="../media/icons/arrow-down.svg"></SmallIcon>
        </SelectBorder>
      </HeaderWrapper>
      <FiltersContainer className={filters ? "open" : ""}>
        {filters && <Filters />}
      </FiltersContainer>
      <CardsWrapper className={list ? "list" : ""}>
        {todos.todosList.slice(0, 30).map((todo, index) => (
          <Card>
            <Image
              src={"/media/photos/publication-photo-" + (index % 4) + ".jpg"}
            />
            <CardDetails>
              <Title>{todo.title.slice(0, 40)}</Title>
              <CardFooter>
                <span>Caracas 1050, Distrito Capital, Venezuela</span>
              </CardFooter>
            </CardDetails>
          </Card>
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};

export default EntitiesPage;
