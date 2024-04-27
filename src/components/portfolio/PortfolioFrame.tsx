import React, {FC} from 'react';
import styles from './Portfolio.module.css'
interface IProps {
    pictureDesc: string;
    imageSource:string
// children?:React.ReactNode;
}
type PropsWithChildren<T> = T & {children?:React.ReactNode};
const PortfolioFrame:FC<PropsWithChildren<IProps>> = ({pictureDesc, imageSource,children}) => {
            return (
        <div>
            <p>{pictureDesc}</p>
            <img
                className={styles.w200}
                src={imageSource} alt={pictureDesc}/>
            <p>{children}</p>
        </div>
    );
};

export default PortfolioFrame;