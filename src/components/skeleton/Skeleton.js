import './Skeleton.scss';

function Skeleton () {
    return (
            <div className="skeleton">
                <div className="pulse skeleton__header"></div>
                <div className="pulse skeleton__block"></div>
                <div className="pulse skeleton__block"></div>
            </div>
    )
}

export default Skeleton;