import React  from "react";




import PostForm from './components/PostForm/PostForm';
import classes from './Home.module.css';
import bg2 from '../../../assets/imgs/bg2.jpg';

const Home = () => {

    return (
        <div className={[classes.Home, "vertical-layout"].join(' ')}>
            <header className={classes.HeaderWrapper} >
                <img src={bg2} alt="" />
                <section className={classes.PostFormWrapper}>
                    <PostForm  />
                    hello
                </section>
            </header>

            <main className={classes.PostsListWrapper}>
            </main>
        </div>
    )

}

export default Home;