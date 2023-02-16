import './Skeleton.scss';

const Skeleton = () => {
    return (
            <div className="skeleton">
                <div className="pulse skeleton__block"></div>
                <div className="pulse skeleton__block"></div>
                <div className="pulse skeleton__header"></div>
                
            </div>
    )
}

export default Skeleton;