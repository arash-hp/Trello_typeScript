import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProjectContent from "../components/ProjectContent";
import MainLayout from "../layouts/MainLayout";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const handelClick = () => {};
  return (
    <div>
      <MainLayout onClick={handelClick}>
        <ProjectContent />
      </MainLayout>
      {/* <button onClick={() => navigate('/layout/55')}>Go to layout, with a number</button> */}
    </div>
  );
};

export default HomePage;
