import ReactPlayer from 'react-player';
import classes from './product-section.module.css';

const ProductSection = () => {
    return (
        <div className={classes.section}>
            <div className={classes.container}>
            {/* <div className={classes.header}>
                <h4>Want to get ahead?</h4>
            </div> */}
            <div className={classes.header2}>
                <h2>How PrepBox works</h2>
            </div>
                <div className={classes.content}>
                    <ReactPlayer
                        url='https://www.youtube.com/embed/ih3hNg5Y-4c'
                        width='90%'
                        height='100%'
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
