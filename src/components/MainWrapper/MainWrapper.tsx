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
import { useDispatch } from "react-redux";
import { getAlbums } from "../../actions/albumActions";
import { getComments } from "../../actions/commentActions";
import { getPhotos } from "../../actions/photoActions";
import { getPosts } from "../../actions/postActions";
import { getTodos } from "../../actions/todoActions";
import { getUsers } from "../../actions/userActions";

const ContentWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 70%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

type GetAlbums = ReturnType<typeof getAlbums>;
type GetComments = ReturnType<typeof getComments>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetPosts = ReturnType<typeof getPosts>;
type GetTodos = ReturnType<typeof getTodos>;
type GetUsers = ReturnType<typeof getUsers>;

export const MainWrapper: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetAlbums>(getAlbums());
    dispatch<GetComments>(getComments());
    dispatch<GetPhotos>(getPhotos());
    dispatch<GetPosts>(getPosts());
    dispatch<GetTodos>(getTodos());
    dispatch<GetUsers>(getUsers());
  }, []);

  return (
    <Router>
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
    </Router>
  );
};

export default MainWrapper;
