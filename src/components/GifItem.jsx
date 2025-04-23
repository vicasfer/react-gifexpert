import PropTypes from 'prop-types';

export const GifItem = ({title, url }) => {
    // Validación de props requeridas que lanza error
    if (!title || !url) {
        throw new Error('GifItem requiere las propiedades title y url');
    }
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}