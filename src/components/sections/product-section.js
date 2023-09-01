import ReactPlayer from 'react-player';
import classes from './product-section.module.css';

const ProductSection = () => {
    return (
        <div className={classes.section}>
            <div className={classes.container}>
            <div className={classes.header}>
                <h2>Textbook solutions are <span className='text-blue'>ending on September 30th</span></h2>
            </div>
                <div className={classes.content}>
                    <ReactPlayer
                        url='https://www.youtube.com/embed/ih3hNg5Y-4c'
                        width='70%'
                        height='90%'
                        display='flex'
                        justify-content='center'
                        config={{
                            youtube: {
                                playerVars: { showinfo: 1 },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
