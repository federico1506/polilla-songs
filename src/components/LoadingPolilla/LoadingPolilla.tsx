// React
import React from "react";

// Types
import type { LoadingPolillaProps } from "../../types/types";

// Images
import loadingImage from '../../assets/PNG POLILLA - LOGO 01.png';

const LoadingPolilla = ({loading}: LoadingPolillaProps) => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
    if (!loading) {
        setProgress(100);
        return;
    }

    setProgress(0);
    const interval = setInterval(() => {
        setProgress(prev => (prev >= 95 ? 95 : prev + 1));
    }, 30);

    return () => clearInterval(interval);
    }, [loading]);


    if (!loading) return null;
    return (
        <div className="loading-screen">
            <img  src={loadingImage} alt="Cargando..." className="loading-image" />
            <div className="loading-bar-container">
                <div
                    className="loading-bar-fill"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    )
}

export default LoadingPolilla
