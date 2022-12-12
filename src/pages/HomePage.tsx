import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';



const HomePage :FC = () => {
    const navigate = useNavigate();
    const handelClick = ()=>{

    }
    return (
        <div>
            <MainLayout onClick={handelClick}>

            <p>This is the home page.</p>
            <p>
                <Link to="/about">Go to the About Page!</Link>
            </p>
            </MainLayout>
            {/* <button onClick={() => navigate('/layout/55')}>Go to layout, with a number</button> */}
        </div>
    );
};

export default HomePage;