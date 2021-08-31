import Loader from 'react-loader-spinner';

function showGalleryLoader() {
    return (
        <Loader type='Rings' color='red' height={60} width={60} timeout={0} />
    );
}

export default showGalleryLoader;