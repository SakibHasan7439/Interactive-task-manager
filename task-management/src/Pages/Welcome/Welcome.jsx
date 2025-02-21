import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero.jpg';
import Button from '../../Components/Button/Button';

const Welcome = () => {
    return (
        <div className='max-w-7xl w-full mx-auto '>
            <img className='h-[400px] w-full mx-auto object-contain' src={heroImage} alt="" />
            <div className='text-center'>
                <h2 className="text-3xl mb-4 md:text-5xl">Want to manage your task??</h2>
                <p className='text-sm font-semibold italic mb-4'>***You&apos;ll need to register/login first to use our features***</p>
                <Link to={'register'}>
                    <Button
                        text={'Register'}
                        className={'mr-4'}
                    ></Button>
                </Link>
                <Link to={'login'}>
                    <Button
                        text={'Login'}
                    ></Button>
                </Link>
            </div>

        </div>
    );
};

export default Welcome;