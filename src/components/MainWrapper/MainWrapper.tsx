import { FC, useEffect } from "react";
import styled from "styled-components";
import TopNav from "../TopNav/TopNav";
import LeftMenu from "../LeftMenu/LeftMenu";
import MainPage from "../MainPage/MainPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import EntitiesPage from "../EntitiesPage/EntitiesPage";
import WorkspacePage from "../WorkspacePage/WorkspacePage";
import TestPage from "../TestPage/TestPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUserReducer } from "../../reducers/userReducers";
import { getSomeData, getUsers } from "../../actions/userActions";
import { ISingleUser } from "../../entities/ISingleUser";

const Wrapper = styled.div`
  display: block;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

type GetUsers = ReturnType<typeof getUsers>;

export const MainWrapper: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
  }, []);

  return (
    <Router>
      <Wrapper>
        <TopNav />
        <ContentWrapper>
          <LeftMenu />
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/profile" exact>
              <ProfilePage />
            </Route>
            <Route path="/entities" exact>
              <EntitiesPage />
            </Route>
            <Route path="/workspace" exact>
              <WorkspacePage />
            </Route>
            <Route path="/test" exact>
              <TestPage />
            </Route>
          </Switch>
        </ContentWrapper>
      </Wrapper>
    </Router>
  );
};

export default MainWrapper;
